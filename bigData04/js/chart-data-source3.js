// 1.折线图模块1
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

// 3.柱状图模块2
(function () {
  // 实例化对象
  var dom = document.getElementById("barChart1");
  var myChart = echarts.init(dom);

  var option = {
    color: ['#4263ea'],
        grid: {
      left: "20",
          top: "10",
          right: "20",
          bottom: "0",
          containLabel: true
    },
    series: [{
      data: [3800, 7800, 2800, 1800, 800],
      type: 'bar',
      barWidth: "25%",
      itemStyle: {
        emphasis: {
          barBorderRadius: 7
        },
        normal: {
          barBorderRadius: 7,
          color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,		//0010从左至右渐变，0001从上至下渐变
              [
                {offset: 0, color: '#344c9c'},
                {offset: 1, color: '#4263ea'}
              ])
        },
      }
    }],
        xAxis: {
      type: 'category',
          data: ["A+", "A", "B", "C", "D"],
          // 设置x轴标签文字样式
          // x轴的文字颜色和大小
          axisLabel: {
        textStyle: {
          color: function (param, index) {
            let colors = ["#1d2088", "#0000ff", "#009944", "#ec6941", "#de0218"];
            return colors[index];
          },
          fontSize: "12"
        }
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

})();
