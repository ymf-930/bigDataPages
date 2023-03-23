// 实例化对象
var myChart = null;
var pieDom1 = document.getElementById('pieChart1');
var pieDom2 = document.getElementById('pieChart2');
var lineDom1 = document.getElementById('lineChart1');
// 饼图数据
var pieData1 = [
  {value: 40, name: '主动型'},
  {value: 38, name: '审批替代型'},
  {value: 32, name: '行业自律型'},
  {value: 30, name: '信用修复型'},
  {value: 28, name: '容缺受理型'},
  {value: 26, name: '证明替代型'}
]
var pieData2 = [
  {value: 40, name: '主动型'},
  {value: 38, name: '审批替代型'},
  {value: 32, name: '行业自律型'},
  {value: 30, name: '信用修复型'},
  {value: 28, name: '容缺受理型'},
  {value: 26, name: '证明替代型'}
]
// 折线图数据
var lineData1 = {
  xData: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  yData: [
    {
      name: '法人信用承诺',
      data: [25, 35, 40, 30, 35, 40, 25, 35, 40, 30, 35, 30]
    },
    {
      name: '自然人信用承诺',
      data: [34, 30, 35, 28, 30, 35, 20, 30, 35, 28, 30, 25]
    },
    {
      name: '法人承诺履约',
      data: [20, 45, 35, 28, 68, 35, 84, 30, 3, 28, 12, 25]
    },
    {
      name: '自然人承诺履约',
      data: [3, 4, 35, 2, 67, 35, 12, 6, 71, 28, 35, 11]
    }
  ]
}

/*function changeData(data) {
  console.log(data);
  pieData1 = data.pieData1,
  pieData2 = data.pieData2,
  lineData1 = data.lineData1,
  initChart()
}*/

// 饼图Series
function initPieSeries(data) {
  return [
    {
      type: 'pie',
      radius: ['20%', '50%'],
      center: ['50%', '45%'],
      label: {
        normal:{
          show: true,
          color: '#fff',
          formatter: '{b}\n{d}%'//显示百分比
        },
      },
      data: data
    }
  ]
}

// 折线图Series
function initLineSeries(data) {
  return [
    {
      name: data[0].name,
      type: 'line',
      stack: '总量',
      emphasis: {
        focus: 'series'
      },
      data: data[0].data
    },
    {
      name: data[1].name,
      type: 'line',
      stack: '总量',
      emphasis: {
        focus: 'series'
      },
      data: data[1].data
    },
    {
      name: data[2].name,
      type: 'line',
      stack: '总量',
      emphasis: {
        focus: 'series'
      },
      data: data[2].data
    },
    {
      name: data[3].name,
      type: 'line',
      stack: '总量',
      emphasis: {
        focus: 'series'
      },
      data: data[3].data
    }
  ]
}

// 构建饼图图表信息
function getPieData(chartData) {
  return {
    color: ['#f8984e', '#3ba6fa', '#34cccc', '#476c64', '#c0546c', '#948cbc'],
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: 'bottom',
      itemGap: 25,
      itemWidth: 15,
      itemHeight: 12,
      padding: [0, 40, 0, 0],
      textStyle: {
        color: '#fff'
      }
    },
    series: initPieSeries(chartData)
  }
}

// 构建折线图表1信息
function getLineData1(chartData) {
  return {
    color: ['#fbb941', '#43c5eb', '#90deed', '#6edcdc'],
    legend: {
      icon: 'roundRect',
      itemGap: 25,
      itemWidth: 15,
      itemHeight: 12,
      bottom: 0,
      data: ['法人信用承诺', '自然人信用承诺', '法人承诺履约', '自然人承诺履约'],
      textStyle:{
        color: '#fff'
      }
    },
    grid: {
      left: '20',
      top: '40',
      right: '20',
      bottom: '40',
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

// 1.饼图模块1
function initPieChart1() {
  myChart = echarts.init(pieDom1);
  myChart.setOption(getPieData(pieData1));
}

// 2.饼图模块2
function initPieChart2() {
  myChart = echarts.init(pieDom2);
  myChart.setOption(getPieData(pieData2));
}

// 3.折线图模块1
function initLineChart1() {
  myChart = echarts.init(lineDom1);
  myChart.setOption(getLineData1(lineData1));
}

function initChart() {
  initPieChart1()
  initPieChart2()
  initLineChart1()
}

initChart()
