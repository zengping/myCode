#coding:utf-8
#!/usr/bin/python
import paramiko
import os
import time
import pexpect


def uploadzip(k, l):
    child = pexpect.spawn('scp ' + k + ' root@172.28.3.213:/data/sctzmap/' + l)
    child.expect("password:")
    child.sendline('123456')
    print('The remote package deployment is underway. Please wait...')
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    ssh.connect(hostname='172.28.3.213', port=22, username='root', password='123456')
    stdin, stdout, stderr = ssh.exec_command('cd /data/sctzmap/' + l +';unzip ' + k +';rm -rf ' + k)
    out = stdout.read()
    if not out:
        out = stderr.read()
    ssh.close()
    os.system('rm -rf ' + k)


l = 19
l = '%d' %l
for p in range(84480, 90000):
    p = '%d' %p
    os.system("zip " + p + ".zip ./" + p + "/*")
    zpackage = p + '.zip'
    uploadzip(zpackage, l)

print('all over')

raw_input('press enter key to exit')
