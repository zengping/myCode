#coding:utf-8
#!/usr/bin/python
import paramiko

print('The remote package deployment is underway. Please wait...')
ssh = paramiko.SSHClient()
ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
ssh.connect(hostname='172.28.3.154', port=22, username='root', password='123456')
stdin, stdout, stderr = ssh.exec_command('cd /var/www/fzdl/;/usr/local/nodejs/bin/node /usr/local/nodejs/lib/node_modules/npm/bin/npm-cli.js run build')
# result = stdout.read()
out = stdout.read()
if not out:
    out = stderr.read()
print(out)
ssh.close()

raw_input('press enter key to exit')
