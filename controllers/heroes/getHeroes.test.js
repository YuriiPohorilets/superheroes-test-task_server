const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');

describe('Test GET/api/heroes', () => {
  beforeAll(async () => mongoose.connect(process.env.DB_URL));
  afterAll(async () => mongoose.disconnect());

  it('Should return all superheroes', async () => {
    const response = await request(app).get('/api/heroes');

    expect(response.status).toEqual(200);
    expect(response.body.heroes[0].nickname).toBe('Deadpool');
    expect(response.body).toEqual({
      totalHits: expect.any(Number),
      heroes: expect.any(Array),
    });
  });
});
