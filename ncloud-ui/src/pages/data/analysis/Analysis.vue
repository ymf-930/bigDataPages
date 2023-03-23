<template>
  <div class="analysis">
    <div class="header-wrap" flex="main:center">
      <img src="../../../assets/images/analysis/head-title.png" alt="">

      <router-link class="to-home" to="/home">返回</router-link>

    </div>
    <div class="content-wrap" flex>
      <div class="p20">
        <div flex="main:justify dir:top" style="height: 100%;">
          <Card2>
            <template slot="title">
              <span>本月贷款数据</span>
            </template>
            <template slot="content">
              <div flex="main:justify">
                <span class="count-wrapper-item" flex="main:justify dir:top">
                  <span class="title">本月放款金额</span>
                  <div style="padding: 20px 0; text-align: right">
                    <span class="num">{{ dksj.dkje }}</span>
                    <span class="unit">万元</span>
                  </div>
                  <div class="mt-10">
                    <!-- <chart ref="chart1"
                             :options="returnBar(dksj.chartData1)"
                             style="width: 100%; height: 55px">
                      </chart> -->
                    <img src="@/assets/images/analysis/bg_1234.png" style="width: 100%; height: 55px" alt="">
                  </div>
                </span>
                <span class="count-wrapper-item" flex="main:justify dir:top">
                  <span class="title">本月贷款笔数</span>
                  <div style="padding: 20px 0; text-align: right">
                    <span class="num">{{ dksj.dkbs }}</span>
                    <span class="unit">笔</span>
                  </div>
                  <div class="mt-10">
                    <!-- <chart ref="chart2"
                             :options="returnBar2(dksj.chartData2)"
                             style="width: 100%; height: 55px;">
                      </chart> -->
                    <img src="@/assets/images/analysis/bg_123.png" style="width: 100%; height: 55px" alt="">
                  </div>
                </span>
              </div>
            </template>
          </Card2>
          <Card2>
            <template slot="title">
              <span>近半年申请融资贷款趋势</span>
            </template>
            <template slot="content">
              <chart ref="chart3" :options="returnTrend(dkqs)" style="width: 100%; height: 225px;margin: 25px 0">
              </chart>
            </template>
          </Card2>
          <Card2>
            <template slot="title">
              <div flex="main:justify">
                <span>融资产品热度排行TOP5</span>
              </div>
            </template>
            <template slot="content">
              <div class="table rdph-table">
                <div class="table-row" v-for="(item, index) in rdph" :key="index" flex="main:justify cross:bottom">
                  <img class="left" :src="require(`../../../assets/images/analysis/icon${index + 1}.png`)"
                       style="width: 25px; height: 25px" alt="">
                  <div class="right" flex="main:justify dir:top">
                    <div class="right-top" flex="main:justify">
                      <span class="col" :title="item.name">{{
                          item.name.length > 15 ? item.name.substring(0, 15) + '...' :
                            item.name
                        }}</span>
                      <span class="col">{{ item.num }}笔</span>
                    </div>
                    <el-progress :width="100" :stroke-width="10" :percentage="item.rate" :show-text="false"
                                 color="#87f7c7"></el-progress>
                  </div>
                </div>
              </div>
            </template>
          </Card2>
        </div>
      </div>
      <div class="p20" style="padding-left: 0; padding-right: 0;" flex="main:justify dir:top">
        <div class="center-top" flex="main:center dir:top">
          <div class="title">信易贷放款总金额</div>
          <number-block4 :number="mainData.fkze" :number-style="{ fontSize: '46px', letterSpacing: '42px' }" unit="万元">
            <template #icon>
              <div class="num-item" flex="main:center cross:center" v-for="(item, index) in handleNum(mainData.fkze)"
                   :key="index">
              </div>
            </template>
          </number-block4>
          <div class="progress-content">
            <div class="progress-label">已实名认证企业占比</div>
            <div class="rate-content">
              <div class="rate-box">
                <span>{{ mainData.rate }}%</span>
              </div>
            </div>
            <el-progress :stroke-width="22" :percentage="mainData.rate" :show-text="false"></el-progress>
            <div style="color: #fff;font-size:14px;text-align:center;padding-top:10px;">已申请融资需求企业数 {{ mainData.num }}
              家
            </div>
          </div>
        </div>
        <div flex="main:justify" class="center-bottom">
          <Card2>
            <template slot="title">
              <div flex="main:justify">
                <span style="font-weight: bold; font-size: 22px;">贷款需求</span>
              </div>
            </template>
            <template slot="content">
              <div class="table" style="height: 280px;">
                <swiper ref="mySwiper" style="height: 100%;" :options="swiperOptions1">
                  <swiper-slide class="table-row" flex="main:justify" :key="index"
                                v-for="(item,index) in dkxq">
                    <div class="col" style="width:30%; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;" :title="item.name">{{item.name}}</div>
                    <div class="col" style="width:45%; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;" :title="item.desc">{{item.desc}}</div>
                    <div class="col" style="width:25%; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;text-align: right;" :title="item.date">{{item.date}}</div>
                  </swiper-slide>
                </swiper>
              </div>
            </template>
          </Card2>
          <Card2>
            <template slot="title">
              <div flex="main:justify">
                <span style="font-weight: bold; font-size: 22px;">服务动态</span>
              </div>
            </template>
            <template slot="content">
              <div class="table" style="height: 280px;">
                <swiper ref="mySwiper" style="height: 100%;" :options="swiperOptions2">
                  <swiper-slide class="table-row" flex="main:justify" :key="index"
                                v-for="(item,index) in fwdt">
                    <div class="col" style="width: 75%; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;" :title="item.name">{{item.name}}</div>
                    <div class="col" style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis;" :title="item.date">{{item.date}}</div>
                  </swiper-slide>
                </swiper>
              </div>
            </template>
          </Card2>
        </div>
      </div>
      <div class="p20">
        <div flex="main:justify dir:top" style="height: 100%;">
          <Card2>
            <template slot="title">
              <span>金融机构融资排行</span>
            </template>
            <template slot="content">
              <div class="table rzph-table" style="height: 144px;">
                <swiper ref="mySwiper" style="height: 100%;" :options="swiperOptions3">
                  <swiper-slide class="table-row" flex="main:justify" :key="index"
                                v-for="(item,index) in rzph">
                    <div v-if="index < 3" :class="['col', 'rank-num' + index]" style="width: 12%">NO.{{item.rank}}</div>
                    <div v-else style="width: 12%" class="rank-num col">NO.{{ item.rank }}</div>
                    <div class="col" style="width: 28%; text-align: left; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;" :title="item.name">{{item.name}}</div>
                    <div class="col" style="width: 25%; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;" :title="item.value">{{item.value}}</div>
                    <div class="rank-progress col" flex="main:center cross:center" style="width: 35%; text-align: left">
                      <el-progress :width="80" :stroke-width="12" :percentage="item.rate" color="#87f7c7"></el-progress>
                    </div>
                  </swiper-slide>
                </swiper>
              </div>
            </template>
          </Card2>
          <Card2>
            <template slot="title">
              <div flex="main:justify">
                <span>申请融资方式分析</span>
              </div>
            </template>
            <template slot="content">
              <chart ref="chart4" :options="returnCircle(fsfxData)" style="width: 100%; height: 160px;"></chart>
            </template>
          </Card2>
          <Card2>
            <template slot="title">
              <span>融资进度分析</span>
            </template>
            <template slot="content">
              <div flex="main:justify" style="padding-top: 20px;">
                <span class="jdfx-item color1" flex="main:justify dir:top">
                  <span class="title">已发布融资贷款数量</span>
                  <span class="num">{{ jdfx.yfb }}</span>
                </span>
                <span class="jdfx-item color2" flex="main:justify dir:top">
                  <span class="title">已受理融资贷款数量</span>
                  <span class="num">{{ jdfx.ysl }}</span>
                </span>
              </div>
              <div flex="main:justify">
                <span class="jdfx-item color3" flex="main:justify dir:top">
                  <span class="title">已授信融资贷款数量</span>
                  <span class="num">{{ jdfx.ysx }}</span>
                </span>
                <span class="jdfx-item color4" flex="main:justify dir:top">
                  <span class="title">已放款融资贷款数量</span>
                  <span class="num">{{ jdfx.yfk }}</span>
                </span>
              </div>
            </template>
          </Card2>
          <Card2>
            <template slot="title">
              <span>风控模型案例分析</span>
            </template>
            <template slot="content">
              <chart ref="chart5" :options="returnRose(alfx)" style="width: 100%; height: 200px;"></chart>
            </template>
          </Card2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import echarts from 'echarts'
import Card2 from '../../../components/Card2/Card2'
import { NumberBlock4 } from '@/components/NumberBlock'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

// 统一变量
const xyLineColor = '#fff'
const splitLineColor = '#283353'

export default {
  name: 'Analysis',
  components: {
    Card2,
    NumberBlock4,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      fsfxData: [
        {
          name: '平台',
          data: [{
            name: '',
            value: 37,
            count: 0,
            itemStyle: {
              borderWidth: 0
            }
          }, {
            name: '平台',
            label: '',
            value: 0,
            count: 0
          }]
        },
        {
          name: '小程序',
          data: [{
            name: '',
            value: 37,
            count: 0,
            itemStyle: {
              borderWidth: 0
            }
          }, {
            name: '小程序',
            label: '',
            value: 0,
            count: 0
          }]
        },
        {
          name: '累计放款',
          data: [{
            name: '',
            value: 20,
            count: 0,
            itemStyle: {
              borderWidth: 0
            }
          }, {
            name: '累计放款',
            label: '',
            value: 0,
            count: 0
          }]
        }
      ],
      swiperOptions1: {
        direction: 'vertical',
        slidesPerView: 8,
        loop: true,
        autoplay: {
          delay: 1500,
          stopOnLastSlide: false,
          disableOnInteraction: true
        }
      },
      swiperOptions2: {
        direction: 'vertical',
        slidesPerView: 8,
        loop: true,
        autoplay: {
          delay: 1500,
          stopOnLastSlide: false,
          disableOnInteraction: true
        }
      },
      swiperOptions3: {
        direction: 'vertical',
        slidesPerView: 3,
        loop: true,
        autoplay: {
          delay: 1500,
          stopOnLastSlide: false,
          disableOnInteraction: true
        }
      }
    }
  },
  created() {
    this.initData()
  },
  mounted() {

  },
  computed: {
    ...mapState({
      dksj: state => state.xyd.dksj, // 贷款数据
      dkqs: state => state.xyd.dkqs, // 贷款趋势
      rdph: state => state.xyd.rdph, // 热度排行
      mainData: state => state.xyd.mainData, // 中间的数据
      dkxq: state => state.xyd.dkxq, // 贷款需求
      fwdt: state => state.xyd.fwdt, // 服务动态
      rzph: state => state.xyd.rzph, // 融资排行
      fsfx: state => state.xyd.fsfx, // 方式分析
      jdfx: state => state.xyd.jdfx, // 进度分析
      alfx: state => state.xyd.alfx // 案例分析
      // source: state => state.analysis.source
    })
  },
  methods: {
    initData() {
      this.$store.dispatch('getAnalysisData')
    },
    handleNum(num) {
      var str = num + ''
      const sliteNum = str.length % 3 === 0 ? Math.floor(str.length / 3) - 1 : Math.floor(str.length / 3)
      const numlength = str.length + sliteNum
      return numlength
    },
    returnBar(data) {
      return {
        color: '#fcbc24',
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '6%',
          top: '3%',
          containLabel: true
        },
        dataset: {
          source: data
        },
        xAxis: {
          show: false,
          type: 'category',
          axisLine: {
            lineStyle: {
              color: xyLineColor
            }
          }
          // inverse: true
        },
        yAxis: {
          show: false,
          type: 'value',
          boundaryGap: [0, 0.01],
          axisLine: {
            lineStyle: {
              color: xyLineColor
            }
          },
          splitLine: { lineStyle: { color: splitLineColor } }
        },
        series: [
          {
            type: 'bar',
            showBackground: true,
            barWidth: 6,
            itemStyle: {
              barBorderRadius: 8,
              color: '#fcbc24'
            }
          }
        ]
      }
    },
    returnBar2(data) {
      return {
        color: '#84ec9c',
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '6%',
          top: '3%',
          containLabel: true
        },
        dataset: {
          source: data
        },
        xAxis: {
          show: false,
          type: 'category',
          axisLine: {
            lineStyle: {
              color: xyLineColor
            }
          }
          // inverse: true
        },
        yAxis: {
          show: false,
          type: 'value',
          boundaryGap: [0, 0.01],
          axisLine: {
            lineStyle: {
              color: xyLineColor
            }
          },
          splitLine: { lineStyle: { color: splitLineColor } }
        },
        series: [
          {
            type: 'bar',
            showBackground: true,
            barWidth: 6,
            itemStyle: {
              barBorderRadius: 8,
              color: new echarts.graphic.LinearGradient(
                0, 0, 1, 0,
                [
                  { offset: 0, color: '#7cec9c' },
                  { offset: 1, color: '#84ec9c' }
                ]
              )
            }
          }
        ]
      }
    },
    returnTrend(data) {
      return {
        tooltip: { trigger: 'axis' },
        grid: {
          left: '3%',
          right: '5%',
          bottom: '3%',
          top: 35,
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLine: { lineStyle: { color: '#535e83' } },
          axisLabel: { color: '#fff', fontSize: 10 },
          data: data.xData || []
        },
        yAxis: {
          type: 'value',
          axisLine: { lineStyle: { color: '#535e83' } },
          axisLabel: { color: '#fff', fontSize: 10 },
          splitLine: { lineStyle: { color: '#283353' } },
          name: '单位（笔）',
          nameTextStyle: {
            color: '#fff'
          },
          min: 0
        },
        series: [
          {
            smooth: true,
            type: 'line',
            itemStyle: {
              color: 'rgba(2,203,255,1)'
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgba(124, 220, 188, 1)'
                },
                {
                  offset: 1,
                  color: 'rgba(124, 220, 188, 0.1)'
                }
              ])
            },
            data: data.yData || []
          }
        ]
      }
    },
    returnCircle(data) {
      data[0].data[1].value = this.fsfx[0].value
      data[0].data[1].count = this.fsfx[0].count

      data[1].data[1].value = this.fsfx[1].value
      data[1].data[1].count = this.fsfx[1].count

      data[2].data[1].value = this.fsfx[2].value
      data[2].data[1].count = this.fsfx[2].count

      const labelStyle = {
        show: true,
        rich: {
          a: {
            color: '#fff',
            align: 'center',
            fontSize: 20,
            fontWeight: 'bold'
          },
          b: {
            color: '#fff',
            align: 'center',
            fontSize: 12
          }
        },
        formatter: function (params) {
          return '{a|' + params.value + '%}\n\n' + '{b|' + params.data.count + '笔}'
        },
        position: 'center'
      }
      const itemStyles = function (color1, color2) {
        return {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ // 描边颜色,右/下/左/上
            offset: 0,
            color: color1
          }, {
            offset: 1,
            color: color2
          }]),
          borderColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ // 描边颜色
            offset: 0,
            color: color1
          }, {
            offset: 1,
            color: color2
          }]),
          borderWidth: 5 // 描边线宽
        }
      }
      const titleArr = []
      data.forEach((item, index) => {
        titleArr.push({
          text: item.name,
          left: (index + 1) * 25 + '%',
          top: '80%',
          textAlign: 'center',
          textStyle: {
            fontWeight: 'normal',
            fontSize: '14',
            color: 'white',
            textAlign: 'center'
          }
        })
        item.data[1].label = labelStyle
      })
      return {
        title: titleArr,
        series: [{
          center: ['25%', '50%'],
          radius: ['46%', '47%'],
          clockWise: false, // 饼图的扇区是否是顺时针排布
          hoverAnimation: false, // 是否开启 hover 在扇区上的放大动画效果
          type: 'pie',
          label: {
            show: false
          },
          labelLine: {
            show: false
          },
          itemStyle: itemStyles('rgba(20, 236, 140, 1)', 'rgba(35, 84, 103, 1)'),
          data: data[0].data
        },
          {
            center: ['50%', '50%'],
            radius: ['46%', '47%'],
            clockWise: false, // 饼图的扇区是否是顺时针排布
            hoverAnimation: false, // 是否开启 hover 在扇区上的放大动画效果
            type: 'pie',
            label: {
              show: false
            },
            labelLine: {
              show: false
            },
            itemStyle: itemStyles('rgba(28, 204, 252, 1)', 'rgba(35, 84, 103, 1)'),
            data: data[1].data
          },
          {
            center: ['75%', '50%'],
            radius: ['46%', '47%'],
            clockWise: false, // 饼图的扇区是否是顺时针排布
            hoverAnimation: false, // 是否开启 hover 在扇区上的放大动画效果
            type: 'pie',
            label: {
              show: false
            },
            labelLine: {
              show: false
            },
            itemStyle: itemStyles('rgba(252, 188, 44, 1)', 'rgba(76, 84, 84, 1)'),
            data: data[2].data
          }]
      }
    },
    returnRose(data) {
      return {
        color: ['#048ce4', '#04bbf3', '#042ccc', '#045cd4', '#1cecfc', '#14d0f4', '#14d4fc'],
        tooltip: {
          trigger: 'item',
          formatter: '{c} ({d}%)'
        },
        dataset: {
          source: data
        },
        series: [
          {
            name: '数据来源信息',
            type: 'pie',
            radius: [0, 85],
            top: '20%',
            bottom: '0',
            center: ['50%', '50%'],
            roseType: 'area',
            label: {
              show: true,
              color: '#fff',
              lineHeight: 20,
              align: 'center',
              formatter: p => {
                return p.name + '\n' + p.percent + '%'
              },
              fontSize: '12'
            },
            labelLine: {
              show: true
            }
          }
        ]
      }
    }
  }
}
</script>

<style>
.rzph-table .el-progress-bar {
  padding-right: 60px !important;
}

.rzph-table .el-progress__text {
  margin-left: unset;
  color: #fff !important;
}
</style>

<style lang="stylus" scoped>
@import url("../../../../node_modules/swiper/css/swiper.css");
[flex~="space:around"] {
  -webkit-box-pack: justify;
  -webkit-justify-content: space-around;
  -ms-flex-pack: justify;
  justify-content: space-around
}

.to-home {
  position: absolute;
  right: 40px;
  background-color: #0d1b4d;
  padding: 4px 20px;
  -webkit-border-radius: 18px;
  -moz-border-radius: 18px;
  border-radius: 18px;
  cursor: pointer;
  top: 60px;
}

.analysis
  height 1080px;
  background url("~@/assets/images/analysis/background.jpg")
  background-repeat: no-repeat
  background-position: center
  background-size: cover;
  padding 28px 0
  box-sizing border-box

  .header-wrap
    position: relative;

  .content-wrap
    > div
      &:nth-child(1)
        width 460px

      &:nth-child(2)
        width calc(100% - 920px)

      &:nth-child(3)
        width 460px

  .center-top
    text-align center
    width: 100%
    height: 600px
    position relative

    .title
      color #fff
      font-size: 46px;
      text-align: center;
      font-weight: bold;
      margin-bottom: 40px;

    .progress-content
      width: 502px;
      height: 62px
      margin 0 auto

      .progress-label
        color #fff
        font-size: 14px;
        line-height: 150%;
        text-align: left;
        padding 6px 0
        margin-top: 40px;

      .rate-content {
        display flex
        justify-content right

        .rate-box {
          width 77px
          height 36px
          background url("~@/assets/images/analysis/rate-bg.png")
          background-repeat: no-repeat
          background-position: center
          position relative
        }

        span {
          position absolute
          left 50%
          top 10%
          transform translateX(-50%)
          color #fcc004
        }
      }

  .center-bottom
    width: 100%

    .card
      width 48%

      .table
        .table-row
          position: relative
          padding-left 10px

          &::after
            content: '';
            position: absolute;
            background-color: #32abff;
            left: 0;
            width: 4px;
            height: 40px;

  .count-wrapper-item
    text-align center
    flex 1
    margin: 20px 10px
    padding-top: 10px
    padding-bottom: 10px

    .title
      color #6bc3ff
      font-size: 14px

    .num
      color #6bc3ff
      font-size: 32px
      font-weight: bold

    .unit
      padding-left: 7px
      color #6bc3ff
      font-size: 14px

    img
      width 40px
      height auto
      margin: 10px auto

    span
      line-height: 26px

  .jdfx-item
    text-align center
    flex 1
    margin: 0 3px
    color #6bc3ff

    .title
      font-size: 14px

    .num
      font-size: 32px
      font-weight: bold
      padding 10px 0

  .color1 {
    .title, .num {
      color #6bc3ff
    }
  }

  .color2 {
    .title, .num {
      color #87f7c7
    }
  }

  .color3 {
    .title, .num {
      color #CAF982
    }
  }

  .color4 {
    .title, .num {
      color #fcac04
    }
  }

.table

  .table-row
    line-height: 40px

    .col
      text-align left
      color #ffffff
      padding 0 10px

.rdph-table {
  padding 20px 20px 0

  .right {
    padding-left: 20px;
    flex 1
  }
}

.num-item {
  width: 53px;
  height: 83px;
  background-image: url("~@/assets/images/analysis/num-bg.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin: 0 6px;
}

::v-deep .rank-progress .el-progress__text {
  font-size: 14px !important;
  color #fff
}

::v-deep .progress-content .el-progress-bar__inner {
  background-color: unset;
  background-image: linear-gradient(to right, #fc7304, #fcc004);
}

::v-deep .rzph-table {

  .table-row {
    height 48px;
    line-height 48px;

    .col {
      text-align center
      color #ffffff
      padding 0
    }

    .rank-num0, .rank-num1 {
      background: url("~@/assets/images/analysis/no-bg.png");
      background-repeat: no-repeat
      background-position: center
      color #505050
      font-size: 14px
    }

    .rank-num2 {
      background: url("~@/assets/images/analysis/no3-bg.png");
      background-repeat: no-repeat
      background-position: center
      color #505050
      font-size: 14px
    }

    .rank-num {
      color #fff
      font-size: 14px
    }

    .rank-progress {
      .el-progress {
        width 100%
      }
    }
  }
}
</style>
