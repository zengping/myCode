var Mock = require('mockjs');

import { request, summary, body, tags, middlewares, path, description, okMsg, lib, query } from '../../lib';

const tag = tags(['互联网情报收集']);

export default class InternetRouter {
  @request('get', '/internet/internet/total-amt')
  @summary('采集总量')
  @tag
  static async totalAmt(ctx) {
    okMsg.data = Mock.mock({
      'data': Math.floor(Math.random() * 10000000)
    }).data;
    lib.creatJson('/internet/total-amt', okMsg);
    ctx.body = okMsg;
  }

  @request('get', '/internet/internet/today-amt')
  @summary('今日新增数量')
  @tag
  static async todayAmt(ctx) {
    okMsg.data = Mock.mock({
      'data': Math.floor(Math.random() * 10000)
    }).data;
    lib.creatJson('/internet/today-amt', okMsg);
    ctx.body = okMsg;
  }

  @request('get', '/internet/internet/total-amt-trend')
  @summary('数据量变化趋势')
  @tag
  static async totalAmtTrend(ctx) {
    okMsg.data = Mock.mock({
      'data': [
        {
          'xdata': '10-2',
          'ydata': function(){
            return Math.floor(Math.random() * 1000);
          }
        },
        {
          'xdata': '10-3',
          'ydata': function(){
            return Math.floor(Math.random() * 1000);
          }
        },
        {
          'xdata': '10-4',
          'ydata': function(){
            return Math.floor(Math.random() * 1000);
          }
        },
        {
          'xdata': '10-5',
          'ydata': function(){
            return Math.floor(Math.random() * 1000);
          }
        },
        {
          'xdata': '10-6',
          'ydata': function(){
            return Math.floor(Math.random() * 1000);
          }
        },
        {
          'xdata': '10-7',
          'ydata': function(){
            return Math.floor(Math.random() * 1000);
          }
        }
      ]
    }).data;
    lib.creatJson('/internet/total-amt-trend', okMsg);
    ctx.body = okMsg;
  }

  @request('get', '/internet/internet/tasks')
  @summary('任务列表')
  @tag
  @query({ page: { type: 'string', required: true }, pageSize: { type: 'string', required: true }, type: { type: 'string', required: false }, keywords: { type: 'string', required: false } })
  static async tasks(ctx) {
    okMsg.data = Mock.mock({
      'data': {
        'content|0-5': [
          {
            'id': function(){
              return Math.floor(Math.random() * 1000);
            },
            'taskName': /(苹果手机网络评价|汽车网络评价|农耕机网络评价|力帆摩托车网络评价)/,
            'createTime': /(2017-9-13|2017-9-14|2017-9-15)/,
            'status': /(0|1)/,
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
    lib.creatJson('/internet/tasks', okMsg);
    ctx.body = okMsg;
  }

  @request('get', '/internet/internet/task/{id}')
  @summary('任务详情')
  @tag
  @path({ id: { type: 'string', required: true } })
  static async task(ctx) {
    okMsg.data = Mock.mock({
      'data': {
        'id': function(){
          return Math.floor(Math.random() * 1000)
        },
        'taskName': /(苹果手机网络评价|汽车网络评价|农耕机网络评价|力帆摩托车网络评价)/,
        'context': /(网页|视频|图片)/,
        'type': /(1|2)/,
        'source': /(汽车之家|瓜子二手车|京东)/,
        'keyword': /(汽车|质量|差评)/,
        'description': /(暂无|数据抓取，用于互联网倾向分析)/
      }
    }).data;
    lib.creatJson('/internet/task', okMsg);
    ctx.body = okMsg;
  }

  @request('get', '/internet/internet/taskStatistics/{id}')
  @summary('采集统计')
  @tag
  @path({ id: { type: 'string', required: true } })
  static async taskStatistics(ctx) {
    okMsg.data = Mock.mock({
      'data': {
        'timeLong': function(){
          return Math.floor(Math.random() * 1000)
        },
        'count': function(){
          return Math.floor(Math.random() * 10000000)
        },
        'trend|5-8': [
          {
            'left': /(10-2|10-3|10-4|10-5|10-6|10-7)/,
            'right': function(){
              return Math.floor(Math.random() * 1000);
            }
          }
        ]
      }
    }).data;
    lib.creatJson('/internet/taskStatistics', okMsg);
    ctx.body = okMsg;
  }

  @request('get', '/internet/internet/taskLog/{id}')
  @summary('采集记录')
  @tag
  @path({ id: { type: 'string', required: true } })
  static async taskLog(ctx) {
    okMsg.data = Mock.mock({
      'data|0-20': [{
        'id': function(){
          return Math.floor(Math.random() * 1000)
        },
        'createTime': /(2017-9-13|2017-9-14|2017-9-15)/,
        'timeLong': /(45s|23s|78s|15s)/,
        'accessAmount': /(324条|667条|66条|133条|665条)/
      }]
    }).data;
    lib.creatJson('/internet/taskLog', okMsg);
    ctx.body = okMsg;
  }
}
