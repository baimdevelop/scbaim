// ċяєѧṭєԀ ɞʏ ʟєċċʏȏғғıċıѧʟ
// instagram : @leccyofc
// telegram : @leccystore
// youtube : @leccyofficial

require("../config");
const {
  default: LexxyBotConnect,
  delay,
  jidNormalizedUser,
  PHONENUMBER_MCC,
  makeCacheableSignalKeyStore,
  useMultiFileAuthState,
  DisconnectReason,
  fetchLatestBaileysVersion,
  getContentType,
  generateForwardMessageContent,
  prepareWAMessageMedia,
  generateWAMessageFromContent,
  generateMessageID,
  downloadContentFromMessage,
  makeInMemoryStore,
  jidDecode,
  proto
} = require("@whiskeysockets/baileys");
const log = require('pino');
const path = require("path");
const {
  await,
  getBuffer,
  fetchJson
} = require("./myfunc");
const makeWASocket = require("@whiskeysockets/baileys")['default'];
const NodeCache = require("node-cache");
const chalk = require('chalk');
const {
  exec,
  spawn,
  execSync
} = require("child_process");
const {
  color,
  mylog
} = require("./color");
const store = makeInMemoryStore({
  'logger': log().child({
    'level': "silent",
    'stream': 'store'
  })
});
let phoneNumber = global.ownerNumber;
const pairingCode = !!phoneNumber || process.argv.includes("--pairing-code");
const useMobile = process.argv.includes('--mobile');
if (global.conns instanceof Array) {
  console.log();
} else {
  global.conns = [];
}
const jadibot = async (_0x87653f, _0x1feb27, _0x595853, _0xd9fd80) => {
  let {
    version: _0x29e0a8,
    isLatest: _0x53bef6
  } = await fetchLatestBaileysVersion();
  const {
    state: _0x499af6,
    saveCreds: _0x115932
  } = await useMultiFileAuthState(path.join(__dirname, "../database/jadibot/" + _0x1feb27), log({
    'level': "silent"
  }));
  const _0xe80df8 = new NodeCache();
  try {
    async function _0x336561() {
      const _0x1137ec = makeWASocket({
        'logger': log({
          'level': "silent"
        }),
        'printQRInTerminal': !pairingCode,
        'mobile': useMobile,
        'auth': {
          'creds': _0x499af6.creds,
          'keys': makeCacheableSignalKeyStore(_0x499af6.keys, log({
            'level': "fatal"
          }).child({
            'level': 'fatal'
          }))
        },
        'browser': ['Ubuntu', "Chrome", "20.0.04"],
        'version': _0x29e0a8,
        'patchMessageBeforeSending': _0xbbcb0f => {
          const _0x55022b = !!(_0xbbcb0f.buttonsMessage || _0xbbcb0f.templateMessage || _0xbbcb0f.listMessage);
          if (_0x55022b) {
            _0xbbcb0f = {
              'viewOnceMessage': {
                'message': {
                  'messageContextInfo': {
                    'deviceListMetadataVersion': 0x2,
                    'deviceListMetadata': {}
                  },
                  ..._0xbbcb0f
                }
              }
            };
          }
          return _0xbbcb0f;
        },
        'getMessage': async _0xdd620d => {
          let _0x48042b = jidNormalizedUser(_0xdd620d.remoteJid);
          let _0x54624d = await store.loadMessage(_0x48042b, _0xdd620d.id);
          return _0x54624d?.['message'] || '';
        },
        'markOnlineOnConnect': true,
        'generateHighQualityLinkPreview': true,
        'msgRetryCounterCache': _0xe80df8
      });
      if (!_0x1137ec.authState.creds.registered) {
        setTimeout(async () => {
          let _0x24983f = '' + _0x1feb27;
          console.log(chalk.red.bold("[ Jadibot ] -> (+" + _0x24983f + ')'));
          let _0x200fed = await _0x1137ec.requestPairingCode(_0x24983f);
          let _0x54ace0 = _0x200fed?.["match"](/.{1,4}/g)?.["join"]('-') || _0x200fed;
          global.codepairing = '' + _0x54ace0;
        }, 0xbb8);
      }
      store.bind(_0x1137ec.ev);
      _0x1137ec.ev.on("messages.upsert", async _0x4ed68e => {
        try {
          msg = _0x4ed68e.messages[0x0];
          if (!msg.message) {
            return;
          }
          require("../index")(_0x1137ec, msg, store);
        } catch (_0x1f4d13) {
          console.log(_0x1f4d13);
        }
      });
      _0x1137ec.ev.on("creds.update", _0x115932);
      _0x1137ec.ev.on("connection.update", _0x5611b5 => {
        console.log("Connection Update :", _0x5611b5);
        if (_0x5611b5.connection === "open") {
          _0x1137ec.id = _0x1137ec.decodeJid(_0x1137ec.user.id);
          _0x1137ec.time = Date.now();
          myusr = _0x1137ec.decodeJid(_0x1137ec.user.id);
          global.conns.push(_0x1137ec);
          _0x595853("*Connected To Whatsapp ✓*\n_• User : " + myusr.split('@')[0x0] + "_\n_• Time : " + Date.now() + '_');
          user = '' + _0x1137ec.decodeJid(_0x1137ec.user.id);
          txt = "「 *JADIBOT-STRAVA* 」\n_• User : @" + user.split('@')[0x0] + "_\n_• Time : " + Date.now() + "_\n\n*Bot Sudah Terkoneksi!*\n*Silahkan Ketik* .menu *Untuk Memulai*";
          _0x1137ec.sendMessage(_0xd9fd80, {
            'text': txt,
            'mentions': [user]
          });
          console.log(mylog("Connected " + _0x1137ec.user.id));
        } else if (_0x5611b5.connection === "close") {
          console.log(mylog("Disconnected!"));
          connectToWhatsApp();
        }
      });
      _0x1137ec.sendTextWithMentions = async (_0x52aea8, _0x287410, _0x18de29, _0x16cb18 = {}) => _0x1137ec.sendMessage(_0x52aea8, {
        'text': _0x287410,
        'contextInfo': {
          'mentionedJid': [..._0x287410.matchAll(/@(\d{0,16})/g)].map(_0x3208a2 => _0x3208a2[0x1] + "@s.whatsapp.net")
        },
        ..._0x16cb18
      }, {
        'quoted': _0x18de29
      });
      _0x1137ec.decodeJid = _0x3c7dfb => {
        if (!_0x3c7dfb) {
          return _0x3c7dfb;
        }
        if (/:\d+@/gi.test(_0x3c7dfb)) {
          let _0x47ecc0 = jidDecode(_0x3c7dfb) || {};
          return _0x47ecc0.user && _0x47ecc0.server && _0x47ecc0.user + '@' + _0x47ecc0.server || _0x3c7dfb;
        } else {
          return _0x3c7dfb;
        }
      };
      _0x1137ec.sendmentions = (_0x4d260e, _0x14f877, _0x10812c = [], _0x4d1a28) => {
        if (_0x4d1a28 == null || _0x4d1a28 == undefined || _0x4d1a28 == false) {
          let _0x395a79 = _0x1137ec.sendMessage(_0x4d260e, {
            'text': _0x14f877,
            'mentions': _0x10812c
          }, {
            'quoted': msg
          });
          return _0x395a79;
        } else {
          let _0x1e2293 = _0x1137ec.sendMessage(_0x4d260e, {
            'text': _0x14f877,
            'mentions': _0x10812c
          }, {
            'quoted': msg
          });
          return _0x1e2293;
        }
      };
      return _0x1137ec;
    }
    _0x336561();
  } catch (_0x55280e) {
    console.log(_0x55280e);
  }
};
module.exports = {
  'jadibot': jadibot,
  'conns': conns
};