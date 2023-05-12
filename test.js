const ip_addresses = require('./src/ip_addresses.json');
const ipAddress = ip_addresses.ip;

var assert = require('assert');// Testing server status

describe('API STATUS ROUTE TESTING', () => {
  // Server route
  describe('Route: /api/status/server', () => {
    it('Return 200 if the server is online', async () => {
      await fetch(`http://${ipAddress}:9001/api/status/server`)
      .then(response => {
        assert.equal(200, response.status);
        });
      });
    });
  // Postgres database route
  describe('Route: /api/status/postgres', () => {
    it('Return 200 if the postgres database is online', async () => {
      await fetch(`http://${ipAddress}:9001/api/status/postgres`)
      .then(response => { 
        assert.equal(response.status, 200);
      });
      });
  });
});

// EXCEL FILE TESTING
describe('EXCEL FILE TESTING', () => {
  // receiving xlsx file
  describe('Route: /api/getxlsx/<database>', () => {
    it('Return 200 if received an xlsx file', async () => {
      await fetch(`http://${ipAddress}:9001/api/getxlsx/fish`,
      {method: 'GET'})
      .then(response => { 
        assert.equal(200, response.status);
        // console.log(response);
        });
      });
    });
  // sending xlsx file
  // describe('Route: /api/postxlsx/fish', () => {
  //   it('Return 200 if XLSX file posted', async () => {
  //     await fetch(`http://${ipAddress}:9001/api/postxlsx/<database>`,
  //     {method: 'POST',body: data})
  //       .then(response => { //console.log(response);
  //         assert.equal(response.status, 200);
  //       });
  //   });
  // });
});

// GET DATA COLLECTIONS
describe('Data testing', () => {
  // getting a collection
  describe('Route: /api/<collection>/', () => {
    it('Return 200 if received a collection', async () => {
      await fetch(`http://${ipAddress}:9001/api/mammals`,
      {method: 'GET'})
      .then(response => { 
        assert.equal(200, response.status);
        console.log(response);
        });
      });
    });
});

// GET DATA TO EDIT

// GET SEARCH RESULT

// GET SEARCH RESULT BY COLUMN

// GET SEARCH RESULT BY DRAWER LETTER

// GET QR CODE

// TESTING FILE UPLOAD

// TESTING LOGIN

// GET COLLECTION

// TEST POST ENTRY

// GET IMAGE

// GET HISTORY COLLECTION

// GET HISTORY