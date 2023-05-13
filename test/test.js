const ip_addresses = require('../src/ip_addresses.json');
const ipAddress = ip_addresses.ip;
const FormData = require('form-data');
const fs = require('fs');
var assert = require('assert'); // Testing server status
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const CryptoJS = require('crypto-js');

//* SERVER STATUS TESTING
describe('SERVER STATUS TESTING', () => {
    // Server route
    describe('Route: /api/status/server', () => {
        it('Return 200 if the server is online', async () => {
            await fetch(`http://${ipAddress}:9001/api/status/server`).then(response => {
                assert.equal(200, response.status);
            });
        });
    });
    // Postgres database route
    describe('Route: /api/status/postgres', () => {
        it('Return 200 if the postgres database is online', async () => {
            await fetch(`http://${ipAddress}:9001/api/status/postgres`).then(response => {
                assert.equal(response.status, 200);
            });
        });
    });
});

//* GET DATA TESTING
describe('CRUD GET TESTING', () => {
    // TODO API Route /api/<collection>
    describe('Route: /api/<collection>/', () => {
        it('Returns data of type Array[]', async () => {
            await fetch(`http://${ipAddress}:9001/api/mammals_collection`)
                .then(response => response.json())
                .then(data => {
                    assert.equal(Array.isArray(data), true);
                });
        });
    });
    // TODO API Route /api/edit/<collection>/
    describe('Route: /api/edit/<collection>', () => {
        it('Returns data type Array[]', async () => {
            await fetch(`http://${ipAddress}:9001/api/edit/mammals_collection`)
                .then(response => response.json())
                .then(data => {
                    assert.equal(Array.isArray(data), true);
                });
        });
    });
    // TODO API Route /api/<collection>/<search>
    describe('Route: /api/<collection>/<search>', () => {
        it('Returns data of type Array[]', async () => {
            await fetch(`http://${ipAddress}:9001/api/mammals_collection/rat`)
                .then(response => response.json())
                .then(data => {
                    assert.equal(Array.isArray(data), true);
                });
        });
    });
    // TODO API Route /api/<collection>/<column>/<search>
    describe('Route: /api/<collection>/<column>/<search>', () => {
        it('Returns data of type Array[]', async () => {
            await fetch(`http://${ipAddress}:9001/api/mammals_collection/catalog/1`)
                .then(response => response.json())
                .then(data => {
                    assert.equal(Array.isArray(data), true);
                });
        });
    });
    // TODO API Route /api/<collection>/<drawer_letter>
    describe('Route: /api/<collection>/<drawer_letter>', () => {
        it('Returns data of type Array[]', async () => {
            await fetch(`http://${ipAddress}:9001/api/mammals_collection/A`)
                .then(response => response.json())
                .then(data => {
                    assert.equal(Array.isArray(data), true);
                });
        });
    });
    // TODO API Route /api/<collection>/catalog/common_name
    describe('Route: /api/<collection>/catalog/common_name', () => {
        it('Returns data of type Array[]', async () => {
            await fetch(`http://${ipAddress}:9001/api/mammals_collection/catalog/common_name`)
                .then(response => response.json())
                .then(data => {
                    assert.equal(Array.isArray(data), true);
                });
        });
    });
    // TODO API Route /<path>
    describe('Route: /<path>', () => {
        it("Returns svg of type 'image/svg+xml;charset=utf-8'", async () => {
            await fetch(`http://${ipAddress}:9001/image.png`)
                .then(response => {
                    return response.blob();
                })
                .then(blob => {
                    assert.equal(blob.type, 'image/svg+xml; charset=utf-8');
                });
        });
    });
    // TODO API Route /api/files/history/<collection>
    describe('Route: /api/files/history/<collection>', () => {
        it('Returns data of type Array[]', async () => {
            await fetch(`http://${ipAddress}:9001/api/files/history/mammals`)
                .then(response => response.json())
                .then(data => {
                    assert.equal(Array.isArray(data), true);
                });
        });
    });
    // TODO API Route /api/getxlsx/<database>
    describe('Route: /api/getxlsx/<database>', () => {
        it("Returns excel file of type 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'", async () => {
            await fetch(`http://${ipAddress}:9001/api/getxlsx/mammals`)
                .then(response => {
                    return response.blob();
                })
                .then(blob => {
                    assert.equal(
                        blob.type,
                        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
                    );
                });
        });
    });
});

//* POST DATA TESTING
describe('CRUD POST TESTING', () => {
    // TODO API Route /api/postxlsx/<database>
    describe('Route: /api/postxlsx/<database>', () => {
        it('Uploads an excel file to the "mammals" collection', async () => {
            const form = new FormData();
            const buffer = fs.readFileSync('./test/mammals.xlsx');
            const fileName = 'mammals.xlsx';
            form.append('file', buffer, {
                contentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                name: 'file',
                filename: fileName
            });
            await fetch(`http://${ipAddress}:9001/api/postxlsx/mammals`, {
                method: 'POST',
                body: form
            })
                .then(response => {
                    return response.text();
                })
                .then(data => {
                    assert.equal(data, 'Success');
                });
        });
    });
    // TODO API Route /api/entry/<collection>/<catalog>/<column>/<data>
    describe('Route: /api/entry/<collection>/<catalog>/<column>/<data>', () => {
        it('Uploads an entry to the "mammals" collection', async () => {
            await fetch(
                `http://${ipAddress}:9001/api/entry/mammals_collection/M001/common_name/Rat`,
                { method: 'POST' }
            )
                .then(response => {
                    return response.text();
                })
                .then(data => {
                    assert.equal(data, 'Success');
                });
        });
    });
    // TODO API Route /api/entry/<collection>/<catalog>/<column>/<data>
    describe('Route: /api/entry/<collection>/<catalog>/<column>/<data>', () => {
        it('Uploads an image to the "mammals" collection', async () => {
            const form = new FormData();
            const buffer = fs.readFileSync('./test/BGS.png');
            const fileName = 'BGS.png';
            form.append('file', buffer, {
                contentType: 'image/png',
                name: 'file',
                filename: fileName
            });

            await fetch(
                `http://${ipAddress}:9001/api/entry/mammals_collection/M001/image/BGS.png`,
                {
                    method: 'POST',
                    body: form
                }
            )
                .then(response => {
                    return response.text();
                })
                .then(data => {
                    assert.equal(data, 'Success');
                });
        });
    });
});
