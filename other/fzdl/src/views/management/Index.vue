<template>
  <div v-show="d_i_c_id && info.parentName">
    <div class="pageheader">
      <h1 class="pagetitle">{{info.parentName}}</h1>
      <span class="pagedesc">{{info.info}}</span>

      <ul class="hornav">
        <li class="current">
          <a href="#basicform">{{info.name}}</a>
        </li>
      </ul>
    </div>
    <!--pageheader-->

    <div class="contentwrapper">
      <div class="subcontent subcontent">
        <div class="col-8">
          <div class="dialog-chose">
            <a href="javascript:void(0)" class="click-chose-01" @click="delAll">
              <i class="icon-delete"></i>批量删除</a>
            <input name="input1" class="smallinput" type="text" placeholder="请输入关键字" v-model="searchKey" v-on:keyup.13="getItem(1)">
          </div>
          <table class="stdtable stdtablecb" cellspacing="0" cellpadding="0" border="0">
            <colgroup>
              <col class="con0" style="width: 4%">
              <col class="con1">
              <col class="con0">
              <col class="con1">
            </colgroup>
            <thead>
              <tr>
                <th class="head0">
                  <input class="checkall" type="checkbox" v-check-all="{all: checkAll, item: list.content}" v-model="checkAll">
                </th>
                <th class="head1">编码</th>
                <th class="head0">名称</th>
                <th class="head1">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr class="" v-for="i in list.content">
                <td align="center">
                  <input class="checkall" type="checkbox" v-model="i.checked">
                </td>
                <td>{{i.codeNum}}</td>
                <td>{{i.codeName}}</td>
                <td>
                  <a href="javascript:void(0)" @click="edit(i)">
                    <i class="icon-txt-pen"></i>
                  </a>
                  <a href="javascript:void(0)" @click="del(i)">
                    <i class="icon-delete"></i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          </br>
          <pagination @changeCodeItem="getItem" :total="list.totalRecord" :pageSize="7" :func="'changeCodeItem'"></pagination>
        </div>
        <div class="col-4 addmb">
          <div class="contenttitle2">
            <h3>新增内容</h3>
          </div>
          <div class="stdform">
            <p>
              <label>名称</label>
              <span class="field">
                <input name="input1" class="smallinput" type="text" v-model="obj.codeName">
              </span>
            </p>
            <p>
              <label>编码</label>
              <span class="field">
                <input name="input1" class="smallinput" type="text" v-model="obj.codeNum">
              </span>
            </p>
            <p class="stdformbutton">
              <button class="submit radius2" @click="save">保存</button>
              <input class="reset radius2" value="取消" type="reset" @click="cancel">
            </p>
          </div>
        </div>

      </div>
      <!--subcontent-->
      <!--subcontent-->
    </div>
    <!--contentwrapper-->
  </div>
  <!-- centercontent -->
</template>

<script>
import _ from 'lodash'
import Pagination from '@/components/Pagination'

export default {
  data () {
    return {
      info: {},
      list: [],
      searchKey: '',
      tableId: '',
      obj: {
        codeName: '',
        codeNum: ''
      },
      checkAll: false
    }
  },
  components: {
    Pagination,
    _
  },
  computed: {
    d_i_c_id () {
      return this.$store.state.d_i_c_id
    }
  },
  methods: {
    init () {
      this.info = {}
      this.list = []
      this.searchKey = ''
      this.tableId = ''
      this.cancel()
    },
    getInfo (id) {
      var self = this
      this.$http.get({ api: 'M_CODE_TABLE_INFO', params: {id} }).then(data => {
        self.info = data
      }, (res) => {
        self.$store.commit('setJalertText', {text: res})
      })
    },
    getItem (o) {
      var self = this
      this.$http.get({ api: 'M_CODE_TABLE', params: {id: this.tableId, pageSize: 7, page: o, keywords: this.searchKey} }).then(data => {
        if (data.content.length > 0) {
          data.content.forEach(o => {
            o.checked = false
          })
        }
        self.list = data
      }, (res) => {
        self.$store.commit('setJalertText', {text: res})
      })
    },
    save () {
      let self = this
      if (this.obj.id) {
        this.$http.put({ api: 'M_CODE_TABLE_EDIT', params: {id: this.obj.id, tableId: this.tableId, codeObj: this.obj} }).then(data => {
          self.$store.commit('setJalertText', {text: '保存成功！'})
          self.cancel()
          self.getItem(1)
        }, (res) => {
          self.$store.commit('setJalertText', {text: res})
        })
      } else {
        this.$http.post({ api: 'M_CODE_TABLE_ADD', params: {tableId: this.tableId, codeObj: this.obj} }).then(data => {
          self.$store.commit('setJalertText', {text: '添加成功！'})
          self.cancel()
          self.$store.commit('setTotal')
          self.getItem(1)
        }, (res) => {
          self.$store.commit('setJalertText', {text: res})
        })
      }
    },
    edit (i) {
      this.obj = _.clone(i)
    },
    del (i) {
      let self = this
      this.$store.commit('setJconfirmText', {
        text: '删除不可恢复，请确认！',
        callback: function () {
          self.$http.delete({ api: 'M_CODE_TABLE_DELETE', params: {tableId: self.tableId, id: i.id} }).then(data => {
            self.getItem(1)
          }, (res) => {
            self.$store.commit('setJalertText', {text: res})
          })
        }
      })
    },
    cancel () {
      this.obj.codeName = ''
      this.obj.codeNum = ''
    },
    delAll () {
      let ids = []
      this.list.content.forEach(o => {
        if (o.checked) {
          ids.push(o.id)
        }
      })
      this.del({id: ids.join()})
    }
  },
  watch: {
    'd_i_c_id' (val, oldVal) {
      this.tableId = val
      this.getInfo(val)
      this.getItem(1)
    }
  }
}
</script>
