const dom = document.getElementById("mapChart");
const myChart = echarts.init(dom)

var uploadedDataURL = "../images/map/dcfq.json";

$.getJSON(uploadedDataURL, function (geoJson) {
    echarts.registerMap('东昌府区', geoJson);
    var chinaGeoCoordMap = {
        "张庄村": [115.764107, 36.520957],
        "于庄": [116.101046, 36.30174],
        "卢西化工工业区": [115.889888, 36.670786],
        "周庄村":[115.76808,36.426797],
        "东昌府区":[115.909888, 36.450886]
    };
    var chinaDatas = [
        [{
            name: '张庄村',
            value: 0
        }],
        [{
            name: '周庄村',
            value: 0
        }],
        [{
            name: '于庄',
            value: 0
        }],
        [{
            name: '卢西化工工业区',
            value: 0
        }],
        [
            {
                name:'东昌府区',
                value:0
            }
        ]
    ];

    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = chinaGeoCoordMap[dataItem[0].name];
            var toCoord = [115.909888, 36.450886];
            if (fromCoord && toCoord) {
                res.push([{
                    coord: fromCoord,
                    value: dataItem[0].value
                }, {
                    coord: toCoord,
                }]);
            }
        }
        return res;
    };

    var series = [];
    [['东昌府区', chinaDatas]].forEach(function (item, i) {
        series.push({
            type: 'lines',
            zlevel: 2,
            effect: {
                show: true,
                period: 4, //箭头指向速度，值越小速度越快
                trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
                symbol: 'arrow', //箭头图标
                symbolSize: 5, //图标大小
            },
            lineStyle: {
                normal: {
                    width: 1, //尾迹线条宽度
                    opacity: 1, //尾迹线条透明度
                    curveness: .3 //尾迹线条曲直度
                }
            },
            data: convertData(item[1])
        }, {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: { //涟漪特效
                period: 4, //动画时间，值越小速度越快
                brushType: 'stroke', //波纹绘制方式 stroke, fill
                scale: 4 //波纹圆环最大限制，值越大波纹越大
            },
            label: {
                normal: {
                    show: true,
                    position: 'right', //显示位置
                    offset: [5, 0], //偏移设置
                    formatter: function (params) { //圆环显示文字
                        return params.data.name;
                    },
                    fontSize: 13,
                    color: '#fff'
                },
                emphasis: {
                    show: true
                }
            },
            symbol: 'circle',
            symbolSize: function (val) {
                return 5 + val[2] * 5; //圆环大小
            },
            itemStyle: {
                normal: {
                    show: false,
                    color: '#f00'
                }
            },
            data: item[1].map(function (dataItem) {
                 return {
                        name: dataItem[0].name,
                        value: chinaGeoCoordMap[dataItem[0].name].concat([dataItem[0].value])
                    };
            }),
        },
            //被攻击点
            {
                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: {
                    period: 4,
                    brushType: 'stroke',
                    scale: 4
                },
                label: {
                    normal: {
                        show: false,
                        position: 'right',
                        //offset:[5, 0],
                        color: '#fff',
                        formatter: '{b}',
                        textStyle: {
                            color: "#fff"
                        }
                    },
                    emphasis: {
                        show: true,
                        color: "#fff"
                    }
                },
                symbol: "path://M781.1860961914062,616.0318603515625q17.338623046875,80.57373046875,30.59759521484375,145.8486328125q6.1195068359375,27.537841796875,11.2191162109375,55.07568359375t9.68927001953125,49.97607421875t7.6494140625,38.24700927734375t4.07965087890625,19.88848876953125q3.05975341796875,20.39837646484375,-9.17926025390625,27.02789306640625t-27.537841796875,6.62945556640625q-5.099609375,0,-14.78887939453125,-3.5697021484375t-14.788818359375,-5.60955810546875l-266.19921875,-155.02789306640625q-72.41433715820312,42.83660888671875,-131.56973266601562,76.4940185546875q-25.49798583984375,14.27886962890625,-50.486053466796875,28.5577392578125t-45.386444091796875,26.5179443359375t-35.187255859375,20.3984375t-19.888442993164062,10.19915771484375q-10.199203491210938,5.099609375,-20.908370971679688,3.56976318359375t-19.37847900390625,-7.6494140625t-12.749008178710938,-14.78887939453125t-2.0398406982421875,-17.84857177734375q1.019927978515625,-4.0797119140625,5.099609375,-19.88848876953125t9.179275512695312,-37.73699951171875t11.729080200195312,-48.44622802734375t13.768936157226562,-54.0557861328125q15.298797607421875,-63.23504638671875,34.677276611328125,-142.788818359375q-60.17529296875,-52.0159912109375,-108.11154174804688,-92.81280517578125q-20.398414611816406,-17.338623046875,-40.28685760498047,-34.16729736328125t-35.69721221923828,-30.597625732421875t-26.00796890258789,-22.438232421875t-11.219121932983398,-9.689239501953125q-12.239044189453125,-11.2191162109375,-20.90836763381958,-24.988067626953125t-6.629481911659241,-28.04779052734375t11.21912395954132,-22.438262939453125t20.398406982421875,-10.199188232421875l315.1553897857666,-28.557769775390625l117.29083251953125,-273.33864974975586q6.1195068359375,-16.318723678588867,17.338623046875,-28.047807693481445t30.597625732421875,-11.72908410754394q10.19921875,0,17.8486328125,4.589641186859126t12.74896240234375,10.709163188934326t8.6693115234375,12.239043235778809t5.60955810546875,10.199203491210938l114.2310791015625,273.3386344909668l315.1553955078125,29.57769775390625q20.3984375,5.099609375,28.55780029296875,12.239044189453125t8.15936279296875,22.438262939453125q0,14.27886962890625,-8.66937255859375,24.988037109375t-21.92828369140625,26.007965087890625Z",
                symbolSize: 20,
                data: [{
                    name: item[0],
                    value: chinaGeoCoordMap[item[0]].concat([10]),
                }],
            }
        );
    });

    option = {
        // tooltip: {
        //     trigger: 'item',
        //     backgroundColor: 'rgba(166, 200, 76, 0.82)',
        //     borderColor: '#FFFFCC',
        //     showDelay: 0,
        //     hideDelay: 0,
        //     enterable: true,
        //     transitionDuration: 0,
        //     extraCssText: 'z-index:100',
        //     formatter: function (params, ticket, callback) {
        //         //根据业务自己拓展要显示的内容
        //         var res = "";
        //         var name = params.name;
        //         var value = params.value[params.seriesIndex + 1];
        //         res = "<span style='color:#fff;'>" + name + "</span><br/>数据：" + value;
        //         return res;
        //     }
        // },
        visualMap: { //图例值控制
            min: 0,
            max: 1,
            calculable: true,
            show: false,
            color: ['#f44336', '#fc9700', '#ffde00', '#ffde00', '#00eaff'],
            textStyle: {
                color: '#fff'
            }
        },
        geo: {
            map: '东昌府区',
            zoom: 1.2,
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: false, //是否允许缩放
            itemStyle: {
                areaColor: 'rgba(68, 115, 178, 0.2)',
                borderColor: 'rgba(116, 140, 212, 1)',
                borderWidth: 2,
                shadowColor: 'rgba(68, 115, 178, 0.2)', //阴影颜色
                shadowOffsetX: -5, //水平偏移
                shadowOffsetY: 5, //垂直偏移
                shadowBlur: 5
            },
            emphasis: {
                disabled: true,
            }
        },
        series: series
    };

    myChart.setOption(option);
});