import Router from '@koa/router'

export const router = new Router().get('/info', ctx => {
  ctx.body = {
    message: 'Hello World',
  }
})
