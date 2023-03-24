import { reqAnalysisData } from '../../api'
import { AnalysisData } from '../mutation-types'

export default {
  state: {
    // 贷款数据
    dksj: {
      dkje: 248, // 贷款金额
      dkbs: 12, // 贷款笔数
      chartData1: [
        ['xlabel1', 180],
        ['xlabel2', 130],
        ['xlabel3', 220],
        ['xlabel4', 230],
        ['xlabel5', 250],
        ['xlabel6', 300],
        ['xlabel7', 231],
        ['xlabel8', 132],
        ['xlabel9', 245],
        ['xlabel10', 312]
      ],
      chartData2: [
        ['xlabel1', 180],
        ['xlabel2', 130],
        ['xlabel3', 220],
        ['xlabel4', 230],
        ['xlabel5', 250],
        ['xlabel6', 300],
        ['xlabel7', 231],
        ['xlabel8', 132],
        ['xlabel9', 245],
        ['xlabel10', 312]
      ]
    },
    // 贷款趋势
    dkqs: {
      xData: ['1月', '2月', '3月', '4月', '5月', '6月', '7月'],
      yData: [90, 60, 90, 80, 85, 70, 94]
    },
    // 热度排行
    rdph: [
      { name: 'NO.1流动资金贷款', num: 132, rate: 80 },
      { name: 'NO.2小企业科技贷', num: 132, rate: 80 },
      { name: 'NO.3优质客户贷', num: 132, rate: 80 },
      { name: 'NO.4农业小企业贷款', num: 132, rate: 80 },
      { name: 'NO.5质押快贷', num: 132, rate: 80 }
    ],
    // 中间的数据(放款总金额，企业占比)
    mainData: {
      fkze: 681021546,
      rate: 98.88
    },
    // 贷款需求
    dkxq: [
      { name: '龙口市*****服务部', desc: '申请融资金额50万', date: '2022-05-13' },
      { name: '龙口市*****服务部', desc: '申请融资金额50万', date: '2022-05-13' },
      { name: '龙口市*****服务部', desc: '申请融资金额50万', date: '2022-05-13' },
      { name: '龙口市*****服务部', desc: '申请融资金额50万', date: '2022-05-13' },
      { name: '龙口市*****服务部', desc: '申请融资金额50万', date: '2022-05-13' }
    ],
    // 服务动态
    fwdt: [
      { name: '山东龙口农村商业银行与龙口市*****对接成功', date: '2022-05-13' },
      { name: '山东龙口农村商业银行与龙口市*****对接成功', date: '2022-05-13' },
      { name: '山东龙口农村商业银行与龙口市*****对接成功', date: '2022-05-13' },
      { name: '山东龙口农村商业银行与龙口市*****对接成功', date: '2022-05-13' },
      { name: '山东龙口农村商业银行与龙口市*****对接成功', date: '2022-05-13' }
    ],
    // 融资排行
    rzph: [
      { rank: '1', name: '龙口农商行', value: '1612312万', rate: 15 },
      { rank: '2', name: '龙口农商行', value: '1612312万', rate: 15 },
      { rank: '3', name: '龙口农商行', value: '1612312万', rate: 15 },
      { rank: '4', name: '龙口农商行', value: '1612312万', rate: 15 },
      { rank: '5', name: '龙口农商行', value: '1612312万', rate: 15 },
      { rank: '6', name: '龙口农商行', value: '1612312万', rate: 15 },
      { rank: '7', name: '龙口农商行', value: '1612312万', rate: 15 }
    ],
    // 方式分析
    fsfx: [
      {
        name: "平台",
        count: 4018,
        value: 99.9
      },
      {
        name: "小程序",
        count: 5,
        value: 0.1
      },
      {
        name: "累计放款",
        count: 896,
        value: 22.27
      }
    ],
    // 进度分析
    jdfx: {
      yfb: '16',
      ysl: '40',
      ysx: '20',
      yfk: '315'
    },
    // 案例分析
    alfx: [
      ['product', '数据量'],
      ['经营风险', 28],
      ['生产稳定性风险', 18],
      ['其他', 15],
      ['财务风险', 25],
      ['信用风险', 28]
    ] // 来源
  },
  mutations: {
    [AnalysisData](state, { result }) {
      const { data } = result.data
      for (let key in data) {
        state[key] = data[key]
      }
    }
  },
  actions: {
    async getAnalysisData({ commit }) {
      // const result = await reqAnalysisData()
      // commit(AnalysisData, {result})
      commit(AnalysisData)
    }
  }
}
