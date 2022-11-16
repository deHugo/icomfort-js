const http  = require('http');
const https  = require('https');
const url  = require('url');


const jsonRequest  = (method, url, body, opts) =>
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

        if (method !== 'GET' && body) {
            req.setHeader('Content-Type', 'application/json');
            req.write(JSON.stringify(body));
        }
        req.end();
    });


const fullUrl = (server, endpoint, qs) => {
    let searchParams = '';

    if (typeof qs === 'object' && Object.values(qs).length) {
        const {URLSearchParams} = url;
        searchParams = `?${(new URLSearchParams(qs)).toString()}`;
    }

    return `${server.baseHost}${server.basePath}${endpoint}${searchParams}`;
};


module.exports = {
    fullUrl,
    jsonRequest,
    doGet: (serviceBase, path, creds, qs)       => jsonRequest('GET',  fullUrl(serviceBase, path, qs),  null, {creds}),
    doPut: (serviceBase, path, creds, qs, body) => jsonRequest('PUT',  fullUrl(serviceBase, path, qs),  body, {creds}),
};
