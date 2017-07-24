<template>
    <div class="subcontent subcontent">
      <div class="col-12">
      	<div class="dialog-chose">
          <a href="javascript:void(0)" class="fl" @click="changeContent('list')"><i class="icon-reply-all"></i>返回</a>
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
              <th>操作名称</th>
              <th>操作表</th>
              <th>操作表主键值</th>
              <th>操作时间</th>
              <th>查看</th>
            </tr>
          </thead>
          <tbody>
            <tr class="" v-for="i in item.content">
              <td>{{i.name}}</td>
              <td>{{i.tableName}}</td>
              <td>{{i.primaryKey}}</td>
              <td>{{i.time}}</td>
              <td>
                <a href="javascript:void(0)" @click="edit(i)"><i class="icon-txt-pen" v-show="i.primaryKey&&i.name!='删除'"></i></a>
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
import changeContent from '@/mixins/changeContent'
import Pagination from '@/components/Pagination'

export default {
  props: ['tableId', 'show'],
  data () {
    return {
      item: {
        totalRecord: 0
      },
      searchKey: ''
    }
  },
  mixins: [changeContent],
  components: {
    Pagination
  },
  methods: {
    getItem (o) {
      var self = this
      this.$http.get({ api: 'D_I_LOG_LIST', params: {id: this.tableId, pageSize: 5, page: o, keywords: this.searchKey} }).then(data => {
        self.item = data
      }, (res) => {
        self.$store.commit('setJalertText', {text: res})
      })
    },
    edit (i) {
      this.$emit('crudEdit', {name: 'crud', id: i.primaryKey})
    }
  },
  watch: {
    'tableId' (val, oldVal) {
      if (val && this.show === 'log') {
        this.getItem(1)
      }
    },
    'show' (val, oldVal) {
      if (val === 'log' && this.tableId) {
        this.getItem(1)
      }
    }
  }
}
</script>
