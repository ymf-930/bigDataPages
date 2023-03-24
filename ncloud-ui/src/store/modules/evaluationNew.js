import { reqEvaluationNewData } from '../../api'
import { EvaluationNewData } from '../mutation-types'

export default {
  state: {
    distributionData2: [
      {
        rate: '0.017%',
        num: '19',
        rank: 'AAA'
      },
      {
        rate: '0.075%',
        num: '83',
        rank: 'AA'
      },
      {
        rate: '5.077%',
        num: '5596',
        rank: 'A+'
      },
      {
        rate: '93.936%',
        num: '103546',
        rank: 'A'
      },
      {
        rate: '0.872%',
        num: '961',
        rank: 'A-'
      },
      {
        rate: '0.022%',
        num: '24',
        rank: 'B'
      },
      {
        rate: '0.001%',
        num: '4',
        rank: 'C'
      },
      {
        rate: '0.000%',
        num: '0',
        rank: 'D'
      }
    ],
    pieData: {
      chart2: [
        {
          name: '党建领域',
          value: 3
        },
        {
          name: '社区村居管理',
          value: 2
        },
        {
          name: '社会公德',
          value: 1
        },
        {
          name: '个人品德',
          value: 5
        },
        {
          name: '文明实践志愿服务信息',
          value: 1
        },
        {
          name: '拾金不昧信息',
          value: 2
        },
        {
          name: '捐款捐物信息',
          value: 1
        },
        {
          name: '表彰信息',
          value: 7
        },
        {
          name: '通报表扬信息',
          value: 2
        },
        {
          name: '公务员奖励信息',
          value: 3
        },
        {
          name: '事业单位工作人员奖励信息',
          value: 2
        },
        {
          name: '其他诚信信息',
          value: 2
        },
        {
          name: '党纪处分信息',
          value: 5
        }
      ],
      chart1: [
        {
          name: '党建领域',
          value: 3
        },
        {
          name: '社区村居管理',
          value: 2
        },
        {
          name: '社会公德',
          value: 1
        },
        {
          name: '个人品德',
          value: 5
        },
        {
          name: '文明实践志愿服务信息',
          value: 1
        },
        {
          name: '拾金不昧信息',
          value: 2
        },
        {
          name: '捐款捐物信息',
          value: 1
        },
        {
          name: '表彰信息',
          value: 7
        },
        {
          name: '通报表扬信息',
          value: 2
        },
        {
          name: '公务员奖励信息',
          value: 3
        },
        {
          name: '事业单位工作人员奖励信息',
          value: 2
        },
        {
          name: '其他诚信信息',
          value: 2
        },
        {
          name: '党纪处分信息',
          value: 5
        }
      ]
    },
    qsfx: {
      yData1: [
        1000,
        1000.013,
        1000.022,
        1000.027,
        1000.031,
        1000.038
      ],
      xData: [
        '10月',
        '11月',
        '12月',
        '1月',
        '2月',
        '3月'
      ],
      yData: [
        1000,
        1000.002,
        1000.005,
        1000.006,
        1000.006,
        1000.008
      ]
    },
    distributionData1: [
      {
        rate: '0.018%',
        num: '166',
        rank: 'AAA'
      },
      {
        rate: '0.044%',
        num: '410',
        rank: 'AA'
      },
      {
        rate: '0.847%',
        num: '7783',
        rank: 'A+'
      },
      {
        rate: '99.084%',
        num: '910881',
        rank: 'A'
      },
      {
        rate: '0.004%',
        num: '41',
        rank: 'A-'
      },
      {
        rate: '0.002%',
        num: '11',
        rank: 'B'
      },
      {
        rate: '0.001%',
        num: '2',
        rank: 'C'
      },
      {
        rate: '0.000%',
        num: '0',
        rank: 'D'
      }
    ],
    rightData: {
      gzry: {
        chart2: {
          xData: [
            '党建领域及社区管理',
            '招商、社会公德及个人品德',
            '表彰、表扬、公务员及事业单位人员奖励',
            '文明实践、拾金不昧及捐款捐物信息',
            '党纪及政务处分',
            '政治品质和道德品行',
            '履行职责与工作作风'
          ],
          yData: [
            {
              data: [7, 7, 23, 10, 11, 7, 22],
              name: ''
            }
          ]
        },
        chart1: {
          xData: [
            'AAA',
            'AA',
            'A+',
            'A',
            'A-',
            'B',
            'C'
          ],
          yData: [113, 223, 3494, 9328, 0, 0, 0]
        },
        num1: '2384',
        numList: [0, 1, 3, 5, 3, 1],
        num2: '11147'
      },
      sfjq: {
        num1: '32',
        tableData: [
          {
            score: 1050,
            uName: '芦头大街商户',
            level: 'AAA',
            rank: '1'
          },
          {
            score: 1050,
            uName: '橙信金街商户',
            level: 'AAA',
            rank: '2'
          },
          {
            score: 1050,
            uName: '芦头大街商户',
            level: 'AAA',
            rank: '3'
          },
          {
            score: 950,
            uName: '橙信金街商户',
            level: 'AAA',
            rank: '4'
          },
          {
            score: 1050,
            uName: '芦头大街商户',
            level: 'AAA',
            rank: '5'
          },
          {
            score: 1050,
            uName: '橙信金街商户',
            level: 'AAA',
            rank: '6'
          },
          {
            score: 1050,
            uName: '橙信金街商户',
            level: 'AAA',
            rank: '7'
          },
          {
            score: 1050,
            uName: '芦头大街商户',
            level: 'AAA',
            rank: '8'
          },
          {
            score: 1050,
            uName: '橙信金街商户',
            level: 'AAA',
            rank: '9'
          },
          {
            score: 1050,
            uName: '芦头大衡商户',
            level: 'AAA',
            rank: '10'
          }
        ],
        numList: [0, 0, 0, 0, 9, 5],
        num2: '63'
      }
    },
    numList: {
      'watchNumList': [0, 0, 0, 1, 2, 0],
      'registerNumList': [0, 0, 0, 1, 7, 6]
    }
  },

  actions: {
    async getEvaluationNewData({ commit }) {
      const result = await reqEvaluationNewData()
      console.log(result)
      commit(EvaluationNewData, { result })
    }
  },
  mutations: {
    [EvaluationNewData](state, { result }) {
      const { data } = result.data

      for (let key in data) {
        state[key] = data[key]
      }
    }
  }
}
