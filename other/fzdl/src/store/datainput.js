export default {
  state: {
    d_i_c_id: 0,
    codeTable: {
      show: false,
      field: '',
      code: ''
    },
    foreignKey: {
      show: false,
      field: '',
      code: ''
    },
    activeTable: {
      name: '',
      zIndex: 0
    },
    tableItem: [],
    newTotal: 0
  },
  mutations: {
    init (state) {
      state.codeTable = {
        show: false,
        field: '',
        code: ''
      }
      state.foreignKey = {
        show: false,
        field: '',
        code: ''
      }
      state.activeTable = {
        name: '',
        zIndex: 0
      }
      state.tableItem = []
    },
    setTotal (state) {
      state.newTotal++
    },
    showRightAlert (state, field) {
      state.codeTable.show = true
      state.codeTable.field = field
      state.codeTable.code = ''
    },
    showCenterAlert (state, field) {
      state.foreignKey.show = true
      state.foreignKey.field = field
      state.foreignKey.code = ''
      state.tableItem = []
    },
    hideRightAlert (state) {
      state.codeTable.show = false
    },
    hideCenterAlert (state) {
      state.foreignKey.show = false
    },
    closeRightAlert (state) {
      state.codeTable = {
        show: false,
        field: '',
        code: ''
      }
    },
    closeCenterAlert (state) {
      state.foreignKey = {
        show: false,
        field: '',
        code: ''
      }
      state.activeTable = {
        name: '',
        zIndex: 0
      }
      state.tableItem = []
    },
    setCodeTable (state, code) {
      state.codeTable.code = code
    },
    setForeignKey (state, code) {
      state.foreignKey.code = code
    },
    setTable (state, t) {
      let z = 0
      state.tableItem.forEach(o => {
        z = o.alias_name
      })
      z++
      t.alias_name = z
      state.tableItem.push(t)
      state.activeTable = {
        name: t.field,
        zIndex: z
      }
    },
    setActiveTable (state, t) {
      state.activeTable = t
    },
    removeTable (state, t) {
      let temp = []
      let cb
      state.tableItem.forEach(o => {
        if (o.field === t.field && o.alias_name === t.alias_name) {
          cb = o.cb
        }
        if (o.alias_name < t.alias_name) {
          temp.push(o)
        }
      })
      state.tableItem = temp
      if (t.code && cb) {
        cb(t.code)
      }
    }
  },
  actions: {
    setChildId (context, i) {
      let state = context.state
      state.d_i_c_id = i
      context.commit('init')
    },
    clearId (context) {
      let state = context.state
      state.d_i_c_id = 0
    },
    removeTable (context, t) {
      context.commit('removeTable', t)
      context.dispatch('setActiveTable')
    },
    setActiveTable (context) {
      let state = context.state
      let z, name
      state.tableItem.forEach(o => {
        z = o.alias_name
        name = o.field
      })
      state.activeTable = {
        name: name,
        zIndex: z
      }
    }
  }
}
