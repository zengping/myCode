<template>
  <div class="bodywrapper">
    <top-header></top-header>
    <!--topheader-->

    <header-menu></header-menu>
    <!--header-->

    <left-menu></left-menu>
    <!--leftmenu-->

    <div class="centercontent">
      <router-view name="default"></router-view>
    </div>
    <!-- centercontent -->

  </div>
  <!--bodywrapper-->
</template>

<script>
import TopHeader from '@/components/TopHeader'
import HeaderMenu from '@/components/HeaderMenu'
import LeftMenu from '@/components/LeftMenu'

export default {
  components: {
    TopHeader,
    HeaderMenu,
    LeftMenu
  },
  created () {
    // console.log(this.$route)
  }
}
</script>

<style>
  /*weui 样式库 非常适合高仿微信*/
  @import "assets/css/weui.min.css";
</style>
