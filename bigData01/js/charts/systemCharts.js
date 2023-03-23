// 实例化对象
// 双公示行政许可统计
var xzxkDom = document.getElementById('barChart1');
var xzxkChart = echarts.init(xzxkDom);
// 双公示行政处罚统计
var xzcfDom = document.getElementById('barChart2');
var xzcfChart = echarts.init(xzcfDom);
// 双公示统计
var tjDom = document.getElementById('barChart3');
var tjChart = echarts.init(tjDom);
// 资源信息分类统计
var zyDom = document.getElementById('pieChart1');
var zyChart = echarts.init(zyDom);
// 双公示数据趋势分析
var qsDom = document.getElementById('lineChart')
var qsChart = echarts.init(qsDom)


var xzxkData = {
  xData: ['1月', '4月', '7月', '10月'],
  yData: [
    {
      name: '自然人行政许可数量',
      data: [
        200, 120, 80, 70
      ]
    },
    {
      name: '法人行政许可数量',
      data: [
        120, 200, 150, 80
      ]
    }
  ]
}
var xzcfData = {
  xData: ['1月', '4月', '7月', '10月'],
  yData: [
    {
      name: '自然人行政处罚数量',
      data: [
        60, 170, 180, 100
      ]
    },
    {
      name: '法人行政处罚数量',
      data: [
        170, 130, 60, 180
      ]
    }
  ]
}
var tjData = {
  xData: ['2019年', '2020年', '2021年', '2022年'],
  yData: [
    {
      name: '行政许可数量',
      data: [
        50, 80, 190, 280
      ]
    },
    {
      name: '行政处罚数量',
      data: [
        170, 80, 50, 280
      ]
    }
  ]
}
var zyData = [
  {icon: 'circle', name: '自然人基本信息', value: 4544},
  {icon: 'circle', name: '法人基本信息', value: 3321}
]

// 信用报告趋势分析
var lineMonthData = {
  xData: ['1月', '2月', '3月', '4月', '5月', '6月'],
  yData: [
    {
      id: 'nat', //用于区别弹窗数据
      name: '行政许可',
      data: [
        638, 300, 490, 80, 410, 643
      ]
    },
    {
      id: 'leg',
      name: '行政处罚',
      data: [
        238, 600, 290, 280, 210, 443
      ]
    }
  ]
}
var lineYearData = {
  xData: ['1月', '2月', '3月', '4月', '5月', '6月'],
  yData: [
    {
      id: 'nat', //用于区别弹窗数据
      name: '行政许可',
      icon: 'rect',
      data: [
        638, 410, 643, 300, 490, 80
      ]
    },
    {
      id: 'leg',
      name: '行政处罚',
      icon: 'rect',
      data: [
        280, 210, 443, 238, 600, 290
      ]
    }
  ]
}

// 加载Y轴数据
function initBarSeries(data) {
  return data.map((item, index) => {
    return {
      type: 'bar',
      name: item.name ?? `系列${index + 1}`,
      barWidth: '30%',
      data: item.data
    }
  })
}

// 饼图Series
function initPieSeries(data) {
  return [
    {
      type: 'pie',
      radius: '55%',
      center: ['50%', '45%'],
      label: {
        normal: {
          show: true
        }
        /*      labelLine: {
                normal: {
                  length: 20//自定义指示线长度
                }
              }*/
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

// 构建柱状图图表信息
function getBarData(chartData) {
  return {
    color: ['#3c90f7', '#55bfc0'],
    tooltip: {},
    // 为折线图时显示图例
    legend: {
      bottom: 0,
      left: 'center',
      // width: 200,
      itemGap: 20, // 间隔
      //设置icon的大小
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: '#fff'
      },
      data: chartData.yData
    },
    grid: {
      left: '10%',
      top: '7%',
      right: '6%',
      bottom: '22%'
    },
    xAxis: {
      type: 'category',
      boundaryGap: true,
      axisTick: {
        show: true,
        alignWithLabel: true
      },
      axisLabel: {
        color: 'rgba(251, 248, 248, 0.7)'
      },
      data: chartData.xData
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: 'rgba(251, 248, 248, 0.7)'
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.6)',
          type: 'dashed'
        }
      }
    },
    series: initBarSeries(chartData.yData)
  }
}

// 构建饼图图表信息
function getPieData(chartData) {
  return {
    color: ['#00b8f8', '#1089ff'],
    tooltip: {
      trigger: 'item'
    },
    legend: {
      bottom: '5%',
      left: 'center',
      // width: 200,
      itemGap: 20, // 间隔
      //设置icon的大小
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: '#fff'
      },
      data: chartData
    },
    series: initPieSeries(chartData)
  }
}

// 构建折线图图表信息
function getLineData(chartData) {
  return {
    color: ['#3c90f7', '#55bfc0'],
    tooltip: {},
    // 为折线图时显示图例
    legend: {
      bottom: 0,
      left: 'center',
      // width: 200,
      itemGap: 20, // 间隔
      //设置icon的大小
      itemWidth: 16,
      itemHeight: 5,
      textStyle: {
        color: '#fff'
      },
      data: chartData.yData
    },
    grid: {
      left: '10%',
      top: '7%',
      right: '6%',
      bottom: '20%'
    },
    xAxis: {
      type: 'category',
      boundaryGap: true,
      axisTick: {
        show: true,
        alignWithLabel: true
      },
      axisLabel: {
        color: 'rgba(251, 248, 248, 0.7)'
      },
      data: chartData.xData
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: 'rgba(251, 248, 248, 0.7)'
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.6)',
          type: 'dashed'
        }
      }
    },
    series: initLineSeries(chartData.yData)
  }
}

// function handleSelect(val) {
//   xzxkChart.dispose()
//   xzcfChart.dispose()
//   tjChart.dispose()
//   zyChart.dispose()
//   this.initChartData(val)
// }

// 根据类型加载数据信息
function initChartData(val) {
  xzxkChart = echarts.init(xzxkDom);
  xzcfChart = echarts.init(xzcfDom);
  tjChart = echarts.init(tjDom);
  zyChart = echarts.init(zyDom);
  xzxkChart.setOption(getBarData(xzxkData));
  xzcfChart.setOption(getBarData(xzcfData));
  tjChart.setOption(getBarData(tjData));
  zyChart.setOption(getPieData(zyData));
}

initChartData()
initLineChartData()

// 折线图-信用报告趋势分析
// 获取状态改变
function handleStatus(val) {
  val = !val
  this.initLineChartData(val)
  return val
}

function initLineChartData(val) {
  qsChart = echarts.init(qsDom);
  qsChart.setOption(getLineData(val ? lineMonthData : lineYearData));
}

// 加载Y轴数据
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
      data: item.data
    }
  })
}




