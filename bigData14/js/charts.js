// 实例化对象
var myChart = null;
var pieDom1 = document.getElementById('pieChart1');
var pieDom2 = document.getElementById('pieChart2');
var barDom1 = document.getElementById('barChart1');
var barDom2 = document.getElementById('barChart2');
var barDom3 = document.getElementById('barChart3');
// 饼图数据
var pieData1 = [
  {value: 40, name: '(榴花分)信用承诺'},
  {value: 38, name: '榴花分(公益服务)'},
  {value: 32, name: '社会公益'},
  {value: 30, name: '(榴花分)荣誉激励'},
  {value: 28, name: '考核奖励'},
  {value: 26, name: '表彰奖励'}
]
var pieData2 = [
  {value: 40, name: '(榴花分)信用承诺'},
  {value: 38, name: '榴花分(公益服务)'},
  {value: 32, name: '社会公益'},
  {value: 30, name: '(榴花分)荣誉激励'},
  {value: 28, name: '考核奖励'},
  {value: 26, name: '表彰奖励'}
]
// 柱状图数据
var barData1 = {
  xData: ['住建局', '生态环境局', '医保局', '区人大办公室', '畜牧兽医服务中心', '市场监督管理局'],
  yData: [111, 63, 61, 49, 34, 32]
}
var barData2 = {
  xData: ['志愿服务', '社会公益', '居民公德', '村居管理', '表彰奖励', '国防义务', '社会容貌(负面)','公共秩序(负面)','社区建设(负面)','文明道德(负面)','综合管理(负面)'],
  yData: [6700, 1900, 4000, 7145, 2500, 4859, 3394, 1900, 4000, 7145, 2992],
}
var barData3 = {
  xData: ['考核奖励', '表彰奖励', '志愿服务', '社会公益', '党纪政务处分(负面)', '弄虚作假(负面)', '司法执行(负面)','行政处罚(负面)','仲裁裁决(负面)','行政强制(负面)','其他处理(负面)'],
  yData: [6700, 1900, 4000, 7145, 2500, 4859, 3394, 1900, 4000, 7145, 300],
}
// 饼图Series
function initPieSeries(data) {
  return [
    {
      type: 'pie',
      radius: ['20%', '50%'],
      center: ['50%', '40%'],
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

// 柱状图1Series
const colorList = ['#1691f8','#00f29e','#ceb904','#ff254b','#FFC900', '#FE5050','#0C71AC','#0599ca','#abe427','#49BE5F']
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
      bottom: '10%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      data: data.yData,
      axisLine: {
        show: false
      },
      splitLine: {
        lineStyle: {
          color: "#4a5e7a",
          width: 1,
          type: "solid"
        }
      },
      axisLabel: {
        show: false
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
        color: '#00dfff',
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

// 柱状图2、3Series
function initBar23Options(data) {
  return {
    grid: {
      left: "15%",
      top: "10%",
      right: "5%",
      bottom: "24%"
    },
    xAxis: {
      type: 'category',
      data: data.xData,
      axisLabel: {//x轴文字的配置
        show: true,
        interval: 0,
        rotate:40,
        textStyle: {
          color: "#fff",
        }
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#4a5e7a",
          width: 1,
          type: "solid"
        }
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {//y轴文字的配置
        show: true,
        textStyle: {
          color: "#fff",
        }
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#4a5e7a",
          width: 1,
          type: "solid"
        }
      },
      splitLine: {//分割线配置
        show: true,
        lineStyle: {
          color: "#284061",
        }
      },
    },
    series: [
      {
        data: data.yData.map((item, i) => {
          itemStyle = {
            color: i > 10 ? colorList[10]: colorList[i]
          }
          return {
            value: item,
            itemStyle: itemStyle
          };
        }),
        type: 'bar',
        barWidth: '20'
      }
    ]
  }
}

// 构建饼图图表信息
function getPieData(chartData) {
  return {
    color: ['#01ceff', '#00ffbf', '#f6d633', '#ff1e4f', '#f8af3c', '#6370f3'],
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

// 3.柱状图模块1
function initBarChart1() {
  myChart = echarts.init(barDom1);
  myChart.setOption(initBarOptions(barData1));
}
// 4.柱状图模块2
function initBarChart2() {
  myChart = echarts.init(barDom2);
  myChart.setOption(initBar23Options(barData2));
}
// 5.柱状图模块3
function initBarChart3() {
  myChart = echarts.init(barDom3);
  myChart.setOption(initBar23Options(barData3));
}

function initChart() {
  initPieChart1()
  initPieChart2()
  initBarChart1()
  initBarChart2()
  initBarChart3()
}

initChart()
