const exec = require('child_process').exec
const fs = require('fs')

var A = function () {
  try {
    this.init()
  } catch (err) {
    process.stderr.write(err)
    process.exit(1)
  }
}

A.prototype = {
  init: function () {
    this.args = process.argv;
    this.fileList = this.readFile(this.args[2])
    let srcFile = this.checkFile()
    this.runEslint('eslint --ext .js,.vue ' + srcFile)
  },
  readFile: function (path) {
    return fs.readFileSync(path, "utf-8").toString()
  },
  runEslint: function (cmd) {
    exec(cmd, function (err, stdout, stderr) {
      if (err) {
        process.stderr.write(stdout.toString())
        process.exit(1)
      }
    })
  },
  checkFile: function () {
    let arr = this.fileList.split('\r\n')
    let temparr = []
    if (arr.length > 0) {
      arr.forEach(function (i) {
        if (i.indexOf('/src/') > -1) {
          temparr.push(i)
        }
      })
    }
    return temparr.join(' ')
  }
}

var a = new A();