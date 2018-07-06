var Mock = require('mockjs');
import multer from 'koa-multer';
import _path from 'path';
import Doc, { description, okMsg, lib } from '../../lib'; // 2 import style avaliable
import config from '../config';

const {
  request, summary, query, tags, formData, middlewares, responses, path
} = Doc;


function getFileUrl(filename) {
  return `${config.baseUrl}/temp/${filename}`;
}
const tag = tags(['企业工具上传管理']);

const storage = multer.diskStorage({
  destination: _path.resolve('temp/'),
  filename: (req, file, cb) => cb(null, `${file.originalname}`)
});

const upload = multer({ storage });
const upload2 = multer({ storage });
export default class SubmitToolRouter {
  @request('post', '/internet/submitTool/engine-upload/{id}')
  @summary('数据引擎上传')
  @tag
  @formData({
    file: { type: 'file', required: 'true', description: 'upload file, get url' }
  })
  @middlewares([upload.single('data')])
  @path({
    id: {type: 'number', required: true}
  })
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

  @request('post', '/internet/submitTool/api-upload/{id}')
  @summary('数据接口上传')
  @tag
  @formData({
    file: { type: 'file', required: 'true', description: 'upload file, get url' }
  })
  @middlewares([upload2.single('data')])
  @path({
    id: {type: 'number', required: true}
  })
  @responses({
    200:
    { description: 'file upload success' },
    500:
    { description: 'something wrong about server' }
  })
  static async upload2(ctx) {
    const { file } = ctx.req;
    file.url = getFileUrl(file.filename);
    okMsg.data = file;
    ctx.body = okMsg;
  }

  @request('get', '/internet/submitTool/item')
  @summary('企业工具管理列表')
  @tag
  @query({
    page: {type: 'string', require: true},
    pageSize: {type: 'string', require: true},
    address: {type: 'string', require: false},
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
            'dataEngine': /(合资|国有|私营|)/,
            'dataApi': /(渝中质监局|江北质监局|江北工商局|)/
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
    lib.creatJson('/submitTool/item', okMsg);
    ctx.body = okMsg;
  }

  @request('delete', '/internet/submitTool/engine-delete/{id}')
  @summary('企业数据引擎删除')
  @tag
  @path({
    id: {type: 'string', require: true}
  })
  static async engineDelete(ctx) {
    okMsg.data = 1;
    lib.creatJson('/submitTool/engine-delete', okMsg);
    ctx.body = okMsg;
  }

  @request('delete', '/internet/submitTool/api-delete/{id}')
  @summary('企业数据接口删除')
  @tag
  @path({
    id: {type: 'string', require: true}
  })
  static async apiDelete(ctx) {
    okMsg.data = 1;
    lib.creatJson('/submitTool/api-delete', okMsg);
    ctx.body = okMsg;
  }
}
