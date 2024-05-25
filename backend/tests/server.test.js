const request = require('supertest');
const app = require('../server'); 

describe('GET /weather?city=Gdansk', () => {
  it('returns weather data', async () => {
    const response = await request(app).get('/weather?city=Gdansk');
    expect(response.status).toBe(200);
    expect(response.body.name).toBe('Gdansk');
    expect(response.body.weather).toBeDefined();
  });

});
