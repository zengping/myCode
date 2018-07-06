var Mock = require('mockjs');
var fs = require('fs');
import multer from 'koa-multer';
import _path from 'path';
import Doc, { description, okMsg, lib } from '../../lib'; // 2 import style avaliable
import config from '../config';

const {
  request, summary, query, tags, formData, middlewares, responses
} = Doc;


function getFileUrl(filename) {
  return `${config.baseUrl}/temp/${filename}`;
}
const tag = tags(['企业信息管理']);

const storage = multer.diskStorage({
  destination: _path.resolve('temp/'),
  filename: (req, file, cb) => cb(null, `${file.originalname}`)
});

const upload = multer({ storage });
const three = multer({ storage });
export default class SubmitRouter {
  @request('post', '/internet/submit/import')
  @summary('单文件整体上传')
  @tag
  @formData({
    file: { type: 'file', required: 'true', description: 'upload file, get url' }
  })
  @middlewares([upload.single('data')])
  @responses({
    200:
    { description: 'file upload success' },
    500:
    { description: 'something wrong about server' }
  })
  static async upload(ctx) {
    const { file } = ctx.req;
    file.url = getFileUrl(file.filename);
    okMsg.data = file;
    ctx.body = okMsg;
  }

  @request('get', '/internet/submit/first')
  @summary('获取文件token')
  @tag
  static async first(ctx) {
    okMsg.data = { token: Mock.mock(/[0-9a-zA-Z]/) }
    lib.creatJson('/submit/first', okMsg);
    ctx.body = okMsg;
  }

  @request('get', '/internet/submit/second')
  @summary('获取文件断点')
  @tag
  static async second(ctx) {
    okMsg.data = { start: 0 }
    lib.creatJson('/submit/second', okMsg);
    ctx.body = okMsg;
  }

  @request('post', '/internet/submit/three')
  @summary('单文件分片上传')
  @tag
  @formData({
    file: { type: 'file', required: 'true', description: 'upload file, get url' }
  })
  @middlewares([three.single('data')])
  @responses({
    200:
    { description: 'file upload success' },
    500:
    { description: 'something wrong about server' }
  })
  static async three(ctx) {
    const { file } = ctx.req;
    file.url = getFileUrl(file.filename);
    let targetStream = fs.createWriteStream(_path.resolve('temp2/') + '\\' + file.filename, {'flags': 'a'});
    let originStream = fs.createReadStream(_path.resolve('temp/') + '\\' + file.filename);
    originStream.pipe(targetStream);
    okMsg.data = file;
    ctx.body = okMsg;
  }

  @request('get', '/internet/submit/item')
  @summary('企业信息列表')
  @tag
  @query({
    page: {type: 'string', require: true},
    pageSize: {type: 'string', require: true},
    address: {type: 'string', require: false},
    industry: {type: 'string', require: false},
    keywords: {type: 'string', require: false}
  })
  static async item(ctx) {
    okMsg.data = Mock.mock({
      'data': {
        'content|0-10': [
          {
            'id': function(){
              return Math.floor(Math.random() * 1000);
            },
            'companyName': /(嘉陵摩托|长安福特|惠普)/,
            'address': /(渝中|两江新区|江北)/,
            'industryName': /(摩托车制造|汽车制造|电子产品制造)/,
            'companyType': /(合资|国有|私营)/,
            'registerOffice': /(渝中质监局|江北质监局|江北工商局)/,
            'dataType': /(摩托车数据|汽车数据|电子产品数据)/
            }
        ],
        'totalRecord': Math.floor(Math.random() * 1000),
        'pageNumber': 1,
        'pageSize': 12,
        'totalPageCount': function(){
          return Math.floor(Math.random() * 1000);
        }
      }
    }).data;
    lib.creatJson('/submit/item', okMsg);
    ctx.body = okMsg;
  }

  @request('get', '/internet/submit/address')
  @summary('行政区列表')
  @tag
  static async address(ctx) {
    okMsg.data = Mock.mock({
      'data|0-10': [
        {
          'id': function(){
            return Math.floor(Math.random() * 1000);
          },
          'address': /(渝中|两江新区|江北)/
        }
      ]
    }).data;
    lib.creatJson('/submit/address', okMsg);
    ctx.body = okMsg;
  }

  @request('get', '/internet/submit/industry')
  @summary('行业列表')
  @tag
  static async industry(ctx) {
    okMsg.data = Mock.mock({
      'data|0-10': [
        {
          'id': function(){
            return Math.floor(Math.random() * 1000);
          },
          'industry': /(摩托车制造|汽车制造|电子产品制造)/
        }
      ]
    }).data;
    lib.creatJson('/submit/industry', okMsg);
    ctx.body = okMsg;
  }
}
