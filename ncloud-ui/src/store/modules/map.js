import { reqMapData, reqMonth } from '../../api'
import { Map } from '../mutation-types'

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
        ['product', '辅助', '生活费'],
        ['基础信息', 0, 100],
        ['业务信息', 100, 100],
        ['司法信息', 200, 100],
        ['行政执法信息', 300, 100],
        ['公共事业信息', 400, 100],
        ['信用评级信息', 500, 100],
        ['其他信息', 600, 100],
        ['累计', 0, 700]
      ]
    },
    classifyList: {
      deptList: [
        { name: '部门名称一', count: 8848, percent: 10 },
        { name: '部门名称一', count: 8848, percent: 10 },
        { name: '部门名称一', count: 8848, percent: 10 },
        { name: '部门名称一', count: 8848, percent: 10 },
        { name: '部门名称一', count: 8848, percent: 10 },
        { name: '部门名称一', count: 8848, percent: 10 },
        { name: '部门名称一', count: 8848, percent: 10 }
      ],
      month: [
        { name: '部门名称一', count: 8848, percent: 10 },
        { name: '部门名称一', count: 8848, percent: 10 },
        { name: '部门名称一', count: 8848, percent: 10 },
        { name: '部门名称一', count: 8848, percent: 10 },
        { name: '部门名称一', count: 8848, percent: 10 },
        { name: '部门名称一', count: 8848, percent: 10 },
        { name: '部门名称一', count: 8848, percent: 10 }
      ],
      year: [
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
      resources: 0,
      collection: 0,
      month: 0
    },
    mapData: [
      [{
        name: '鹤城镇',
        value: 1
      }],
      [{
        name: '资溪县',
        value: 3
      }]
    ],
    source: [
      { value: 10, name: '手工填报' },
      { value: 5, name: 'et对接' },
      { value: 15, name: '内部接口' },
      { value: 25, name: '其他' }
    ],
    naturalPersonData: {
      legalPerson: {
        inner: [
          { value: 335, name: '业务信息' },
          { value: 310, name: '司法信息' },
          { value: 234, name: '行政执法信息' },
          { value: 235, name: '信用评价信息' },
          { value: 248, name: '公共事业信息' },
          { value: 248, name: '其他信息' },
          { value: 248, name: '基本信息' }
        ],
        outer: [
          { value: 335, name: '直接访问' }
        ]
      },
      naturalPerson: {
        inner: [
          { value: 235, name: '业务信息' },
          { value: 210, name: '司法信息' },
          { value: 134, name: '行政执法信息' },
          { value: 135, name: '信用评价信息' },
          { value: 148, name: '公共事业信息' },
          { value: 148, name: '其他信息' },
          { value: 148, name: '基本信息' }
        ],
        outer: [
          { value: 235, name: '直接访问' }
        ]
      }
    },
    newestFillInDept: [
      { name: '部门名称一', count: 8848, percent: 10 },
      { name: '部门名称一', count: 8848, percent: 10 },
      { name: '部门名称一', count: 8848, percent: 10 },
      { name: '部门名称一', count: 8848, percent: 10 },
      { name: '部门名称一', count: 8848, percent: 10 }
    ]
  },
  getters: {},
  actions: {
    // 初始
    async getMap({ commit }) {
      const result = await reqMapData()
      const union = await reqMonth()
      const u = Object.assign(union.data.data, result.data.data)
      commit(Map, u)
    }
  },
  mutations: {
    [Map](state, result) {
      console.log('result>>', result)
      Object.keys(state).forEach(k => {
        if (result[k]) {
          state[k] = result[k]
        }
      })
    }
  }
}
