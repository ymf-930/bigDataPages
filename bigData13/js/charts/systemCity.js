const dom = document.getElementById("mapChart");
const myChart = echarts.init(dom)

var uploadedDataURL = "../js/map/huantai.json";

$.getJSON(uploadedDataURL, function (geoJson) {
  echarts.registerMap('桓台县', geoJson);
  var mapGeoCoordMap = {
    "邢家镇": [118.068845, 37.013209],
    "起凤镇": [118.11364, 37.071468],
    "田庄镇": [118.005308, 36.99594],
    "新城镇": [117.958265, 36.962511],
    "唐山镇": [118.055986, 36.969241],
    "索镇街道": [118.116208, 36.955022],
    "少海街道": [118.101422, 36.959394],
    "果里镇": [118.094954, 36.912837],
    "马桥镇": [117.922847, 37.045612],
  };
  var mapDatas = [
    [{name: '邢家镇', value: 0}],
    [{name: '起凤镇', value: 0}],
    [{name: '田庄镇', value: 0}],
    [{name: '新城镇', value: 0}],
    [{name: '唐山镇', value: 0}],
    [{name: '索镇街道', value: 0}],
    [{name: '少海街道', value: 0}],
    [{name: '果里镇', value: 0}],
    [{name: '马桥镇', value: 0}],
  ];

  var series = [];
  [['桓台县', mapDatas]].forEach(function (item, i) {
    series.push(
      {
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: { //涟漪特效
          period: 4, //动画时间，值越小速度越快
          brushType: 'stroke', //波纹绘制方式 stroke, fill
          scale: 4 //波纹圆环最大限制，值越大波纹越大
        },
        label: {
          show: true,
          position: 'bottom', //显示位置
          offset: [0, 5], //偏移设置
          formatter: function (params) { //圆环显示文字
            return params.data.name;
          },
          fontSize: 13,
          color: '#fff',

          emphasis: {
            show: true,
          }
        },
        symbol: 'circle',
        symbolSize: function (val) {
          return 5 + val[2] * 5; //圆环大小
        },
        itemStyle: {
          show: true,
          color: '#04b4dc'
        },
        data: item[1].map(function (dataItem) {
          return {
            name: dataItem[0].name,
            value: mapGeoCoordMap[dataItem[0].name].concat([dataItem[0].value])
          };
        }),
      },
    );
  });

  option = {
    geo: {
      map: '桓台县',
      zoom: 1.2,
      label: {
        emphasis: {
          show: false
        }
      },
      roam: false, //是否允许缩放
      itemStyle: {
        areaColor: 'rgba(12, 44, 93, 1)',
        borderColor: 'rgba(39, 106, 154, 1)',
        borderWidth: 2,
        shadowColor: 'rgba(68, 115, 178, 0.2)', //阴影颜色
        shadowOffsetX: -5, //水平偏移
        shadowOffsetY: 5, //垂直偏移
        shadowBlur: 5
      },
      emphasis: {
        itemStyle: {
          areaColor: 'rgb(23,54,102)',
          borderColor: 'rgba(39, 106, 154, 1)',
        }
      }
    },
    series: series
  };

  myChart.setOption(option);
});