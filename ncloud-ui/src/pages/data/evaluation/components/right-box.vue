<template>
  <div class="right-box">
    <div class="toggle" @click="toggleChange"><b-icon name="ios-swap"></b-icon></div>

    <div class="tab1" v-if="tabKey === 1">
      <bg-title>诚信示范街区</bg-title>
      <div class="count-wrapper">
        <num-box :title="`示范街区商户信息`" :num-list="data.sfjq.numList"></num-box>
      </div>
      <div class="icon-box-wrapper" flex="box:mean">
        <star-box :title="`芦头大街`" :num="Number(data.sfjq.num1)"></star-box>
        <star-box :title="`橙信金街`" :num="Number(data.sfjq.num2)"></star-box>
      </div>
      <bg-title>诚信经营示范商户</bg-title>
      <div class="merchants-list-wrapper" style="margin-bottom: 10px;">
        <b-table
          :columns="columns1"
          :data="data.sfjq.tableData"
          border
          :row-class-name="tableRowClassName"
        >
          <template #rank="{index,row}">
            <div :class="['rankColor', 'rankbgColor' + index]">
              <span>{{ row.rank }}</span>
            </div>
          </template>
          <template #uName="{index,row}">
            <span :class="['rankColor' + index]" :title="row.uname">{{ row.uname }}</span>
          </template>
        </b-table>
      </div>
    </div>

    <div class="tab2" v-else>
      <bg-title>公职人员</bg-title>
      <div class="count-wrapper">
        <div class="total-count">
          <div class="totle-title">公职人员总量</div>
          <div class="content" flex="main:center cross:bottom">
            <div class="content-item" v-for="(item, index) in data.gzry.numList" :key="index">
              <div class="num">{{ item }}</div>
            </div>
            <div>条</div>
          </div>
        </div>
      </div>
      <div class="icon-box-wrapper" flex="box:mean">
        <star-box :title="`行政编制`" :num="data.gzry.num1"></star-box>
        <star-box :title="`事业单位`" :num="data.gzry.num2"></star-box>
      </div>
      <bg-title>公职人员信用等级分布</bg-title>
      <chart :options="barOptions1" style="width: 100%; height: 280px;" />
      <bg-title>公职人员指标分析</bg-title>
      <chart :options="barOptions2" style="width: 100%; height: 280px;" />
    </div>
  </div>
</template>

<script>
import NumBox from '@/components/NumBox/NumBox.vue'
import StarBox from '@/components/StarBox/StarBox.vue'
import BgTitle from '../../app/components/bg-title.vue'
import echarts from 'echarts'
const xyLineColor = '#535e83'
const splitLineColor = '#283353'

export default {
  components: { NumBox, StarBox, BgTitle },
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      columns1: [
        { title: '排名', slot: 'rank', align: 'center', width: 80 },
        { title: '商户名称', slot: 'uName', align: 'center', tooltip: true },
        { title: '信用分', key: 'score', align: 'center' },
        { title: '信用等级', key: 'level', align: 'center' },
      ],
      tabKey: 1,
    }
  },
  computed: {
    barOptions1() {
      return {
        color: '#00abfb',
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
          formatter: '{b}: {c}人',
        },
        grid: {
          left: '5%',
          right: '8%',
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
          axisLabel: {
            align: 'center',
            margin: 24,
            width: 40,
            size: 14,
            rich: {
              width: 40,
            },
          },
          inverse: true,
          data: this.data.gzry.chart1.xData || [],
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
            label: {
              show: true,
              position: 'right',
              color: '#fff',
              formatter: '{c}人',
            },
            data: this.data.gzry.chart1.yData || [],
          },
        ],
      }
    },
    barOptions2() {
      return {
        color: [
          '#9a60b4',
          '#ea7ccc',
          '#5470c6',
          '#91cc75',
          '#00baff',
          '#fac858',
          '#ee6666',
          '#73c0de',
          '#3ba272',
          '#fc8452',
        ],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        grid: {
          left: '5%',
          right: '3%',
          bottom: '6%',
          top: '4%',
          containLabel: true,
        },
        axisLabel: {
          show: true,
          interval: 0,
          formatter: function (value) {
            return (value.length > 6 ? (value.slice(0, 2) + '...') : value)
          },
        },
        xAxis: {
          type: 'category',
          axisLine: { lineStyle: { color: '#535e83' } },
          data: this.data.gzry.chart2.xData || [],
        },
        yAxis: {
          type: 'value',
          axisLine: { lineStyle: { color: '#535e83' } },
          splitLine: { lineStyle: { color: '#283353' } },
          name: '数据量',
          min: 0,
        },
        series: this.data.gzry.chart2.yData.map(item => ({
          name: item.name,
          type: 'bar',
          showBackground: true,
          barWidth: 8,
          itemStyle: {
            barBorderRadius: 8,
          },
          data: item.data,
        })),
      }
    },
  },
  methods: {
    // 表格隔行变色
    tableRowClassName(row, index) {
      if ((index + 1) % 2 === 0) {
        return 'even-row' // 类名
      } else {
        return 'odd-row' // 类名
      }
    },
    toggleChange() {
      this.tabKey = this.tabKey === 1 ? 0 : 1
    },
  },
}
</script>

<style lang="stylus" scoped>
.right-box {
  position: relative;
  height: 100%;
  .tab1, .tab2{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
  .toggle {
    position: absolute;
    right: 10px;
    top: 0;
    display: flex;
    align-items: center;
    background-color: #0d1b4d;
    padding: 4px 20px;
    border-radius: 18px;
    cursor: pointer;
    color: #fff;
  }
  .tab2{
    .total-count {
      font-size: 12px;
      font-weight: 600;
      color #fff;
      display: flex;
      align-items: center;
      .totle-title {
        width: 70px;
        margin: 0 10px;
        letter-spacing 8px
      }
      .content {
        display: flex;
        justify-content: center;
        .content-item {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: url("~@/assets/images/overview/num-bg.png") center no-repeat;
          width: 30px;
          height: 37px;
          margin: 0 5px;

          .num {
            font-size: 14px;
            color: #fff;
          }
        }
      }
    }
  }
}

//动态设置表格样式
.rankColor {
  display: inline-block;
  width: 22px;
  height: 22px;
  line-height: 22px;
  text-align: center;
  font-size: 14px;
  color: #fff;
}

.rankbgColor0 {
  background: rgba(0, 214, 249, 1)
}

.rankbgColor1 {
  background: rgba(51, 232, 111, 1)
}

.rankbgColor2 {
  background: rgba(206, 199, 95, 1)
}

.rankbgColor3 {
  background: rgba(228, 156, 45, 1)
}

.rankbgColor4 {
  background: rgba(199, 147, 139, 1)
}

.rankbgColor5 {
  background: rgba(202, 108, 93, 1)
}

.rankbgColor6 {
  background: rgba(220, 99, 181, 1)
}

.rankbgColor7 {
  background: rgba(129, 134, 204, 1)
}

.rankbgColor8 {
  background: rgba(94, 143, 217, 1)
}

.rankbgColor9 {
  background: rgba(130, 145, 234, 1)
}

.rankColor0 {
  color: rgba(0, 214, 249, 1)
}

.rankColor1 {
  color: rgba(51, 232, 111, 1)
}

.rankColor2 {
  color: rgba(206, 199, 95, 1)
}

.rankColor3 {
  color: rgba(228, 156, 45, 1)
}

.rankColor4 {
  color: rgba(199, 147, 139, 1)
}

.rankColor5 {
  color: rgba(202, 108, 93, 1)
}

.rankColor6 {
  color: rgba(220, 99, 181, 1)
}

.rankColor7 {
  color: rgba(129, 134, 204, 1)
}

.rankColor8 {
  color: rgba(94, 143, 217, 1)
}

.rankColor9 {
  color: rgba(130, 145, 234, 1)
}
</style>
