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

const offsetX = 34.8;
const offsetY = 17.4;
// 绘制左侧面
const CubeLeft = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0,
  },
  buildPath: function (ctx, shape) {
    // 会canvas的应该都能看得懂，shape是从custom传入的
    const xAxisPoint = shape.xAxisPoint;
    const c0 = [shape.x, shape.y];
    const c1 = [shape.x - offsetX, shape.y - offsetY];
    const c2 = [xAxisPoint[0] - offsetX, xAxisPoint[1] - offsetY];
    const c3 = [xAxisPoint[0], xAxisPoint[1]];
    ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath();
  },
});
// 绘制右侧面
const CubeRight = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0,
  },
  buildPath: function (ctx, shape) {
    const xAxisPoint = shape.xAxisPoint;
    const c1 = [shape.x, shape.y];
    const c2 = [xAxisPoint[0], xAxisPoint[1]];
    const c3 = [xAxisPoint[0] + offsetX, xAxisPoint[1] - offsetY];
    const c4 = [shape.x + offsetX, shape.y - offsetY];
    ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
  },
});
// 绘制顶面
const CubeTop = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0,
  },
  buildPath: function (ctx, shape) {
    const c1 = [shape.x, shape.y];
    const c2 = [shape.x + offsetX, shape.y - offsetY]; //右点
    const c3 = [shape.x, shape.y - offsetX];
    const c4 = [shape.x - offsetX, shape.y - offsetY];
    ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
  },
});
// 注册三个面图形
echarts.graphic.registerShape('CubeLeft', CubeLeft);
echarts.graphic.registerShape('CubeRight', CubeRight);
echarts.graphic.registerShape('CubeTop', CubeTop);

const MAX = [1000, 1000, 1000, 1000, 1000, 1000];

function initBar2Series(data) {
  return [{
    type: 'custom',
    renderItem: function (params, api) {
      const location = api.coord([api.value(0), api.value(1)])
      return {
        type: 'group',
        children: [{
          type: 'CubeLeft',
          shape: {
            api,
            x: location[0],
            y: location[1],
            xAxisPoint: api.coord([api.value(0), 0])
          },
          style: {
            fill: 'rgba(47,102,192,.27)'
          }
        }, {
          type: 'CubeRight',
          shape: {
            api,
            x: location[0],
            y: location[1],
            xAxisPoint: api.coord([api.value(0), 0])
          },
          style: {
            fill: 'rgba(59,128,226,.27)'
          }
        }, {
          type: 'CubeTop',
          shape: {
            api,
            x: location[0],
            y: location[1],
            xAxisPoint: api.coord([api.value(0), 0])
          },
          style: {
            fill: 'rgba(72,156,221,.27)'
          }
        }]
      }
    },
    data: MAX
  },
    {
      type: 'custom',
      renderItem: (params, api) => {
        const location = api.coord([api.value(0), api.value(1)]);
        return {
          type: 'group',
          children: [{
            type: 'CubeLeft',
            shape: {
              api,
              xValue: api.value(0),
              yValue: api.value(1),
              x: location[0],
              y: location[1],
              xAxisPoint: api.coord([api.value(0), 0]),
            },
            style: {
              fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: params.dataIndex===0?'#fbfb93':'#33BCEB',
              },
                {
                  offset: 1,
                  color: params.dataIndex===0?'#fbcb41':'#337CEB',
                },
              ]),
            },
          },
            {
              type: 'CubeRight',
              shape: {
                api,
                xValue: api.value(0),
                yValue: api.value(1),
                x: location[0],
                y: location[1],
                xAxisPoint: api.coord([api.value(0), 0]),
              },
              style: {
                fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: params.dataIndex===0?'#fbfb93':'#28A2CE',
                },
                  {
                    offset: 1,
                    color: params.dataIndex===0?'#fbcb41':'#1A57B7',
                  },
                ]),
              },
            },
            {
              type: 'CubeTop',
              shape: {
                api,
                xValue: api.value(0),
                yValue: api.value(1),
                x: location[0],
                y: location[1],
                xAxisPoint: api.coord([api.value(0), 0]),
              },
              style: {
                fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: params.dataIndex===0?'#fbfb93':'#43C4F1',
                },
                  {
                    offset: 1,
                    color: params.dataIndex===0?'#fbcb41':'#28A2CE',
                  },
                ]),
              },
            },
          ],
        };
      },
      data: centerData.yData,
    },
    {
      type: 'bar',
      label: {
        normal: {
          show: true,
          position: 'top',
          fontSize: 16,
          color: '#43C4F1',
          offset: [0, -50],
        },
      },
      itemStyle: {
        color: 'transparent',
      },
      tooltip: {},
      data: centerData.yData,
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

function getBar2Data(chartData) {
  return {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
      formatter: function (params, ticket, callback) {
        const item = params[1];
        return item.name + ' : ' + item.value;
      },
    },
    grid: {
      left: '10%',
      right: '10%',
      top: '15%',
      bottom: '10%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: centerData.xData,
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        fontSize: 14,
        color: '#fff',
      },
    },
    yAxis: {
      type: 'value',
      axisLine: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      boundaryGap: ['0%', '0%'],
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