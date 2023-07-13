// 柱状图
// 信用等级分布情况
var xydjDom = document.getElementById("barChart4");
var xydjChart = echarts.init(xydjDom);

/*网格架构概览*/
var pieDom = document.getElementById("pieChart")
var pieChart = echarts.init(pieDom)

var xydjData = {
  xData: ['1月', '2月', '3月', '4月', '5月', '6月'],
  yData: [
    {
      name: "信用等级分布情况",
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
function getData(chartData) {
  return {
    color: ['#0fbce0'],
    tooltip: {},
    grid: {
      left: "10%",
      top: "7%",
      right: "6%",
      bottom: "10%"
    },
    xAxis: {
      type: 'category',
      boundaryGap: true,
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
          color: "rgba(255, 255, 255, 0.6)",
          type: "dashed"
        }
      }
    },
    series: initSeries(chartData.yData)
  }
}

// 饼图Series
function initPieSeries(data) {
  return [
    {
      type: 'pie',
      radius: '65%',
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


// 加载数据信息
function initChartData(val) {
  xydjChart = echarts.init(xydjDom);
  pieChart = echarts.init(pieDom);
  xydjChart.setOption(getData(xydjData));
  pieChart.setOption(getPieData(pieData))
}

initChartData()
