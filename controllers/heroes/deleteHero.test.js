const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');

describe('Test DELETE/api/heroes/:heroId', () => {
  beforeAll(async () => mongoose.connect(process.env.DB_URL));
  afterAll(async () => mongoose.disconnect());

  it('Should delete a superhero by id', async () => {
    const response = await request(app).delete(
      '/api/heroes/646f75fee08c9833f5d3a4ed'
    );

    expect(response.status).toEqual(200);
    expect(response.body.message).toBe('Hero successfully deleted');
  });
});
