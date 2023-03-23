// 1.饼图模块
(function () {
  // 实例化对象
  var dom = document.getElementById("pieChart1");
  var myChart = echarts.init(dom);

  var panelData4 = [
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
    color: ["#256eed", "#1890ff", "#00baad", "#ff6672", "#df1020", "#7c4bd8", "#ac33c1", "#ff5733", "#ff9f26"],
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
        name: '',
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
// 2.折线图模块
(function () {
  // 实例化对象
  var dom = document.getElementById("lineChart1");
  var myChart = echarts.init(dom);

  var option = {
    color: ['#1891d8'],
    grid: {
      left: "10",
      top: "80",
      right: "15",
      bottom: "35",
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

// 专项预警模块
// 3.水球图模块1
(function () {
  // 实例化对象
  var dom = document.getElementById("zliquidFill1");
  var myChart = echarts.init(dom);

  var option = {
    backgroundColor: '',
    series: [{
      type: 'liquidFill',
      radius: '80%',
      data: [0.4],
      backgroundStyle: {
        color: {
          type: 'radial',
          x: 0.5,
          y: 0.5,
          r: 0.5,
          colorStops: [{
            offset: 0,
            color: 'rgba(0,24,55, 0)'
          },
            {
              offset: 0.75,
              color: 'rgba(0,24,55, 0)'
            },
            {
              offset: 1,
              color: 'rgba(37,237,259, 1)'
            }],
          globalCoord: false
        },
      },
      outline: {
        borderDistance: 0,
        itemStyle: {
          borderWidth: 0,
          borderColor: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0,
              color: 'rgba(50,115,256, 1)'
            }, {
              offset: 0.5,
              color: 'rgba(50,115,233, .75)'
            }, {
              offset: 1,
              color: 'rgba(50,115,233, 1)'
            }],
            globalCoord: false
          },
        }
      },
      color: ['#0493c7'],
      label: {
        normal: {
          formatter: '',
        },
      },
    }]
  };
  // 把配置给实例对象
  myChart.setOption(option);
})();

// 3.水球图模块2
(function () {
  // 实例化对象
  var dom = document.getElementById("zliquidFill2");
  var myChart = echarts.init(dom);

  var option = {
    backgroundColor: '',
    series: [{
      type: 'liquidFill',
      radius: '80%',
      data: [0.4],
      backgroundStyle: {
        color: {
          type: 'radial',
          x: 0.5,
          y: 0.5,
          r: 0.5,
          colorStops: [{
            offset: 0,
            color: 'rgba(0,24,55, 0)'
          },
            {
              offset: 0.75,
              color: 'rgba(0,24,55, 0)'
            },
            {
              offset: 1,
              color: 'rgba(37,237,259, 1)'
            }],
          globalCoord: false
        },
      },
      outline: {
        borderDistance: 0,
        itemStyle: {
          borderWidth: 0,
          borderColor: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0,
              color: 'rgba(50,115,256, 1)'
            }, {
              offset: 0.5,
              color: 'rgba(50,115,233, .75)'
            }, {
              offset: 1,
              color: 'rgba(50,115,233, 1)'
            }],
            globalCoord: false
          },
        }
      },
      color: ['#0493c7'],
      label: {
        normal: {
          formatter: '',
        },
      },
    }]
  };
  // 把配置给实例对象
  if (option && typeof option === 'object') {
    myChart.setOption(option);
  }
  ;
})();

// 3.水球图模块3
(function () {
  // 实例化对象
  var dom = document.getElementById("zliquidFill3");
  var myChart = echarts.init(dom);

  var option = {
    backgroundColor: '',
    series: [{
      type: 'liquidFill',
      radius: '80%',
      data: [0.4],
      backgroundStyle: {
        color: {
          type: 'radial',
          x: 0.5,
          y: 0.5,
          r: 0.5,
          colorStops: [{
            offset: 0,
            color: 'rgba(0,24,55, 0)'
          },
            {
              offset: 0.75,
              color: 'rgba(0,24,55, 0)'
            },
            {
              offset: 1,
              color: 'rgba(37,237,259, 1)'
            }],
          globalCoord: false
        },
      },
      outline: {
        borderDistance: 0,
        itemStyle: {
          borderWidth: 0,
          borderColor: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0,
              color: 'rgba(50,115,256, 1)'
            }, {
              offset: 0.5,
              color: 'rgba(50,115,233, .75)'
            }, {
              offset: 1,
              color: 'rgba(50,115,233, 1)'
            }],
            globalCoord: false
          },
        }
      },
      color: ['#0493c7'],
      label: {
        normal: {
          formatter: '',
        },
      },
    }]
  };
  // 把配置给实例对象
  if (option && typeof option === 'object') {
    myChart.setOption(option);
  }
  ;
})();

// 3.水球图模块4
(function () {
  // 实例化对象
  var dom = document.getElementById("zliquidFill4");
  var myChart = echarts.init(dom);

  var option = {
    backgroundColor: '',
    series: [{
      type: 'liquidFill',
      radius: '80%',
      data: [0.4],
      backgroundStyle: {
        color: {
          type: 'radial',
          x: 0.5,
          y: 0.5,
          r: 0.5,
          colorStops: [{
            offset: 0,
            color: 'rgba(0,24,55, 0)'
          },
            {
              offset: 0.75,
              color: 'rgba(0,24,55, 0)'
            },
            {
              offset: 1,
              color: 'rgba(37,237,259, 1)'
            }],
          globalCoord: false
        },
      },
      outline: {
        borderDistance: 0,
        itemStyle: {
          borderWidth: 0,
          borderColor: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0,
              color: 'rgba(50,115,256, 1)'
            }, {
              offset: 0.5,
              color: 'rgba(50,115,233, .75)'
            }, {
              offset: 1,
              color: 'rgba(50,115,233, 1)'
            }],
            globalCoord: false
          },
        }
      },
      color: ['#0493c7'],
      label: {
        normal: {
          formatter: '',
        },
      },
    }]
  };
  // 把配置给实例对象
  if (option && typeof option === 'object') {
    myChart.setOption(option);
  }
  ;
})();

// 3.水球图模块5
(function () {
  // 实例化对象
  var dom = document.getElementById("zliquidFill5");
  var myChart = echarts.init(dom);

  var option = {
    backgroundColor: '',
    series: [{
      type: 'liquidFill',
      radius: '80%',
      data: [0.4],
      backgroundStyle: {
        color: {
          type: 'radial',
          x: 0.5,
          y: 0.5,
          r: 0.5,
          colorStops: [{
            offset: 0,
            color: 'rgba(0,24,55, 0)'
          },
            {
              offset: 0.75,
              color: 'rgba(0,24,55, 0)'
            },
            {
              offset: 1,
              color: 'rgba(37,237,259, 1)'
            }],
          globalCoord: false
        },
      },
      outline: {
        borderDistance: 0,
        itemStyle: {
          borderWidth: 0,
          borderColor: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0,
              color: 'rgba(50,115,256, 1)'
            }, {
              offset: 0.5,
              color: 'rgba(50,115,233, .75)'
            }, {
              offset: 1,
              color: 'rgba(50,115,233, 1)'
            }],
            globalCoord: false
          },
        }
      },
      color: ['#0493c7'],
      label: {
        normal: {
          formatter: '',
        },
      },
    }]
  };
  // 把配置给实例对象
  if (option && typeof option === 'object') {
    myChart.setOption(option);
  }
  ;
})();

// 3.水球图模块6
(function () {
  // 实例化对象
  var dom = document.getElementById("zliquidFill6");
  var myChart = echarts.init(dom);

  var option = {
    backgroundColor: '',
    series: [{
      type: 'liquidFill',
      radius: '80%',
      data: [0.4],
      backgroundStyle: {
        color: {
          type: 'radial',
          x: 0.5,
          y: 0.5,
          r: 0.5,
          colorStops: [{
            offset: 0,
            color: 'rgba(0,24,55, 0)'
          },
            {
              offset: 0.75,
              color: 'rgba(0,24,55, 0)'
            },
            {
              offset: 1,
              color: 'rgba(37,237,259, 1)'
            }],
          globalCoord: false
        },
      },
      outline: {
        borderDistance: 0,
        itemStyle: {
          borderWidth: 0,
          borderColor: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0,
              color: 'rgba(50,115,256, 1)'
            }, {
              offset: 0.5,
              color: 'rgba(50,115,233, .75)'
            }, {
              offset: 1,
              color: 'rgba(50,115,233, 1)'
            }],
            globalCoord: false
          },
        }
      },
      color: ['#0493c7'],
      label: {
        normal: {
          formatter: '',
        },
      },
    }]
  };
  // 把配置给实例对象
  if (option && typeof option === 'object') {
    myChart.setOption(option);
  }
  ;
})();

// 常规预警模块

// 4.水球图模块1
(function () {
  // 实例化对象
  var dom = document.getElementById("cliquidFill1");
  var myChart = echarts.init(dom);

  var option = {
    backgroundColor: '',
    series: [{
      type: 'liquidFill',
      radius: '80%',
      data: [0.4],
      backgroundStyle: {
        color: {
          type: 'radial',
          x: 0.5,
          y: 0.5,
          r: 0.5,
          colorStops: [{
            offset: 0,
            color: 'rgba(0,24,55, 0)'
          },
            {
              offset: 0.75,
              color: 'rgba(0,24,55, 0)'
            },
            {
              offset: 1,
              color: 'rgba(37,237,259, 1)'
            }],
          globalCoord: false
        },
      },
      outline: {
        borderDistance: 0,
        itemStyle: {
          borderWidth: 0,
          borderColor: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0,
              color: 'rgba(50,115,256, 1)'
            }, {
              offset: 0.5,
              color: 'rgba(50,115,233, .75)'
            }, {
              offset: 1,
              color: 'rgba(50,115,233, 1)'
            }],
            globalCoord: false
          },
        }
      },
      color: ['#0493c7'],
      label: {
        normal: {
          formatter: '',
        },
      },
    }]
  };
  // 把配置给实例对象
  myChart.setOption(option);
})();

// 4.水球图模块2
(function () {
  // 实例化对象
  var dom = document.getElementById("cliquidFill2");
  var myChart = echarts.init(dom);

  var option = {
    backgroundColor: '',
    series: [{
      type: 'liquidFill',
      radius: '80%',
      data: [0.4],
      backgroundStyle: {
        color: {
          type: 'radial',
          x: 0.5,
          y: 0.5,
          r: 0.5,
          colorStops: [{
            offset: 0,
            color: 'rgba(0,24,55, 0)'
          },
            {
              offset: 0.75,
              color: 'rgba(0,24,55, 0)'
            },
            {
              offset: 1,
              color: 'rgba(37,237,259, 1)'
            }],
          globalCoord: false
        },
      },
      outline: {
        borderDistance: 0,
        itemStyle: {
          borderWidth: 0,
          borderColor: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0,
              color: 'rgba(50,115,256, 1)'
            }, {
              offset: 0.5,
              color: 'rgba(50,115,233, .75)'
            }, {
              offset: 1,
              color: 'rgba(50,115,233, 1)'
            }],
            globalCoord: false
          },
        }
      },
      color: ['#0493c7'],
      label: {
        normal: {
          formatter: '',
        },
      },
    }]
  };
  // 把配置给实例对象
  if (option && typeof option === 'object') {
    myChart.setOption(option);
  }
  ;
})();

// 4.水球图模块3
(function () {
  // 实例化对象
  var dom = document.getElementById("cliquidFill3");
  var myChart = echarts.init(dom);

  var option = {
    backgroundColor: '',
    series: [{
      type: 'liquidFill',
      radius: '80%',
      data: [0.4],
      backgroundStyle: {
        color: {
          type: 'radial',
          x: 0.5,
          y: 0.5,
          r: 0.5,
          colorStops: [{
            offset: 0,
            color: 'rgba(0,24,55, 0)'
          },
            {
              offset: 0.75,
              color: 'rgba(0,24,55, 0)'
            },
            {
              offset: 1,
              color: 'rgba(37,237,259, 1)'
            }],
          globalCoord: false
        },
      },
      outline: {
        borderDistance: 0,
        itemStyle: {
          borderWidth: 0,
          borderColor: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0,
              color: 'rgba(50,115,256, 1)'
            }, {
              offset: 0.5,
              color: 'rgba(50,115,233, .75)'
            }, {
              offset: 1,
              color: 'rgba(50,115,233, 1)'
            }],
            globalCoord: false
          },
        }
      },
      color: ['#0493c7'],
      label: {
        normal: {
          formatter: '',
        },
      },
    }]
  };
  // 把配置给实例对象
  if (option && typeof option === 'object') {
    myChart.setOption(option);
  }
  ;
})();

// 4.水球图模块4
(function () {
  // 实例化对象
  var dom = document.getElementById("cliquidFill4");
  var myChart = echarts.init(dom);

  var option = {
    backgroundColor: '',
    series: [{
      type: 'liquidFill',
      radius: '80%',
      data: [0.4],
      backgroundStyle: {
        color: {
          type: 'radial',
          x: 0.5,
          y: 0.5,
          r: 0.5,
          colorStops: [{
            offset: 0,
            color: 'rgba(0,24,55, 0)'
          },
            {
              offset: 0.75,
              color: 'rgba(0,24,55, 0)'
            },
            {
              offset: 1,
              color: 'rgba(37,237,259, 1)'
            }],
          globalCoord: false
        },
      },
      outline: {
        borderDistance: 0,
        itemStyle: {
          borderWidth: 0,
          borderColor: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0,
              color: 'rgba(50,115,256, 1)'
            }, {
              offset: 0.5,
              color: 'rgba(50,115,233, .75)'
            }, {
              offset: 1,
              color: 'rgba(50,115,233, 1)'
            }],
            globalCoord: false
          },
        }
      },
      color: ['#0493c7'],
      label: {
        normal: {
          formatter: '',
        },
      },
    }]
  };
  // 把配置给实例对象
  if (option && typeof option === 'object') {
    myChart.setOption(option);
  }
  ;
})();

// 4.水球图模块5
(function () {
  // 实例化对象
  var dom = document.getElementById("cliquidFill5");
  var myChart = echarts.init(dom);

  var option = {
    backgroundColor: '',
    series: [{
      type: 'liquidFill',
      radius: '80%',
      data: [0.4],
      backgroundStyle: {
        color: {
          type: 'radial',
          x: 0.5,
          y: 0.5,
          r: 0.5,
          colorStops: [{
            offset: 0,
            color: 'rgba(0,24,55, 0)'
          },
            {
              offset: 0.75,
              color: 'rgba(0,24,55, 0)'
            },
            {
              offset: 1,
              color: 'rgba(37,237,259, 1)'
            }],
          globalCoord: false
        },
      },
      outline: {
        borderDistance: 0,
        itemStyle: {
          borderWidth: 0,
          borderColor: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0,
              color: 'rgba(50,115,256, 1)'
            }, {
              offset: 0.5,
              color: 'rgba(50,115,233, .75)'
            }, {
              offset: 1,
              color: 'rgba(50,115,233, 1)'
            }],
            globalCoord: false
          },
        }
      },
      color: ['#0493c7'],
      label: {
        normal: {
          formatter: '',
        },
      },
    }]
  };
  // 把配置给实例对象
  if (option && typeof option === 'object') {
    myChart.setOption(option);
  }
  ;
})();

// 4.水球图模块6
// (function () {
//   // 实例化对象
//   var dom = document.getElementById("cliquidFill6");
//   var myChart = echarts.init(dom);
//
//   var option = {
//     backgroundColor: '',
//     series: [{
//       type: 'liquidFill',
//       radius: '80%',
//       data: [0.4],
//       backgroundStyle: {
//         color: {
//           type: 'radial',
//           x: 0.5,
//           y: 0.5,
//           r: 0.5,
//           colorStops: [{
//             offset: 0,
//             color: 'rgba(0,24,55, 0)'
//           },
//             {
//               offset: 0.75,
//               color: 'rgba(0,24,55, 0)'
//             },
//             {
//               offset: 1,
//               color: 'rgba(37,237,259, 1)'
//             }],
//           globalCoord: false
//         },
//       },
//       outline: {
//         borderDistance: 0,
//         itemStyle: {
//           borderWidth: 0,
//           borderColor: {
//             type: 'linear',
//             x: 0,
//             y: 0,
//             x2: 0,
//             y2: 1,
//             colorStops: [{
//               offset: 0,
//               color: 'rgba(50,115,256, 1)'
//             }, {
//               offset: 0.5,
//               color: 'rgba(50,115,233, .75)'
//             }, {
//               offset: 1,
//               color: 'rgba(50,115,233, 1)'
//             }],
//             globalCoord: false
//           },
//         }
//       },
//       color: ['#0493c7'],
//       label: {
//         normal: {
//           formatter: '',
//         },
//       },
//     }]
//   };
//   // 把配置给实例对象
//   if (option && typeof option === 'object') {
//     myChart.setOption(option);
//   }
//   ;
// })();


