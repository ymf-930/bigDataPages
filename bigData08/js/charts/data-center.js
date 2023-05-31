// 实例化对象
let myChart = null;
// 饼图
const pieDom1 = document.getElementById('pieChart1');
// 柱状图
const barDom1 = document.getElementById('barChart1');
const barDom2 = document.getElementById('barChart2');
const barDom3 = document.getElementById('barChart3');
//折线图
const lineDom1 = document.getElementById('lineChart1');

// 饼图数据
let pieData1 = [
  {icon: 'circle', name: 'AAA', percent: 29.60, value: 4544},
  {icon: 'circle', name: 'AA', percent: 21.63, value: 3321},
  {icon: 'circle', name: 'A+', percent: 20.28, value: 3113},
  {icon: 'circle', name: 'A', percent: 15.25, value: 2341},
  {icon: 'circle', name: 'A-', percent: 13.24, value: 2032}
]
let graphicData = [
  {name: '归集方式', value: '13319'},
]
const colors = [
  ['#3c90f7', '#55bfc0', '#5ebe67', '#f4cd49'],
]
// 柱状图数据
let barData1 = {
  xData: ['1月', '2月', '3月', '4月', '5月', '6月'],
  yData: [
    {
      name: "部门数据统计",
      data: [
        120, 200, 150, 80, 70, 110
      ]
    },
  ]
}
let barData2 = {
  xData: [120, 200, 150, 80, 70, 110],
  yData: ['企业基本情况', '知识产权情况', '企业合规情况', '企业经营情况', '舆情关联', '失信黑名单']
}
let barData3 = {
  xData: ['1月', '2月', '3月', '4月', '5月', '6月', '7月'],
  yData: [
    {
      name: "部门数据统计",
      data: [
        120, 200, 150, 80, 70, 110, 90
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

// 饼图Series
function initPieSeries(data) {
  return [
    {
      type: 'pie',
      radius: ['38%', '65%'],
      center: ['25%', '50%'],
      label: {
        normal: {
          show: false
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      data: data,
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
}

// 柱状图Series
function initBarSeries1(data) {
  return data.map((item, index) => {
    return {
      type: 'bar',
      showBackground: true,
      name: item.name ?? `系列${index + 1}`,
      barWidth: "40%",
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {offset: 0, color: '#04b1ec'},
          {offset: 1, color: '#04f0f4'},
        ]),
      },
      data: item.data,
    }
  })
}

function initBarSeries2(data) {
  return {
    type: 'bar',
    // showBackground: true,
    barWidth: 10,
    itemStyle: {
      barBorderRadius: 8,
      color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
        {offset: 0, color: '#74dc79'},
        {offset: 1, color: '#2090dc'},
      ]),
    },
    data: data,
  }
}

// 折线图Series
function initLineSeries(data) {
  return data.map((item, index) => {
    return {
      type: 'line',
      name: item.name ?? `系列${index + 1}`,
      symbol: 'emptyCircle',
      symbolSize: 5,
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

// 构建饼图图表信息
function getPieData(chartData, graphicData) {
  return {
    title: {
      text: '',
      subtext: '',
      left: 'right'
    },
    tooltip: {
      trigger: 'item'
    },
    // 饼状图中心数据
    graphic: {
      elements: [{
        type: 'text',
        left: '18%',
        top: '40%',
        style: {
          text: graphicData.name,
          textAlign: 'center',
          fill: '#fff',
          width: 30,
          height: 30,
          fontSize: 16,
        }
      }, {
        type: 'text',
        left: '19%',
        top: '52%',
        style: {
          text: graphicData.value, //这里改用实际值
          textAlign: 'center',
          fill: '#fff',
          width: 30,
          height: 25,
          fontSize: 16,
        }
      }]
    },
    legend: {
      orient: 'vertical',
      x: '50%',
      y: 'center',
      width: 200,
      itemGap: 20, // 间隔
      //设置icon的大小
      itemWidth: 8,
      itemHeight: 8,
      data: chartData,
      formatter: function (name) {
        let target;
        let percent;
        for (let i = 0; i < chartData.length; i++) {
          if (name === chartData[i].name) {
            percent = '' + (chartData[i].percent) + '%'
            target = '' + (chartData[i].value)
            break;
          }
        }
        return '{a|' + name + '}' + '{percent|' + percent + '}{value|' + target + '}'
      },
      textStyle: {
        rich: {
          a: {
            width: 55,
            fontSize: 12,
            color: ['#fff']
          },
          value: {
            width: 50,
            color: '#fff',
            fontSize: 12,
            padding: [0, 15]
          },
          percent: {
            width: 40,
            color: '#1890ff',
            fontSize: 12
          }
        }
      }
    },
    series: initPieSeries(chartData)
  }
}

// 构建柱状图图表信息
function getBarData1(chartData) {
  return {
    color: ['#3c90f7'],
    tooltip: {},
    grid: {
      left: "12%",
      top: "12%",
      right: "6%",
      bottom: "10%"
    },
    xAxis: {
      type: 'category',
      axisTick: {
        show: true,
        alignWithLabel: true
      },
      axisLabel: {
        color: "rgba(251, 248, 248, 0.7)"
      },
      data: chartData.xData
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: "rgba(251, 248, 248, 0.7)"
      },
      // y轴分割线的颜色
      splitLine: {
        show: true,
        lineStyle: {
          color: "rgba(255, 255, 255, 0.1)",
          type: "solid",
        }
      }
    },
    series: initBarSeries1(chartData.yData)
  }
}

function getBarData2(chartData) {
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
      top: '10%',
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
    series: initBarSeries2(chartData.xData)
  }
}

// 构建折线图表1信息
function getLineData(chartData) {
  return {
    color: ['#095ef7'],
    grid: {
      left: '20',
      top: '60',
      right: '20',
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
        name: '数量',
        nameLocation: 'end',
        nameGap: 20,
        nameTextStyle: {
          color: 'rgba(255, 255, 255, 0.8)',
          fontSize: 12, // 大小
          padding: [0, 0, 0, -30]
        },
        axisLabel: {
          color: 'rgba(255,255,255,.8)',
          fontSize: '12'
        },
        axisLine: {
          // 如果想要设置单独的线条样式
          lineStyle: {
            color: 'rgba(255,255,255,.1)',
            width: 1,
            type: 'solid'
          }
        },
        // y轴分割线的颜色
        splitLine: {
          lineStyle: {
            color: 'rgba(255,255,255,0.1)'
          }
        }
      }
    ],
    series: initLineSeries(chartData.yData)
  }
}

// 饼图模块1-8
function initPieCharts(pieDom, color, pieData, graphicData) {
  myChart = echarts.init(pieDom);
  myChart.setOption({
    color: color,
    ...getPieData(pieData, graphicData)
  });
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
  initPieCharts(pieDom1, colors[0], pieData1, graphicData[0])
  initBarChart(barDom1, barData1, getBarData1)
  initBarChart(barDom2, barData2, getBarData2)
  initLineChart()
}

initChart()
