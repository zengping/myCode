const fs = require('fs');
const path = require('path');
const mineType = require('mime-types');   // npm i --save-dev mime-types 需要安装才能使用
let filePath = path.resolve('./old/1.jpg');  // 原来地址
let data = fs.readFileSync(filePath);  
data = new Buffer(data).toString('base64');  
let base64 = 'data:' + mineType.lookup(filePath) + ';base64,' + data;
console.log(base64);
fs.writeFileSync(path.resolve('./new/1.txt'), base64);  // 保存地址