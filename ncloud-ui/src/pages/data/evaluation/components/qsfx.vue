<template>
  <div class="qsfx">
    <bg-title>信用指数趋势分析</bg-title>
    <chart :options="chartOptions" style="width: 100%; height: 400px;" />
  </div>
</template>

<script>
import bgTitle from '../../app/components/bg-title.vue'
import echarts from 'echarts'
export default {
  components: { bgTitle },
  props: {
    data: {
      type: Object,
      default: () => ({
      }),
    },
  },
  computed: {
    chartOptions() {
      return {
        tooltip: { trigger: 'axis' },
        grid: {
          left: '3%',
          right: '10%',
          bottom: '10%',
          top: '16%',
          containLabel: true,
        },
        legend: {
          top: 16,
          textStyle: { color: '#fff' },
          data: ['市场主体信用指数', '个人信用指数'],
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLine: { lineStyle: { color: '#535e83' } },
          axisLabel: { color: '#535e83' },
          data: this.data.xData || [],
        },
        yAxis: {
          type: 'value',
          axisLine: { lineStyle: { color: '#535e83' } },
          axisLabel: { color: '#535e83', fontSize: 10 },
          splitLine: { lineStyle: { color: '#283353' } },
          name: '指数',
          min: 1000,
        },
        series: [
          {
            type: 'line',
            name: '市场主体信用指数',
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
          {
            type: 'line',
            name: '个人信用指数',
            itemStyle: {
              color: 'rgba(129,134,204,1)',
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(129,134,204,0.8)',
                },
                {
                  offset: 1,
                  color: 'rgba(129,134,204,0.2)',
                },
              ]),
            },
            data: this.data.yData1 || [],
          },
        ],
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
.qsfx {
  color: #fff;
  margin-top: 60px;
  background: url('~@/assets/images/overview/center-bottom.png') no-repeat 0 bottom;
  background-size: 100% 60px;
}
</style>
