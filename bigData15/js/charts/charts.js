// 实例化对象
let myChart = null;

// 柱状图
const barDom1 = document.getElementById('barChart1');
const barDom2 = document.getElementById('barChart2');
//折线图
const lineDom1 = document.getElementById('lineChart1');

// 柱状图数据
let barData1 = {
  xData: [120, 200, 150, 80, 70, 110, 68],
  yData: ['基础信息', '业务信息', '司法信息', '行政执法信息', '公共事业信息', '信用评级信息']
}

const colorList = ['#04cccc', '#fcae04', '#04a4fc', '#04bcfc', '#04c4fc', '#c0b484', '#44b4e8']
let barData2 = {
  xData: ['失信被执行人', '企业异常经营名录', '政府采购失信', '重大违法案件', '其他事项'],
  yData: [
    {
      name: "部门数据统计",
      data: [
        120, 200, 150, 80, 70
      ]
    },
  ]
}

let lineData1 = {
  xData: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  yData: [
    {
      name: '正面',
      data: [25, 35, 40, 30, 35, 40, 25, 35, 40, 30, 35, 30]
    }
  ]
}

// 柱状图Series
function initBarSeries1(data) {
  return {
    type: 'bar',
    // showBackground: true,
    barWidth: 10,
    itemStyle: {
      // barBorderRadius: 8,
      color: '#04bcfc',
      //   new echarts.graphic.LinearGradient(0, 0, 1, 0, [
      //   {offset: 0, color: '#74dc79'},
      //   {offset: 1, color: '#2090dc'},
      // ]),
    },
    data: data,
  }
}

function initBarSeries2(data) {
  return data.map((item, index) => {
    return {
      type: 'bar',
      showBackground: true,
      name: item.name ?? `系列${index + 1}`,
      barWidth: "30%",
      itemStyle: '#04b1ec',
      /*        {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {offset: 0, color: '#04b1ec'},
                {offset: 1, color: '#04f0f4'},
              ]),
            },*/
      data: item.data.map((item, i) => {
        itemStyle = {
          color: i > colorList.length ? colorList[i % colorList.length] : colorList[i]
        }
        return {
          value: item,
          itemStyle: itemStyle
        };
      }),
    }
  })
}

// 折线图Series
function initLineSeries(data) {
  return data.map((item, index) => {
    return {
      type: 'line',
      name: item.name ?? `系列${index + 1}`,
      symbol: 'emptyCircle',
      symbolSize: 8,
      itemStyle: {
        normal: {
          borderWidth: 4, // symbol边框
          borderColor: '#049afc' // symbol边框颜色
        }
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {offset: 0, color: 'rgba(12, 191, 243, 0.7)'},
            {offset: 1, color: 'rgba(12, 191, 243, 0.1)'}
          ]
        },
        opacity: 0.8
      },
      data: item.data,
    }
  })
}

// 构建柱状图图表信息
function getBarData1(chartData) {
  return {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '0%',
      top: '3%',
      containLabel: true,
    },
    xAxis: {
      show: true,
      type: 'value',
      boundaryGap: [0, 0.01],
      axisLine: {
        lineStyle: {
          color: '#535e83',
        },
      },
      axisLabel: {
        color: 'rgba(255,255,255,.8)',
        fontSize: '12'
      },
      splitLine: {lineStyle: {color: '#283353'}},
    },
    yAxis: {
      type: 'category',
      color: '#fff',
      axisLabel: {
        color: 'rgba(255,255,255,.8)',
        fontSize: '12'
      },
      axisLine: {
        lineStyle: {
          color: '#535e83',
        },
      },
      inverse: true,
      data: chartData.yData || [],
    },
    series: initBarSeries1(chartData.xData)
  }
}

function getBarData2(chartData) {
  return {
    color: ['#3c90f7'],
    tooltip: {},
    grid: {
      left: "10%",
      top: "15%",
      right: "5%",
      bottom: "10%"
    },
    xAxis: {
      type: 'category',
      axisTick: {
        show: true,
        alignWithLabel: true
      },
      axisLabel: {
        interval: 0,
        fontSize: 10,
        color: "rgba(255,255,255,0.8)"
      },
      data: chartData.xData
    },
    yAxis: {
      type: 'value',
      name: '(条)',
      nameLocation: 'end',
      nameGap: 20,
      nameTextStyle: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 12, // 大小
        padding: [0, 0, 0, -30]
      },
      axisLabel: {
        color: "rgba(255, 255, 255, 0.8)"
      },
      axisLine: {
        // 如果想要设置单独的线条样式
        lineStyle: {
          color: 'rgba(255,255,255,.2)',
          width: 1,
          type: 'solid'
        }
      },
      // y轴分割线的颜色
      splitLine: {
        show: true,
        lineStyle: {
          color: "rgba(255, 255, 255, .2)",
          type: "solid",
        }
      }
    },
    series: initBarSeries2(chartData.yData)
  }
}

// 构建折线图表1信息
function getLineData(chartData) {
  return {
    color: ['#095ef7'],
    grid: {
      left: '20',
      top: '20',
      right: '10',
      bottom: '8',
      containLabel: true
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#1891d8'
        }
      }
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: chartData.xData,
        // 设置x轴标签文字样式
        // x轴的文字颜色和大小
        axisLabel: {
          color: 'rgba(255,255,255,0.8)',
          fontSize: '12'
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          color: 'rgba(255,255,255,.8)',
          fontSize: '12'
        },
        axisLine: {
          show: false,
          // 如果想要设置单独的线条样式
          lineStyle: {
            color: 'rgba(255,255,255,.5)',
            width: 1,
            type: 'solid'
          }
        },
        // y轴分割线的颜色
        splitLine: {
          lineStyle: {
            color: 'rgba(255,255,255,0.3)',
            type: 'dashed'
          }
        }
      }
    ],
    series: initLineSeries(chartData.yData)
  }
}

// 3.折线图模块1
function initLineChart() {
  myChart = echarts.init(lineDom1);
  myChart.setOption(getLineData(lineData1));
}

// 3.折线图模块1
function initBarChart(barDom, barData, getBarData) {
  myChart = echarts.init(barDom);
  myChart.setOption(getBarData(barData));
}

function initChart() {
  initBarChart(barDom1, barData1, getBarData1)
  initBarChart(barDom2, barData2, getBarData2)
  initLineChart()
}

initChart()
