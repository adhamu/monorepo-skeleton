import Koa from 'koa'
import request from 'supertest'

import { router } from '../router'

describe('Koa Router', () => {
  let app: Koa

  beforeEach(() => {
    app = new Koa()
    app.use(router.routes()).use(router.allowedMethods())
  })

  it('returns the correct response on the /info endpoint', async () => {
    const response = await request(app.callback()).get('/info')

    expect(response.status).toBe(200)

    expect(response.text).toBe(
      JSON.stringify({
        message: 'Hello World',
      })
    )
  })
})
