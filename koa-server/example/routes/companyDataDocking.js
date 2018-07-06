var Mock = require('mockjs');

import { request, summary, body, tags, middlewares, path, description, okMsg, lib } from '../../lib';

const tag = tags(['数据对接']);

export default class CompanyDataDockingRouter {
  @request('get', '/internet/companyDataDocking/downTool')
  @summary('定制化数据抽取工具下载')
  @tag
  static async downTool(ctx) {
    lib.downfile(ctx);
  }

  @request('get', '/internet/companyDataDocking/downConf')
  @summary('安装配置文档下载')
  @tag
  static async downConf(ctx) {
    lib.downfile(ctx);
  }

  @request('get', '/internet/companyDataDocking/downDataDocking')
  @summary('接口报送下载')
  @tag
  static async downDataDocking(ctx) {
    lib.downfile(ctx);
  }

  @request('get', '/internet/companyDataDocking/downDoc')
  @summary('接口报送说明文档下载')
  @tag
  static async downDoc(ctx) {
    lib.downfile(ctx);
  }
}
