<template>
  <div class="home">
    <div class="main" id="main">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {}
    }
  },
  methods: {
  }
}
</script>

<style>
    #app {
        display: block;
        width: 100%;
        height: 100%;
    }
</style>
