<template>
  <div v-show="d_i_c_id && info.parentName">
    <div class="pageheader">
      <h1 class="pagetitle">{{info.parentName}}</h1>
      <span class="pagedesc">{{info.info}}</span>

      <ul class="hornav">
        <li class="current">
          <a href="javascript:void(0)">{{info.name}}</a>
        </li>
      </ul>
    </div>
    <!--pageheader-->

    <div class="contentwrapper">

      <list v-show="show == 'list'" :tableId="d_i_c_id" :show="show" @changeContent="changeContent" @crudEdit="crudEdit"></list>
      <crud v-show="show == 'crud'" :tableId="d_i_c_id" :show="show" :dataId="dataId" @changeContent="changeContent"></crud>
      <log v-show="show == 'log'" :tableId="d_i_c_id" :show="show" @changeContent="changeContent" @crudEdit="crudEdit"></log>
      <!--subcontent-->

      <!--subcontent-->

    </div>
    <!--contentwrapper-->

  </div>
</template>

<script>
import list from '@/views/common/datainput/list'
import crud from '@/views/common/datainput/crud'
import log from '@/views/common/datainput/log'

export default {
  data () {
    return {
      show: '',
      info: {},
      dataId: 0
    }
  },
  components: {
    list,
    crud,
    log
  },
  computed: {
    d_i_c_id () {
      return this.$store.state.d_i_c_id
    }
  },
  methods: {
    getInfo (id) {
      var self = this
      this.$http.get({ api: 'D_I_TABLE_INFO', params: {id} }).then(data => {
        self.info = data
        self.show = 'list'
      }, (res) => {
        self.$store.commit('setJalertText', {text: res})
      })
    },
    changeContent (i) {
      this.show = i
      this.dataId = 0
    },
    crudEdit (o) {
      this.show = o.name
      this.dataId = o.id
    }
  },
  watch: {
    'd_i_c_id' (val, oldVal) {
      if (val) {
        this.getInfo(val)
      }
    }
  }
}
</script>
