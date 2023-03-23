import {
  reqOverviewData
} from '../../api'
import {
  OverviewData
} from '../mutation-types'

export default {
  state: {
    mapData: [
      [{
        name: '龙口市',
        value: {
          size: 0,
          nat: 20,
          leg: 200
        }
      }]
    ],
    union: {
      memoCount: 2,
      measureCount: 44,
      deptCount: 55,
      chartData: {
        inner: [
          { value: 0, name: '惩戒' },
          { value: 0, name: '激励' }
        ],
        outer: [
          { value: 0, name: '法人惩戒' },
          { value: 0, name: '自然人惩戒' },
          { value: 0, name: '法人激励' },
          { value: 0, name: '自然人激励' }
        ]
      }
    },
    exchangeData: {
      // total: 8848,
      getIn: 0,
      getInCorrect: '0%',
      getOut: 0,
      getOutCorrect: '0%',
      dockedNormal: 79,
      dockedAbnormal: 1,
      chartData: [
        ['product', '归集', '输出'],
        ['1月', 0, 0],
        ['2月', 0, 0],
        ['3月', 0, 0],
        ['4月', 0, 0],
        ['5月', 0, 0],
        ['6月', 0, 0],
        ['7月', 0, 0],
        ['8月', 0, 0],
        ['9月', 0, 0],
        ['10月', 0, 0],
        ['11月', 0, 0],
        ['12月', 0, 0]
      ]
    },
    countNumList: [0], // 归集总量
    rbNameList: {
      redList: [],
      blackList: []
    },
    classStatistic: {
      lv1: 8,
      lv2: 40,
      resourceCount: 57,
      deptCount: 55,
      chartData: {
        outer: [
          { value: 0, name: '门户' },
          { value: 0, name: '小程序' },
          { value: 0, name: '平台' }
        ],
        inner: [
          { value: 0, name: '查询次数' }
        ]
      },
      chartData2: {
        outer: [
          { value: 0, name: '门户' },
          { value: 0, name: '小程序' },
          { value: 0, name: '平台' }
        ],
        inner: [
          { value: 0, name: '查询次数' }
        ]
      }
    },
    xybgAllCount: 0,
    // 资源信息分类统计
    trendAnalysis: [
      { product: '1月', count: 0 },
      { product: '2月', count: 0 },
      { product: '3月', count: 0 },
      { product: '4月', count: 0 },
      { product: '5月', count: 0 },
      { product: '6月', count: 0 },
      { product: '7月', count: 0 },
      { product: '8月', count: 0 },
      { product: '9月', count: 0 },
      { product: '10月', count: 0 },
      { product: '11月', count: 0 },
      { product: '12月', count: 0 }
    ], // 信用报告查询趋势
    submitDeptList: [
      { name: '镇江市', count: 6834299, percent: '78%' },
      { name: '扬中市人社局', count: 1883650, percent: '22%' },
      { name: '市编办', count: 2067, percent: '0%' },
      { name: '市农业农村局', count: 0, percent: '0%' },
      { name: '市教育局', count: 0, percent: '0%' },
      { name: '市卫健委', count: 0, percent: '0%' },
      { name: '市审计局', count: 0, percent: '0%' },
      { name: '市政务服务办', count: 0, percent: '0%' },
      { name: '市市场监督管理局', count: 0, percent: '0%' }
    ] // 数据提报部门
  },
  actions: {
    async getOverviewData({ commit }) {
      const result = await reqOverviewData()
      commit(OverviewData, { result })
    }
  },
  mutations: {
    [OverviewData](state, { result }) {
      const { data } = result.data
      for (let key in data) {
        state[key] = data[key]
      }
    }
  }
}
