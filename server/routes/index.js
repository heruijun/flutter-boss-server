const Router = require('koa-router')
const mongoose = require('mongoose')
const router = new Router()

router.get('/jobs/list/:page', async (ctx, next) => {
  const curPage = Number(ctx.params.page)
  const pageSize = 10
  const Job = mongoose.model('Job')
  const total = await Job.find({}).count()
  const totalPage = Math.floor((total + pageSize - 1) / pageSize)
  const hasNextPage = curPage < totalPage ? true : false
  const jobs = await Job.find({}).sort({
    'meta.createdAt': -1
  }).skip((curPage - 1) * pageSize).limit(pageSize)

  ctx.body = {
    'data': {
      jobs,
      'pages': {
        curPage,
        totalPage,
        hasNextPage,
        total
      }
    }
  }
})

module.exports = router