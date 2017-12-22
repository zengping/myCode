#!/usr/bin/python
#coding: utf-8  
from email import encoders
from email.header import Header
from email.mime.text import MIMEText
from email.utils import parseaddr, formataddr
import smtplib
import sys

def send(logtxt, fileList):
    sender = '331962716@qq.com'
    receiver = '331962716@qq.com'
    subject = 'test'
    smtpserver = 'smtp.qq.com'
    username = '331962716@qq.com'
    password = '123456'
    msg = MIMEText('<html><body>' + logtxt + ', 修改文件:' + fileList + '</body></html>', 'html', 'utf-8')
    msg['Subject'] = subject
    smtp = smtplib.SMTP(smtpserver, 25)
    smtp.set_debuglevel(1)
    smtp.login(username, password)
    smtp.sendmail(sender, receiver, msg.as_string())
    smtp.quit()
    exit()

def read(path):
    f = open(path,"r")  
    lines = f.readlines()
    return lines

if (1):
    files = read(sys.argv[1])
    fileList = ','.join(files)
    logs = read(sys.argv[3])
    logtxt = ','.join(logs)
    print fileList
    if logtxt == "" or logtxt == "update":
        print "this log is error"
        exit(1)
    send(logtxt, fileList);