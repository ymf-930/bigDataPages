// 柱状图
/*网格架构概览*/
var pieDom = document.getElementById("pieChart")
var pieChart = echarts.init(pieDom)

// 饼图数据
var pieData = [
  {name: '基本信息', percent: 29.60, value: 4544},
  {name: '正负面信息', percent: 21.63, value: 3321},
  {name: '志愿捐赠信息', percent: 20.28, value: 3113}
]

// 饼图Series
function initPieSeries(data) {
  return [
    {
      type: 'pie',
      radius: '60%',
      center: ['50%', '40%'],
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

// 根据类型加载数据信息
function initChartData(val) {
  pieChart = echarts.init(pieDom);
  pieChart.setOption(getPieData(pieData))
}

initChartData()