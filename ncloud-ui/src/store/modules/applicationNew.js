import { reqApplicationNewData } from '../../api'
import { ApplicationNewData } from '../mutation-types'

export default {
  state: {
    union: [
      { title: '实施部门数量', count: 1022, unit: '个' },
      { title: '激励措施数量', count: 1025, unit: '条' },
      { title: '惩戒措施数量', count: 980, unit: '条' },
    ],
    redBlack: {
      redCount: 101234,
      redData: [
        { title: '海关高级认证企业', count: 5, unit: '个' },
        { title: 'A级纳税人', count: 30, unit: '个' },
        { title: '检验检疫AA企业', count: 10, unit: '个' },
      ],
      blackCount: 101234,
      blackData: [
        { title: '失信被执行人', count: 5, unit: '个' },
        { title: '严重违法超限超载当事人', count: 30, unit: '个' },
        { title: '重大税收违法案件当事人', count: 10, unit: '个' },
        { title: '海关失信认证企业', count: 10, unit: '个' },
      ],
    },
    report: {
      xData: ['2021-09', '2021-10', '2021-11', '2021-12', '2022-01', '2022-02'],
      yData: [500000, 400000, 378000, 123022, 1212, 0],
    },
    xyj: {
      departCount: { title: '实施部门量', count: 102560, unit: '个' },
      incentivesCount: { title: '激励措施数', count: 69, unit: '条' },
      data: [
        { title: '信易贷' },
        { title: '信易服' },
        { title: '信易批' },
        { title: '信易游' },
        { title: '信易医' },
      ],
    },
    xyjcs: [
      '持续探索信易+信用应用场景',
      '及时更新网站栏目内容',
      '信易+开展情况有待加强',
      '持续探索信易+信用应用场景',
      '及时更新网站栏目内容',
      '信易+开展情况有待加强',
      '持续探索信易+信用应用场景',
      '及时更新网站栏目内容',
      '信易+开展情况有待加强',
      '持续探索信易+信用应用场景',
      '及时更新网站栏目内容',
      '信易+开展情况有待加强',
    ],
    xyd: {
      data: [
        { title: '需求金额', count: 1025, unit: '万元' },
        { title: '放款笔数', count: 980, unit: '笔' },
        { title: '放款金额', count: 1025, unit: '万元' },
      ],
      data2: [
        { title: '入驻金融机构数', count: 1022, unit: '个' },
        { title: '金融产品数', count: 1025, unit: '个' },
        { title: '实名注册企业数', count: 980, unit: '个' },
      ],
    },
    fjfl: [
      { depart: '山东省市场监督局', field: '监管领域' },
      { depart: '山东省住建局', field: '监管领域' },
      { depart: '山东省执法局', field: '监管领域' },
      { depart: '山东市场监督局', field: '监管领域' },
      { depart: '山东执法局', field: '监管领域' },
      { depart: '山东省管理局', field: '监管领域' },
    ],
    rzph: [
      {
        name: 'xx农商行',
        xq: 27452.9,
        fk: 26350.4,
        num: 208,
        cp: '朝朝宝',
      },
      {
        name: '农业发展银行xx支行',
        xq: 190600,
        fk: 12141,
        num: 5,
        cp: '朝朝宝',
      },
      {
        name: '烟台银行股份有限公司',
        xq: 140234,
        fk: 1224,
        num: 14,
        cp: '朝朝宝',
      },
      {
        name: '农业银行xx支行',
        xq: 25253,
        fk: 124,
        num: 21,
        cp: '朝朝宝',
      },
      { name: '中国银行xx支行', xq: 1112, fk: 313, num: 2, cp: '朝朝宝' },
      { name: '建行xx支行', xq: 111223, fk: 231, num: 4, cp: '朝朝宝' },
    ],
    rzcp: [
      { name: '中国银行xx支行', cp: '朝朝宝' },
      { name: 'xx农商行', cp: '朝朝宝' },
      { name: '农业发展银行xx支行', cp: '朝朝宝' },
      { name: '烟台银行股份有限公司', cp: '朝朝宝' },
      { name: '农业银行xx支行', cp: '朝朝宝' },
    ],
  },

  actions: {
    async getApplicationNewData({ commit }) {
      const result = await reqApplicationNewData()
      console.log(result)
      commit(ApplicationNewData, { result })
    },
  },
  mutations: {
    [ApplicationNewData](state, { result }) {
      const { data } = result.data

      for (let key in data) {
        state[key] = data[key]
      }
    },
  },
}
