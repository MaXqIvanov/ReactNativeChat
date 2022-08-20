import request from 'supertest'
import {app} from '../..'

describe('auth', () => {
    it('should return 200',async () => {
       await request(app).get('/auth')
        .expect(404, [])
    })
});