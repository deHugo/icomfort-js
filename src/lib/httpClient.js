const http  = require('http');
const https  = require('https');

const jsonRequest  = (method, url, data, opts) =>
    new Promise((resolve, reject) => {
        const options = {
            ...opts,
            method,
        };

        if (opts.creds) options.auth = `${opts.creds.username}:${opts.creds.password}`;

        const responseCallback = res => {
            try {
                let body = '';

                res.setEncoding('utf8');
                res.on('data', data => body+=data);

                if (res.statusCode >= 400) {
                    const err = new Error(res.statusMessage);
                    err.name = 'ERR_HTTP';
                    err.statusCode = res.statusCode;
                    err.code = res.statusCode;
                    reject(err);
                }
                else {
                    res.on('end', () => resolve(JSON.parse(body)));
                    res.on('error', reject);
                }
            } catch (err) {
                reject(err);
            }
        };

        let agent = https;

        if (!/^https:/.test(url)) agent = http;

        const req = agent.request(url, options, responseCallback);

        req.on('error', reject);

        req.setHeader('Accept', 'application/json');

        if (method !== 'GET' && data) {
            req.setHeader('Content-Type', 'application/json');
            req.write(JSON.stringify(data));
        }
        req.end();
    });

module.exports = {
    jsonRequest
};