<template>
  <div class="app">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="navbar navbar-inverse navbar-fixed-top">
          </div>
        </div>
      </div>
    </div>

    <div class="container">
          <h3>接口文档</h3>
          <div class="table-responsive">
          <table class="table table-bordered">
            <tbody>
            <tr>
              <td v-for="i in root"><router-link :to="i.apiJSON">{{i.name}}</router-link></td>
            </tr>
            </tbody>
          </table>
          </div>
      </div>

    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <ul class="list-group">
            <li class="list-group-item active">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Morbi leo risus</li>
            <li class="list-group-item">Porta ac consectetur ac</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>
        <div class="col-lg-9">
          <div class="page-header">
            <h2>
                列表接口
            </h2>
            <h5>作者：zengping，版本：1.0.0</h5>
          </div>
          <div class="table-responsive">
          <table class="table table-bordered">
            <thead>
            <tr>
                <th>地址</th>
                <th>请求方式</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                /api/user
                </td>
                <td>POST</td>
            </tr>
            <tr>
                <td colspan="2">
                    <pre>
                        sdf
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
              <tr>
                <td>12</td>
                <td>12</td>
                <td>12</td>
                <td>12</td>
                <td>12</td>
              </tr>
              <tr>
                <td>12</td>
                <td>12</td>
                <td>12</td>
                <td>12</td>
                <td>12</td>
              </tr>
              <tr>
                <td>12</td>
                <td>12</td>
                <td>12</td>
                <td>12</td>
                <td>12</td>
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
              <tr>
                <td>12</td>
                <td>12</td>
                <td>12</td>
                <td>12</td>
                <td>12</td>
              </tr>
              <tr>
                <td>12</td>
                <td>12</td>
                <td>12</td>
                <td>12</td>
                <td>12</td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      root: []
    }
  },
  created () {
    this.getRoot()
  },
  methods: {
    getRoot () {
      let self = this
      this.$http.get({api: 'root_api', params: {}}).then((res) => {
        self.root = res.data
      }, (res) => {
        // error callback
      })
    }
  }
}
</script>

<style>
.container {
  margin-top: 20px;
}
.table-bordered {
  border-radius: 4px;
}
li {
  width: 100%;
}
</style>
