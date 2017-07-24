<template>
  <!-- mmodel02 -->
  <div class="mmodel02">
    <div class="dialog-chose">
      <a href="javascript:void(0)" class="click-chose-02" @click="goback">
        <i class="icon-reply"></i>返回</a>
    </div>
    <div class="stdform">
      <p v-for="i in fields">
        <label>{{i.fidCname}}</label>
        <span class="field">
          <input v-show="i.type!='img' && i.type!='date'" type="text" name="input1" class="smallinput" v-model="i.value" :readonly="i.type=='button'||i.type=='foreignKey'" @input="checkDataType(i)">
          <datepicker v-model="i.value" v-show="i.type=='date'" :class="'smallinput'" :language="'ch'"></datepicker>
          <a href="javascript:void(0)" class="lookmb btn btn_blue radius50 clickmb" v-show="i.type=='button'" @click="showCodeTable(i)">查看码表</a>
          <a href="javascript:void(0)" class="lookmb btn btn_blue radius50  click-chose-03" v-show="i.type=='foreignKey'" @click="addForeignKey(i)">查看外键表</a>
          <input v-show="i.type=='img'" type="file" name="input1" class="smallinput" @change="uploadImg(i.fidEname)" :id="i.fidEname">
        </span>
        <small class="desc" v-show="i.type=='button'">从码表中选择合适的信息.</small>
        <small class="desc" v-show="i.type=='foreignKey'">从相关表中选择数据.</small>
      </p>
      <button class="submit radius2 save-btn" @click="save">保存</button>
    </div>
  </div>
</template>

<script>
import datepicker from 'vue-date'
import checkDataType from '@/mixins/checkDataType'

export default {
  props: ['field'],
  data () {
    return {
      fields: []
    }
  },
  mixins: [checkDataType],
  components: {
    datepicker
  },
  computed: {
    boxShow () {
      return this.$store.state.foreignKey.show
    },
    activeTable () {
      return this.$store.state.activeTable
    }
  },
  created () {
    this.getField()
  },
  methods: {
    getField () {
      var self = this
      if (!this.boxShow) {
        return
      }
      this.$http.get({ api: 'D_I_FOREIGN_KEY_FIELD', params: { tableName: this.field } }).then(data => {
        self.fields = data
      }, (res) => {
        self.$store.commit('setJalertText', {text: res})
      })
    },
    setCodeNum (i) {
      this.codeNum = i
    },
    save () {
      var self = this
      this.$http.post({ api: 'D_I_FOREIGN_KEY_ADD', params: {fields: this.fields, tableName: this.field} }).then(data => {
        self.$store.commit('setJalertText', {text: '添加成功！'})
        self.$store.commit('setTotal')
        self.goback(1)
      }, (res) => {
        self.$store.commit('setJalertText', {text: res})
      })
    },
    showCodeTable (o) {
      this.$store.commit('showRightAlert', o.tableName)
    },
    addForeignKey (o) {
      let self = this
      this.$store.commit('setTable', {
        field: o.tableName,
        cb: (code, zIndex) => {
          o.value = code
          self.$store.commit('setActiveTable', {name: self.field, zIndex: zIndex})
        }
      })
    },
    goback (i) {
      this.$store.commit('removeTable', {alias_name: (this.activeTable.zIndex + 1)})
      this.$emit('goback', i)
    }
  },
  watch: {
    'field' (val, oldVal) {
      this.getField()
    },
    'codeNum' (val, oldVal) {
      let self = this
      this.fields.forEach(o => {
        if (o.fidEname === self.codeField) {
          o.value = val
        }
      })
    },
    'foreignKey' (val, oldVal) {
      let self = this
      this.fields.forEach(o => {
        if (o.fidEname === self.foreignField) {
          o.value = val
        }
      })
    }
  }
}
</script>

<style>
.save-btn {
  float: right;
  width: 70px;
  margin: 0 45px 30px 0;
}
</style>
