// 柱状图
var pieDom = document.getElementById("pieChart")
var pieChart = echarts.init(pieDom)
var barDom = document.getElementById("barChart")
var barChart = echarts.init(barDom)

// 饼图数据
var pieData = [
  {name: '基本信息', percent: 29.60, value: 4544},
  {name: '正负面信息', percent: 21.63, value: 3321},
  {name: '志愿捐赠信息', percent: 20.28, value: 3113}
]
// 柱状图数据
var barData = {
  xData: ['xx村1', 'xx村2', 'xx村3', 'xx村4', 'xx村5', 'xx村6', 'xx村7', 'xx村8', 'xx村9'],
  yData: [111, 63, 61, 49, 34, 32, 29, 80, 39, 45]
}

// 饼图Series
function initPieSeries(data) {
  return [
    {
      type: 'pie',
      // radius: '60%',
      radius: ['53%', '68%'],
      center: ['50%', '50%'],
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

function initBarOptions(data) {
  return {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      show: false
    },
    grid: {
      top: '10%',
      left: '5%',
      right: '5%',
      bottom: '0%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      data: data.yData,
      axisLine: {
        show: true
      },
      splitLine: {
        lineStyle: {
          color: "#4a5e7a",
          width: 1,
          type: "solid"
        }
      },
      axisLabel: {
        show: true,
        color: '#ffffff'
      },
    },
    yAxis: {
      type: 'category',
      inverse: true,
      axisLine: {
        lineStyle: {
          color: "#4a5e7a",
          width: 1,
          type: "solid"
        }
      },
      axisLabel: {
        color: '#ffffff'
      },
      data: data.xData
    },
    series: [
      {
        type: 'bar',
        barWidth: '15px',
        data: data.yData,
        color: '#3b93f4',
        label: {
          show: true,
          position: 'right',
          color: '#fff',
          fontSize: 14,
          offset: [10, 0]
        }
      }
    ]
  }
}

// 构建饼图图表信息
function getPieData(chartData) {
  return {
    title: {
      text: '',
      subtext: '',
      left: 'right'
    },
    color: ['#2094f8', '#e59d0b', '#04dbfc'],
    tooltip: {
      trigger: 'item'
    },
    legend: {
      show: false
    },
    series: initPieSeries(chartData)
  }
}

// 根据类型加载数据信息
function initChartData(val) {
  pieChart = echarts.init(pieDom);
  pieChart.setOption(getPieData(pieData))
  barChart = echarts.init(barDom);
  barChart.setOption(initBarOptions(barData));
}

initChartData()