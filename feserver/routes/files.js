const router = require('koa-router')()
const request = require('request')
const send = require('koa-send')
const fs = require('fs')
const path = require('path')
let proxy = 'http://192.168.112.44:8000'

router.prefix('/files')

router.get('/download', async (ctx, next) => {
  if (ctx.query.proxy) {
    proxy = ctx.query.proxy
  }
  if (proxy.indexOf('http') == -1) {
    proxy = 'http://' + proxy
  }
  let first = ctx.query.api.substring(0, 1)
  if (first !== '/') {
    ctx.query.api = '/' + ctx.query.api
  }
  let params = JSON.parse(ctx.query.params)
  let query = ''
  if (params && ctx.query.params != '{}') {
    for (let i in params) {
      query += '&' + i + '=' + encodeURI(params[i])
    }
    query = query.substring(1)
  }
  let url = proxy + ctx.query.api
  var options = {};
  if (!ctx.query.method || ctx.query.method == 'GET') {
    url = url.indexOf('?') > -1 ? url + '&' + query : url + '?' + query
    options = {
      url: url,
      headers: {
        'Authorization': ctx.query.Authorization,
        'Content-type': 'application/json'
      },
      method: 'GET'
    };
  } else {
    options = {
      url: url,
      headers: {
        'Authorization': ctx.query.Authorization,
        'Content-type': 'application/json'
      },
      json: true,
      method: 'POST',
      body: JSON.stringify(params)
    };
  }
  
  let fileObj = await getFile()
  if (fileObj.fileName == 'finderror') {
    ctx.body = fileObj.msg
    return false
  }
  try {
    ctx.attachment(fileObj.fileName)
    ctx.set('Content-Disposition', 'attachment; filename=' + encodeURI(fileObj.originName))
    await send(ctx, fileObj.fileName, { root: __dirname + '/../temp' })
  } catch (e) {
    ctx.body = e.message
  }

  async function getFile(){
    return new Promise((resolve, reject) => {
      let dirPath = path.join(__dirname, "/../temp")
      let fileName = ctx.query.fileName ? ctx.query.fileName : 'temp_file'
      let stream = fs.createWriteStream(path.join(dirPath, fileName))
      let originName = ''
      let originArray = []
      try {
        request(options, function(error, response, body){
          try {
            let attachment = response.headers['content-disposition']
            if (attachment) {
              originArray = attachment.split('=')
              originName = decodeURI(originArray[originArray.length-1])
            } else {
              originName = 'downloadFile.pdf'
            }
          } catch (e) {
            reject(e.message)
          }
        }).pipe(stream).on("close", function (err) {
          if (!err) {
            resolve({fileName: fileName, originName: originName})
          } else {
            reject(err)
          }
        })
      } catch (e) {
        reject(e.message)
      }
    }).then(function(data){
      return data
    }, function(err){
      return {fileName: 'finderror', msg: err, originName: ''}
    })
  }
})

module.exports = router
