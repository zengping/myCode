const router = require('koa-router')()
const request = require('request')
const send = require('koa-send')
const fs = require('fs')
const path = require('path')
const proxy = 'http://192.168.112.44'

router.prefix('/files')

router.get('/download', async (ctx, next) => {
  let first = ctx.query.api.substring(0, 1)
  if (first !== '/') {
    ctx.query.api = '/' + ctx.query.api
  }
  
  var options = {
    url: proxy + ctx.query.api + '?filePath=' + ctx.query.filePath + '&fileName=' + encodeURI(ctx.query.fileName),
    headers: {
      'Authorization': ctx.query.Authorization
    }
  };
  
  let newFile = await getFile()
  try {
    ctx.attachment(newFile)
    ctx.set('Content-Disposition', 'attachment; filename=' + encodeURI(newFile))
    await send(ctx, newFile, { root: __dirname + '/../temp' })
  } catch (e) {
    ctx.body = e
  }

  async function getFile(){
    return new Promise((resolve, reject) => {
      let dirPath = path.join(__dirname, "/../temp")
      let fileName = ctx.query.fileName
      let stream = fs.createWriteStream(path.join(dirPath, 'temp_file'))
      console.log(options)
      request(options, function(error, response, body){
          console.log(response.headers)
      }).pipe(stream).on("close", function (err) {
        if (!err) {
          resolve(fileName)
        } else {
          reject(err)
        }
      })
    })
  }
})

module.exports = router
