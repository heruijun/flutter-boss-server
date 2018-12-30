const puppeteer = require('puppeteer')

const sleep = time => new Promise(resolve => {
  setTimeout(resolve, time)
})

async function fetchJobList (page, curPage) {
  const url = `https://www.zhipin.com/c101020100/?query=Android&page=${curPage}&ka=page-${curPage}`

  await page.goto(url, {
    waitUntil: 'networkidle2'
  })

  await page.screenshot({
    path: `site/screenshot/boss${curPage}.png`,
    fullPage: true
  })

  return await page.evaluate(() => {
    var $ = window.$
    var items = $('.job-list li')
    var objItem = []

    if (items.length >= 1) {
      items.each((index, item) => {
        let id = index
        let it = $(item)
        let title = it.find('.job-title').text()    // 职位
        let salary = it.find('.red').text()         // 薪水
        let company = it.find('.company-text .name a').text()     // 公司名称
        let info = it.find('.info-primary p').text()
        let category = it.find('.company-text p').text()
        let head = it.find('.info-publis .name img').attr('src')
        let publish = it.find('.info-publis p').text()
        let link = 'https://www.zhipin.com' + it.find('.info-primary a').attr('href')

        objItem.push({
          id,
          title,
          salary,
          company,
          info,
          category,
          head,
          publish,
          link
        })
      })
    }

    return objItem
  })
}

;(async () => {
  console.log('正在访问页面')

  const browser = await puppeteer.launch({
    args: ['--no-sandbox'],
    dumpio: false
  })

  const page = await browser.newPage()

  for (let i = 1; i < 3; i++) {
    await sleep(2000)
    let result = await fetchJobList(page, i)
    process.send({result})
  }

  browser.close()
  process.exit(0)
})()