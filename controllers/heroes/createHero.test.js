const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');

describe('Test POST /api/heroes/:heroId', () => {
  beforeAll(async () => mongoose.connect(process.env.DB_URL));
  afterAll(async () => mongoose.disconnect());

  it('Should create a new superhero', async () => {
    const newHero = {
      nickname: 'Superhero test',
      realName: 'Test',
      originDescription: 'Supertest hero',
      superpowers: 'Test, Supertest',
      catchPhrase: 'Go test',
    };
    const response = await request(app).post('/api/heroes').send(newHero);

    expect(response.status).toEqual(201);
    expect(response.body.nickname).toBe(newHero.nickname);
  });
});
