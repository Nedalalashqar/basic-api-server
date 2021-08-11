'use strict';
const server = require('../src/server');
const supertest = require('supertest');
const request = supertest(server.app);

describe('my API Server', () => {
    beforeEach(() => {
        jest.spyOn(console, 'log').mockImplementation();
    })
    it('get data from /food ', async () => {
        const response = await request.get('/food'); 
        expect(response.status).toEqual(200);
        expect(typeof response.body).toEqual('object'); 
    });
    it('handles not found request', async () => {
        // add test
        const response = await request.get('/food');
        expect(response.status).toEqual(404);
    });
    it('crete new food', async () => {
        const response = await request.post('/food');
        expect(response.status).toEqual(200);
    });
    it('/ route works', async () => {
        const response = await request.get('/food');
        expect(response.status).toEqual(200);
        console.log(response.text);
        expect(response.text).toEqual('object');
    });
});