'use strict';

const { server } = require('../src/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('****API Server****:', () => {
  it('should respond with a 500 on a server error', () => {
    mockRequest.get('/bad-route')
      .then(results => {
        expect(results.status).toBe(500);
      });
  });

  it('should respond with a 404 not found', () => {
    mockRequest.get('/not-a-route')
      .then(results => {
        expect(results.status).toBe(404);
      });
  });


});

