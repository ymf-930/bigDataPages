

//----------------------pie01
(function () {
    // 实例化对象
    var dom = document.getElementById("pie01");
    var myChart = echarts.init(dom);

    var pieDate = [
        {value: 330, name: '全部履行'},
        {value: 550, name: '部分履行'},
        {value: 360, name: '全部未履行'},
    ]

    var count = 0
    var item = 0
    for (item in pieDate) {
        count += pieDate[item].value
    }

    var option = {
        series: [
            {
                type: 'pie',
                center: ['16%', '50%'],
                radius: ['68%', '90%'],
                labelLine:{
                    show:false,
                },
                data: [{
                    value: pieDate[0].value,
                    name: 'cpu',
                    label: {
                        position: 'center',
                        formatter: function() {
                            // 获取legend显示内容
                            let p = (pieDate[0].value/count * 100).toFixed(2);
                            let name = pieDate[0].name
                            return name + '\n' + '\n' + p + '%'
                        },
                        textStyle: {
                            color: 'rgba(255,255,255,1)',
                            fontSize: 12
                        }
                    },
                    itemStyle: {
                        color: 'rgba(73, 157, 248, 1)',
                    }
                }, {
                    value: count,
                    label: {
                        show: false
                    },
                    itemStyle: {
                        color: 'rgba(208, 208, 208, 1)',
                    }
                }]
            },
            {
                type: 'pie',
                center: ['48%', '50%'],
                radius: ['68%', '90%'],
                labelLine:{
                    show:false,
                },
                data: [{
                    value: pieDate[1].value,
                    name: 'cpu',
                    label: {
                        position: 'center',
                        formatter: function() {
                            // 获取legend显示内容
                            let p = (pieDate[1].value/count * 100).toFixed(2);
                            let name = pieDate[1].name
                            return name + '\n' + '\n' + p + '%'
                        },
                        textStyle: {
                            color: 'rgba(255,255,255,1)',
                            fontSize: 12
                        }
                    },
                    itemStyle: {
                        color: 'rgba(0, 186, 173, 1)'
                    }
                }, {
                    value: count,
                    label: {
                        show: false
                    },
                    itemStyle: {
                        color: 'rgba(208, 208, 208, 1)'
                    }
                }]
            },
            {
                type: 'pie',
                center: ['80%', '50%'],
                radius: ['68%', '90%'],
                labelLine:{
                    show:false,
                },
                data: [{
                    value: pieDate[2].value,
                    label: {
                        position: 'center',
                        formatter: function() {
                            // 获取legend显示内容
                            let p = (pieDate[2].value/count * 100).toFixed(2);
                            let name = pieDate[2].name
                            return name + '\n' + '\n' + p + '%'
                        },
                        textStyle: {
                            color: 'rgba(255,255,255,1)',
                            fontSize: 12
                        }
                    },
                    itemStyle: {
                        color: 'rgba(255, 195, 0, 1)'
                    }
                }, {
                    value: count,
                    label: {
                        show: false
                    },
                    itemStyle: {
                        color: 'rgba(208, 208, 208, 1)'
                    }
                }]
            },
        ]
    };

    // 把配置给实例对象
    if (option && typeof option === 'object') {
        myChart.setOption(option);
    }
    ;

})();


//---------------------------------pie02
(function () {
    // 实例化对象
    var dom = document.getElementById("pie02");
    var myChart = echarts.init(dom);

    var pieDate = [
        {value: 4544, name: '审批替代型'},
        {value: 3321, name: '证明事项型'},
        {value: 3113, name: '信用修复型'},
        {value: 2341, name: '行业自律型'},
        {value: 2231, name: '主动型'},
        {value: 2231, name: '湖北'},
    ]

    var count = 0
    var item = 0
    for (item in pieDate) {
        count += pieDate[item].value
    }

    var option = {
        title:[{
            text: `{name|行政信息数量}\n{val|${count}}`,
            top: '45%',
            left: '13%',
            textStyle: {
                rich: {
                    name: {
                        fontSize: 14,
                        color: 'white',
                        padding: [10, 0]
                    },
                    val: {
                        fontSize: 14,
                        color: 'white',
                        padding: [0, 20]
                    }
                }
            }
        },],
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical', // 布局方式，默认为水平布局，可选为：'horizontal' ¦ 'vertical'
            y: 'bottom',
            right: 20,
            icon:'circle',
            itemWidth: 10,
            itemHeight: 10,
            itemGap: 20,
            // 重写legend显示样式
            formatter: function(name) {
                // 获取legend显示内容
                let data = option.series[0].data;
                let total = 0;
                let tarValue = 0;
                for (let i = 0, l = data.length; i < l; i++) {
                    total += data[i].value;
                    if (data[i].name == name) {
                        tarValue = data[i].value;
                    }
                }
                let p = (tarValue / total * 100).toFixed(2);
                return "{name|" + name + ' ' + '|' + ' ' + p + '%' + '     ' +"} {value|"+tarValue+"}";
            },
            textStyle: {
                color: "white",
                rich: {
                    name:{
                        width:130,
                        color: 'white'
                    },
                    value: {
                        color: '#6b7081',
                        width: 30,
                    }
                }
            }
        },
        color:['rgba(60, 144, 247, 1)', 'rgba(85, 191, 192, 1)',
            'rgba(94, 190, 103, 1)','rgba(244, 205, 73, 1)',
            'rgba(224, 86, 103, 1)','rgba(124, 75, 216, 1)'],
        series: [
            {
                name: '类型',
                type: 'pie',
                radius: ['60%', '80%'],
                center: ['24%', '60%'],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },
                    normal:{
                        label:{
                            show: false,
                            formatter: '{b}\n{d}%', //只要百分比
                            color: 'white'
                        },
                        borderWidth:1,
                        borderRadius:2,
                        borderColor:'white',
                        labelLine: {
                            show:false
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


})();


//----------------------------------pie03
(function () {
    // 实例化对象
    var dom = document.getElementById("pie03");
    var myChart = echarts.init(dom);

    var pieDate = [
        {value: 600, name: '信用修复数量'},
        {value: 422, name: '未信用修复'},
    ]

    var count = 0
    var item = 0
    for (item in pieDate) {
        count += pieDate[item].value
    }

    var option = {
        legend: {
            top: 'bottom',
            icon:'circle',
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                color: "white",
            }
        },
        title:[{
            text: `{name|行政处罚数量}\n{val|${count}}`,
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


//--------------------------------barChart
(function () {
    // 实例化对象
    var dom = document.getElementById("barChart");
    var myChart = echarts.init(dom);

    var xData = ['AAA', 'AA', 'A+', 'A', 'A-', 'b', 'c', 'd']
    var yData = [638, 300, 488, 1050, 214, 843, 20, 20 ]


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
            data: yData,
            type: 'bar',
            barWidth: "35%",
            itemStyle: {
                normal: {
                    color: "rgba(60, 144, 247, 1)"
                }
            }
        }],
        xAxis: {
            type: 'category',
            data: xData,
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
        },
        yAxis: {
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
        },
    };

    // 把配置给实例对象
    if (option && typeof option === 'object') {
        myChart.setOption(option);
    }
    ;

    //4.让图表跟随屏幕尺寸自适应
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();