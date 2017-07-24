<template>
    <div class="subcontent subcontent">

        <div class="contenttitle2">
          <h3>内容输入</h3>
          <a href="javascript:void(0)" class="btn btn_blue fr" id="dataTempDown" @click="upload()"><i class="icon-upcloud"></i>导入</a>
          <a href="javascript:void(0)" class="btn btn_orange fr" @click="download()"><i class="icon-downcloud"></i>导出</a>
          <a href="javascript:void(0)" class="fr" @click="changeContent('list')"><i class="icon-reply-all"></i>返回</a>
        </div>
        <!--contenttitle-->

        <div class="stdform" v-show="info.length > 0">

          <p v-for="i in info">
            <label>{{i.fidCname}}</label>
            <span class="field">
              <input v-show="i.type!='img' && i.type!='date'" type="text" name="input1" class="smallinput" v-model="i.value" :readonly="i.type=='button'||i.type=='foreignKey' || i.fidEname=='id'" @input="checkDataType(i)">
              <datepicker v-model="i.value" v-show="i.type=='date'" :class="'smallinput'" :language="'ch'"></datepicker>
              <a href="javascript:void(0)" class="lookmb btn btn_blue radius50 clickmb" v-show="i.type=='button'" @click="showCodeTable(i)">查看码表</a>
              <a href="javascript:void(0)" class="lookmb btn btn_blue radius50 clickmb" v-show="i.type=='foreignKey'" @click="showForeignKey(i)">查看外键表</a>
              <input v-show="i.type=='img'" type="file" name="input1" class="smallinput" @change="uploadImg(i.fidEname)" :id="i.fidEname">
            </span>
            <small class="desc" v-show="i.type=='button'">从码表中选择合适的信息.</small>
            <small class="desc" v-show="i.type=='foreignKey'">从相关表中选择数据.</small>
          </p>

          <br clear="all">
          <br>

          <p class="stdformbutton">
            <button class="submit radius2" @click="save">保存</button>
            <input type="reset" class="reset radius2" value="取消" @click="cancel">
          </p>

        </div>

        <!-- 右侧弹出码表 -->
        <right-alert></right-alert>

        <!-- 弹出层 -->
        <center-alert></center-alert>

    </div>
</template>

<script>
import datepicker from 'vue-date'
import checkDataType from '@/mixins/checkDataType'
import changeContent from '@/mixins/changeContent'
import RightAlert from '@/components/RightAlert'
import CenterAlert from '@/components/CenterAlert'

export default {
  props: ['tableId', 'show', 'dataId'],
  data () {
    return {
      info: [],
      codeField: '',
      foreignField: ''
    }
  },
  mixins: [checkDataType, changeContent],
  components: {
    datepicker,
    RightAlert,
    CenterAlert
  },
  computed: {
    codeNum () {
      return this.$store.state.codeTable.code
    },
    foreignKey () {
      return this.$store.state.foreignKey.code
    }
  },
  methods: {
    init () {
      this.info = {}
      this.codeField = ''
      this.foreignField = ''
    },
    getInfo (id) {
      var self = this
      this.$http.get({ api: 'D_I_FIELDS_LIST', params: {id} }).then(data => {
        self.info = data
      }, (res) => {
        self.$store.commit('setJalertText', {text: res})
      })
    },
    getData (id) {
      var self = this
      this.$http.get({ api: 'D_I_DATA_EDIT', params: {id: id, tableId: this.tableId} }).then(data => {
        self.info = data
      }, (res) => {
        self.$store.commit('setJalertText', {text: res})
      })
    },
    showCodeTable (o) {
      this.codeField = o.fidEname
      this.$store.commit('showRightAlert', o.tableName)
    },
    showForeignKey (o) {
      this.foreignField = o.fidEname
      this.$store.commit('showCenterAlert', o.tableName)
    },
    save () {
      var self = this
      if (this.dataId > 0) {
        this.update()
        return
      }
      this.$http.post({ api: 'D_I_FOREIGN_KEY_ADD', params: {tableId: this.tableId, data: this.info} }).then(data => {
        self.$store.commit('setJalertText', {text: '添加成功！'})
        self.$store.commit('setTotal')
      }, (res) => {
        self.$store.commit('setJalertText', {text: res})
      })
    },
    update () {
      var self = this
      this.$http.put({ api: 'D_I_DATA_UPDATE', params: {id: this.dataId, tableId: this.tableId, data: this.info} }).then(data => {
        self.$store.commit('setJalertText', {text: '更新成功！'})
      }, (res) => {
        self.$store.commit('setJalertText', {text: res})
      })
    },
    cancel () {
      this.getInfo(this.tableId)
    },
    download () {
      // var self = this
      // this.$http.get({ api: 'D_I_DATA_EXPORT', params: {tableId: this.tableId, data: this.info} }).then(data => {
      //   self.$store.commit('setJalertText', {text: '导出成功！'})
      // }, (res) => {
      //   self.$store.commit('setJalertText', {text: res})
      // })
      this.$lib.formSubmit({url: 'D_I_DATA_EXPORT', params: {tableId: this.tableId, data: this.info}})
    },
    upload () {
      let self = this
      let input = document.querySelector('#dataTempDown')
      var fileinput = this.$lib.createFile.apply(input)
      fileinput.addEventListener('change', () => {
        self.$lib.upload.apply(fileinput,
          [{
            api: 'D_I_DATA_IMPORT',
            params: {tableId: self.tableId}
          }]
        ).then(data => {
          self.info = data
          fileinput.value = ''
          self.$store.commit('setJalertText', {text: '导入成功！'})
        }, (res) => {
          fileinput.value = ''
          self.$store.commit('setJalertText', {text: res})
        })
      }, false)
    }
  },
  watch: {
    'tableId' (val, oldVal) {
      if (val && this.show === 'crud' && this.dataId === 0) {
        this.getInfo(val)
      }
    },
    'show' (val, oldVal) {
      if (val === 'crud' && this.tableId && this.dataId === 0) {
        this.getInfo(this.tableId)
      }
    },
    'dataId' (val, oldVal) {
      if (val && this.show === 'crud') {
        this.getData(val)
      }
    },
    'codeNum' (val, oldVal) {
      if (val) {
        let self = this
        this.info.forEach(o => {
          if (o.fidEname === self.codeField) {
            o.value = val
          }
        })
      }
    },
    'foreignKey' (val, oldVal) {
      if (val) {
        let self = this
        this.info.forEach(o => {
          if (o.fidEname === self.foreignField) {
            o.value = val
          }
        })
      }
    }
  }
}
</script>
