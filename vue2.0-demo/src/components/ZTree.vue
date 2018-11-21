<template>
  <ul class="ztree">
    <li v-for="(i, index) in item" :key="i.id" :id="'role_'+i.id" :class="'level'+level" tabindex="0" hidefocus="true" treenode="">
      <span :id="'role_'+i.id+'_switch'" title="" class="button switch" treenode_switch="" :class="getSwitchClass(i, index)" @click.stop="switchTree(i)"></span>
      <a :id="'role_'+i.id+'_a'" class="level0" treenode_a="" onclick="" target="_blank" style="" title="汽车制造">
        <span :id="'role_'+i.id+'_ico'" title="" treenode_ico="" class="button" style="" :class="getIcoClass(i)"></span>
        <span :id="'role_'+i.id+'_span'" class="node_name">汽车制造</span>
      </a>
      <z-tree v-show="i.open&&i.children.length>0" :id="'role_'+i.id+'_ul'" :class="{'line':index!=(item.length-1)}" :item="i.children" :level="level+1" @selectedCode="selected" @saveCode="saveCode"/>
    </li>
  </ul>
</template>

<script>
import ZTree from '@/components/ZTree'
export default {
  name: 'ZTree',
  props: {
    item: {
      type: Array
    },
    level: {
      type: Number
    }
  },
  data () {
    return {
      selectedObj: {}
    }
  },
  components: {
    ZTree
  },
  methods: {
    switchTree (o) {
      o.open = !o.open
    },
    selected (o) {
      if (o.children.length > 0) {
        return
      }
      this.selectedObj = o
      this.$emit('selectedCode', o)
    },
    saveCode (o) {
      if (this.$lib.isEmptyObject(this.selectedObj)) {
        this.$store.commit('setJalertText', {text: '请选择子节点!'})
        return
      }
      this.selected(o)
      this.$emit('saveCode', o)
    },
    getSwitchClass (o, index) {
      let prefix = 'root'
      if (this.level > 0 || index > 0 || this.item.length > 0) {
        prefix = 'center'
      }
      if (index === (this.item.length - 1)) {
        prefix = 'bottom'
      }
      if (this.level === 0 && this.item.length === 0) {
        prefix = 'root'
      }
      let className = 'level' + this.level
      if (o.open && o.children.length > 0) {
        className += ' ' + prefix + '_open'
      } else if (o.children.length === 0) {
        className += ' ' + prefix + '_docu'
      } else {
        className += ' ' + prefix + '_close'
      }
      return className
    },
    getIcoClass (o) {
      let className = 'ico_open'
      if (!o.open) {
        className = 'ico_close'
      }
      if (o.children.length === 0) {
        className = 'ico_docu'
      }
      return className
    }
  }
}
</script>
