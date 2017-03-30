<style lang="">
  h5 > span {
    float: right;
  }
  .testBtn {
    float: left;
    display: block;
    width: 100%;
    margin: 50px auto;
  }
  .form-group {
    display: block;
    height: 40px;
  }
</style>
<template>
  <div class="right" v-if="info.name">
      <div class="col-lg-9">
          <div class="page-header">
            <h2>
                {{info.name}}
            </h2>
            <h5>作者：{{info.author}}，版本：{{info.version}} <span class="btn btn-default" v-on:click="apiTest">API测试</span></h5>
          </div>
          <div id="apiInfomation" v-show="!testStatus">
            <div class="table-responsive">
            <table class="table table-bordered">
              <thead>
              <tr>
                  <th>API</th>
                  <th>地址</th>
                  <th>请求方式</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                  <td>
                  {{info.var}}
                  </td>
                  <td>
                  {{info.api}}
                  </td>
                  <td>{{info.type}}</td>
              </tr>
              <tr>
                  <td colspan="3">
                      <pre>
                          {{info.remark}}
                      </pre>
                  </td>
              </tr>
              </tbody>
            </table>
            </div>
            <p>
                请求参数
            </p>
            <div class="table-responsive">
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                    <th>参数</th>
                    <th>类型</th>
                    <th>默认</th>
                    <th>范围</th>
                    <th>说明</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="i in info.reqParams">
                  <template v-if="i.type == 'list' || i.type == 'object'">
                    <td>{{i.name}}</td>
                    <td>{{i.type}}</td>
                    <td colspan="3" v-html="renderTable(i.list)"></td>
                  </template>
                  <template v-else>
                    <td>{{i.name}}</td>
                    <td>{{i.type}}</td>
                    <td>{{i.default}}</td>
                    <td>{{i.rang}}</td>
                    <td>{{i.remark}}</td>
                  </template>
                </tr>
                <tr>
                    <td colspan="5">
                        <pre>{{info.reqDemo}}</pre>
                    </td>
                </tr>
              </tbody>
            </table>
            </div>
            <p>
                返回说明
            </p>
            <div class="table-responsive">
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                    <th>参数</th>
                    <th>类型</th>
                    <th>默认</th>
                    <th>范围</th>
                    <th>说明</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="i in info.resFields">
                  <template v-if="i.type == 'list' || i.type == 'object'">
                    <td>{{i.name}}</td>
                    <td>{{i.type}}</td>
                    <td colspan="3" v-html="renderTable(i.list)"></td>
                  </template>
                  <template v-else>
                    <td>{{i.name}}</td>
                    <td>{{i.type}}</td>
                    <td>{{i.default}}</td>
                    <td>{{i.rang}}</td>
                    <td>{{i.remark}}</td>
                  </template>
                </tr>
                <tr>
                    <td colspan="5">
                      成功：
                        <pre>{{info.resDemo.succ}}</pre>
                      失败：
                        <pre>{{info.resDemo.err}}</pre>
                    </td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
          <div v-show="testStatus">
            <div class="form-group">
                <label class="col-sm-3 control-label">API PATH：</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" v-model="apiPath">
                </div>
              </div>
            <form id="testForm" name="Login" :method="info.type" :action="apiPath" enctype="multipart/form-data">
              <template v-if="info.type == 'get'">
                  <div class="form-group" v-for="i in info.reqParams">
                    <label class="col-sm-3 control-label">{{i.name}}：</label>
                    <div class="col-sm-9">
                      <input type="text" class="form-control" :name="i.name" :value="i.default" v-model="info.reqDemo[i.name]">
                    </div>
                  </div>
              </template>
              <template v-else>
                  <div class="form-group">
                    <label class="col-sm-3 control-label">Post Object：</label>
                    <div class="col-sm-9">
                      <textarea class="form-control" rows="10" v-model="info.reqDemo"></textarea>
                    </div>
                  </div>
              </template>
              <input type="hidden" name="t" :value="(new Date()).getTime()">
            </form>
            <span class="btn btn-primary testBtn" v-on:click="apiSubmit">提交</span>
            
            <div class="form-group">
               结果：
                  <pre>{{result}}</pre>
            </div>
          </div>
        </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      info: {},
      apiPath: '',
      testStatus: false,
      result: null
    }
  },
  computed: {
    leftApi () {
      return this.$store.state.leftApi
    },
    rightApi () {
      return this.$store.state.rightApi
    }
  },
  watch: {
    rightApi (val, oldVal) {
      this.result = null
      this.getList()
    }
  },
  methods: {
    getList () {
      if (!this.rightApi.apiJSON) {
        this.info = {}
        return
      }
      let self = this
      let api = './static/apiJSON/' + this.$route.params.second + '/' + this.leftApi.apiJSON + '/' + this.rightApi.apiJSON
      this.$http.get({api: api, params: {}}).then((res) => {
        self.info = res.data
        self.apiPath = self.getApiPath(self.info.api)
      }, (res) => {
        self.info = {}
      })
    },
    apiTest () {
      this.testStatus = !this.testStatus
    },
    getApiPath (path) {
      let i = path.indexOf(':')
      let api = ''
      if (i >= 0) {
        let _params = path.substr(i)
        let _pArr = _params.replace(new RegExp(':', 'g'), '').split('/')
        let _str = ''
        for (let x of _pArr) {
          _str += _str === '' ? this.info.reqDemo[x] : '/' + this.info.reqDemo[x]
        }
        api = path.substr(0, i) + _str
      } else {
        api = path
      }
      return api + '?t=' + (new Date()).getTime()
    },
    apiSubmit () {
      this.getResult()
    },
    getResult () {
      let self = this
      let api = this.apiPath
      let params = this.info.reqDemo
      this.$http[this.info.type]({api: api, params: params}).then((res) => {
        self.result = res
      }, (res) => {
        self.result = res
      })
    },
    typeCheck (list) {
      let html = ''
      for (let i of list) {
        if (i.type === 'list' || i.type === 'object') {
          html += `
            <tr>
              <td>${i.name}</td>
              <td>${i.type}</td>
              <td colspan="3">${this.renderTable(i.list)}</td>
            </tr>
          `
        } else {
          html += `
            <tr>
              <td>${i.name}</td>
              <td>${i.type}</td>
              <td>${i.default}</td>
              <td>${i.rang}</td>
              <td>${i.remark}</td>
            </tr>
          `
        }
      }
      return html
    },
    renderTable (list) {
      return `
        <table class="table table-bordered table-striped">
          <thead>
            <tr>
                <th>参数</th>
                <th>类型</th>
                <th>默认</th>
                <th>范围</th>
                <th>说明</th>
            </tr>
          </thead>
          <tbody>
            ${this.typeCheck(list)}
          </tbody>
        </table>
      `
    }
  }
}
</script>
