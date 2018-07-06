var Mock = require('mockjs');

import { request, summary, body, tags, middlewares, path, description, okMsg, lib, query } from '../../lib';

const tag = tags(['数据上报']);

export default class DataPlatformUploadRouter {
  @request('get', '/internet/dataPlatformUpload/item')
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
    lib.creatJson('/dataPlatformUpload/item', okMsg);
    ctx.body = okMsg;
  }
}
