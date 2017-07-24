<template>
    <div class="subcontent subcontent">
      <div class="col-12">
      	<div class="dialog-chose">
          <a href="javascript:void(0)" class="click-chose-01" @click="delAll()"><i class="icon-delete"></i>批量删除</a>
          <a href="javascript:void(0)" class="btn btn_blue" @click="changeContent('crud')">新增</a>
          <a href="javascript:void(0)" class="lookmb btn btn_orange" @click="changeContent('log')">日志</a>
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
              <th class="head0" style="text-align:center"><input class="checkall" type="checkbox" v-check-all="{all: checkAll, item: item.content}" v-model="checkAll"></th>
              <th v-for="i in item.thead">{{i}}</th>
              <th class="head1">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr class="" v-for="i in item.content">
              <td align="center">
                  <input class="checkall" type="checkbox" v-model="i.checked">
              </td>
              <td v-for="v in i.list">{{v}}</td>
              <td>
                <a href="javascript:void(0)" @click="edit(i.list[0])"><i class="icon-txt-pen"></i></a>
                <a href="javascript:void(0)" @click="del({id: i.list[0]})"><i class="icon-delete"></i></a>
              </td>
            </tr>
          </tbody>
        </table>
        </br>
        <pagination @changeItem="getItem" :total="item.totalRecord" :pageSize="5" :func="'changeItem'" :pageLen="5"></pagination>
      </div>
    </div>
</template>

<script>
import _ from 'lodash'
import changeContent from '@/mixins/changeContent'
import Pagination from '@/components/Pagination'

export default {
  props: ['tableId', 'show'],
  data () {
    return {
      item: {
        totalRecord: 0
      },
      searchKey: '',
      checkAll: false
    }
  },
  mixins: [changeContent],
  components: {
    Pagination
  },
  methods: {
    getItem (o) {
      var self = this
      this.$http.get({ api: 'D_I_TABLE_LIST', params: {id: this.tableId, pageSize: 5, page: o, keywords: this.searchKey} }).then(data => {
        if (data.content.length > 0) {
          data.content.forEach((o, i) => {
            let obj = {}
            obj.checked = false
            obj.list = _.clone(o)
            data.content[i] = obj
          })
        }
        self.item = data
      }, (res) => {
        self.$store.commit('setJalertText', {text: res})
      })
    },
    edit (i) {
      this.$emit('crudEdit', {name: 'crud', id: i})
    },
    del (i) {
      let self = this
      this.$store.commit('setJconfirmText', {
        text: '删除不可恢复，请确认！',
        callback: function () {
          self.$http.delete({ api: 'D_I_DATA_DELETE', params: {tableId: self.tableId, id: i.id} }).then(data => {
            self.getItem(1)
          }, (res) => {
            self.$store.commit('setJalertText', {text: res})
          })
        }
      })
    },
    delAll () {
      let ids = []
      this.item.content.forEach(o => {
        if (o.checked) {
          ids.push(o.list[0])
        }
      })
      this.del({id: ids.join()})
    }
  },
  watch: {
    'tableId' (val, oldVal) {
      if (val && this.show === 'list') {
        this.getItem(1)
      }
    },
    'show' (val, oldVal) {
      if (val === 'list' && this.tableId) {
        this.getItem(1)
      }
    }
  }
}
</script>
