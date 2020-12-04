const request = require('supertest');
const app = require('../app');

describe('Testing root router', () => {
  it('Should test that true === true', async (done) => {
    const response = await request(app).get('/api/products');
    expect(response.status).toBe(200);
    done();
  });
});
