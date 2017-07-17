#!/usr/bin/python
import paramiko
ssh = paramiko.SSHClient()
ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
ssh.connect(hostname='172.28.3.154', port=22, username='root', password='123456')
cmd = 'cd /var/www/fzdl;svn up'
stdin, stdout, stderr = ssh.exec_command(cmd)

result = stdout.read()

if not result:
    result = stderr.read()
ssh.close()

print(result.decode())
raw_input('press enter key to exit')
