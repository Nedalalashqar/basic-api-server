'use strict';

const logger = require('../src/middlewares/logger');
describe('logger middleware', ()=> {
    let consoleSpy; 
    let req = {};
    let res = {};
    let next = jest.fn();
    beforeEach(()=> {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    })
    afterEach(()=> {
        consoleSpy.mockRestore();
    })
    it(' logs output', ()=> {
        logger(req, res, next);
        expect(consoleSpy).toHaveBeenCalled();
    })
    it('moves to next', ()=> {
        logger(req, res, next);
        expect(next).toHaveBeenCalled()
    })
})
