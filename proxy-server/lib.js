var path = require('path')
var fs = require('fs')
var os = require('os')

module.exports = {
  creatJson (url, data) {
    let urls = url.split('/')
    let ds = '/'
    if (os.platform() == 'win32') {
      ds = '\\'
    }
    let jsons = path.resolve(__dirname, './') + ds + 'jsons'
    let dir = jsons
    let json = ''
    json = jsons + url + '.json'
    if (fs.existsSync(json)) {
      return
    }
    for (let i = 0; i < (urls.length - 1); i++) {
      dir = dir + ds + urls[i]
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir)
      }
    }
    fs.writeFileSync(json, data, {encoding: 'utf-8'})
  },
  readJson (url) {
    let ds = '/'
    if (os.platform() == 'win32') {
      ds = '\\'
    }
    let jsons = path.resolve(__dirname, './') + ds + 'jsons'
    let json = ''
    json = jsons + url + '.json'
    if (!fs.existsSync(json)) {
      return 'error'
    }
    return fs.readFileSync(json, {encoding: 'utf-8'})
  }
}
