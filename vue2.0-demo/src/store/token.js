export default {
  state: {
    token: '456'
  },
  mutations: {
    setToken (state, t) {
      state.token = t
    },
    getToken (state) {
      return state.token
    }
  },
  actions: {
  }
}
