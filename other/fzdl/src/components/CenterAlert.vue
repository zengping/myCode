<template>
  <div class="dialog dialog-lg" v-show="show">
    <div class="dialog-win">
      <div class="dialog-head">{{activeTable.name}}外键表
        <a class="close" href="javascript:void(0)" @click="closeAlert">
          <i class="icon-close"></i>
        </a>
      </div>
      <div class="dialog-body">
        <div class="tabchose">
          <div class="tabslide">
            <a href="javascript:void(0)" @click="moveLeft()"><i class="icon-chevron-left"></i></a>
            <a href="javascript:void(0)" @click="moveRight()"><i class="icon-chevron-right"></i></a>
          </div>
          <div class="tablist">
            <ul id="foreignUl">
              <li class="tabchose01" v-for="(i, index) in tableItem" :class="{'active': i.field == activeTable.name && i.alias_name == activeTable.zIndex}" @click="setActive(i)">
                <em>{{index + 1}}.</em>表{{i.field}}
                <i class="icon-close" @click.stop="closeTable(i)"></i>
              </li>
            </ul>
          </div>
        </div>

        <!-- mmodel01 -->
        <template v-for="i in tableItem">
          <foreign-key :field="i.field" :aliasName="i.alias_name" @changeForeignKey="save" v-show="i.field == activeTable.name && i.alias_name == activeTable.zIndex"></foreign-key>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import ForeignKey from '@/components/ForeignKey'

export default {
  data () {
    return {
      item: {
        totalRecord: 0
      },
      field: ''
    }
  },
  components: {
    ForeignKey
  },
  computed: {
    show () {
      this.field = this.$store.state.foreignKey.field
      return this.$store.state.foreignKey.show
    },
    activeTable () {
      return this.$store.state.activeTable
    },
    tableItem () {
      return this.$store.state.tableItem
    }
  },
  methods: {
    save (o) {
      if (o.field === this.field) {
        this.$store.commit('setForeignKey', o.code)
        this.hideAlert()
      } else {
        this.$store.dispatch('removeTable', {field: o.field, alias_name: o.alias_name})
      }
    },
    hideAlert () {
      this.$store.commit('hideCenterAlert')
    },
    closeAlert () {
      this.$store.commit('closeCenterAlert')
    },
    closeTable (i) {
      this.$store.dispatch('removeTable', i)
    },
    setActive (i) {
      this.$store.commit('setActiveTable', {name: i.field, zIndex: i.alias_name})
    },
    setUl () {
      let l = this.tableItem.length * 130
      let el = document.querySelector('#foreignUl')
      el.style.width = l + 'px'
    },
    moveLeft () {
      let el = document.querySelector('#foreignUl')
      let marginLeft = -parseInt(el.style.marginLeft)
      marginLeft = marginLeft || 0
      if (marginLeft === 0) {
        return
      }
      el.style.marginLeft = '-' + (marginLeft - 130) + 'px'
    },
    moveRight () {
      let el = document.querySelector('#foreignUl')
      let width = parseInt(el.style.width)
      let marginLeft = -parseInt(el.style.marginLeft)
      marginLeft = marginLeft || 0
      if (marginLeft >= width) {
        return
      }
      el.style.marginLeft = '-' + (marginLeft + 130) + 'px'
    }
  },
  watch: {
    'show' (val, oldVal) {
      this.$store.commit('setTable', {field: this.field})
    },
    'activeTable' (val, oldVal) {
      this.setUl()
    }
  }
}
</script>

<style>
#foreignUl li {
  width: 100px;
  overflow: hidden;
}
</style>
