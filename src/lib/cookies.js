const CookieManager = () => {
    const cookies = new Map();

    return {
        getCookies () {
            return cookies;
        },
        getCookiesHeaderString () {
            return [...cookies.values()].map(cookie => `${cookie.name}=${cookie.value}`).join('; ');
        },
        set (setCookieHeaderValue) {
            const cookie = parseSetCookieHeaderValue(setCookieHeaderValue);
            cookies.set(cookie.name, cookie);
        }
    };
};


const lowercaseFirstLetter = str => `${str[0].toLowerCase()}${str.slice(1)}`;


const parseSetCookieHeaderValue = str =>
    str
        .split(';')
        .map(pair => pair.split('='))
        .reduce((acc, [name, val], i) => {
            if (val === undefined) val = false;
            else val = val.trim();
            name = name.trim();

            if (i === 0) {
                acc.name = name;
                acc.value = val;
            }
            else acc[lowercaseFirstLetter(name)] = val;

            return acc;
        },{
            name: undefined,
            value: undefined,
            path: '/',
            httpOnly: false,
            secure: false,
            sameSite: 'None',
            domain: undefined
        });


module.exports = {
    CookieManager,
    lowercaseFirstLetter,
    parseSetCookieHeaderValue,
};