// 实例化对象
var myChart = null;
var pieDom1 = document.getElementById('pieChart1');
var pieDom2 = document.getElementById('pieChart2');
var lineDom1 = document.getElementById('lineChart1');
var lineDom2 = document.getElementById('lineChart2');
var lineDom3 = document.getElementById('lineChart3');
// 饼图数据
var pieData1 = [
  {icon: 'circle', name: 'AAA', percent: 29.60, value: 4544},
  {icon: 'circle', name: 'AA', percent: 21.63, value: 3321},
  {icon: 'circle', name: 'A+', percent: 20.28, value: 3113},
  {icon: 'circle', name: 'A', percent: 15.25, value: 2341},
  {icon: 'circle', name: 'A-', percent: 13.24, value: 2032}
]
var pieData2 = [
  {icon: 'circle', name: 'AAA', percent: 29.60, value: 4544},
  {icon: 'circle', name: 'AA', percent: 21.63, value: 3321},
  {icon: 'circle', name: 'A+', percent: 20.28, value: 3113},
  {icon: 'circle', name: 'A', percent: 15.25, value: 2341},
  {icon: 'circle', name: 'A-', percent: 13.24, value: 2032}
]
// 折线图数据
var lineData1 = {
  xData: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  yData: [
    {
      name: '正面',
      data: [25, 35, 40, 30, 35, 40, 25, 35, 40, 30, 35, 30]
    },
    {
      name: '负面',
      data: [20, 30, 35, 28, 30, 35, 20, 30, 35, 28, 30, 25]
    }
  ]
}
var lineData2 = {
  xData: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  yData: [
    {
      name: '正面',
      data: [25, 35, 40, 30, 35, 40, 25, 35, 40, 30, 35, 30]
    },
    {
      name: '负面',
      data: [20, 30, 35, 28, 30, 35, 20, 30, 35, 28, 30, 25]
    }
  ]
}
var lineData3 = {
  xData: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  yData: [
    {
      name: '正面',
      data: [25, 35, 40, 30, 35, 40, 25, 35, 40, 30, 35, 30]
    },
    {
      name: '负面',
      data: [20, 30, 35, 28, 30, 35, 20, 30, 35, 28, 30, 25]
    }
  ]
}

function changeData(data) {
  console.log(data);
  pieData1 = data.pieData1,
  pieData2 = data.pieData2,
  lineData1 = data.lineData1,
  lineData2 = data.lineData2,
  lineData3 = data.lineData3,
  initChart()
}

// 饼图Series
function initPieSeries(data) {
  return [
    {
      type: 'pie',
      radius: '50%',
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

// 折线图Series
function initLineSeries(data) {
  return [
    {
      name: data[0].name,
      type: 'line',
      stack: '总量',
      areaStyle: {
// 线性渐变，多用于折线柱形图，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置
        color: {
          type: 'linear',
          x: 1,                 // 左上角x
          y: 1,                 // 左上角y
          x2: 1,                // 右下角x
          y2: 0.2,                // 右下角y
          colorStops: [{
            offset: 0, color: '#04b4fc' // 0% 处的颜色
          }, {
            offset: 0.6, color: '#04b4fc' // 100% 处的颜色
          }],
          global: false // 缺省为 false
        }
      },
      emphasis: {
        focus: 'series'
      },
      data: data[0].data
    },
    {
      name: data[1].name,
      type: 'line',
      stack: '总量',
      areaStyle: {
        // 线性渐变，多用于折线柱形图，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置
        color: {
          type: 'linear',
          x: 1,                 // 左上角x
          y: 1,                 // 左上角y
          x2: 1,                // 右下角x
          y2: 0.2,                // 右下角y
          colorStops: [{
            offset: 0, color: '#095ef7' // 0% 处的颜色
          }, {
            offset: 0.6, color: '#095ef7' // 100% 处的颜色
          }],
          global: false // 缺省为 false
        }
      },
      emphasis: {
        focus: 'series'
      },
      data: data[1].data
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
    color: ['#3c90f7', '#55bfc0', '#5ebe67', '#f4cd49', '#e05667'],
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      x: '50%',
      y: 'center',
      width: 200,
      itemGap: 20, // 间隔
      //设置icon的大小
      itemWidth: 10,
      itemHeight: 10,
      data: chartData,
      formatter: function (name) {
        let target;
        let percent;
        for (let i = 0; i < chartData.length; i++) {
          if (name == chartData[i].name) {
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
            color: '#fff',
            fontSize: 12
          }
        }
      }

    },
    series: initPieSeries(chartData)
  }
}

// 构建折线图表1信息
function getLineData1(chartData) {
  return {
    color: ['#095ef7', '#04b4fc'],
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

// 构建折线图表2、3信息
function getLineData23(chartData) {
  return {
    color: ['#095ef7', '#04b4fc'],
    grid: {
      left: '20',
      top: '40',
      right: '20',
      bottom: '20',
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

// 4.折线图模块2
function initLineChart2() {
  myChart = echarts.init(lineDom2);
  myChart.setOption(getLineData23(lineData2));
  myChart.on('click', function (params) {
    // vm.obj.value = params.name
    vm.modalTitle = '自然人信用加减分'
    vm.modalColumns = vm.zrrColumns
    vm.modalData = vm.zrrScoreData
    vm.modal = true
  })
}

// 5.折线图模块3
function initLineChart3() {
  myChart = echarts.init(lineDom3);
  myChart.setOption(getLineData23(lineData3));
  myChart.on('click', function (params) {
    console.log(params);
    // vm.obj.value = params.name
    console.log(vm);
    vm.modalTitle = '企业法人信用加减分'
    vm.modalColumns = vm.frColumns
    vm.modalData = vm.frScoreData
    vm.modal = true
  })
}

function initChart(){
  initPieChart1()
  initPieChart2()
  initLineChart1()
  initLineChart2()
  initLineChart3()
}
initChart()
