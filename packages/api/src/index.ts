import Koa from 'koa'
import cors from '@koa/cors'
import bodyParser from 'koa-bodyparser'
import logger from 'koa-logger'
import Router from '@koa/router'
import dotenv from 'dotenv'

dotenv.config()

const app = new Koa()
const router = new Router()

router.get('/', (ctx: { body: string }) => {
  ctx.body = 'Welcome to the API'
})

app
  .use(cors())
  .use(logger())
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(process.env.API_PORT)
