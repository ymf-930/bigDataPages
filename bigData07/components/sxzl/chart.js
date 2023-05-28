const dom = document.getElementById("mapChart");
const myChart = echarts.init(dom)

var uploadedDataURL = "../assets/img/sxzl/json/411600.json";
const tagIcon = "image://data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAA2CAYAAACx1wu7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDQ4OCwgMjAyMC8wNy8xMC0yMjowNjo1MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIyLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkY4QzI5M0FDNEM2NTExRURCMzYyRkEyRUFBMjY0ODkzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkY4QzI5M0FENEM2NTExRURCMzYyRkEyRUFBMjY0ODkzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjhDMjkzQUE0QzY1MTFFREIzNjJGQTJFQUEyNjQ4OTMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjhDMjkzQUI0QzY1MTFFREIzNjJGQTJFQUEyNjQ4OTMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7ftDCTAAAFIklEQVR42sSZfW8UNxDGd20fJBWFIgpFtEgVFaV/0H6efsR+mzYtkKhJISGpCglNQkNCwt2uO0aP0TDMeL25o7X0aO/2xf7t2J6xZ9sYYzOm/Nj0LR0+JV0nXcXvT0gXSRdILbs9Vf6GdEp6TToi/Z30U+P+GdNuWwsKwGukrwB5hTRpxpcp6ZD0grRDwC8WBkqQl+nwNelL0mfGbRH6oA1hZV4S8J+kJwR8NBcoQd6mwz3S50qDPVNUYFsmxyTLLul3gt0eDUqAng7fke6SlsXlDjoPqGdHXk4SLIC7KlCCDHT4gfQNKQgLznCUsCVQx45eyInxu056SLCzIihBpge/R3d7YcWZOGbgKGA1UGeABtFOqnuV9Ihg+3xSGy93IfnwFHrDfstz2rV83ro2xcvmEjDk7sDTvDvJrXmTDt8Kt5MhZ4pFtXGaPUDLjNHixXvj/lyycVL790kvSXvvWZQglwB5Selurqnyf8p+a5abGeekuGXTBL5HXBelRZMbuqFMHKvCWWHmW2PUV/hbx3oj+e0dgt0KsOYyIo7s8o6pBrQXXS9BowEqISds2KRA8zzAX94QEacTFu0U6K7goiyLlvxsi3od6srDMgWaawELigS6ZDj0zphEsxGgvqK7O9zXCf+arHs9YKFxRQmLEoJbuRtp0ahEIg7oDNg8Vq8GdPmSEb97A7YbiE4SRrNkzyB7Y1Jm0EsJ9LIA5VEmH7uKF4jCN3JrynN9pfJLLgf4KxnPo3G0FBUn3oolXlsBGg3P4AIGa8us2SgPaOAWvOaeLNA4oPfiaiwsfuVDUYGNxqIksjEaz6mGL0pORegqAZYs3hiNxIKjj4VI1UjQQ8DKWTm2xMqtSTUcK68ddoUnCqAcX4su7YBh+LmjDHo4MFMtcOtc6UWH6tc2g/sO1txj3S8XCP+XHNue7DlspHaxSG1YOLN2kM64R+6N2oHfsu7WWOq9TVi8pSbYlMV4xkJaW4ByA/DOACjVa51LE26HdMbj8DbGagnAVzZQeq5WLXiepU3eO1BkKv5iMVZuab2yk7SAvAHpB+6VO4FN0rG2C93EW/iCRXxh6ysBaiG1eg6Qm+o/AIVVt9j60RsN+4qGrZfxhR7zbGxuEM8rdbuMkkBvIWPHK6vZxMktsJUhCcYLZD1H8qwxExDwAH9gJa9VHAqNBvbfgilBOvjNZM1TuXrSyg62qrdxT89WWtYuUksqtBWpHPlyG3CVTdGisGqH/M+JUZmUL1wLlVYPyEg/lgkyExSwB8isuQqQCRQGVLonIu14oPGEgRVOGqtfkG4OZDhqEhB+4IVTwHlKBorWerQpWDUN7EdYsGgWkZacKPfVWDo59XVq76y0cG4GYPcwBNpCN04KCoVzucvX8fHBLENdn8sG/OotI+WtbdastLicSE8xgfqhrUhTYdWUSvyV9AqVTwZ0ocLCqZ70rWkV9TdzgzIvsMoWLVq3hkJ3cznkURPkfk37tV2fyxPkqu6w9OCY/KhjXmET4bqquDGUCARpCOyLOmomlBPflda0zzQLAWVrgV/SqtvIzsnYLTdqx/g8czym3dGgzCIPRu7N80ZtDc83Hx0U0SNFrccjExRbeC7+J6AsK/0gf16p7IXflPTRRwfN3y9/ZpkWqxxhXJ+et6F5QRt4gJWCpc7gKQ7maWQRoBErn1Xl2gyTZ/s843LRoHm8riEg8Mz1Jl4gztvAokCz61lhrmcX/+MiKl8kaIPJsoIV0UPE84WUfwUYAFNdmuMpJTFXAAAAAElFTkSuQmCC"

$.getJSON(uploadedDataURL, function (geoJson) {
    echarts.registerMap('周口市', geoJson);
    var geoCoordMap = {
        "扶沟县": [114.442008,34.175061],
        "太康县": [114.853834,34.175312],
        "西华县": [114.490067,33.864378],
        "淮阳区": [114.910166,33.792547],
        "鹿邑县": [115.386386,33.971067],
        "商水县": [114.53927,33.593845],
        "川汇区": [114.712136,33.704836],
        "郸城县": [115.289,33.713852],
        "项城市": [114.899521,33.353085],
        "沈丘县": [115.178375,33.375514]
    };
    var chinaDatas = [
        [{
            name: '扶沟县',
            value: 34
        }],
        [{
            name: '太康县',
            value: 44
        }],
        [{
            name: '淮阳区',
            value: 14
        }],
        [{
            name: '鹿邑县',
            value: 88
        }],
        [{
            name: '商水县',
            value: 98
        }],
        [{
            name: '郸城县',
            value: 34
        }],
        [{
            name: '川汇区',
            value: 44
        }],
        [{
            name: '项城市',
            value: 14
        }],
        [{
            name: '西华县',
            value: 88
        }],
        [{
            name: '沈丘县',
            value: 98
        }]
    ];
    const convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    };

    var series = [];
    [['周口市', chinaDatas]].forEach(function (item, i) {
        series.push({
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            showEffectOn: "emphasis",
            rippleEffect: { //涟漪特效
                period: 4, //动画时间，值越小速度越快
                brushType: 'stroke', //波纹绘制方式 stroke, fill
                scale: 1 //波纹圆环最大限制，值越大波纹越大
            },
            label: {
                position: "inside",
                show: true,
                formatter: function (val) {
                    return val.value[2];
                },
                color:'#e4d6a4',
                fontSize: '18px',
            },
            symbol: tagIcon,
            symbolSize: [42, 54],
            itemStyle: {
                normal: {
                    show: false,
                    color: '#f00'
                }
            },
            data: item[1].map(function (dataItem) {
                console.log(geoCoordMap[dataItem[0].name].concat([dataItem[0].value]))
                return {
                    name: dataItem[0].name,
                    value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value])
                };
            }),
        });
    });

    option = {
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
            map: '周口市',
            zoom: 1.2,
            label: {
                show: true,
                color: 'rgba(63, 220, 236, 1)',
                fontSize: '16px',
                fontWeight: 'bold',
                fontStyle: 'italic',
                emphasis: {
                    show: false
                }
            },
            roam: false, //是否允许缩放
            itemStyle: {
                areaColor: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0.3, color: 'rgba(27, 54, 127, 1)' // 0% 处的颜色
                    }, {
                        offset: 0.6, color: 'rgba(36, 70, 146, 1)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                },
                borderColor: 'rgba(62, 137, 218, 1)',
                borderWidth: 1,
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