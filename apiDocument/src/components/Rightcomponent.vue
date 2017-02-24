<template>
  <div class="right" v-if="info.name">
      <div class="col-lg-9">
          <div class="page-header">
            <h2>
                {{info.name}}
            </h2>
            <h5>作者：{{info.author}}，版本：{{info.version}}</h5>
          </div>
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
  </div>
</template>

<script>
export default {
  data () {
    return {
      info: {}
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
      }, (res) => {
        self.info = {}
      })
    }
  }
}
</script>
