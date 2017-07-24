<template>
  <ul>
    <li v-for="i in item" :class="{'current': parent.id == i.id}">
      <a href="javascript:void(0)" class="editor" @click="parentEvent(i)">{{i.name}}</a>
      <span class="arrow"></span>
      <menuli2 :item="i.children" v-show="i.children&&i.children.length > 0"></menuli2>
    </li>
  </ul>
</template>

<script>
import Menuli2 from '@/components/Menuli2'

export default {
  props: ['item'],
  data () {
    return {
      parent: {}
    }
  },
  components: {
    Menuli2
  },
  methods: {
    parentEvent (o) {
      if (this.parent.id === o.id) {
        this.parent = {}
        return
      }
      this.parent = o
    }
  }
}
</script>
