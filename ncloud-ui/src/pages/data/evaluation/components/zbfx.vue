<template>
  <div class="zbfx">
    <bg-title>自然人指标分析</bg-title>
    <chart :options="options1" style="width: 100%; height: 280px;" />
    <bg-title>市场主体指标分析</bg-title>
    <chart :options="options2" style="width: 100%; height: 280px;" />
  </div>
</template>

<script>
import BgTitle from '../../app/components/bg-title.vue'
export default {
  components: {
    BgTitle,
  },
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    options1() {
      return {
        color: ['#553cff', '#fe3b3c', '#fb952f', '#4dcea7', '#00ccff', '#0e31e3', '#1167e2'],
        tooltip: {
          trigger: 'item',
        },
        series: [
          {
            name: '自然人指标',
            type: 'pie',
            radius: '65%',
            avoidLabelOverlap: true,
            label: {
              show: true,
              color: '#fff',
              lineHeight: 20,
              align: 'center',
              formatter: p => p.name,
              fontSize: '10',
            },
            labelLine: {
              show: true,
            },
            data: this.data.chart1,
          },
        ],
      }
    },
    options2() {
      return {
        color: ['#553cff', '#fe3b3c', '#fb952f', '#4dcea7', '#00ccff', '#0e31e3', '#1167e2'],
        tooltip: {
          trigger: 'item',
        },
        series: [
          {
            name: '市场主体指标',
            type: 'pie',
            radius: '65%',
            avoidLabelOverlap: true,
            label: {
              show: true,
              color: '#fff',
              lineHeight: 20,
              align: 'center',
              formatter: p => p.name,
              fontSize: '10',
            },
            labelLine: {
              show: true,
            },
            data: this.data.chart2,
          },
        ],
      }
    },
  },
}
</script>

<style lang="stylus" scoped></style>
