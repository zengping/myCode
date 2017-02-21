<template>
  <div class="second">
    <div class="container">
      <h3>{{firstName}}</h3>
      <router-link to="/">返回首页</router-link>
      <headcomponent></headcomponent>
    </div>

    <div class="container">
      <div class="row">
        <leftcomponent></leftcomponent>
        <rightcomponent></rightcomponent>
      </div>
    </div>
  </div>
</template>

<script>
import Headcomponent from 'components/Headcomponent'
import Leftcomponent from 'components/Leftcomponent'
import Rightcomponent from 'components/Rightcomponent'

export default {
  components: {
    Headcomponent,
    Leftcomponent,
    Rightcomponent
  },
  computed: {
    firstName () {
      return this.$store.state.firstName
    }
  }
}
</script>
