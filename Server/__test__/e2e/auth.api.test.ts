import request from 'supertest'
import {app} from '../..'

describe('check auth', () => {
    it('should return 201',async () => {
      const response_auth =  await request(app).get('/api/auth')
        .expect(201)

        expect(response_auth.body).toEqual({
            id: expect.any(Number),
        })
    })
});