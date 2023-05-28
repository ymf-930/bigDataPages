Vue.component('xycn-block', {
  template: `
    <title-con title="信用承诺">
      <div class="xycn-block">
        <div id="xycnCharts" class="xycn-block-chart" />

        <img class="xycn-block-bottom" src="../assets/img/sjzl/xycn-bottom.png" />
      </div>    
    </title-con>
  `,
  data() {
    return {
      chart: null,
      options: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          show: false
        },
        grid: {
          top: '0%',
          left: '3%',
          right: '6%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01],
          axisLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.5)'
            }
          },
          axisLabel: {
            color: '#ffffff'
          },
        },
        yAxis: {
          type: 'category',
          axisLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.5)'
            }
          },
          axisLabel: {
            color: '#ffffff'
          },
          data: []
        },
        series: [
          {
            name: '2012',
            type: 'bar',
            itemStyle: {
              color: 'rgba(48, 188, 244, 1)',
              barBorderRadius: [0, 10, 10, 0]
            },
            barWidth: '15px',
            data: []
          }
        ]
      }
    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      var el = document.getElementById('xycnCharts')
      this.chart = echarts.init(el)
      var xData = [0, 10000, 20000, 300000, 4000, 50000]
      var yData = ['主动公式型', '审批替代型', '容缺受理型', '证明事项告知型', '行业自律型', '信用修复型']
      this.setData(xData, yData)
    },

    setData(xData, yData) {
      this.options.yAxis.data = yData
      this.options.series[0].data = xData
      this.chart.setOption(this.options)
    }
  },
});
