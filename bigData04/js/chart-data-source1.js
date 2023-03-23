// 1.饼图1模块
// (function () {
//   // 实例化对象
//   var dom = document.getElementById("pieChart11");
//   var myChart = echarts.init(dom);
//   var panelData1 = [
//     {icon: 'circle', name: '信用良好', value: 7500, percent: 33.3},
//     {icon: 'circle', name: '守信', value: 4500, percent: 16.2},
//     {icon: 'circle', name: '信用一般', value: 3000, percent: 12.5},
//     {icon: 'circle', name: '失信', value: 4500, percent: 16.2},
//     {icon: 'circle', name: '严重失信', value: 2000, percent: 8.5},
//     {icon: 'circle', name: '违法', value: 1500, percent: 6.4},
//     {icon: 'circle', name: '其他', value: 500, percent: 2.1}
//   ];
//   var option = {
//     title: {
//       text: '',
//       subtext: '',
//       left: 'right'
//     },
//     color: ["#b30f56", "#b20f78", "#d78000", "#15b589", "#017fcc", "#0054d8", "#021bcd"],
//     tooltip: {
//       trigger: 'item'
//     },
//     legend: {
//       orient: 'vertical',
//       x: '50%',
//       y: 'center',
//       width: 200,
//       itemGap: 20, // 间隔
//       //设置icon的大小
//       itemWidth: 10,
//       itemHeight: 10,
//       data: panelData1,
//       formatter: function (name) {
//         var target;
//         var percent;
//         for (var i = 0; i < panelData1.length; i++) {
//           if (name == panelData1[i].name) {
//             target = "" + (panelData1[i].value) + "条"
//             percent = "" + (panelData1[i].percent) + "%"
//             break;
//           }
//         }
//         return '{a|' + name + '}' + '{value|' + target + '}{percent|' + percent + '}'
//       },
//       textStyle: {
//         rich: {
//           a: {
//             width: 55,
//             fontSize: 12,
//             color: ['#fff'],
//
//           },
//           value: {
//             width: 50,
//             color: '#ffffff',
//             fontSize: 12,
//             padding: [0, 15],
//           },
//           percent: {
//             width: 40,
//             color: '#ffffff',
//             fontSize: 12,
//           },
//         }
//       },
//
//     },
//     series: [
//       {
//         name: '访问来源',
//         type: 'pie',
//         radius: '50%',
//         center: ['25%', '50%'],
//         label: {
//           normal: {
//             show: false,
//           },
//         },
//         labelLine: {
//           normal: {
//             show: false
//           }
//         },
//         data: panelData1,
//         emphasis: {
//           itemStyle: {
//             shadowBlur: 10,
//             shadowOffsetX: 0,
//             shadowColor: 'rgba(0, 0, 0, 0.5)'
//           }
//         }
//       }
//     ]
//   };
//
//   // 把配置给实例对象
//   if (option && typeof option === 'object') {
//     myChart.setOption(option);
//   }
//   ;
//
// })();

// 2.饼图2模块
(function () {
  // 实例化对象
  var dom = document.getElementById("pieChart1");
  var myChart = echarts.init(dom);
  var panelData2 = [
    {icon: 'circle', name: '税收信息', value: 4544, percent: 33.3},
    {icon: 'circle', name: '司法信息', value: 4021, percent: 16.2},
    {icon: 'circle', name: '行政处罚信息', value: 3813, percent: 12.5},
    {icon: 'circle', name: '行政许可信息', value: 3541, percent: 16.2},
    {icon: 'circle', name: '严重违法失信', value: 3231, percent: 8.5},
    {icon: 'circle', name: '企业登记信息', value: 2831, percent: 6.4},
    {icon: 'circle', name: '年度报告', value: 2500, percent: 2.1},
    {icon: 'circle', name: '经营异常', value: 2100, percent: 2.1},
    {icon: 'circle', name: '行政检查', value: 1950, percent: 2.1},
    {icon: 'circle', name: '其他', value: 1780, percent: 2.1},
  ];
  var option = {
    color: ["#5A77D2", "#5470C6", "#91CC75", "#FAC858", "#EE6666", "#73C0DE", "#3BA272", "#FC8452", "#9A60B4", "#EA7CCC"],
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      x: '50%',
      y: 'center',
      itemGap: 20, // 间隔
      //设置icon的大小
      itemWidth: 10,
      itemHeight: 10,
      data: panelData2,
      formatter: function (name) {
        var target;
        // var percent;
        for (var i = 0; i < panelData2.length; i++) {
          if (name == panelData2[i].name) {
            name = name + " | " + (panelData2[i].percent) + "%"
            target = "" + (panelData2[i].value)
            break;
          }
        }
        // return '{a|' + name + '}' + '{percent|' + percent + '}' + '{value|' + target + '}'
        return '{a|' + name + '}' + '{value|' + target + '}'
      },
      textStyle: {
        rich: {
          a: {
            width: 100,
            fontSize: 12,
            color: ['#fff'],
          },
          value: {
            width: 50,
            align: 'right',
            color: '#969595',
            fontSize: 12,
            padding: [0, 15],
          },
        }
      },
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: ['8%', '55%'],
        center: ['25%', '50%'],
        roseType: 'radius',
        itemStyle: {
          borderRadius: 5
        },
        label: {
          normal: {
            show: false,
          },
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: panelData2,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  // 把配置给实例对象
  if (option && typeof option === 'object') {
    myChart.setOption(option);
  }
  ;

})();

// 3.折线图模块1
(function () {
  // 实例化对象
  var dom = document.getElementById("lineChart1");
  var myChart = echarts.init(dom);

  var option = {
    color: ['#1891d8'],
    grid: {
      left: "0",
      top: "40",
      right: "15",
      bottom: "4",
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      // 设置x轴标签文字样式
      // x轴的文字颜色和大小
      axisLabel: {
        color: "rgba(255,255,255,0.8)",
        fontSize: "12"
      },
    },
    yAxis: {
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
        color: "rgba(255,255,255,.8)",
        fontSize: "12",
      },
      axisLine: {
        // 如果想要设置单独的线条样式
        lineStyle: {
          color: "rgba(255,255,255,.1)",
          width: 1,
          type: "solid"
        }
      },
      // y轴分割线的颜色
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.1)"
        }
      }
    },
    series: [{
      data: [150, 100, 105, 110, 125, 100, 0, 0, 0, 0, 0, 0],
      type: 'line',
      areaStyle: {
        // 线性渐变，多用于折线柱形图，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置
        color: {
          type: 'linear',
          x: 1,                 // 左上角x
          y: 1,                 // 左上角y
          x2: 1,                // 右下角x
          y2: 0.2,                // 右下角y
          colorStops: [{
            offset: 0, color: 'rgba(255,255,255,0.1)' // 0% 处的颜色
          }, {
            offset: 1, color: 'rgba(24,145,216,0.8)' // 100% 处的颜色
          }],
          global: false // 缺省为 false
        },
      }
    }]
  };
  // 把配置给实例对象
  if (option && typeof option === 'object') {
    myChart.setOption(option);
  }
  ;
})();


// 4.饼图模块2
(function () {
  // 实例化对象
  var dom = document.getElementById("pieChart2");
  var myChart = echarts.init(dom);

  var panelData4 = [
    {icon: 'circle', name: '金融行业', value: 4544, percent: 33.3},
    {icon: 'circle', name: '保险行业', value: 3321, percent: 16.2},
    {icon: 'circle', name: '建筑行业', value: 3113, percent: 12.5},
    {icon: 'circle', name: '医疗行业', value: 2341, percent: 16.2},
    {icon: 'circle', name: '教育行业', value: 1231, percent: 8.5},
    {icon: 'circle', name: '其他', value: 10, percent: 6.4}
  ];
  var option = {
    color: ["#9A60B4", "#EE6666", "#91CC75", "#73C0DE", "#3BA272", "#FC8452"],
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      x: '50%',
      y: 'center',
      itemGap: 20, // 间隔
      //设置icon的大小
      itemWidth: 10,
      itemHeight: 10,
      data: panelData4,
      formatter: function (name) {
        var target;
        // var percent;
        for (var i = 0; i < panelData4.length; i++) {
          if (name == panelData4[i].name) {
            name = name + " | " + (panelData4[i].percent) + "%"
            target = "" + (panelData4[i].value)
            break;
          }
        }
        return '{a|' + name + '}' + '{value|' + target + '}'
      },
      textStyle: {
        rich: {
          a: {
            width: 100,
            fontSize: 12,
            color: ['#fff'],
          },
          value: {
            width: 50,
            align: 'right',
            color: '#969595',
            fontSize: 12,
            padding: [0, 15],
          },
        }
      },
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: ['45%', '80%'],
        center: ['25%', '50%'],
        label: {
          normal: {
            show: false,
          },
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: panelData4,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  // 把配置给实例对象
  if (option && typeof option === 'object') {
    myChart.setOption(option);
  }
  ;

})();


// 5.饼图模块3
(function () {
  // 实例化对象
  var dom = document.getElementById("pieChart3");
  var myChart = echarts.init(dom);

  var panelData5 = [
    {icon: 'circle', name: '金融行业', value: 4544, percent: 33.3},
    {icon: 'circle', name: '保险行业', value: 3321, percent: 16.2},
    {icon: 'circle', name: '建筑行业', value: 3113, percent: 12.5},
    {icon: 'circle', name: '医疗行业', value: 2341, percent: 16.2},
    {icon: 'circle', name: '教育行业', value: 1231, percent: 8.5},
    {icon: 'circle', name: '其他', value: 10, percent: 6.4}
  ];
  var option = {
    title: {
      text: '',
      subtext: '',
      left: 'right'
    },
    color: ["#9A60B4", "#EE6666", "#91CC75", "#73C0DE", "#3BA272", "#FC8452"],
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      x: '50%',
      y: 'center',
      itemGap: 20, // 间隔
      //设置icon的大小
      itemWidth: 10,
      itemHeight: 10,
      data: panelData5,
      formatter: function (name) {
        var target;
        // var percent;
        for (var i = 0; i < panelData5.length; i++) {
          if (name == panelData5[i].name) {
            name = name + " | " + (panelData5[i].percent) + "%"
            target = "" + (panelData5[i].value)
            break;
          }
        }
        return '{a|' + name + '}' + '{value|' + target + '}'
      },
      textStyle: {
        rich: {
          a: {
            width: 100,
            fontSize: 12,
            color: ['#fff'],
          },
          value: {
            width: 50,
            align: 'right',
            color: '#969595',
            fontSize: 12,
            padding: [0, 15],
          },
        }
      },
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: ['45%', '80%'],
        center: ['25%', '50%'],
        label: {
          normal: {
            show: false,
          },
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: panelData5,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  // 把配置给实例对象
  if (option && typeof option === 'object') {
    myChart.setOption(option);
  }
  ;

})();

// 6.柱状图模块1
(function () {
  // 实例化对象
  var dom = document.getElementById("barChart1");
  var myChart = echarts.init(dom);

  var option = {
    color: ['#4263ea'],
    grid: {
      left: "40",
      top: "10",
      right: "40",
      bottom: "30",
      containLabel: true
    },
    series: [{
      data: [6500, 3000, 5000, 9000, 7000, 10000, 5000, 7000, 3000, 2000],
      type: 'bar',
      barWidth: "25%",
      itemStyle: {
        emphasis: {
          barBorderRadius: 7
        },
        normal: {
          //柱体的颜色
          //右，下，左，上（1，0，0，0）表示从正右开始向左渐变
          color: function (params) {
            var colorList = [
              ['#5470C5', '#354880'],
              ['#375DD7', '#043CE8'],
              ['#3BA172', '#2C7D58'],
              ['#9365ED', '#BD038A'],
              ['#035DB3', '#03336F'],
              ['#FB8352', '#D7987E'],
              ['#9366ED', '#9A60B5'],
              ['#EA7BCB', '#BD028A'],
              ['#13B3E3', '#C0EEFC'],
              ['#91CC75', '#A9C99A'],
            ];
            var colorItem = colorList[params.dataIndex];
            return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: colorItem[0]
              },
              {
                offset: 1,
                color: colorItem[1]
              }
            ], false);
          },
          barBorderRadius: 15,
        },
      }
    }],
    xAxis: {
      type: 'category',
      data: ["建筑", "金融", "医疗", "政务部门", "教育", "消费品", "交通", "房地产", "服务业", "其他"],
      // 设置x轴标签文字样式
      // x轴的文字颜色和大小
      axisLabel: {
        color: "rgba(255,255,255,0.8)",
        fontSize: "12"
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: "rgba(255,255,255,.8)",
        fontSize: "12"
      },
      axisLine: {
        // 如果想要设置单独的线条样式
        lineStyle: {
          color: "rgba(255,255,255,.1)",
          width: 1,
          type: "solid"
        }
      },
      // y轴分割线的颜色
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.1)"
        }
      }
    },
  };

  // 把配置给实例对象
  if (option && typeof option === 'object') {
    myChart.setOption(option);
  }
  ;

})();