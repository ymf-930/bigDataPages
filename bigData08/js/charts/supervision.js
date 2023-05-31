// 实例化对象
let myChart = null;
const pieDom1 = document.getElementById('pieChart1');
const pieDom2 = document.getElementById('pieChart2');

const pieDom3 = document.getElementById('pieChart3');
const pieDom4 = document.getElementById('pieChart4');
const pieDom5 = document.getElementById('pieChart5');
const pieDom6 = document.getElementById('pieChart6');
const pieDom7 = document.getElementById('pieChart7');
const pieDom8 = document.getElementById('pieChart8');

const wordCloudDom1 = document.getElementById('wordCloudChart1');

// 饼图数据
let pieData1 = [
  {icon: 'rect', name: 'AAA', value: 29.60},
  {icon: 'rect', name: 'AA', value: 21.63},
  {icon: 'rect', name: 'A+', value: 20.28},
  {icon: 'rect', name: 'A', value: 15.25},
  {icon: 'rect', name: 'A-', value: 13.24}
]
let pieData2 = [
  {icon: 'rect', name: 'AAA', value: 29.60},
  {icon: 'rect', name: 'AA', value: 21.63},
  {icon: 'rect', name: 'A+', value: 20.28},
  {icon: 'rect', name: 'A', value: 15.25},
  {icon: 'rect', name: 'A-', value: 13.24}
]

// 饼图数据
let pieData3 = [
  {icon: 'rect', name: 'AAA', value: 29.60},
  {icon: 'rect', name: 'AA', value: 21.63},
  {icon: 'rect', name: 'A+', value: 20.28},
  {icon: 'rect', name: 'A', value: 15.25},
  {icon: 'rect', name: 'A-', value: 13.24}
]
let pieData4 = [
  {icon: 'rect', name: 'AAA', value: 29.60},
  {icon: 'rect', name: 'AA', value: 21.63},
  {icon: 'rect', name: 'A+', value: 20.28},
  {icon: 'rect', name: 'A', value: 15.25},
  {icon: 'rect', name: 'A-', value: 13.24}
]
let pieData5 = [
  {icon: 'rect', name: 'AAA', value: 29.60},
  {icon: 'rect', name: 'AA', value: 21.63},
  {icon: 'rect', name: 'A+', value: 20.28},
  {icon: 'rect', name: 'A', value: 15.25},
  {icon: 'rect', name: 'A-', value: 13.24}
]
let pieData6 = [
  {icon: 'rect', name: 'AAA', value: 29.60},
  {icon: 'rect', name: 'AA', value: 21.63},
  {icon: 'rect', name: 'A+', value: 20.28},
  {icon: 'rect', name: 'A', value: 15.25},
  {icon: 'rect', name: 'A-', value: 13.24}
]
let pieData7 = [
  {icon: 'rect', name: 'AAA', value: 29.60},
  {icon: 'rect', name: 'AA', value: 21.63},
  {icon: 'rect', name: 'A+', value: 20.28},
  {icon: 'rect', name: 'A', value: 15.25},
  {icon: 'rect', name: 'A-', value: 13.24}
]
let pieData8 = [
  {icon: 'rect', name: 'AAA', value: 29.60},
  {icon: 'rect', name: 'AA', value: 21.63},
  {icon: 'rect', name: 'A+', value: 20.28},
  {icon: 'rect', name: 'A', value: 15.25},
  {icon: 'rect', name: 'A-', value: 13.24}
]

let graphicData = [
  {name: '食品', value: '13519'},
  {name: '服务机构', value: '13519'},
  {name: '基本信息', value: '14531'},
  {name: '合规情况', value: '14531'},
  {name: '经营情况', value: '14531'},
  {name: '知识产权', value: '14531'},
  {name: '舆情关联', value: '14531'},
  {name: '失信信息', value: '14531'},
]
const colors = [
  ['#f73b3a', '#ff815e', '#ff949c', '#ffd240', '#43cf7c'],
  ['#1890ff', '#18e5e6', '#02d1ac', '#ffd240', '#a5d63f'],
  ['#2480f2', '#27dff7', '#36b985', '#562cf2', '#ffc300'],
  ['#1533ed', '#693eff', '#8d43ff', '#209fed', '#1b6bed'],
  ['#0075f7', '#4aa0f7', '#7cb9f7', '#add2f7', '#dfebf7'],
  ['#693eff', '#5935d9', '#3a228c', '#8881ff', '#8d43ff'],
  ['#562cf2', '#18e5e6', '#1890ff', '#ffc300', '#ff4d65'],
  ['#1890ff', '#27dff7', '#35b984', '#ffeb3b', '#562cf2'],
]


// 词云图数据
let wordCloudData1 = [
  {name: '教育局', value: 4181},
  {name: '法院', value: 4186},
  {name: '公安局', value: 4055},
  {name: '机构名称1', value: 2467},
  {name: '机构名称2', value: 2244},
  {name: '司法局', value: 1898},
  {name: '工商局', value: 1484},
  {name: '机构名称', value: 1112},
  {name: '机构名称1', value: 965},
  {name: '机构名称4', value: 847},
  {name: '机构名称5', value: 582},
  {name: '机构名称6', value: 555},
  {name: '机构名称7', value: 550},
  {name: '机构名称8', value: 462}
]

// 饼图Series
function initPieSeries(data) {
  return [
    {
      type: 'pie',
      radius: ['38%', '65%'],
      center: ['50%', '40%'],
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

// 构建饼图图表信息
function getPieData(chartData, graphicData, showLegend = true) {
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
        left: 'center',
        top: '34%',
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
        left: 'center',
        top: '42%',
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
      show: showLegend,
      orient: 'horizontal',
      x: 'center',
      y: 'bottom',
      width: '100%',
      itemGap: 15, // 间隔
      //设置icon的大小
      itemWidth: 8,
      itemHeight: 8,
      data: chartData,
      textStyle: {
        fontSize: 12,
        color: '#fff'
      }
    },
    series: initPieSeries(chartData)
  }
}


// 饼图模块1-8
function initPieCharts(pieDom, color, pieData, graphicData, showLegend) {
  myChart = echarts.init(pieDom);
  myChart.setOption({
    color: color,
    ...getPieData(pieData, graphicData, showLegend)
  });
}

// 饼图模块1-8
function initWordCloudCharts() {
  myChart = echarts.init(wordCloudDom1);
  myChart.setOption({
    title: {},
    tooltip: {},
    series: [{
      type: 'wordCloud',
      gridSize: 20,
      sizeRange: [12, 50],
      rotationRange: [0, 0],
      shape: 'circle',
      color: ['#04a4fc', '#08a4fc', '#08a4fc', '#08a4fc', '#08a4fc'],
      textStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowColor: '#333'
        }
      },
      data: wordCloudData1
    }]
  });
}

function initChart() {
  initPieCharts(pieDom1, colors[0], pieData1, graphicData[0])
  initPieCharts(pieDom2, colors[1], pieData2, graphicData[1])
  initPieCharts(pieDom3, colors[2], pieData3, graphicData[2], false)
  initPieCharts(pieDom4, colors[3], pieData4, graphicData[3], false)
  initPieCharts(pieDom5, colors[4], pieData5, graphicData[4], false)
  initPieCharts(pieDom6, colors[5], pieData6, graphicData[5], false)
  initPieCharts(pieDom7, colors[6], pieData7, graphicData[6], false)
  initPieCharts(pieDom8, colors[7], pieData8, graphicData[7], false)
  initWordCloudCharts()
}

initChart()

