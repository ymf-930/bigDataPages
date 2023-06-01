


//----------------------------------pie-natural
(function () {
    // 实例化对象
    var dom = document.getElementById("pie-natural");
    var myChart = echarts.init(dom);

    var pieDate = [
        {value: 4544, name: '严重失信行为'},
        {value: 3321, name: '党建、基层'},
        {value: 3113, name: '慈善公益'},
        {value: 2341, name: '党纪政务'},
        {value: 1231, name: '工作作风'},
        {value: 1231, name: '其他'},
    ]


    var option = {
        tooltip: {
            trigger: 'item'
        },
        series: [
            {
                type: 'pie',
                radius: '65%',
                data: pieDate,
                center: ["50%", "60%"],
                itemStyle: {
                    normal: {
                        color: function (colors) {
                            var colorList = [
                                'rgba(60, 144, 247, 1)',
                                'rgba(85, 191, 192, 1)',
                                'rgba(94, 190, 103, 1)',
                                'rgba(244, 205, 73, 1)',
                                'rgba(224, 86, 103, 1)',
                                'rgba(124, 75, 216, 1)'
                            ];
                            return colorList[colors.dataIndex];
                        },
                        borderWidth:1,
                        borderRadius:2,
                        borderColor:'white',
                    },
                },
                label: {
                    color: 'white',
                },
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

    // 把配置给实例对象
    if (option && typeof option === 'object') {
        myChart.setOption(option);
    }
    ;

})();


//----------------------------------pie-market
(function () {
    // 实例化对象
    var dom = document.getElementById("pie-market");
    var myChart = echarts.init(dom);

    var pieDate = [
        {value: 4544, name: '严重失信行为'},
        {value: 3321, name: '党建、基层'},
        {value: 3113, name: '慈善公益'},
        {value: 2341, name: '党纪政务'},
        {value: 1231, name: '工作作风'},
        {value: 1231, name: '其他'},
    ]


    var option = {
        tooltip: {
            trigger: 'item'
        },
        series: [
            {
                type: 'pie',
                radius: '65%',
                data: pieDate,
                center: ["50%", "60%"],
                itemStyle: {
                    normal: {
                        color: function (colors) {
                            var colorList = [
                                'rgba(60, 144, 247, 1)',
                                'rgba(85, 191, 192, 1)',
                                'rgba(94, 190, 103, 1)',
                                'rgba(244, 205, 73, 1)',
                                'rgba(224, 86, 103, 1)',
                                'rgba(124, 75, 216, 1)'
                            ];
                            return colorList[colors.dataIndex];
                        },
                        borderWidth:1,
                        borderRadius:2,
                        borderColor:'white',
                    },
                },
                label: {
                    color: 'white',
                },
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

    // 把配置给实例对象
    if (option && typeof option === 'object') {
        myChart.setOption(option);
    }
    ;

})();





//----------------------------------pie-village
(function () {
    // 实例化对象
    var dom = document.getElementById("pie-village");
    var myChart = echarts.init(dom);

    var pieDate = [
        {value: 4544, name: '严重失信行为'},
        {value: 3321, name: '党建、基层'},
        {value: 3113, name: '慈善公益'},
        {value: 2341, name: '党纪政务'},
        {value: 1231, name: '工作作风'},
        {value: 1231, name: '其他'},
    ]


    var option = {
        tooltip: {
            trigger: 'item'
        },
        series: [
            {
                type: 'pie',
                radius: '65%',
                data: pieDate,
                center: ["50%", "60%"],
                itemStyle: {
                    normal: {
                        color: function (colors) {
                            var colorList = [
                                'rgba(60, 144, 247, 1)',
                                'rgba(85, 191, 192, 1)',
                                'rgba(94, 190, 103, 1)',
                                'rgba(244, 205, 73, 1)',
                                'rgba(224, 86, 103, 1)',
                                'rgba(124, 75, 216, 1)'
                            ];
                            return colorList[colors.dataIndex];
                        },
                        borderWidth:1,
                        borderRadius:2,
                        borderColor:'white',
                    },
                },
                label: {
                    color: 'white',
                },
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

    // 把配置给实例对象
    if (option && typeof option === 'object') {
        myChart.setOption(option);
    }
    ;

})();



//----------------------------------pie-plank
(function () {
    // 实例化对象
    var dom = document.getElementById("pie-plank");
    var myChart = echarts.init(dom);

    var pieDate = [
        {value: 4544, name: '严重失信行为'},
        {value: 3321, name: '党建、基层'},
        {value: 3113, name: '慈善公益'},
        {value: 2341, name: '党纪政务'},
        {value: 1231, name: '工作作风'},
        {value: 1231, name: '其他'},
    ]


    var option = {
        tooltip: {
            trigger: 'item'
        },
        series: [
            {
                type: 'pie',
                radius: '65%',
                data: pieDate,
                center: ["50%", "60%"],
                itemStyle: {
                    normal: {
                        color: function (colors) {
                            var colorList = [
                                'rgba(60, 144, 247, 1)',
                                'rgba(85, 191, 192, 1)',
                                'rgba(94, 190, 103, 1)',
                                'rgba(244, 205, 73, 1)',
                                'rgba(224, 86, 103, 1)',
                                'rgba(124, 75, 216, 1)'
                            ];
                            return colorList[colors.dataIndex];
                        },
                        borderWidth:1,
                        borderRadius:2,
                        borderColor:'white',
                    },
                },
                label: {
                    color: 'white',
                },
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

    // 把配置给实例对象
    if (option && typeof option === 'object') {
        myChart.setOption(option);
    }
    ;

})();