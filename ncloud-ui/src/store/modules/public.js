import { reqPublic } from '../../api'
import { Public } from '../mutation-types'

export default {
  state: {
    newClassifyList: [],
    weekSubmit: [
      ['product', '提报率'],
      ['1天', 0],
      ['2天', 0],
      ['3天', 0],
      ['4天', 0],
      ['5天', 0],
      ['6天', 0],
      ['7天', 0]
    ],
    gather: [], // 双公示采集情况
    publicCounts: {
      naturalPersonPermit: 1,
      legalPersonPermit: 2,
      naturalPersonPunish: 0,
      legalPersonPunish: 0
    },
    weekCase: {
      permit: 0,
      punish: 0
    },
    punishRepair: [
      ['product', '数量'],
      ['1月', 0],
      ['2月', 0],
      ['3月', 0],
      ['4月', 0],
      ['5月', 0],
      ['6月', 0],
      ['7月', 0],
      ['8月', 0],
      ['9月', 0],
      ['10月', 0],
      ['11月', 0],
      ['12月', 0]
    ],
    permitDistribute: {
      outer: [
        { value: 0, name: '业务信息' },
        { value: 0, name: '司法信息' },
        { value: 0, name: '行政执法信息' },
        { value: 0, name: '信用评价信息' },
        { value: 0, name: '公共事业信息' },
        { value: 0, name: '其他信息' },
        { value: 0, name: '基本信息' }
      ],
      inner: [
        { value: 0, name: '直接访问' }
      ]
    }
  }, // 部门双公示数据统计情况
  getters: {},
  actions: {
    // 交互
    /* async getOverviewDataExchange({ commit }, params) {
      const result = await reqOverviewDataExchange(params)
      commit(OverviewDataExchange, { result })
    }, */
    // 初始
    async getPublic({ commit }) {
      const result = await reqPublic()
      commit(Public, result.data.data)
    }
  },
  mutations: {
    [Public](state, result) {
      console.log('result>>', result)
      Object.keys(state).forEach(k => {
        if (result[k]) {
          state[k] = result[k]
        }
      })
    }
  }
}
