<template>
  <div class="fltj">
    <bg-title>资源信息分类统计</bg-title>
    <div class="count-box">
      <span
        class="count-wrapper-item"
        flex="main:justify dir:top"
        v-for="(item, index) in top"
        :key="index"
      >
        <span class="font">{{ item.title }}</span>
        <p>
          <span class="num">{{ item.count }}</span>
          <span class="white-font">（{{ item.unit }}）</span>
        </p>
      </span>
    </div>

    <div>
      <chart ref="chart1" :options="returnBar" style="width: 100%; height: 220px;"></chart>
    </div>
  </div>
</template>

<script>
import bgTitle from '../../app/components/bg-title.vue'
import echarts from 'echarts'
const xyLineColor = '#535e83'
const splitLineColor = '#283353'
export default {
  components: { bgTitle },
  props: {
    top: {
      type: Array,
      default: () => [],
    },
    chartData: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    returnBar() {
      return {
        color: '#00abfb',
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '6%',
          top: '3%',
          containLabel: true,
        },
        xAxis: {
          show: false,
          type: 'value',
          boundaryGap: [0, 0.01],
          axisLine: {
            lineStyle: {
              color: xyLineColor,
            },
          },
          splitLine: { lineStyle: { color: splitLineColor } },
        },
        yAxis: {
          type: 'category',
          axisLine: {
            lineStyle: {
              color: xyLineColor,
            },
          },
          inverse: true,
          data: this.chartData.yData || [],
        },
        series: [
          {
            type: 'bar',
            showBackground: true,
            barWidth: 10,
            itemStyle: {
              barBorderRadius: 8,
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                { offset: 0, color: '#2380f2' },
                { offset: 1, color: '#39BBF3' },
              ]),
            },
            data: this.chartData.xData || [],
          },
        ],
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
.count-box {
  display: flex;
  .count-wrapper-item{
    text-align center;
    flex 1;
    background-color: #001739;
    background-image: url('~@/assets/images/summary/data_bg.png');
    margin: 20px 3px;
    padding-top: 10px;
    padding-bottom: 10px;
    .num {
      color: #02cbff;
      font-weight: 400;
      font-size: 16px;
    }
    .white-font {
      color: #fff;
      font-size: 12px;
    }
  }
}
</style>
