'use strict';

const url  = require('url');

const {jsonRequest} = require('./httpClient');

const ICOMFORT = {
    baseHost: 'https://services.myicomfort.com',
    basePath: '/DBAcessService.svc',
};
// No longer used but kept because it may possibly be used in the future.
// const ICOMFORT_WEB = {
//     baseHost: 'https://www.myicomfort.com',
//     basePath: '/Dashboard.aspx',
// };

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
    doGet:  (path, creds, qs)       => jsonRequest('GET',   fullUrl(ICOMFORT,     path, qs),  null, {creds}),
    doPut:  (path, creds, qs, body) => jsonRequest('PUT',   fullUrl(ICOMFORT,     path, qs),  body, {creds}),
};
