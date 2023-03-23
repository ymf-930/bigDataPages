import { reqEvaluationNewData } from '../../api'
import { EvaluationNewData } from '../mutation-types'

export default {
  state: {
    numList: {},
    distributionData1: [],
    distributionData2: [],
    qsfx: {},
    rightData: {
    },
    pieData: {
    },
  },

  actions: {
    async getEvaluationNewData({ commit }) {
      const result = await reqEvaluationNewData()
      console.log(result)
      commit(EvaluationNewData, { result })
    },
  },
  mutations: {
    [EvaluationNewData](state, { result }) {
      const { data } = result.data

      for (let key in data) {
        state[key] = data[key]
      }
    },
  },
}
