const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');

var A = function(){
    try {
        this.init();
    } catch(err) {
        process.stderr.write(err);
        process.exit(1);
    }
}

A.prototype = {
    init: function(){
        var self = this;
        this.getContact();
        this.args = process.argv;
        this.fileList = this.readFile(self.args[2]);
        this.log = this.readFile(this.args[4]);
        if (this.log == "" || this.log == "update") throw "this log is error";
        this.sendMail();
    },
    readFile: function(path){
        return fs.readFileSync(path, "utf-8");
    },
    getContact: function(){
        this.contact = "331962716@qq.com";
    },
    sendMail: function(){
        var self = this;
        nodemailer.createTestAccount((err, account) => {
            var transporter = nodemailer.createTransport({
                host: "smtp.qq.com",
                secure: true,
                port: 465,
                auth: {
                    user: '331962716@qq.com',
                    pass: '123456'
                }
            });
            var mailOptions = {
                from: '331962716@qq.com',
                to: self.contact,
                subject: '文件修改通知！',  
                html: `${self.log}, 修改文件${self.fileList}`
            };
    
            transporter.sendMail(mailOptions, function(err, info) {
                if (err) {
                    throw err;
                }
                process.stdout.write('邮件发送成功');
                process.exit(0);
            });
        })
    }
}

var a = new A();