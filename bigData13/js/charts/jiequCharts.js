// 柱状图
var select = 'nat'
// 评价等级分布情况
var pjdjDom = document.getElementById("barChart");
var pjdjChart = echarts.init(pjdjDom);

var centerDom = document.getElementById("barChart2");
var centerChart = echarts.init(centerDom);

/*归集信息种类*/
var pieDom = document.getElementById("pieChart")
var pieChart = echarts.init(pieDom)

var pjdjData = {
  xData: ['AAA', 'AA', 'A+', 'A', 'A-', 'B', 'C'],
  yData: [
    {
      name: "评价等级分布情况",
      data: [
        638, 300, 490, 1080, 210, 843, 500
      ]
    },
  ]
}
var centerData = {
  xData: ['Top1', 'Top2', 'Top3', 'Top4', 'Top5', 'Top6'],
  yData: [600, 500, 400, 300, 200, 100]
}
// 饼图数据
var pieData = [
  {name: '抽检信息', percent: 29.60, value: 4544},
  {name: '投诉信息', percent: 21.63, value: 3321},
  {name: '监督信息', percent: 20.28, value: 3113},
  {name: '处罚信息', percent: 20.28, value: 3113}
]

// 加载Y轴数据
function initBar1Series(data) {
  return data.map((item, index) => {
    return {
      type: 'bar',
      name: item.name ?? `系列${index + 1}`,
      barWidth: "40%",
      data: item.data,
    }
  })
}

function initBar2Series(data) {
/*  return data.map((item, index) => {
    return {
      type: 'bar',
      name: item.name ?? `系列${index + 1}`,
      barWidth: "40%",
      data: item.data,
    }
  })*/
  return [{
    type: 'bar',
    barWidth: 90,
    itemStyle: {
      color: function (params) {
        console.log(params);
        return colors[params.dataIndex];
      },
    },
/*    label: {
      show: true,
      color: '#fff',
      fontSize: 14,
      position: 'insideBottom',
      offset: [0, -20],
    },*/
    label: {
      show: true,
      position: 'top',
      color: '#fff',
      fontSize: 14,
      offset: [0, -20]
    },
    data: centerData.yData,
  },
    {
      z: 3,
      type: 'pictorialBar',
      data: centerData.yData,
      symbol: 'diamond',
      symbolOffset: [0, '50%'],
      symbolSize: [90, 90 * 0.5],
      itemStyle: {
        color: function (params) {
          return colors[params.dataIndex];
        },
      },
    },
    {
      z: 4,
      type: 'pictorialBar',
      data: centerData.yData,
      symbol: 'diamond',
      symbolPosition: 'end',
      symbolOffset: [0, '-50%'],
      symbolSize: [90, 90 * 0.5],
      itemStyle: {
        borderWidth: 0,
        color: function (params) {
          return colors[params.dataIndex];
        },
      },
    }]
}

// 构建图表信息
function getBar1Data(chartData) {
  return {
    color: ['#0fbce0'],
    tooltip: {},
    grid: {
      left: "10%",
      top: "15%",
      right: "6%",
      bottom: "15%"
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
    series: initBar1Series(chartData.yData)
  }
}

const colors = [
  {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 1,
    y2: 0,
    colorStops: [
      { offset: 0, color: 'rgba(251,203,65,0.2)' },
      { offset: 0.5, color: 'rgba(251,203,65,0.5)' },
      { offset: 0.5, color: 'rgba(251,203,65,0.8)' },
      { offset: 1, color: '#fbcb41' },
    ],
  }
];
function getBar2Data(chartData) {
  for (let i = 0; i < chartData.xData.length; i++) {
    colors.push({
      type: 'linear',
      x: 0,
      y: 0,
      x2: 1,
      y2: 0,
      colorStops: [
        { offset: 0, color: '#85cff8' },
        { offset: 0.5, color: '#7bccf8' },
        { offset: 0.5, color: '#76cbfa' },
        { offset: 1, color: '#71cbfb' },
      ],
    });
  }
  return {
    color: colors,
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'axis',
      formatter: '{b} : {c}',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {},
    xAxis: {
      data: chartData.xData,
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        margin: 33,
        color: '#fff',
        fontSize: 14,
      },
    },
    yAxis: {
      show: false,
    },
    series: initBar2Series(chartData.yData)
  }
}

// 饼图Series
function initPieSeries(data) {
  return [
    {
      type: 'pie',
      radius: ['40%', '55%'],
      center: ['35%', '50%'],
      itemStyle: {
        // borderRadius: 10,
        borderColor: '#071649',
        borderWidth: 8,
      },
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
    color: ['#0be4fc', '#fc8484', '#6484ec', '#644bdc'],
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      right: '5%',
      top: 'center',
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
function initChartData() {
  pjdjChart = echarts.init(pjdjDom);
  centerChart = echarts.init(centerDom);
  pieChart = echarts.init(pieDom);
  pjdjChart.setOption(getBar1Data(pjdjData));
  centerChart.setOption(getBar2Data(centerData));
  pieChart.setOption(getPieData(pieData))
}

initChartData()