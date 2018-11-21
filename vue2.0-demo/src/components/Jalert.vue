<script>
export default {
  template: '<div/>',
  computed: {
    jalert () {
      return this.$store.state.jalert
    },
    alertTitle () {
      return this.$store.state.jalert_title
    },
    alertText () {
      return this.$store.state.jalert_text
    },
    alertCallback () {
      return this.$store.state.jalert_callback
    }
  },
  methods: {
    init () {
      let self = this
      this.$alert(this.alertText, this.alertTitle, {
        confirmButtonText: '确定',
        callback: self.alertCallback
      })
    }
  },
  watch: {
    'jalert' (oldVal, val) {
      this.init()
    }
  }
}
</script>
