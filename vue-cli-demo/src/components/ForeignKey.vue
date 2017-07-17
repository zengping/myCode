<template>
  <div>
  <div class="mmodel01" v-show="show">
    <div class="dialog-chose">
      <a href="javascript:void(0)" class="click-chose-01" @click="changeShow">
        <i class="icon-add"></i>新增</a>
      外键名称：
      <input name="input1" class="smallinput" type="text" v-model="searchKey" v-on:keyup.13="getItem(1)">
    </div>
    <table class="stdtable stdtablecb" cellspacing="0" cellpadding="0" border="0">
      <thead>
        <tr>
          <th>#</th>
          <th v-for="i in item.thead">{{i}}</th>
        </tr>
      </thead>
      <tbody>
        <tr class="" v-for="i in item.content">
          <td align="center">
            <input class="checkall" name="tablecode_radio" type="radio" @change="setCodeNum(i.list[0])" v-model="i.checked">
          </td>
          <td v-for="v in i.list">{{v}}</td>
        </tr>
      </tbody>
    </table>
    </br>
    <pagination @changeKeyItem="getItem" :total="item.totalRecord" :pageSize="7" :func="'changeKeyItem'"></pagination>
    <div class="stdform dialog-btn">
      <p class="stdformbutton">
        <button class="submit radius2" @click="save">保存</button>
        <!--<input type="reset" class="reset radius2" value="取消">-->
      </p>
    </div>
  </div>
  <add-foreign-key v-show="!show" :field="field" @goback="changeShow"></add-foreign-key>
  </div>
</template>

<script>
import _ from 'lodash'
import Pagination from '@/components/Pagination'
import AddForeignKey from '@/components/AddForeignKey'

export default {
  props: ['field', 'aliasName'],
  data () {
    return {
      item: {
        totalRecord: 0
      },
      show: true,
      codeNum: 0,
      searchKey: ''
    }
  },
  components: {
    Pagination,
    AddForeignKey
  },
  computed: {
    boxShow () {
      return this.$store.state.foreignKey.show
    }
  },
  created () {
    this.getItem(1)
  },
  methods: {
    getItem (o) {
      var self = this
      if (!this.boxShow) {
        return
      }
      this.$http.get({ api: 'D_I_FOREIGN_KEY', params: { tableName: this.field, pageSize: 7, page: o, keywords: this.searchKey } }).then(data => {
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
    setCodeNum (i) {
      this.codeNum = i
    },
    save () {
      if (this.field === this.$store.state.foreignKey.field && this.aliasName === 1) {
        this.$emit('changeForeignKey', {field: this.field, code: this.codeNum, alias_name: 1})
      } else {
        this.$store.dispatch('removeTable', {field: this.field, code: this.codeNum, alias_name: this.aliasName})
      }
    },
    changeShow (i) {
      if (i) {
        this.getItem(1)
      }
      this.show = !this.show
    }
  },
  watch: {
    'field' (val, oldVal) {
      this.show = true
      this.getItem(1)
    },
    'boxShow' (val, oldVal) {
      if (val) {
        this.getItem(1)
      }
    }
  }
}
</script>
