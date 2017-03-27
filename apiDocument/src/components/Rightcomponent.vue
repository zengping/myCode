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
                  <td>{{i.name}}</td>
                  <td>{{i.type}}</td>
                  <td>{{i.default}}</td>
                  <td>{{i.rang}}</td>
                  <td>{{i.remark}}</td>
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
                  <td>{{i.name}}</td>
                  <td>{{i.type}}</td>
                  <td>{{i.default}}</td>
                  <td>{{i.rang}}</td>
                  <td>{{i.remark}}</td>
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
            <form id="testForm" name="Login" :method="info.type" :action="apiPath">
              <div class="form-group" v-for="i in info.reqParams">
                <label class="col-sm-3 control-label">{{i.name}}：</label>
                <div class="col-sm-9">
                  <input type="text" class="form-control" :name="i.name" :value="i.default">
                </div>
              </div>
            </form>
            <span class="btn btn-primary testBtn" v-on:click="apiSubmit">提交</span>
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
      testStatus: false
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
        self.apiPath = self.info.api
      }, (res) => {
        self.info = {}
      })
    },
    apiTest () {
      this.testStatus = !this.testStatus
    },
    apiSubmit () {
      let i = this.info.api.indexOf(':')
      let api = ''
      if (i >= 0) {
        let _params = this.info.api.substr(i)
        let _pArr = _params.replace(new RegExp(':', 'g'), '').split('/')
        let _str = ''
        for (let x of _pArr) {
          _str += _str === '' ? this.info.reqDemo[x] : '/' + this.info.reqDemo[x]
        }
        api = this.info.api.substr(0, i) + _str
      } else {
        api = this.info.api
      }
      if (this.apiPath === '') {
        this.apiPath = api
      } else {
        this.apiPath += api
      }
      let testForm = document.querySelector('#testForm')
      testForm.action = this.apiPath
      testForm.submit()
    }
  }
}
</script>
