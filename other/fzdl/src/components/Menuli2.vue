<template>
  <ul>
    <li v-for="i in item" :class="{'current': child.id == i.id}">
      <a href="javascript:void(0)" @click.stop="childEvent(i)">
        <i class="icon-file-text"></i>{{i.name}}</a>
        <span class="arrow"></span>
        <menuli2 :item="i.children" v-show="i.children&&i.children.length > 0"></menuli2>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Menuli2',
  props: ['item'],
  data () {
    return {
      child: {}
    }
  },
  methods: {
    childEvent (o) {
      if (o.children && o.children.length > 0) {
        this.child = {}
        return
      }
      this.child = o
      this.$store.dispatch('setChildId', o.id)
    }
  }
}
</script>
