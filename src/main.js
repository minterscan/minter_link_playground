import Vue from 'vue'
import App from './App.vue'
import './styles/main.scss'
import store from './store/store'
import minterConnect from './plugins/minterConnect'

Vue.config.productionTip = false

Vue.use(minterConnect)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
