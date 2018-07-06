import { request, query, summary, body, tags, middlewares, path, description, okMsg, lib } from '../../lib';

const tag = tags(['系统']);

export default class SystemRouter {
  @request('get', '/user/menu/getMenu')
  @summary('获取菜单')
  @tag
  @query({
    systemId: {type: 'number', require: true}
  })
  static async getMenu(ctx) {
    okMsg.data = [
      {
        "id": 1,
        "pId": 0,
        "name": "首页",
        "icon": "",
        "url": "index",
        "moduleType": 0,
        "child": []
      },
      {
        "id": 2,
        "pId": 0,
        "name": "互联网情报收集",
        "icon": "",
        "url": "internet",
        "moduleType": 0,
        "child": []
      },
      {
        "id": 3,
        "pId": 0,
        "name": "企业情报收集",
        "icon": "",
        "url": "business-collection",
        "moduleType": 0,
        "child": [{
          "id": 31,
          "pId": 3,
          "name": "数据在线报送",
          "icon": "icon-bd-list",
          "url": "company-submit-online",
          "moduleType": 0,
          "child": []
        },
        {
          "id": 32,
          "pId": 3,
          "name": "数据对接",
          "icon": "icon-archives",
          "url": "company-data-docking",
          "moduleType": 0,
          "child": []
        }
        ]
      },
      {
        "id": 4,
        "pId": 0,
        "name": "数据平台对接",
        "icon": "",
        "url": "data-platform",
        "moduleType": 0,
        "child": []
      },
      {
        "id": 5,
        "pId": 0,
        "name": "留存数据接入",
        "icon": "",
        "url": "held-out",
        "moduleType": 0,
        "child": [{
          "id": 51,
          "pId": 5,
          "name": "缺陷产品数据导入",
          "icon": "icon-bd-list",
          "url": "held-out-defect",
          "moduleType": 0,
          "child": []
        }]
      },
      {
        "id": 6,
        "pId": 0,
        "name": "数据质量管理",
        "icon": "",
        "url": "data-quality-management",
        "moduleType": 0,
        "child": []
      },
      {
        "id": 7,
        "pId": 0,
        "name": "报送配置管理",
        "icon": "",
        "url": "submitted-manage",
        "moduleType": 0,
        "child": [{
          "id": 71,
          "pId": 7,
          "name": "企业信息管理",
          "icon": "icon-bd-list",
          "url": "submit",
          "moduleType": 0,
          "child": []
        }, {
          "id": 72,
          "pId": 7,
          "name": "数据模板管理",
          "icon": "icon-bd-list",
          "url": "submit-model",
          "moduleType": 0,
          "child": []
        }, {
          "id": 73,
          "pId": 7,
          "name": "企业工具上传",
          "icon": "icon-bd-list",
          "url": "submit-tool",
          "moduleType": 0,
          "child": []
        }]
      }
    ];
    lib.creatJson('/system/menu', okMsg);
    ctx.body = okMsg;
  }



  @request('get', '/user/menu/user-info')
  @summary('获取用户信息')
  @tag
  static async userInfo(ctx) {
    okMsg.data = {
      "name": 'admin'
    };
    lib.creatJson('/menu/user-info', okMsg);
    ctx.body = okMsg;
  }

  @request('get', '/auth/system/logout')
  @summary('登出')
  @tag
  static async logout(ctx) {
    okMsg.data = 1;
    lib.creatJson('/system/logout', okMsg);
    ctx.body = okMsg;
  }
}
