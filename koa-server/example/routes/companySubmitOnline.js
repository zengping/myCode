var Mock = require('mockjs');
var fs = require('fs');
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

const tag = tags(['数据在线报送']);

const storage = multer.diskStorage({
  destination: _path.resolve('temp/'),
  filename: (req, file, cb) => cb(null, `${file.originalname}`)
});

const three = multer({ storage });
export default class CompanySubmitOnlineRouter {
  @request('get', '/internet/companySubmitOnline/menu')
  @summary('数据报送目录')
  @tag
  static async menu(ctx) {
    okMsg.data = Mock.mock({
      'data': [{
        'id': 1,
        'pid': 0,
        'name': /(汽车制造|摩托车制造|产品数据|生产数据|物料数据|基本参数)/,
        'description': /(电缆基本信息月报\.xls|这个模板是描述电缆基本信息月报汇总)/,
        'children': [
          {
            'id': 3,
            'pid': 1,
            'name': /(汽车制造|摩托车制造|产品数据|生产数据|物料数据|基本参数)/,
            'description': /(电缆基本信息月报\.xls|这个模板是描述电缆基本信息月报汇总)/,
            'children': [
              {
                'id': 4,
                'pid': 3,
                'name': /(汽车制造|摩托车制造|产品数据|生产数据|物料数据|基本参数)/,
                'description': /(电缆基本信息月报\.xls|这个模板是描述电缆基本信息月报汇总)/,
                'children': []
              },
              {
                'id': 5,
                'pid': 3,
                'name': /(汽车制造|摩托车制造|产品数据|生产数据|物料数据|基本参数)/,
                'description': /(电缆基本信息月报\.xls|这个模板是描述电缆基本信息月报汇总)/,
                'children': []
              }
            ]
          },
          {
            'id': 6,
            'pid': 1,
            'name': /(汽车制造|摩托车制造|产品数据|生产数据|物料数据|基本参数)/,
            'description': /(电缆基本信息月报\.xls|这个模板是描述电缆基本信息月报汇总)/,
            'children': [
              {
                'id': 7,
                'pid': 6,
                'name': /(汽车制造|摩托车制造|产品数据|生产数据|物料数据|基本参数)/,
                'description': /(电缆基本信息月报\.xls|这个模板是描述电缆基本信息月报汇总)/,
                'children': []
              },
              {
                'id': 8,
                'pid': 6,
                'name': /(汽车制造|摩托车制造|产品数据|生产数据|物料数据|基本参数)/,
                'description': /(电缆基本信息月报\.xls|这个模板是描述电缆基本信息月报汇总)/,
                'children': []
              }
            ]
          },
          {
            'id': 11,
            'pid': 1,
            'name': /(汽车制造|摩托车制造|产品数据|生产数据|物料数据|基本参数)/,
            'description': /(电缆基本信息月报\.xls|这个模板是描述电缆基本信息月报汇总)/,
            'children': [
              {
                'id': 12,
                'pid': 11,
                'name': /(汽车制造|摩托车制造|产品数据|生产数据|物料数据|基本参数)/,
                'description': /(电缆基本信息月报\.xls|这个模板是描述电缆基本信息月报汇总)/,
                'children': []
              },
              {
                'id': 13,
                'pid': 11,
                'name': /(汽车制造|摩托车制造|产品数据|生产数据|物料数据|基本参数)/,
                'description': /(电缆基本信息月报\.xls|这个模板是描述电缆基本信息月报汇总)/,
                'children': []
              }
            ]
          }
        ]
      },
      {
        'id': 2,
        'pid': 0,
        'name': /(汽车制造|摩托车制造|产品数据|生产数据|物料数据|基本参数)/,
        'description': /(电缆基本信息月报\.xls|这个模板是描述电缆基本信息月报汇总)/,
        'children': [
          {
            'id': 9,
            'pid': 2,
            'name': /(汽车制造|摩托车制造|产品数据|生产数据|物料数据|基本参数)/,
            'description': /(电缆基本信息月报\.xls|这个模板是描述电缆基本信息月报汇总)/,
            'children': [
              {
                'id': 10,
                'pid': 9,
                'name': /(汽车制造|摩托车制造|产品数据|生产数据|物料数据|基本参数)/,
                'description': /(电缆基本信息月报\.xls|这个模板是描述电缆基本信息月报汇总)/,
                'children': []
              }
            ]
          }
        ]
      }]
    }).data;
    lib.creatJson('/companySubmitOnline/menu', okMsg);
    ctx.body = okMsg;
  }

  @request('get', '/internet/companySubmitOnline/temp-info/{id}')
  @summary('数据报送模板详情')
  @tag
  @path({ id: { type: 'string', required: true } })
  static async tempInfo(ctx) {
    const { id } = ctx.validatedParams;
    if (id > 0) {
      okMsg.data = Mock.mock({
        'data': {
          'tempId': 22,
          'tempName': /(电缆基本信息月报\.xls|这个模板\.xls|描述电缆\.xls|基本信息\.xls|月报汇总\.xls)/,
          'tempInterval': 30,
          'publishStatus': 0,
          'tempDes': /(电缆基本信息月报汇总|这个模板是描述电缆基本信息月报汇总)/,
          'tempFields|1-20': [/(质量|VIN码)/]
        }
      }).data;
      lib.creatJson('/companySubmitOnline/temp-info', okMsg);
      ctx.body = okMsg;
    } else {
      errMsg.status.message = '请求参数id出错！'
      ctx.body = errMsg;
    }
  }

  @request('get', '/internet/companySubmitOnline/down-temp/{id}')
  @summary('数据报送模板下载')
  @tag
  @path({ id: { type: 'string', required: true } })
  static async downTemp(ctx) {
    const { id } = ctx.validatedParams;
    if (id > 0) {
      lib.downfile(ctx);
    } else {
      errMsg.status.message = '请求参数id出错！'
      ctx.body = errMsg;
    }
  }

  @request('get', '/internet/companySubmitOnline/first')
  @summary('获取文件token')
  @tag
  static async first(ctx) {
    okMsg.data = { token: Mock.mock(/[0-9a-zA-Z]/) }
    lib.creatJson('/companySubmitOnline/first', okMsg);
    ctx.body = okMsg;
  }

  @request('get', '/internet/companySubmitOnline/second')
  @summary('获取文件断点')
  @tag
  static async second(ctx) {
    okMsg.data = { start: 0 }
    lib.creatJson('/companySubmitOnline/second', okMsg);
    ctx.body = okMsg;
  }

  @request('post', '/internet/companySubmitOnline/three')
  @summary('单文件分片上传')
  @tag
  @formData({
    file: { type: 'file', required: 'true', description: 'upload file, get url' }
  })
  @middlewares([three.single('data')])
  @query({
    page: {
      type: 'number', default: 1, required: false, description: 'page number'
    },
    limit: {
      type: 'number', default: 10, required: false, description: 'return item number limit'
    }
  })
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
}
