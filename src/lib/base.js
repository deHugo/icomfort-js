'use strict';

const bent = require('bent');
const url  = require('url');

const ICOMFORT = {
    baseHost: 'https://services.myicomfort.com',
    basePath: '/DBAcessService.svc',
};
const ICOMFORT_WEB = {
    baseHost: 'https://www.myicomfort.com',
    basePath: '/Dashboard.aspx',
};

const GET  = bent('GET', 'json');
const POST = bent('POST', 'json');
const PUT  = bent('PUT', 'json');

const credsToBasicAuth = creds => Buffer.from(`${creds.username}:${creds.password}`).toString('base64');
const credsToAuthHeader = creds => ({'Authorization': `Basic ${credsToBasicAuth(creds)}`});

module.exports = {
    fullUrl,
    credsToAuthHeader,
    doGet:           (path, auth, qs)       => GET(fullUrl(ICOMFORT, path, qs),  null, {...credsToAuthHeader(auth)}),
    doDashboardPost: (path, auth,     body) => POST(fullUrl(ICOMFORT_WEB, path), body, {...credsToAuthHeader(auth)}),
    doPut:           (path, auth, qs, body) => PUT(fullUrl(ICOMFORT, path, qs),  body, {...credsToAuthHeader(auth)}),
};

function fullUrl (server, endpoint, qs) {
    let searchParams = '';

    if (typeof qs === 'object' && Object.values(qs).length) {
        const {URLSearchParams} = url;
        searchParams = `?${(new URLSearchParams(qs)).toString()}`;
    }

    return `${server.baseHost}${server.basePath}${endpoint}${searchParams}`;
}