const dom = document.getElementById('mapChart');
const mapChart = echarts.init(dom)

var uploadedDataURL = '../assets/map/hy.json';
$.getJSON(uploadedDataURL, function (geoJson) {
  echarts.registerMap('海晏县', geoJson);

  const colorsMap = {
    '1': '#61d3f5',
    '2': '#73e57d',
    '3': '#cdc76e',
    '4': '#d99f46',
    '5': '#bf958d',
  };

  const iconMap = {
    '1': '../assets/images/icon-img1.png',
    '2': '../assets/images/icon-img2.png',
    '3': '../assets/images/icon-img3.png',
    '4': '../assets/images/icon-img4.png',
    '5': '../assets/images/icon-img5.png',
    '6': '../assets/images/icon-img6.png',
  };

  var cityDatas = [
    {
      id:'1',
      name: '部门1',
      value: 5235,
      rank: 1,
      coordinate: [100.726925, 36.961918]
    },
    {
      id:'2',
      name: '部门2',
      value: 3242,
      rank: 2,
      coordinate: [100.690131, 37.334707]
    },
    {
      id:'3',
      name: '部门3',
      value: 5644,
      rank: 3,
      coordinate: [100.971839, 37.064274]
    },
    {
      id:'4',
      name: '部门4',
      value: 1343,
      rank: 4,
      coordinate: [100.548701, 36.968377]
    },
    {
      id:'5',
      name: '部门5',
      value: 4644,
      rank: 5,
      coordinate: [101.10062, 36.972068]
    },
    {
      id:'6',
      name: '部门6',
      value: 4664,
      rank: 6,
      coordinate: [100.96724, 36.894527]
    }
  ];

  var series = [];
  cityDatas.forEach(function (item, i) {
    series.push(
      {
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: { //涟漪特效
          color: '#fff',
          period: 4, //动画时间，值越小速度越快
          brushType: 'stroke', //波纹绘制方式 stroke, fill
          scale: 6 //波纹圆环最大限制，值越大波纹越大
        },
        label: {
          normal: {
            show: true,
            position: 'top', //显示位置
            offset: [0, -20], //偏移设置
            textAlign: 'center',
            fontSize: '12px',
            color: '#fff',
            padding: [4, 7],
            borderWidth: 1,
            borderRadius: 2, // 边框圆角
            backgroundColor: 'rgba(4, 34, 67, 0.5)', // 背景色
            formatter: function (params) { //圆环显示文字
              return params.data.name;
            },
          },
          emphasis: {
            show: true
          }
        },
        symbolSize: 12,
        symbol: 'circle',
        itemStyle: {
          normal: {
            color: '#fff',
            show: false,
          }
        },
        data: cityDatas.map(function (item,index) {
          return {
            name: item.name,
            value: item.coordinate.concat([item.value]),
            rippleEffect: {
              color: colorsMap[item.rank] || '#fff'
            },
            label:{
              borderColor: colorsMap[item.rank] || '#fff',
            },
            symbol: 'image://' + (item.rank > 5 ? iconMap[6] : iconMap[item.rank] ),
          };
        })
      }
    );
  });

  option = {
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(68, 115, 178, 0.2)',
      borderColor: '#fff',
      showDelay: 0,
      hideDelay: 0,
      enterable: true,
      transitionDuration: 0,
      extraCssText: 'z-index:100',
      // position: ['60%', '10%'],
      position: 'top',
      formatter: function (params, ticket, callback) {
        // console.log(params);
        //根据业务自己拓展要显示的内容
        var tipHtml = "";
        var name = params.name;
        var value = params.value[2];
        tipHtml =
          `<div class="depart-card">
             <div class="p10">
               <div class="title">${name}</div>
               <div class="line"></div>
               <div flex="dir:column main:center cross:center">
                 <div class="text">数据归集数量</div>
                 <div class="value gradient2">${value}</div>
               </div>
             </div>
            </div>`
        return tipHtml;
      }
    },
    geo: {
      map: '海晏县',
      zoom: 1.2,
      roam: false, //是否允许缩放
      label: {
        emphasis: {
          show: false
        }
      },
      emphasis: {
        disabled: true,
      },
      itemStyle: {
        areaColor: 'rgba(68, 115, 178, 0.2)',
        borderColor: 'rgba(116, 140, 212, 1)',
        borderWidth: 2,
        emphasis: {
          areaColor: 'rgba(68, 115, 178, 0.2)',
          borderColor: 'rgba(116, 140, 212, 1)',
          borderWidth: 2,
          shadowColor: 'rgba(68, 115, 178, 0.2)', //阴影颜色
          shadowOffsetX: -5, //水平偏移
          shadowOffsetY: 5, //垂直偏移
          shadowBlur: 5,
        },
      },
    },
    series: series
  };

  mapChart.setOption(option);

});
