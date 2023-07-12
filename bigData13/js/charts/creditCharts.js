// 系统概况专题
// 柱状图
var select = 'nat'
// 资源信息分类统计
var zyDom = document.getElementById("barChart4");
var zyChart = echarts.init(zyDom);

/*网格架构概览*/
var pieDom = document.getElementById("pieChart")
var pieChart = echarts.init(pieDom)

var zyData = {
  xData: ['1月', '2月', '3月', '4月', '5月', '6月'],
  yData: [
    {
      name: "资源信息分类统计",
      data: [
        638, 300, 490, 1080, 210, 843
      ]
    },
  ]
}
// 饼图数据
var pieData = [
  {name: '基本信息', percent: 29.60, value: 4544},
  {name: '正负面信息', percent: 21.63, value: 3321},
  {name: '志愿捐赠信息', percent: 20.28, value: 3113}
]
// 加载Y轴数据
function initSeries(data) {
  return data.map((item, index) => {
    return {
      type: 'bar',
      name: item.name ?? `系列${index + 1}`,
      barWidth: "40%",
      data: item.data,
    }
  })
}
// 构建图表信息
function getData(chartData, type) {
  return {
    color: ['#3c90f7'],
    tooltip: {},
    grid: {
      left: "10%",
      top: "7%",
      right: "6%",
      bottom: "10%"
    },
    xAxis: {
      type: 'category',
      boundaryGap: type ? false : true,
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
      splitLine: {
        show: true,
        lineStyle: {
          color: type ? "rgba(255, 255, 255, 0.4)" : "rgba(255, 255, 255, 0.6)",
          type: type ? "solid" : "dashed",
        }
      }
    },
    series: !type ? initSeries(chartData.yData) : initLineSeries(chartData.yData)
  }
}

function handleSelect(val) {
  zyChart.dispose()
  pieChart.dispose()
  this.initChartData(val)
}

// 根据类型加载数据信息
function initChartData(val) {
  zyChart = echarts.init(zyDom);
  pieChart = echarts.init(pieDom);
  if (vm.select === 'let') {
    zyChart.setOption(getData(zyData));
  } else {
    zyChart.setOption(getData(zyData));
  }
  pieChart.setOption(getPieData(pieData))
}

initChartData()

// 饼图Series
function initPieSeries(data) {
  return [
    {
      type: 'pie',
      // radius: '60%',
      center: ['50%', '45%'],
      label: {
        normal: {
          show: true
        }
      },
      labelLine: {
        normal: {
          show: true
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

// 构建饼图图表信息
function getPieData(chartData) {
  return {
    title: {
      text: '',
      subtext: '',
      left: 'right'
    },
    color: ['#3aa0ff', '#31dd6a', '#36cbcb'],
    tooltip: {
      trigger: 'item'
    },
    legend: {
      x : 'center',
      y : 'bottom',
      itemGap: 20, // 间隔
      //设置icon的大小
      icon: 'roundRect',
      itemWidth: 12,
      itemHeight: 8,
      data: chartData,
      textStyle: {
        color: '#fff'
      },
    },
    series: initPieSeries(chartData)
  }
}


