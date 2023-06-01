(function () {
    // 实例化对象
    var dom = document.getElementById("barChart");
    var myChart = echarts.init(dom);

    var yData = ['基础信息', '业务信息', '司法信息', '行政执法信息', '公共事业信息', '信用评级信息', '其他信息']
    var xData = [1600, 1450, 590, 5360, 6780, 5400, 3200 ]


    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: "0%",
            top: "20",
            right: "4%",
            bottom: "4%",
            containLabel: true
        },
        series: [{
            data: xData,
            type: 'bar',
            barWidth: "32%",
            itemStyle: {
                normal: {
                    color: "#15b4e7",
                    barBorderRadius:30,
                }
            }
        }],
        xAxis: {
            type: 'value',
            axisLabel: {
                interval: 0,
                color: "rgba(255,255,255,0.8)",
                fontSize: "10",
            },
            axisLine: {
                // 如果想要设置单独的线条样式
                lineStyle: {
                    color: "#2f3957",
                }
            },
            // y轴分割线的颜色
            splitLine: {
                show:false,
            }
        },
        yAxis: {
            type: 'category',
            data: yData,
            axisLabel: {
                color: "rgba(255,255,255,0.8)",
                fontSize: "10",
            },
            axisLine: {
                // 如果想要设置单独的线条样式
                lineStyle: {
                    color: "#2f3957",
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#0b2146'
                }
            }
        },
    };

    // 把配置给实例对象
    if (option && typeof option === 'object') {
        myChart.setOption(option);
    }

    //4.让图表跟随屏幕尺寸自适应
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();


//-------------------------barChart01
(function () {
    // 实例化对象
    var dom = document.getElementById("barChart01");
    var myChart = echarts.init(dom);

    var xData = ['1月', '2月', '3月', '4月', '5月', '6月',
        '7月', '8月', '9月', '10月', '11月', '12月']

    var summarize = [1005, 1000, 1234, 1109, 1307, 1544, 1200, 1576, 1765,1203, 1700, 1200 ]
    var output = [990, 1200, 1354, 1342, 1307, 1544, 1200, 1576, 1765,1203, 1700, 1200 ]


    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            bottom: 0,
            textStyle: { // 图例的公用文本样式。
                color: 'white',
                fontSize: 12
            },
            itemGap: 40, // 设置间距
            icon: 'roundRect',
            itemHeight: 5,
            itemWidth: 12,
        },
        grid: {
            left: "0%",
            top: "40",
            right: "4%",
            bottom: "10%",
            containLabel: true
        },
        series: [
            {
                name: '归集',
                data: summarize,
                type: 'bar',
                barWidth: "25%",
                itemStyle: {
                    normal: {
                        color: "#15b4e7",
                        barBorderRadius: 30,
                    }
                }
            },
            {
                name: '输出',
                data: output,
                type: 'bar',
                barWidth: "25%",
                itemStyle: {
                    normal: {
                        color: "#2749cc",
                        barBorderRadius: 30,
                    }
                }
            },
        ],
        xAxis: {
            type: 'category',
            data: xData,
            axisLabel: {
                color: "rgba(255,255,255,0.8)",
                fontSize: "10",
            },
            axisLine: {
                // 如果想要设置单独的线条样式
                lineStyle: {
                    color: "#2f3957",
                }
            },
            splitLine: {
                show:false,
            }
        },
        yAxis: {
            type: 'value',
            name: "（条）",
            nameTextStyle:{//y轴上方单位的颜色
                color:'rgba(255,255,255,0.8)'
            },
            axisLabel: {
                color: "rgba(255,255,255,0.8)",
                fontSize: "10",
            },
            axisLine: {
                // 如果想要设置单独的线条样式
                lineStyle: {
                    color: "#2f3957",
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#2e3142'
                }
            }
        },
    };

    // 把配置给实例对象
    if (option && typeof option === 'object') {
        myChart.setOption(option);
    }

    //4.让图表跟随屏幕尺寸自适应
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();