Vue.component('gsxx-block', {
  template: `
    <title-con title="十公示信息">
      <div class="gsxx-block">
        <div id="gsxxChart" class="gsxx-block-chart"></div>

        <img class="gsxx-block-bottom" src="../assets/img/sjzl/xycn-bottom.png" />
      </div>
    </title-con>
  `,
  data() {
    return {
      chart: null,
      options: {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          left: 'center',
          bottom: '10%',
          itemWidth: 15,
          itemHeight: 8,
          textStyle: {
            color: '#ffffff'
          },
        },
        color: [
          'rgba(248, 152, 78, 1)',
          'rgba(59, 166, 250, 1)',
          'rgba(13, 45, 84, 1)',
          'rgba(52, 204, 204, 1)',
          'rgba(71, 108, 100, 1)',
          'rgba(192, 84, 108, 1)',
          'rgba(148, 140, 188, 1)'
        ],
        series: [
          {
            name: 'Access From',
            type: 'pie',
            top: '-20%',
            radius: ['30%', '50%'],
            avoidLabelOverlap: false,
            label: {
              show: true,
              color: '#ffffff'
            },
            labelLine: {
              show: true,
              lineStyle: {
                color: '#ffffff'
              }
            },
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
      var el = document.getElementById('gsxxChart')
      this.chart = echarts.init(el)
      var data = [
        { value: 1048, name: '行政许可' },
        { value: 735, name: '行政处罚' },
        { value: 580, name: '行政强制' },
        { value: 484, name: '行政确认' },
        { value: 300, name: '行政征收' },
        { value: 1048, name: '行政给付' },
        { value: 735, name: '行政裁决' },
        { value: 580, name: '行政补偿' },
        { value: 484, name: '行政奖励' },
        { value: 300, name: '行政监督检查' },
      ]
      this.setData(data)
    },

    setData(data) {
      this.options.series[0].data = data
      this.chart.setOption(this.options)
    }
  }
})