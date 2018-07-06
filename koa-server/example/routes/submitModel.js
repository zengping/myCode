var Mock = require('mockjs');
import multer from 'koa-multer';
import _path from 'path';
import Doc, { description, okMsg, lib } from '../../lib';
import config from '../config';

const {
  request, summary, query, tags, formData, middlewares, responses, body, path, errMsg
} = Doc;

const tag = tags(['数据模板管理']);

export default class SubmitModelRouter {
  @request('get', '/internet/submitModel/menu')
  @summary('文件目录')
  @tag
  static async menu(ctx) {
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
    lib.creatJson('/submitModel/menu', okMsg);
    ctx.body = okMsg;
  }

  @request('post', '/internet/submitModel/temp-add')
  @summary('新增模板')
  @tag
  @body({
    tempName: {type: 'string', require: true},
    tempDes: {type: 'string', require: true},
    tempFields: {type: 'array', require: true}
  })
  static async tempAdd(ctx) {
    okMsg.data = 1;
    lib.creatJson('/submitModel/temp-add', okMsg);
    ctx.body = okMsg;
  }

  @request('get', '/internet/submitModel/temp-info/{id}')
  @summary('获取模板信息')
  @tag
  @path({
    id: {type: 'string', require: true}
  })
  static async tempInfo(ctx) {
    const { id } = ctx.validatedParams;
    if (id > 0) {
      okMsg.data = Mock.mock({
        'data': {
          'id': Math.floor(Math.random() * 1000),
          'status': /(0|1|2)/,
          'tempName': /(汽车制造|摩托车制造|产品数据|生产数据|物料数据|基本参数)/,
          'tempDes': /(电缆基本信息月报\.xls|这个模板是描述电缆基本信息月报汇总)/,
          'tempFields|1-30': [/(汽车制造|摩托车制造|产品数据|生产数据|物料数据|基本参数)/]
        }
      }).data;
      lib.creatJson('/submitModel/temp-info', okMsg);
      ctx.body = okMsg;
    } else {
      errMsg.status.message = '请求参数id出错！'
      ctx.body = errMsg;
    }
  }

  @request('put', '/internet/submitModel/temp-edit/{id}')
  @summary('模板修改')
  @tag
  @body({
    tempName: {type: 'string', require: true},
    tempDes: {type: 'string', require: true},
    tempFields: {type: 'array', require: true}
  })
  static async tempEdit(ctx) {
    okMsg.data = 1;
    lib.creatJson('/submitModel/temp-edit', okMsg);
    ctx.body = okMsg;
  }

  @request('put', '/internet/submitModel/temp-status/{id}')
  @summary('发布，下线模板')
  @tag
  @path({
    id: {type: 'string', require: true}
  })
  @body({
    status: {type: 'string', require: true}
  })
  static async tempStatus(ctx) {
    const { id } = ctx.validatedParams;
    if (id > 0) {
      okMsg.data = 1;
      lib.creatJson('/submitModel/temp-status', okMsg);
      ctx.body = okMsg;
    } else {
      errMsg.status.message = '请求参数id出错！'
      ctx.body = errMsg;
    }
  }
}
