import '@babel/polyfill'
import Vue from 'vue'
// import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import store from './store'
import BinAdmin from './plugin'
import './assets/styles/index.styl'
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/pie'
import 'echarts/lib/chart/bar'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// mock
// import './mock/mockServer'
import { scrollBoard } from '@jiaminghi/data-view'

Vue.use(scrollBoard)

Vue.use(BinAdmin)
Vue.use(ElementUI)
// Vue.component(Subarea)
Vue.component('chart', ECharts)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
