(function () {
    // 实例化对象
    var dom = document.getElementById("lineChart1");
    var myChart = echarts.init(dom);

    var year = ['10-11', '10-12', '10-13', '10-14', '10-15', '10-16', '10-17']
    var data = [638, 300, 488, 1050, 214, 843, 843]

    var option = {
        title: {
            text: ''
        },
        color:'rgba(42, 130, 228, 1)',
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

        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: year,
                // 设置x轴标签文字样式
                // x轴的文字颜色和大小
                axisLabel: {
                    color: "rgba(255,255,255,0.8)",
                    fontSize: "12"
                },
                axisLine: {
                    // 如果想要设置单独的线条样式
                    lineStyle: {
                        color: "#757984",
                    }
                },
            }
        ],
        yAxis: [
            {
                type: 'value',
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
                    show:false,

                },
                // y轴分割线的颜色
                splitLine: {
                    lineStyle: {
                        color: "#757984",
                        type: "dotted"
                    }
                }
            }
        ],
        series: [
            {
                name: '失信',
                type: 'line',
                stack: '总量',
                emphasis: {
                    focus: 'series'
                },
                data: data,
            },
        ]
    };

    // 把配置给实例对象
    if (option && typeof option === 'object') {
        myChart.setOption(option);
    }
    ;

})();




//pie01
(function () {
    // 实例化对象
    var dom = document.getElementById("pie01");
    var myChart = echarts.init(dom);

    var pieDate = [
        {value: 600, name: '注册营业数'},
        {value: 422, name: '未注册营业数'},
    ]

    var count = 0
    var item = 0
    for (item in pieDate) {
        count += pieDate[item].value
    }

    var option = {
        title:[{
            text: `{name|在营企业数}\n{val|${count}}`,
            top: 'center',
            left: 'center',
            textStyle: {
                rich: {
                    name: {
                        fontSize: 14,
                        color: 'white',
                        padding: [10, 0]
                    },
                    val: {
                        fontSize: 14,
                        color: 'white'
                    }
                }
            }
        },],
        tooltip: {
            trigger: 'item'
        },
        color:['rgba(60, 144, 247, 1)', 'rgba(16, 180, 248, 1)'],
        series: [
            {
                name: '类型',
                type: 'pie',
                radius: ['40%', '68%'],
                startAngle:170,
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },

                    normal:{
                        label:{
                            show: true,
                            //formatter: '{b} : {c} ({d}%)' //带当前图例名 + 百分比
                            formatter: '{b}\n{d}%', //只要百分比
                            color: 'white'
                        },
                        labelLine :{show:true}
                    }
                },
                data: pieDate
            }
        ]
    }

    // 把配置给实例对象
    if (option && typeof option === 'object') {
        myChart.setOption(option);
    }
    ;

})();




//pie02
(function () {
    // 实例化对象
    var dom = document.getElementById("pie02");
    var myChart = echarts.init(dom);

    var pieDate = [
        {value: 600, name: '注册营业数'},
        {value: 422, name: '未注册营业数'},
    ]

    var count = 0
    var item = 0
    for (item in pieDate) {
        count += pieDate[item].value
    }

    var option = {
        title:[{
            text: `{name|在营企业数}\n{val|${count}}`,
            top: 'center',
            left: 'center',
            textStyle: {
                rich: {
                    name: {
                        fontSize: 14,
                        color: 'white',
                        padding: [10, 0]
                    },
                    val: {
                        fontSize: 14,
                        color: 'white'
                    }
                }
            }
        },],
        tooltip: {
            trigger: 'item'
        },
        color:['rgba(60, 144, 247, 1)', 'rgba(16, 180, 248, 1)'],
        series: [
            {
                name: '类型',
                type: 'pie',
                radius: ['40%', '68%'],
                startAngle:170,
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },

                    normal:{
                        label:{
                            show: true,
                            //formatter: '{b} : {c} ({d}%)' //带当前图例名 + 百分比
                            formatter: '{b}\n{d}%', //只要百分比
                            color: 'white'
                        },
                        labelLine :{
                            show:true,
                            normal: {
                                length:1
                            }
                        }
                    }
                },
                data: pieDate
            }
        ]
    }

    // 把配置给实例对象
    if (option && typeof option === 'object') {
        myChart.setOption(option);
    }
    ;

})();

