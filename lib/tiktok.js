// ċяєѧṭєԀ ɞʏ ʟєċċʏȏғғıċıѧʟ
// instagram : @leccyofc
// telegram : @leccystore
// youtube : @leccyofficial
const axios = require('axios');
const clean = _0x22728f => {
  _0x22728f = _0x22728f.replace(/(<br?\s?\/>)/gi, " \n");
  return _0x22728f.replace(/(<([^>]+)>)/gi, '');
};
async function shortener(_0x261a08) {
  return _0x261a08;
}
exports.Tiktok = async _0x462024 => {
  let _0x13256e = await axios("https://lovetik.com/api/ajax/search", {
    'method': 'POST',
    'data': new URLSearchParams(Object.entries({
      'query': _0x462024
    }))
  });
  result = {};
  result.creator = "©leccyofc";
  result.title = clean(_0x13256e.data.desc);
  result.author = clean(_0x13256e.data.author);
  result.nowm = await _0x261a08;
  result.watermark = await _0x261a08;
  result.audio = await _0x261a08;
  result.thumbnail = await _0x261a08;
  return result;
};