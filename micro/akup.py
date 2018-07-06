#coding:utf-8
#!/usr/bin/python
import os
import sys
import pexpect

def upload(k):
    child = pexpect.spawn('scp -r ' + k + ' root@172.28.2.53:/home/akga/micro')
    child.expect("password:")
    child.sendline('123456')
    child.expect(pexpect.EOF)
    print child.before

if __name__ == "__main__":
    path = os.getcwd()
    dirs = os.listdir(path)
    for d in dirs:
        if d != 'akdw.py' and d != 'akup.py':
            upload(d)

print('all over')
