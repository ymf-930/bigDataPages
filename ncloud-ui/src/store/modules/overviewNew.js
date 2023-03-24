import {
  reqOverviewNewData
} from '../../api'
import {
  OverviewNewData
} from '../mutation-types'

export default {
  state: {
    redBlack: {},
    countNumList: [],
    leftData: {},
    centerData: {},
    report: {},
    fltj: {},
    subDepart: []
  },
  mutations: {
    [OverviewNewData](state, { result }) {
      const { data } = result.data
      for (let key in data) {
        state[key] = data[key]
      }
    }
  },
  actions: {
    async getOverviewNewData({ commit }) {
      const result = await reqOverviewNewData()
      commit(OverviewNewData, { result })
    }
  }
}
