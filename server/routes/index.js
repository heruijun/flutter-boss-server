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
  let movies = { 'detail' : 'hi' }
  ctx.body = {
    movies
  }
})

module.exports = router