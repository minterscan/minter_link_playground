import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    extensionName: 'MinterLink',
    extensionUrl: 'https://github.com/minterscan/minter_link',
    isAuthenticated: false,
    isInstalled: false,
    isUnlocked: false,
    version: '',
    wallet: ''
  },
  getters: {
    publicPath () {
      return process.env.NODE_ENV === 'production' ? process.env.BASE_URL : ''
    }
  },
  mutations: {
    isAuthenticated (state, value) {
      state.isAuthenticated = value
    },
    isInstalled (state, value) {
      state.isInstalled = value
    },
    isUnlocked (state, value) {
      state.isUnlocked = value
    },
    version (state, value) {
      state.version = value
    },
    wallet (state, value) {
      state.wallet = value
    }
  }
})