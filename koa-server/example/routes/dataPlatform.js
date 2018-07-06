var Mock = require('mockjs');

import { request, summary, body, tags, middlewares, path, description, okMsg, lib, query } from '../../lib';

const tag = tags(['数据平台对接']);

export default class DataPlatformRouter {
  @request('get', '/internet/dataPlatform/statistics')
  @summary('数据总量，今日总量统计')
  @tag
  static async statistics(ctx) {
    okMsg.data = Mock.mock({
      'data': {
        'dataCount': function(){
          return Math.floor(Math.random() * 10000000);
        },
        'dataReport': function(){
          return Math.floor(Math.random() * 10000000);
        },
        'dataDownload': function(){
          return Math.floor(Math.random() * 10000000);
        },
        'newAddCount': function(){
          return Math.floor(Math.random() * 10000);
        },
        'newDataReport': function(){
          return Math.floor(Math.random() * 10000);
        },
        'newDataDownload': function(){
          return Math.floor(Math.random() * 10000);
        }
      }
    }).data;
    lib.creatJson('/dataPlatform/statistics', okMsg);
    ctx.body = okMsg;
  }

  @request('get', '/internet/dataPlatform/trend')
  @summary('数据下载,上报趋势')
  @tag
  static async trend(ctx) {
    okMsg.data = Mock.mock({
      'data': [
        {
          'xdata': '周一',
          'report': function(){
            return Math.floor(Math.random() * 1000);
          },
          'download': function(){
            return Math.floor(Math.random() * 1000);
          }
        },
        {
          'xdata': '周二',
          'report': function(){
            return Math.floor(Math.random() * 1000);
          },
          'download': function(){
            return Math.floor(Math.random() * 1000);
          }
        },
        {
          'xdata': '周三',
          'report': function(){
            return Math.floor(Math.random() * 1000);
          },
          'download': function(){
            return Math.floor(Math.random() * 1000);
          }
        },
        {
          'xdata': '周四',
          'report': function(){
            return Math.floor(Math.random() * 1000);
          },
          'download': function(){
            return Math.floor(Math.random() * 1000);
          }
        },
        {
          'xdata': '周五',
          'report': function(){
            return Math.floor(Math.random() * 1000);
          },
          'download': function(){
            return Math.floor(Math.random() * 1000);
          }
        },
        {
          'xdata': '周六',
          'report': function(){
            return Math.floor(Math.random() * 1000);
          },
          'download': function(){
            return Math.floor(Math.random() * 1000);
          }
        },
        {
          'xdata': '周日',
          'report': function(){
            return Math.floor(Math.random() * 1000);
          },
          'download': function(){
            return Math.floor(Math.random() * 1000);
          }
        }
      ]
    }).data;
    lib.creatJson('/dataPlatform/trend', okMsg);
    ctx.body = okMsg;
  }

  @request('get', '/internet/dataPlatform/item')
  @summary('数据下载接口列表')
  @tag
  @query({ page: { type: 'string', required: true }, pageSize: { type: 'string', required: true }})
  static async item(ctx) {
    okMsg.data = Mock.mock({
      'data': {
        'content|0-6': [
          {
            'id': function(){
              return Math.floor(Math.random() * 1000);
            },
            'taskName': /(产品检验信息对接2017-9-13|苹果手机网络评价|汽车网络评价|农耕机网络评价|力帆摩托车网络评价)/,
            'createTime': /(2017-9-13 23:27:35|2017-9-14 23:27:35|2017-9-15 23:27:35)/,
            'taskType': /(2|1)/,
            'status': /(3|1|2)/,
            'remarks': /(暂无|数据抓取，用于互联网倾向分析)/
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
    lib.creatJson('/dataPlatform/item', okMsg);
    ctx.body = okMsg;
  }

  @request('get', '/internet/dataPlatform/config-tree')
  @summary('数据配置')
  @tag
  static async configTree(ctx) {
    okMsg.data = Mock.mock({
      'data': [{
        'id': 1,
        'pid': 0,
        'name': /(汽车制造|摩托车制造|产品数据|生产数据|物料数据|基本参数)/,
        'children': [
          {
            'id': 3,
            'pid': 1,
            'name': /(汽车制造|摩托车制造|产品数据|生产数据|物料数据|基本参数)/,
            'children': [
              {
                'id': 4,
                'pid': 3,
                'name': /(汽车制造|摩托车制造|产品数据|生产数据|物料数据|基本参数)/,
                'children': []
              },
              {
                'id': 5,
                'pid': 3,
                'name': /(汽车制造|摩托车制造|产品数据|生产数据|物料数据|基本参数)/,
                'children': []
              }
            ]
          },
          {
            'id': 6,
            'pid': 1,
            'name': /(汽车制造|摩托车制造|产品数据|生产数据|物料数据|基本参数)/,
            'children': [
              {
                'id': 7,
                'pid': 6,
                'name': /(汽车制造|摩托车制造|产品数据|生产数据|物料数据|基本参数)/,
                'children': []
              },
              {
                'id': 8,
                'pid': 6,
                'name': /(汽车制造|摩托车制造|产品数据|生产数据|物料数据|基本参数)/,
                'children': []
              }
            ]
          },
          {
            'id': 11,
            'pid': 1,
            'name': /(汽车制造|摩托车制造|产品数据|生产数据|物料数据|基本参数)/,
            'children': [
              {
                'id': 12,
                'pid': 11,
                'name': /(汽车制造|摩托车制造|产品数据|生产数据|物料数据|基本参数)/,
                'children': []
              },
              {
                'id': 13,
                'pid': 11,
                'name': /(汽车制造|摩托车制造|产品数据|生产数据|物料数据|基本参数)/,
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
        'children': [
          {
            'id': 9,
            'pid': 2,
            'name': /(汽车制造|摩托车制造|产品数据|生产数据|物料数据|基本参数)/,
            'children': [
              {
                'id': 10,
                'pid': 9,
                'name': /(汽车制造|摩托车制造|产品数据|生产数据|物料数据|基本参数)/,
                'children': []
              }
            ]
          }
        ]
      }]
    }).data;
    lib.creatJson('/dataPlatform/config-tree', okMsg);
    ctx.body = okMsg;
  }

  @request('post', '/internet/dataPlatform/add')
  @summary('新建接口')
  @tag
  @body({
    name: {type: 'string', require: true},
    description: {type: 'string', require: false},
    config: {type: 'array', require: true},
    mode: {type: 'string', require: true}
  })
  static async add(ctx) {
    okMsg.data = 1;
    lib.creatJson('/dataPlatform/add', okMsg);
    ctx.body = okMsg;
  }

  @request('get', '/internet/dataPlatform/api-item')
  @summary('已申请接口列表')
  @tag
  @query({ page: { type: 'string', required: true }, pageSize: { type: 'string', required: true }})
  static async apiItem(ctx) {
    okMsg.data = Mock.mock({
      'data': {
        'content|0-6': [
          {
            'id': function(){
              return Math.floor(Math.random() * 1000);
            },
            'apiName': /(产品检验信息对接2017-9-13|苹果手机网络评价|汽车网络评价|农耕机网络评价|力帆摩托车网络评价)/
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
    lib.creatJson('/dataPlatform/api-item', okMsg);
    ctx.body = okMsg;
  }

  @request('delete', '/internet/dataPlatform/api-delete/{id}')
  @summary('删除接口')
  @tag
  @path({ id: { type: 'number', required: true }})
  static async apiDelete(ctx) {
    okMsg.data = 1;
    lib.creatJson('/dataPlatform/api-delete', okMsg);
    ctx.body = okMsg;
  }

  @request('get', '/internet/dataPlatform/api-down/{id}')
  @summary('已申请接口下载')
  @tag
  @path({ id: { type: 'string', required: true } })
  static async apiDown(ctx) {
    const { id } = ctx.validatedParams;
    if (id > 0) {
      lib.downfile(ctx);
    } else {
      errMsg.status.message = '请求参数id出错！'
      ctx.body = errMsg;
    }
  }
}
