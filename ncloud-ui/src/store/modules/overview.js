import {
  reqOverviewData
} from '../../api'
import {
  OverviewData
} from '../mutation-types'

export default {
  state: {
    subDepart: [
      {
      'name': 'xx市',
      'count': 23234234,
      'percent': 10
    },
      {
        'name': '大数据服务中心',
        'count': 54232345,
        'percent': 10
      },
      {
        'name': '卫生局',
        'count': 23452345,
        'percent': 20
      },
      {
        'name': '自然资源和规划局',
        'count': 2345,
        'percent': 30
      },
      {
        'name': '住建局',
        'count': 62346,
        'percent': 50
      },
      {
        'name': '市场监督局',
        'count': 3263246,
        'percent': 20
      },
      {
        'name': '交通局',
        'count': 23455,
        'percent': 10
      }
    ],
    leftData: {
      'webCount1': '212123',
      'data3': [{
        'unit': '家',
        'count': 21782,
        'title': '企业法人'
      },
        {
          'unit': '家',
          'count': 88123,
          'title': '个体工商户'
        },
        {
          'unit': '家',
          'count': 328,
          'title': '其他'
        }
      ],
      'webCount2': '420240',
      'data2': [{
        'unit': '个',
        'count': 14,
        'title': '本市镇街数量'
      },
        {
          'unit': '个',
          'count': 522,
          'title': '村居社区数量'
        }
      ],
      'data1': [{
        'unit': '个',
        'count': 634121,
        'title': '本地人口'
      },
        {
          'unit': '个',
          'count': 182365,
          'title': '外来人口'
        },
        {
          'unit': '个',
          'count': 102684,
          'title': '其他人口'
        }
      ],
      'legCount': '110233',
      'totalCount': '919170'
    },
    centerData: {
      'legCreditNum': 5930,
      'natCreditNum': 16206,
      'legPerNum': 56651,
      'natBaseNum': 919170,
      'legBaseNum': 110233,
      'natPerNum': 22379
    },
    report: {
      'xData': [
        '2021-09',
        '2021-10',
        '2021-11',
        '2021-12',
        '2022-01',
        '2022-02'
      ],
      'yData': [
        500000,
        400000,
        378000,
        123022,
        1212,
        0
      ]
    },
    redBlack: {
      'blackCount': '101234',
      'blackData': [{
        'unit': '个',
        'count': 5,
        'title': '税务黑名单'
      },
        {
          'unit': '个',
          'count': 30,
          'title': '市场监管局黑名单'
        },
        {
          'unit': '个',
          'count': 10,
          'title': '海关黑名单'
        },
        {
          'unit': '个',
          'count': 10,
          'title': ''
        }
      ],
      'redCount': '101234',
      'redData': [{
        'unit': '个',
        'count': '5',
        'title': 'A级别纳税人'
      },
        {
          'unit': '个',
          'count': '30',
          'title': '工程建设红名单'
        },
        {
          'unit': '个',
          'count': '10',
          'title': '市场监管红名单'
        },
        {
          'unit': '个',
          'count': '10',
          'title': '海关红名单'
        }
      ]
    },
    countNumList: [0, 0, 2, 0, 2, 9, 0, 1, 5, 6],
    fltj: {
      'chartData': {
        'xData': [
          80,
          100,
          20,
          300,
          400,
          500,
          600,
          700
        ],
        'yData': [
          '基础信息',
          '业务信息',
          '司法信息',
          '行政执法信息',
          '公共事业信息',
          '信用评级信息',
          '其他信息'
        ]
      },
      'topData': [{
        'unit': '个',
        'count': 12412,
        'title': '一级分类'
      },
        {
          'unit': '个',
          'count': 41244,
          'title': '二级分类'
        },
        {
          'unit': '条',
          'count': 1214,
          'title': '资源数'
        },
        {
          'unit': '个',
          'count': 1214,
          'title': '部门数'
        }
      ]
    }
  },
  mutations: {
    [OverviewData](state, { result }) {
      const { data } = result.data
      for (let key in data) {
        state[key] = data[key]
      }
    }
  },
  actions: {
    async getOverviewData({ commit }) {
      const result = await reqOverviewData()
      commit(OverviewData, { result })
    }
  }
}
