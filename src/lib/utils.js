const stringToBase64 = str => Buffer.from(str, 'utf-8').toString('base64');
const toIntString = numOrStr => parseInt(numOrStr, 10).toString(10);

module.exports = {
    stringToBase64,
    toIntString
};