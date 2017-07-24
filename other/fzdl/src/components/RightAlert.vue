<template>
  <div class="rightslide" v-show="show">
    <a href="javascript:void(0)" class="rightslideclose" @click="closeAlert">
      <i class="icon-close"></i>
    </a>
    <div class="contenttitle2">
      <h3>{{field}}码表</h3>
    </div>
    <div class="chatsearch">
      <input name="" placeholder="Search" type="text" v-model="searchKey" v-on:keyup.13="getItem(1)">
    </div>
    <table class="stdtable stdtablecb" cellspacing="0" cellpadding="0" border="0">
      <colgroup>
        <col class="con0" style="width: 4%">
        <col class="con1">
        <col class="con0">
      </colgroup>
      <thead>
        <tr>
          <th class="head0">#</th>
          <th class="head1">编码</th>
          <th class="head0">名称</th>
        </tr>
      </thead>
      <tbody>
        <tr class="" v-for="i in item.content">
          <td align="center">
            <input class="checkall" type="checkbox" @change="setCodeNum(i.codeNum)" v-model="i.checked">
          </td>
          <td>{{i.codeNum}}</td>
          <td>{{i.codeName}}</td>
        </tr>
      </tbody>
    </table>
    </br>
    <pagination @changeCodeItem="getItem" :total="item.totalRecord" :pageSize="5" :func="'changeCodeItem'" :pageLen="5"></pagination>
    <div class="stdform dialog-btn">
      <p class="stdformbutton">
        <button class="submit radius2" @click="save">保存</button>
      </p>
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'

export default {
  data () {
    return {
      item: {
        totalRecord: 0
      },
      field: '',
      codeNum: 0,
      searchKey: ''
    }
  },
  components: {
    Pagination
  },
  computed: {
    show () {
      if (this.$store.state.codeTable.show) {
        this.field = this.$store.state.codeTable.field
        this.getItem(1)
      }
      return this.$store.state.codeTable.show
    }
  },
  methods: {
    getItem (o) {
      var self = this
      this.$http.get({ api: 'D_I_CODE_TABLE', params: {tableName: this.field, pageSize: 5, page: o, keywords: this.searchKey} }).then(data => {
        if (data.content.length > 0) {
          data.content.forEach(o => {
            o.checked = false
          })
        }
        self.item = data
      }, (res) => {
        self.$store.commit('setJalertText', {text: res})
      })
    },
    setCodeNum (i) {
      this.item.content.forEach(o => {
        if (i === o.codeNum) {
          o.checked = true
        } else {
          o.checked = false
        }
      })
      this.codeNum = i
    },
    save () {
      this.$store.commit('setCodeTable', this.codeNum)
      this.hideAlert()
    },
    hideAlert () {
      this.$store.commit('hideRightAlert')
    },
    closeAlert () {
      this.$store.commit('closeRightAlert')
    }
  }
}
</script>

<style>
.dialog-btn {width: 30%;border-top:0px; position: relative; margin-top: -10px;}
</style>
