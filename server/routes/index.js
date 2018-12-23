const Router = require('koa-router')
const mongoose = require('mongoose')
const router = new Router()

router.get('/movies/all', async (ctx, next) => {
  let movies = { 'hello' : 'movie' }
  ctx.body = {
    movies
  }
})

router.get('/movies/detail/:id', async (ctx, next) => {
  ctx.body = {
    title : '我不是药神'
  }
})

router.post('/user/login', async (ctx, next) => {
  ctx.body = {
    'username' : 'kimi',
    'password' : '12344321'
  }
})

module.exports = router