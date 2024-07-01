// ċяєѧṭєԀ ɞʏ ʟєċċʏȏғғıċıѧʟ
// instagram : @leccyofc
// telegram : @leccystore
// youtube : @leccyofficial

const axios = require("axios");
exports.ssweb = (_0x356f0e, _0x128122 = "desktop") => {
  return new Promise((_0x54a43f, _0x1efdda) => {
    const _0x199b1f = {
      'url': _0x356f0e,
      'device': _0x128122,
      'cacheLimit': 0x0
    };
    axios({
      'url': "https://www.screenshotmachine.com/capture.php",
      'method': "POST",
      'data': new URLSearchParams(Object.entries(_0x199b1f)),
      'headers': {
        'content-type': "application/x-www-form-urlencoded; charset=UTF-8"
      }
    }).then(_0x2cc7c2 => {
      const _0x603c0b = _0x2cc7c2.headers["set-cookie"];
      if (_0x2cc7c2.data.status == "success") {
        axios.get("https://www.screenshotmachine.com/" + _0x2cc7c2.data.link, {
          'headers': {
            'cookie': _0x603c0b.join('')
          },
          'responseType': 'arraybuffer'
        }).then(({
          data: _0x3f882d
        }) => {
          result = {
            'status': 0xc8,
            'result': _0x3f882d
          };
          _0x54a43f(result);
        });
      } else {
        _0x1efdda({
          'status': 0x194,
          'statuses': "Link Error",
          'message': _0x2cc7c2.data
        });
      }
    })["catch"](_0x1efdda);
  });
};