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
          centerData: {
            natBaseNum: 824538,
            legBaseNum: 234254,
            natCreditNum: 234623,
            legCreditNum: 3423462,
            natPerNum: 2345125,
            legPerNum: 2345612,
          },
          report: {},
          fltj: {},
          subDepart: [],
    },

    actions: {
      async getOverviewNewData({ commit }) {
        const result = await reqOverviewNewData()
        console.log(result)
        commit(OverviewNewData, { result })
      }
    },
    mutations: {
      [OverviewNewData](state, { result }) {
        const { data } = result.data

        for (let key in data) {
          state[key] = data[key]
        }
      }
    }
  }
