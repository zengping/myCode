var Mock = require('mockjs');

import { request, summary, body, tags, middlewares, path, description, okMsg, lib, query } from '../../lib';

const tag = tags(['数据质量管理']);

export default class DataQualityManagementRouter {
  @request('get', '/internet/dataQualityManagement/count')
  @summary('数据质量统计')
  @tag
  static async count(ctx) {
    okMsg.data = Mock.mock({
      'data|1-10': {
        'dataPercent': function(){
          return Math.floor(Math.random() * 100) + '%';
        },
        'dataCount': function(){
          return Math.floor(Math.random() * 10000000);
        },
        'dataReport': function(){
          return Math.floor(Math.random() * 10000000);
        },
        'dirtyDataPercent': function(){
          return Math.floor(Math.random() * 100) + '%';
        }
      }
    }).data;
    lib.creatJson('/dataQualityManagement/count', okMsg);
    ctx.body = okMsg;
  }

  @request('get', '/internet/dataQualityManagement/data-source')
  @summary('数据来源质量')
  @tag
  static async dataSource(ctx) {
    okMsg.data = Mock.mock({
      'data|1-5': [
        {
          'value': /(212|58|132|47|15)/,
          'name': /(互联网信息|企业在线上报数据|企业对接数据|执法系统对接数据|数据平台对接数据)/
        }
      ]
    }).data;
    lib.creatJson('/dataQualityManagement/data-source', okMsg);
    ctx.body = okMsg;
  }

  @request('get', '/internet/dataQualityManagement/item')
  @summary('整体数据质量评估')
  @tag
  static async item(ctx) {
    okMsg.data = Mock.mock({
      'data': [
        {
          'value': /(212|58|132|47|15)/,
          'name': '今日新增'
        },
        {
          'value': /(432|347|464|586|731)/,
          'name': '全部'
        }
      ]
    }).data;
    lib.creatJson('/dataQualityManagement/item', okMsg);
    ctx.body = okMsg;
  }

  @request('get', '/internet/dataQualityManagement/reportItem')
  @summary('数据报送情况')
  @tag
  static async reportItem(ctx) {
    okMsg.data = Mock.mock({
      'data': [
        {
          'name': '互联网情报',
          'data|7': [/(120|132|101|134|90|230|210)/]
        },
        {
          'name': '企业情报',
          'data|7': [/(220|182|191|234|290|330|310)/]
        }
      ]
    }).data;
    lib.creatJson('/dataQualityManagement/reportItem', okMsg);
    ctx.body = okMsg;
  }

  @request('get', '/internet/dataQualityManagement/statistics')
  @summary('数据统计')
  @tag
  static async statistics(ctx) {
    okMsg.data = Mock.mock({
      'data': [
        {
          'name': '接入量',
          'data|6': [/(200|300|350|400|600|560)/]
        },
        {
          'name': '导出量',
          'data|6': [/(150|280|320|360|550|500)/]
        }
      ]
    }).data;
    lib.creatJson('/dataQualityManagement/statistics', okMsg);
    ctx.body = okMsg;
  }

  @request('get', '/internet/dataQualityManagement/quality-assessment')
  @summary('数据统计')
  @tag
  static async qualityAssessment(ctx) {
    okMsg.data = Mock.mock({
      'data|0-8': [
        {
          'id': Math.floor(Math.random() * 1000),
          'source': /(互联网信息|企业情报|企业对接数据|执法系统对接数据|数据平台对接数据|企业在线上报数据)/,
          'dataQuality': Math.floor(Math.random() * 100) + '%',
          'insertData': Math.floor(Math.random() * 1000000),
          'scheduledReceipt': Math.floor(Math.random() * 100),
          'repeatData': Math.floor(Math.random() * 100),
          'lackData': Math.floor(Math.random() * 100),
        }
      ]
    }).data;
    lib.creatJson('/dataQualityManagement/quality-assessment', okMsg);
    ctx.body = okMsg;
  }

  @request('get', '/internet/dataQualityManagement/report-situation')
  @summary('数据上报情况')
  @tag
  @query({ page: { type: 'string', required: true }, pageSize: { type: 'string', required: true }})
  static async reportSituation(ctx) {
    okMsg.data = Mock.mock({
      'data': {
        'content|0-6': [
          {
            'id': function(){
              return Math.floor(Math.random() * 1000);
            },
            'companyName': /(嘉陵摩托|长安福特|惠普)/,
            'address': /(渝中|两江新区|江北)/,
            'industryName': /(摩托车制造|汽车制造|电子产品制造)/,
            'dataQuality': Math.floor(Math.random() * 100) + '%',
            'situation|12': [/(0|1|2)/]
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
    lib.creatJson('/dataQualityManagement/report-situation', okMsg);
    ctx.body = okMsg;
  }

  @request('get', '/internet/dataQualityManagement/statistics')
  @summary('数据统计')
  @tag
  @query({ page: { type: 'string', required: true }, pageSize: { type: 'string', required: true }})
  static async statistics(ctx) {
    okMsg.data = Mock.mock({
      'data': {
        'content|0-6': [
          {
            'id': function(){
              return Math.floor(Math.random() * 1000);
            },
            'companyName': /(嘉陵摩托|长安福特|惠普)/,
            'address': /(渝中|两江新区|江北)/,
            'industryName': /(摩托车制造|汽车制造|电子产品制造)/,
            'dataQuality': Math.floor(Math.random() * 100) + '%',
            'situation|12': [/(0|1|2)/]
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
    lib.creatJson('/dataQualityManagement/statistics', okMsg);
    ctx.body = okMsg;
  }

  @request('get', '/internet/dataQualityManagement/quality-statistics')
  @summary('数据质量统计')
  @tag
  @query({ page: { type: 'string', required: true }, pageSize: { type: 'string', required: true }})
  static async qualityStatistics(ctx) {
    okMsg.data = Mock.mock({
      'data': {
        'content|0-6': [
          {
            'id': function(){
              return Math.floor(Math.random() * 1000);
            },
            'companyName': /(嘉陵摩托|长安福特|惠普)/,
            'address': /(渝中|两江新区|江北)/,
            'industryName': /(摩托车制造|汽车制造|电子产品制造)/,
            'dataQuality': Math.floor(Math.random() * 100) + '%',
            'situation|12': [/(0|1|2)/]
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
    lib.creatJson('/dataQualityManagement/quality-statistics', okMsg);
    ctx.body = okMsg;
  }
}
