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
const tag = tags(['数据资源导入']);

const storage = multer.diskStorage({
  destination: _path.resolve('temp/'),
  filename: (req, file, cb) => cb(null, `${file.originalname}`)
});

const three = multer({ storage });
export default class HeldOutRouter {
  @request('get', '/internet/heldOut/first')
  @summary('获取文件token')
  @tag
  static async first(ctx) {
    okMsg.data = { token: Mock.mock(/[0-9a-zA-Z]/) }
    lib.creatJson('/heldOut/first', okMsg);
    ctx.body = okMsg;
  }

  @request('get', '/internet/heldOut/second')
  @summary('获取文件断点')
  @tag
  static async second(ctx) {
    okMsg.data = { start: 0 }
    lib.creatJson('/heldOut/second', okMsg);
    ctx.body = okMsg;
  }

  @request('post', '/internet/heldOut/three')
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
    okMsg.data.file = file;
    okMsg.data.fieldsData = Mock.mock({
      'data|5': [function(){
        let arr = [];
        for (let i = 0; i < 20; i++) {
          arr.push(Mock.mock({'data': /(汽车制造|摩托车制造|产品数据|生产数据|物料数据|基本参数)/}).data);
        }
        return arr;
      }]
    }).data;
    ctx.body = okMsg;
  }

  @request('get', '/internet/heldOut/tree')
  @summary('数据资源目录')
  @tag
  static async tree(ctx) {
    okMsg.data = Mock.mock({
      'data': [{
        'id': 1,
        'pid': 0,
        'type': /(dir|template)/,
        'name': /(汽车制造|摩托车制造|产品数据|生产数据|物料数据|基本参数)/,
        'description': /(电缆基本信息月报\.xls|这个模板是描述电缆基本信息月报汇总)/,
        'children': [
          {
            'id': 3,
            'pid': 1,
            'type': /(dir|template)/,
            'name': /(汽车制造|摩托车制造|产品数据|生产数据|物料数据|基本参数)/,
            'description': /(电缆基本信息月报\.xls|这个模板是描述电缆基本信息月报汇总)/,
            'children': [
              {
                'id': 4,
                'pid': 3,
                'type': /(dir|template)/,
                'name': /(汽车制造|摩托车制造|产品数据|生产数据|物料数据|基本参数)/,
                'description': /(电缆基本信息月报\.xls|这个模板是描述电缆基本信息月报汇总)/,
                'children': []
              },
              {
                'id': 5,
                'pid': 3,
                'type': /(dir|template)/,
                'name': /(汽车制造|摩托车制造|产品数据|生产数据|物料数据|基本参数)/,
                'description': /(电缆基本信息月报\.xls|这个模板是描述电缆基本信息月报汇总)/,
                'children': []
              }
            ]
          },
          {
            'id': 6,
            'pid': 1,
            'type': /(dir|template)/,
            'name': /(汽车制造|摩托车制造|产品数据|生产数据|物料数据|基本参数)/,
            'description': /(电缆基本信息月报\.xls|这个模板是描述电缆基本信息月报汇总)/,
            'children': [
              {
                'id': 7,
                'pid': 6,
                'type': /(dir|template)/,
                'name': /(汽车制造|摩托车制造|产品数据|生产数据|物料数据|基本参数)/,
                'description': /(电缆基本信息月报\.xls|这个模板是描述电缆基本信息月报汇总)/,
                'children': []
              },
              {
                'id': 8,
                'pid': 6,
                'type': /(dir|template)/,
                'name': /(汽车制造|摩托车制造|产品数据|生产数据|物料数据|基本参数)/,
                'description': /(电缆基本信息月报\.xls|这个模板是描述电缆基本信息月报汇总)/,
                'children': []
              }
            ]
          },
          {
            'id': 11,
            'pid': 1,
            'type': /(dir|template)/,
            'name': /(汽车制造|摩托车制造|产品数据|生产数据|物料数据|基本参数)/,
            'description': /(电缆基本信息月报\.xls|这个模板是描述电缆基本信息月报汇总)/,
            'children': [
              {
                'id': 12,
                'pid': 11,
                'type': /(dir|template)/,
                'name': /(汽车制造|摩托车制造|产品数据|生产数据|物料数据|基本参数)/,
                'description': /(电缆基本信息月报\.xls|这个模板是描述电缆基本信息月报汇总)/,
                'children': []
              },
              {
                'id': 13,
                'pid': 11,
                'type': /(dir|template)/,
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
        'type': /(dir|template)/,
        'name': /(汽车制造|摩托车制造|产品数据|生产数据|物料数据|基本参数)/,
        'description': /(电缆基本信息月报\.xls|这个模板是描述电缆基本信息月报汇总)/,
        'children': [
          {
            'id': 9,
            'pid': 2,
            'type': /(dir|template)/,
            'name': /(汽车制造|摩托车制造|产品数据|生产数据|物料数据|基本参数)/,
            'description': /(电缆基本信息月报\.xls|这个模板是描述电缆基本信息月报汇总)/,
            'children': [
              {
                'id': 10,
                'pid': 9,
                'type': /(dir|template)/,
                'name': /(汽车制造|摩托车制造|产品数据|生产数据|物料数据|基本参数)/,
                'description': /(电缆基本信息月报\.xls|这个模板是描述电缆基本信息月报汇总)/,
                'children': []
              }
            ]
          }
        ]
      }]
    }).data;
    lib.creatJson('/heldOut/tree', okMsg);
    ctx.body = okMsg;
  }

  @request('get', '/internet/heldOut/public-fields')
  @summary('数据资源公共关系')
  @tag
  static async publicFields(ctx) {
    okMsg.data = Mock.mock({
      'data|1-5': [{
        'id': Math.floor(Math.random() * 10000),
        'groupName': /(个人关系|父母关系)/,
        'fields|1-10': [
          {
            'id': Math.floor(Math.random() * 10000),
            'fieldName': /(SHEN_FEN_ZHENG_HAO|XING_MING|ZHU_ZHI_XIANG_ZHI|SHOU_JI_HAO_MA)/,
            'fieldInfo': /(身份证号|姓名|住址详址|手机号码)/,
            'fieldType': 'varchar',
            'tableId': 0,
            'stdFieldName': null,
            'primaryKey': null,
            'foreignKey': null,
            'isUsed': 0,
            'group': 0,
            'originalFieldName': /(SHEN_FEN_ZHENG_HAO|XING_MING|ZHU_ZHI_XIANG_ZHI|SHOU_JI_HAO_MA)/,
            'groupName': null
          }
        ]
      }]
    }).data;
    lib.creatJson('/heldOut/tree', okMsg);
    ctx.body = okMsg;
  }
}
