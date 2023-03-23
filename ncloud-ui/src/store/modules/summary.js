import {
  reqSummaryData
} from '../../api'
import {
  SummaryData
} from '../mutation-types'

export default {
  state: {
    monthAnalysis: {
      collection: 0,
      appear: 0,
      reflux: 0
    },
    classifyStatistic: {
      lv1: 0,
      lv2: 0,
      resourceCount: 0,
      deptCount: 0,
      chartData: [
        ['product', '信息量'],
        ['基础信息', 80],
        ['业务信息', 100],
        ['司法信息', 20],
        ['行政执法信息', 300],
        ['公共事业信息', 400],
        ['信用评级信息', 500],
        ['其他信息', 600],
        ['累计', 700]
      ],
      deptList: [
        { name: '部门名称一', count: 8848, percent: 10 },
        { name: '部门名称一', count: 8848, percent: 10 },
        { name: '部门名称一', count: 8848, percent: 10 },
        { name: '部门名称一', count: 8848, percent: 10 },
        { name: '部门名称一', count: 8848, percent: 10 },
        { name: '部门名称一', count: 8848, percent: 10 },
        { name: '部门名称一', count: 8848, percent: 10 }
      ]
    },
    summaryCounts: {
      resource: 0,
      collection: 0,
      month: 0,
      naturalPerson: 0,
      legalPerson: 0,
      focusPerson: 0,
      passPercent: 80,
      chartList: [
        ['product', '自然人', '法人及其他组织'],
        ['1月', 1000, 500],
        ['2月', 1400, 600],
        ['3月', 2000, 700],
        ['4月', 1500, 500],
        ['5月', 1200, 400],
        ['6月', 1300, 500],
        ['7月', 1400, 600],
        ['8月', 2000, 500],
        ['9月', 2200, 300],
        ['10月', 1600, 500],
        ['11月', 1700, 600],
        ['12月', 1400, 400]
      ]
    }, // 中心数据
    source: [
      ['product', '数据量'],
      ['手工填报', 10],
      ['数据库对接', 5],
      ['内部接口', 15],
      ['其他', 25]
    ], // 来源
    naturalPersonAnalysis: {
        outer: [
          { value: 335, name: '业务信息' },
          { value: 310, name: '司法信息' },
          { value: 234, name: '行政执法信息' },
          { value: 235, name: '信用评价信息' },
          { value: 248, name: '公共事业信息' },
          { value: 248, name: '其他信息' },
          { value: 248, name: '基本信息' }
        ],
        inner: [
          { value: 535, name: '总数据量' }
        ]
    },
    newestFillInDept: [
      { name: '部门名称一', count: 8848 },
      { name: '部门名称一', count: 8848 },
      { name: '部门名称一', count: 8848 },
      { name: '部门名称一', count: 8848 },
      { name: '部门名称一', count: 8848 }
    ] // 最新部门填报记录
  },
  mutations: {
    [SummaryData](state, { result }) {
      const { data } = result.data
      for (let key in data) {
        state[key] = data[key]
      }
    }
  },
  actions: {
    async getSummaryData({ commit }) {
      const result = await reqSummaryData()
      commit(SummaryData, { result })
    }
  }
}
