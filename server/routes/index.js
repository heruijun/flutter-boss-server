const Router = require('koa-router')
const mongoose = require('mongoose')
const router = new Router()

// 职位列表
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

// 公司列表
router.get('/company/list/:page', async (ctx, next) => {
  const curPage = Number(ctx.params.page)
  const pageSize = 10
  const Company = mongoose.model('Company')
  const total = await Company.find({}).count()
  const totalPage = Math.floor((total + pageSize - 1) / pageSize)
  const hasNextPage = curPage < totalPage ? true : false
  const companies = await Company.find({}).sort({
    'meta.createdAt': -1
  }).skip((curPage - 1) * pageSize).limit(pageSize)

  ctx.body = {
    'data': {
      companies,
      'pages': {
        curPage,
        totalPage,
        hasNextPage,
        total
      }
    }
  }
})

router.get('/companyDetail/list/:page', async (ctx, next) => {
  const curPage = Number(ctx.params.page)
  const pageSize = 10
  const Company = mongoose.model('CompanyDetail')
  const total = await Company.find({}).count()
  const totalPage = Math.floor((total + pageSize - 1) / pageSize)
  const hasNextPage = curPage < totalPage ? true : false
  const companies = await Company.find({}).sort({
    'meta.createdAt': -1
  }).skip((curPage - 1) * pageSize).limit(pageSize)

  ctx.body = {
    'data': {
      companies,
      'pages': {
        curPage,
        totalPage,
        hasNextPage,
        total
      }
    }
  }
})

router.get('/companyDetail/:id', async (ctx, next) => {
  const id = ctx.params.id
  console.log('id: ' + id)
  const Company = mongoose.model('CompanyDetail')
  const companyDetail = await Company.findOne({_id: id})

  ctx.body = {
    'data': {
      companyDetail
    }
  }
})

module.exports = router