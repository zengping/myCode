<template>
  <div id="app">
    <input type="text" v-model="user.name">
    <button v-on:click="add">ADD</button>
    <ul>
      <li v-for="i in list">
        <span v-on:click="edit(i)">{{i.name}}</span>
        <span v-on:click="del(i)">X</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [],
      user: {}
    }
  },
  created () {
    this.sel()
  },
  methods: {
    add () {
      let self = this
      if (self.user.id) {
        this.$http.post('/user/update/' + self.user.id, {name: self.user.name}).then((res) => {
          self.sel()
          self.user = {}
        })
      } else {
        this.$http.post('/user/add', {name: self.user.name}).then((res) => {
          self.sel()
          self.user = {}
        })
      }
    },
    del (i) {
      let self = this
      this.$http.delete('/user/del/' + i.id, {}).then((res) => {
        self.sel()
      })
    },
    sel () {
      let self = this
      this.$http.get('/user/list', {}).then((res) => {
        self.list = res.data
      })
    },
    edit (i) {
      this.user = i
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
