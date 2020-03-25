import MinterConnect from 'minter-connect'

export default {
  install (Vue) {
    Vue.prototype.minterConnect = new MinterConnect('MinterLink Playground')
  }
}
