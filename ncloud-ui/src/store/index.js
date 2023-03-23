/* vuex的核心管理对象 */
import Vue from 'vue'
import Vuex from 'vuex'
import overview from './modules/overview'
import summary from './modules/summary'
import xyd from './modules/analysis'
import publicModule from './modules/publicModule'
import union from './modules/union'
import affair from './modules/affair'
import applicationNew from './modules/applicationNew'
import overviewNew from './modules/overviewNew'
import evaluationNew from './modules/evaluationNew'
Vue.use(Vuex)

export default new Vuex.Store({
  // state,
  // mutations,
  // actions,
  // getters,
  modules: {
    overview,
    summary,
    publicModule,
    union,
    affair,
    applicationNew,
    overviewNew,
    evaluationNew,
    xyd
  }
})
