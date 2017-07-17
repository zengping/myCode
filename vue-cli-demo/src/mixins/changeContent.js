var myMixin = {
  methods: {
    changeContent (i) {
      this.$emit('changeContent', i)
    }
  }
}

export default myMixin
