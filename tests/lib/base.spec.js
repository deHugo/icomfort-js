'use strict';

const assert = require('assert');
const http = require('http');

describe('base http client wrapper', () => {
    const base = require('../../src/lib/base.js');

    describe('fullUrl', () => {
        it('generates a full url from hostname, path, and query params', () => {
            const server = {
                baseHost:'http://localhost:3999',
                basePath:'/theServiceEndpoint'
            };
            const path = '/findLocationById';
            const queryparams = {locationId: 12};

            const url = base.fullUrl(server, path, queryparams);

            assert.strictEqual(typeof url, 'string');
            assert(url.includes(server.baseHost));
            assert(url.includes(server.basePath));
            assert(url.includes(path));
            assert(url.includes('locationId'));
        });
    });

    describe('jsonRequest', () => {
        let fakeServer;

        before(async () => {
            fakeServer = http.createServer((req,res) => {
                res.statusCode = 404;
                res.end();
            });

            await fakeServer.listen();
        });

        after(async () => {
            fakeServer && await new Promise(resolve => fakeServer.close(resolve));
        });

        it('handles a bad request', async () => {
            const serverAddress = fakeServer.address();
            const url = `http://localhost:${serverAddress.port}/a/b/c`;
            const body = {
                some: 'data'
            };
            const options = {};

            const caughtError = await base.jsonRequest('POST', url, body, options).catch(err => err);

            assert(caughtError instanceof Error);
            assert.strictEqual(caughtError.name, 'ERR_HTTP', 'Caught error name does not match expected name');
            assert.strictEqual(caughtError.statusCode, 404, 'Missing or invalid status code');
        });
    });
});
