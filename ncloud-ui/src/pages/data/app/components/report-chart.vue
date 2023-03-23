<template>
  <div class="report-chart">
    <bg-title>信用报告趋势分析</bg-title>
    <chart :options="chartOptions" style="width: 100%; height: 220px;" />
  </div>
</template>

<script>
import BgTitle from './bg-title'
import echarts from 'echarts'

export default {
  name: 'report-chart',
  components: { BgTitle },
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    chartOptions() {
      return {
        tooltip: { trigger: 'axis' },
        grid: {
          left: '3%',
          right: '5%',
          bottom: '3%',
          top: 35,
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLine: { lineStyle: { color: '#535e83' } },
          axisLabel: { color: '#fff', fontSize: 10 },
          data: this.data.xData || [],
        },
        yAxis: {
          type: 'value',
          axisLine: { lineStyle: { color: '#535e83' } },
          axisLabel: { color: '#fff', fontSize: 10 },
          splitLine: { lineStyle: { color: '#283353' } },
          name: '数据量',
          min: 0,
        },
        series: [
          {
            type: 'line',
            itemStyle: {
              color: 'rgba(2,203,255,1)',
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(2,203,255,0.8)',
                },
                {
                  offset: 1,
                  color: 'rgba(2,203,255,0.2)',
                },
              ]),
            },
            data: this.data.yData || [],
          },
        ],
      }
    },
  },
}
</script>

<style scoped lang="stylus">
.report-chart {

}
</style>
