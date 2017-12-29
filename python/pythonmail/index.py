#!/usr/bin/python
#coding: utf-8  
from email import encoders
from email.header import Header
from email.mime.text import MIMEText
from email.utils import parseaddr, formataddr
import smtplib
import sys

def send(logtxt, fileList):
    to_addr = re.findall('\[(.*?)\]',logtxt)
    receiver = ['331962716@qq.com']
    if to_addr:
        for one in to_addr:
            if one != 'all':
                receiver = one
            logtxt = logtxt.replace('[' + one + ']', '')
    sender = '331962716@qq.com'
    # receiver = '331962716@qq.com'
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

def read(path):
    f = open(path,"r")  
    lines = f.readlines()
    return lines

def rewritelog(f, logs):
    f = open(f,'wb')
    f.write('')
    f.close()
    for l in logs:
        p = re.compile(r'\[(.*?)\]')
        l = p.sub('', l)
        f = open(f,'a')
        f.write(l)
        f.close()

if (1):
    files = read(sys.argv[1])
    fileList = ','.join(files)
    logs = read(sys.argv[3])
    logtxt = ','.join(logs)
    print fileList
    if logtxt == "" or logtxt == "update":
        print "this log is error"
        exit(1)
    send(logtxt, fileList)
    rewritelog(sys.argv[3], logs)
    exit()