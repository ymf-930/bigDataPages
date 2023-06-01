//---------------------------------pie-right
(function () {
    // 实例化对象
    var dom = document.getElementById("pie-right");
    var myChart = echarts.init(dom);

    var pieDate = [
        {value: 4544, name: '北京'},
        {value: 3321, name: '广东'},
        {value: 3113, name: '上海'},
        {value: 2341, name: '四川'},
        {value: 1231, name: '浙江'},
        {value: 1231, name: '湖北'},
    ]

    var count = 0
    var item = 0
    for (item in pieDate) {
        count += pieDate[item].value
    }

    var option = {
        title:[{
            text: `{name|资源数据总数}\n{val|${count}}`,
            top: '45%',
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
        color:['rgba(60, 144, 247, 1)', 'rgba(85, 191, 192, 1)',
                'rgba(94, 190, 103, 1)','rgba(244, 205, 73, 1)',
                'rgba(224, 86, 103, 1)','rgba(124, 75, 216, 1)'],
        series: [
            {
                name: '类型',
                type: 'pie',
                radius: ['60%', '80%'],
                center: ['50%', '60%'],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },

                    normal:{
                        label:{
                            show: false,
                            //formatter: '{b} : {c} ({d}%)' //带当前图例名 + 百分比
                            formatter: '{b}\n{d}%', //只要百分比
                            color: 'white'
                        },
                        borderWidth:1,
                        borderRadius:2,
                        borderColor:'white',
                        labelLine :{show:false}
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

//------------------pie-center01行政信息数量
(function () {
    // 实例化对象
    var dom = document.getElementById("pie-center01");
    var myChart = echarts.init(dom);

    var pieDate = [
        {value: 4544, name: '行政强制'},
        {value: 3321, name: '行政裁决'},
        {value: 3113, name: '行政奖励'},
        {value: 2341, name: '行政确认'},
        {value: 2231, name: '行政检查'},
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
            left: '20%',
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
            itemGap: 25,
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
                return "{name|" + name + ' ' + '|' + ' ' + p + '%' +"} {value|"+tarValue+"}";
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
                center: ['30%', '60%'],
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
                        labelLine :{show:false}
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



//------------------pie-center02行政信息数量
(function () {
    // 实例化对象
    var dom = document.getElementById("pie-center02");
    var myChart = echarts.init(dom);

    var pieDate = [
        {value: 4544, name: '北京'},
        {value: 3321, name: '广东'},
        {value: 3113, name: '上海'},
        {value: 2341, name: '四川'},
        {value: 1231, name: '浙江'},
        {value: 1231, name: '湖北'},
    ]

    var count = 0
    var item = 0
    for (item in pieDate) {
        count += pieDate[item].value
    }

    var option = {
        title:[{
            text: `{name|特定信息数量}\n{val|${count}}`,
            top: '45%',
            left: '19%',
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
                return "{name|" + name + ' ' + '|' + ' ' + p + '%' +"} {value|"+tarValue+"}";
            },
            textStyle: {
                color: "white",
                rich: {
                    name:{
                        width:110,
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
                center: ['30%', '60%'],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },

                    normal:{
                        label:{
                            show: false,
                            //formatter: '{b} : {c} ({d}%)' //带当前图例名 + 百分比
                            formatter: '{b}\n{d}%', //只要百分比
                            color: 'white'
                        },
                        borderWidth:1,
                        borderRadius:2,
                        borderColor:'white',
                        labelLine :{show:false}
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


//------------------pie-center03行政信息数量
(function () {
    // 实例化对象
    var dom = document.getElementById("pie-center03");
    var myChart = echarts.init(dom);

    var pieDate = [
        {value: 4544, name: '北京'},
        {value: 3321, name: '广东'},
        {value: 3113, name: '上海'},
        {value: 2341, name: '四川'},
        {value: 1231, name: '浙江'},
        {value: 1231, name: '湖北'},
    ]

    var count = 0
    var item = 0
    for (item in pieDate) {
        count += pieDate[item].value
    }

    var option = {
        title:[{
            text: `{name|信用承诺数量}\n{val|${count}}`,
            top: '45%',
            left: '19%',
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
                return "{name|" + name + ' ' + '|' + ' ' + p + '%' +"} {value|"+tarValue+"}";
            },
            textStyle: {
                color: "white",
                rich: {
                    name:{
                        width:110,
                        color: 'white'
                    },
                    value: {
                        color: '#6b7081',
                        width: 20,
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
                center: ['30%', '60%'],
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
                        labelLine :{show:false}
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


//------------------pie-center04行政信息数量
(function () {
    // 实例化对象
    var dom = document.getElementById("pie-center04");
    var myChart = echarts.init(dom);

    var pieDate = [
        {value: 4544, name: '北京'},
        {value: 3321, name: '广东'},
        {value: 3113, name: '上海'},
        {value: 2341, name: '四川'},
        {value: 1231, name: '浙江'},
        {value: 1231, name: '湖北'},
    ]

    var count = 0
    var item = 0
    for (item in pieDate) {
        count += pieDate[item].value
    }

    var option = {
        title:[{
            text: `{name|村民信息数量}\n{val|${count}}`,
            top: '45%',
            left: '19%',
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
            right: 50,
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
                return "{name|" + name + ' ' + '|' + ' ' + p + '%' +"} {value|"+tarValue+"}";
            },
            textStyle: {
                color: "white",
                rich: {
                    name:{
                        width:100,
                        color: 'white'
                    },
                    value: {
                        color: '#6b7081',
                        width: 20,
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
                center: ['30%', '60%'],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    },

                    normal:{
                        label:{
                            show: false,
                            //formatter: '{b} : {c} ({d}%)' //带当前图例名 + 百分比
                            formatter: '{b}\n{d}%', //只要百分比
                            color: 'white'
                        },
                        borderWidth:1,
                        borderRadius:2,
                        borderColor:'white',
                        labelLine :{show:false}
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


// -----------------------------------折线图模块lineChart
(function () {
    // 实例化对象
    var dom = document.getElementById("lineChart");
    var myChart = echarts.init(dom);

    var year = ['2022-07', '2022-08', '2022-09', '2022-10', '222-11', '2022-12']
    var data = [526875, 400000, 410000, 430000, 500000, 420000,]

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
            data: year,
            // 设置x轴标签文字样式
            // x轴的文字颜色和大小
            axisLabel: {
                color: "rgba(255,255,255,0.8)",
                fontSize: "12"
            },
        },
        yAxis: {
            type: 'value',
            name: '数据量',
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
            data: data,
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