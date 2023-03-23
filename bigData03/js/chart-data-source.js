// 1.饼图1模块
(function () {
  // 实例化对象
  var dom = document.getElementById("pieChart1");
  var myChart = echarts.init(dom);
  var panelData1 = [
    {icon: 'circle', name: '信用良好', value: 7500, percent: 33.3},
    {icon: 'circle', name: '守信', value: 4500, percent: 16.2},
    {icon: 'circle', name: '信用一般', value: 3000, percent: 12.5},
    {icon: 'circle', name: '失信', value: 4500, percent: 16.2},
    {icon: 'circle', name: '严重失信', value: 2000, percent: 8.5},
    {icon: 'circle', name: '违法', value: 1500, percent: 6.4},
    {icon: 'circle', name: '其他', value: 500, percent: 2.1}
  ];
  var option = {
    title: {
      text: '',
      subtext: '',
      left: 'right'
    },
    color: ["#b30f56", "#b20f78", "#d78000", "#15b589", "#017fcc", "#0054d8", "#021bcd"],
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
      data: panelData1,
      formatter: function (name) {
        var target;
        var percent;
        for (var i = 0; i < panelData1.length; i++) {
          if (name == panelData1[i].name) {
            target = "" + (panelData1[i].value) + "条"
            percent = "" + (panelData1[i].percent) + "%"
            break;
          }
        }
        return '{a|' + name + '}' + '{value|' + target + '}{percent|' + percent + '}'
      },
      textStyle: {
        rich: {
          a: {
            width: 55,
            fontSize: 12,
            color: ['#fff'],

          },
          value: {
            width: 50,
            color: '#ffffff',
            fontSize: 12,
            padding: [0, 15],
          },
          percent: {
            width: 40,
            color: '#ffffff',
            fontSize: 12,
          },
        }
      },

    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: '50%',
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
        data: panelData1,
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

// 2.饼图2模块
(function () {
  // 实例化对象
  var dom = document.getElementById("pieChart2");
  var myChart = echarts.init(dom);
  var panelData2 = [
    {icon: 'circle', name: '信用良好', value: 7500, percent: 33.3},
    {icon: 'circle', name: '守信', value: 4500, percent: 16.2},
    {icon: 'circle', name: '信用一般', value: 3000, percent: 12.5},
    {icon: 'circle', name: '失信', value: 4500, percent: 16.2},
    {icon: 'circle', name: '严重失信', value: 2000, percent: 8.5},
    {icon: 'circle', name: '违法', value: 1500, percent: 6.4},
    {icon: 'circle', name: '其他', value: 500, percent: 2.1}
  ];
  var option = {
    title: {
      text: '',
      subtext: '',
      left: 'right'
    },
    color: ["#b30f56", "#b20f78", "#d78000", "#15b589", "#019bcd", "#017fcc", "#0054d8", "#021bcd"],
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
        var percent;
        for (var i = 0; i < panelData2.length; i++) {
          if (name == panelData2[i].name) {
            target = "" + (panelData2[i].value) + "条"
            percent = "" + (panelData2[i].percent) + "%"
            break;
          }
        }
        return '{a|' + name + '}' + '{value|' + target + '}{percent|' + percent + '}'
      },
      textStyle: {
        rich: {
          a: {
            width: 55,
            fontSize: 12,
            color: ['#fff'],

          },
          value: {
            width: 50,
            color: '#ffffff',
            fontSize: 12,
            padding: [0, 15],
          },
          percent: {
            width: 40,
            color: '#ffffff',
            fontSize: 12,
          },
        }
      },
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: '50%',
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
    title: {
      text: ''
    },
    color: ["#1891d8", "#e0078a"],
    grid: {
      left: "0",
      top: "40",
      right: "15",
      bottom: "20",
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
    legend: {
      bottom: 0,
      left: 'center',
      itemGap: 80, // 间隔
      itemWidth: 8,
      itemHeight: 8,
      textStyle: {
        fontSize: 12,
        color: ['#fff'],
        padding: [0, 5],
      },
      data: [
        {icon: 'circle', name: '守信'},
        {icon: 'circle', name: '失信'},
      ],
    },

    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        // 设置x轴标签文字样式
        // x轴的文字颜色和大小
        axisLabel: {
          color: "rgba(255,255,255,0.8)",
          fontSize: "12"
        },
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
      }
    ],
    series: [
      {
        name: '失信',
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
              offset: 0, color: 'rgba(255,255,255,0.1)' // 0% 处的颜色
            }, {
              offset: 0.6, color: 'rgba(24,145,216,0.8)' // 100% 处的颜色
            }],
            global: false // 缺省为 false
          },
        },
        emphasis: {
          focus: 'series'
        },
        data: [150, 100, 105, 110, 125, 100, 0, 0, 0, 0, 0, 0],
      },
      {
        name: '守信',
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
              offset: 0, color: 'rgba(255,255,255,0.1)' // 0% 处的颜色
            }, {
              offset: 0.6, color: 'rgba(224,7,138,0.6)' // 100% 处的颜色
            }],
            global: false // 缺省为 false
          },
        },
        emphasis: {
          focus: 'series'
        },
        data: [25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25],
      }

    ]
  };

  // 把配置给实例对象
  if (option && typeof option === 'object') {
    myChart.setOption(option);
  }
  ;

})();


// 4.折线图模块2
(function () {
  // 实例化对象
  var dom = document.getElementById("lineChart2");
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


// 5.柱状图模块
(function () {
  // 实例化对象
  var dom = document.getElementById("barChart");
  var myChart = echarts.init(dom);

  var option = {
    color: ['#1891d8'],
    grid: {
      left: "0%",
      top: "40",
      right: "0%",
      bottom: "4%",
      containLabel: true
    },
    series: [{
      data: [125, 90, 80, 80, 60],
      type: 'bar',
      barWidth: "35%"
    }],
    xAxis: {
      type: 'category',
      data: ["公安部", "司法部", "工商部", "公安部", "司法部"],
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