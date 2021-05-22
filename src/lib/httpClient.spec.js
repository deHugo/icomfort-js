'use strict';

const assert = require('assert');
const http = require('http');

describe('http client', () => {
    const HttpClient = require('../../src/lib/httpClient');

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

            const caughtError = await HttpClient.jsonRequest('POST', url, body, options).catch(err => err);

            assert(caughtError instanceof Error);
            assert.strictEqual(caughtError.name, 'ERR_HTTP', 'Caught error name does not match expected name');
            assert.strictEqual(caughtError.statusCode, 404, 'Missing or invalid status code');
        });
    });
});
