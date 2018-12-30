const Router = require('koa-router')
const mongoose = require('mongoose')
const router = new Router()

router.get('/jobs/all', async (ctx, next) => {
  const Job = mongoose.model('Job')
  const jobs = await Job.find({}).sort({
    'meta.createdAt': -1
  })

  ctx.body = {
    jobs
  }
})

module.exports = router