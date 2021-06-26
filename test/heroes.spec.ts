import request from 'supertest';

import app from '../src/app';

describe('GET /api/v1/heroes', () => {
    it('responds with a json message', (done) => {
        request(app)
            .get('/api/v1/heroes')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, {
                heroes: ['spiderman 🕷', 'superman 🦸', 'Batman 🦇']
            }, done);
    });
});
