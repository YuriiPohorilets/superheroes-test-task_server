const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');

describe('Test PATH /api/heroes/:heroId', () => {
  beforeAll(async () => mongoose.connect(process.env.DB_URL));
  afterAll(async () => mongoose.disconnect());

  it('Should update a superhero', async () => {
    const updateedHero = {
      nickname: 'Superhero test 2',
      realName: 'Test 2',
      originDescription: 'Supertest hero 2',
      superpowers: 'Test 2, Supertest 2',
      catchPhrase: 'Go test 2',
    };
    const response = await request(app)
      .patch('/api/heroes/646f75fee08c9833f5d3a4ed')
      .send(updateedHero);

    expect(response.status).toEqual(200);
    expect(response.body.nickname).toBe(updateedHero.nickname);
  });
});
