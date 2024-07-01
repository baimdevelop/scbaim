const { default: LexxyBotConnect, delay, jidNormalizedUser, PHONENUMBER_MCC, makeCacheableSignalKeyStore, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, getContentType, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require('@whiskeysockets/baileys');
const fs = require('fs');
const pino = require('pino');
const { join } = require('path');
const { await, getBuffer, fetchJson } = require('./lib/myfunc');
const makeWASocket = require('@whiskeysockets/baileys').default;

const readline = require('readline');
const NodeCache = require('node-cache');
const chalk = require('./lib/color');
const util = require('util');
const { color, mylog } = require('./config');
const store = makeInMemoryStore({ 'logger': pino().silent() });

let phoneNumber = '6285871658528';
const pairingCode = !!phoneNumber || process.argv.includes('--pairing-code');
const useMobile = process.argv.includes('--mobile');
const xlec = readline.createInterface({ 'input': process.stdin, 'output': process.stdout });

const question = (prompt) => new Promise((resolve) => xlec.question(prompt, resolve));

async function connectToWhatsApp() {
    let { version, isLatest } = await fetchLatestBaileysVersion();
    const { state, saveCreds } = await useMultiFileAuthState(join(__dirname, './session'));

    const _store = makeWASocket({
        'logger': pino({ 'level': 'fatal' }),
        'printQRInTerminal': !pairingCode,
        'mobile': useMobile,
        'auth': { 'creds': state.creds, 'keys': makeCacheableSignalKeyStore(state.keys, pino().silent()) },
        'browser': ['Baileys', 'Chrome', '20.0.04'],
        'version': version,
        'patchMessageBeforeSending': (message) => {
            const isViewOnce = !!(message.viewOnceMessage || message.viewOnceMessageV2 || message.viewOnce);
            return isViewOnce ? { viewOnceMessage: { message: { messageContextInfo: { deviceListMetadataVersion: 2, deviceListMetadata: {} }, ...message } } } : message;
        },
        'getMessage': async (message) => {
            let jid = jidNormalizedUser(message.remoteJid);
            let msg = await store.loadMessage(jid, message.id);
            return msg?.message || '';
        },
        'markOnlineOnConnect': true,
        'generateHighQualityLinkPreview': true,
        'msgRetryCounterCache': new NodeCache()
    });

    store.bind(_store.ev);

    if (pairingCode && !_store.authState.creds.me) {
        if (useMobile) {
            console.log('Cannot use pairing code with mobile API');
        }
        console.log(chalk.bgBlack(chalk.redBright('Please input a valid pairing code')));
        console.log(chalk.white('Contoh : 628xxxxx'));
        console.log(chalk.white('Start with country code of your WhatsApp Number, Example : 628xxxxxxxx'));
        let code;
        if (code) {
            code = code.replace(/[^0-9]/g, '');
            if (!Object.keys(PHONENUMBER_MCC).some(prefix => code.startsWith(prefix))) {
                console.log(chalk.bgBlack(chalk.redBright('Invalid country code')));
                process.exit(0);
            }
        } else {
            code = await question(chalk.greenBright('Your WhatsApp Number : '));
            code = code.replace(/[^0-9]/g, '');
            if (!Object.keys(PHONENUMBER_MCC).some(prefix => code.startsWith(prefix))) {
                console.log(chalk.bgBlack(chalk.redBright('Start with country code of your WhatsApp Number, Example : 628xxxxxxxx')));
                code = await question(chalk.greenBright('Your WhatsApp Number : '));
                code = code.replace(/[^0-9]/g, '');
                xlec.close();
            }
        }
        setTimeout(async () => {
            let pairCode = await _store.authState.creds.me;
            pairCode = pairCode?.match(/.{1,4}/g)?.join('-') || pairCode;
            console.log(chalk.greenBright('Copy Pairing Code :'), chalk.cyan(pairCode));
        }, 2000);
    }

    _store.ev.on('messages.upsert', async (message) => {
        try {
            let msg = message.messages[0];
            if (!msg.message) return;
            require('./lib/myfunc')(_store, msg, store);
        } catch (error) {
            console.log(error);
        }
    });

    _store.ev.on('connection.update', (update) => {
        console.log('Connection Update:', update);
        if (update.connection === 'open') {
            console.log(mylog('Connected: ' + _store.user.id));
        } else if (update.connection === 'close') {
            console.log(mylog('Disconnected!'));
            connectToWhatsApp();
        }
    });

    _store.sendTextWithMentions = async (to, text, msg, options = {}) => {
        return _store.sendMessage(to, { 'text': text, 'contextInfo': { 'mentionedJid': [...text.matchAll(/@(\d{0,16})/g)].map(match => match[1] + '@s.whatsapp.net') }, ...options }, { 'quoted': msg });
    };

    _store.sendmentions = (to, text, mentions = [], msg) => {
        return _store.sendMessage(to, { 'text': text, 'mentions': mentions }, { 'quoted': msg });
    };

    _store.ev.on('creds.update', saveCreds);

    return _store;
}

connectToWhatsApp().then((client) => console.log('WhatsApp client initialized'));
