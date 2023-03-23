<template>
  <div class="public" flex>
    <Panel>
      <template slot="inner">
        <div flex="main:justify dir:top" style="height: 100%;">
          <Card>
            <template slot="title">
              <div flex="main:justify" style="margin-top: 20px;">
                <span>部门双公示数据统计情况</span>
              </div>
            </template>
            <template slot="content">
              <div class="table scroll-list-486" style="padding-top: 20px;">
                <b-scrollbar style="height:100%;">
                  <div class="table-row" flex="main:justify">
                    <span style="width: 50%">部门名称</span>
                    <span style="width: 25%">许可信息</span>
                    <span style="width: 25%">处罚信息</span>
                  </div>
                  <div class="table-row deptListClass" v-for="(item, index) in deptList" :key="index" flex="main:justify">
                  <span style="width: 50%;max-width:180px;overflow:hidden; white-space:nowrap; text-overflow:ellipsis;">{{ item.name }}</span>
                  <span style="width: 25%">{{ item.xk }}</span>
                  <span style="width: 25%">{{ item.cf }}</span>
                </div>
                </b-scrollbar>
              </div>
            </template>
          </Card>
          <Card>
            <template slot="title">
              <span>双公示数据7天提报数量</span>
            </template>
            <template slot="content">
              <chart ref="chart1" :options="returnBar(week)" style="width: 100%; height: 326px;"></chart>
            </template>
          </Card>
        </div>
      </template>
    </Panel>
    <Panel style="padding-left: 0; padding-right: 0;" flex="main:justify dir:top">
      <template slot="outer">
        <div class="center-container" style="margin: 50px 0;color: #fff;">
          <div class="show-geo">
            <span class="item-count-bar">
              <img class="icon" src="~@/assets/images/overview/md_icon01.png" alt="">
              <span class="count-square">
                <div>自然人行政许可</div>
                <div><i class="num">{{midSources.natualpersonlicense}}</i><i>（条）</i></div>
              </span>
            </span>
            <span class="item-count-bar">
              <img class="icon" src="~@/assets/images/overview/md_icon01.png" alt="">
              <span class="count-square">
                <div>法人行政许可</div>
                <div><i class="num">{{midSources.legalpersonlicense}}</i><i>（条）</i></div>
              </span>
            </span>
            <span class="item-count-bar">
              <img class="icon" src="~@/assets/images/overview/md_icon01.png" alt="">
              <span class="count-square">
                <div>自然人行政处罚</div>
                <div><i class="num">{{midSources.natualpersonpunish}}</i><i>（条）</i></div>
              </span>
            </span>
            <span class="item-count-bar">
              <img class="icon" src="~@/assets/images/overview/md_icon01.png" alt="">
              <span class="count-square">
                <div>法人行政处罚</div>
                <div><i class="num">{{midSources.legalpersonpunish}}</i><i>（条）</i></div>
              </span>
            </span>
          </div>
          <div class="center-container1" ref="centerContainer" flex="justify:center">
            <canvas ref="centerCvs"></canvas>
            <canvas ref="radarCvs" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)"></canvas>
          </div>
          <!-- <Animation3D class="bg-3d" /> -->
        </div>
        <!-- <div class="center-container1" ref="centerContainer" flex="justify:center">
          <canvas ref="centerCvs"></canvas>
          <canvas ref="radarCvs" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)"></canvas>
        </div> -->
      </template>
      <!-- <template slot="outer">
        <div class="center">
          <div class="cloud">
            <i>双公示信息总数</i><br>
            <i class="num">{{ parseInt(Number(midSources.natualpersonlicense) + Number(midSources.natualpersonpunish) + Number(midSources.legalpersonlicense) + Number(midSources.legalpersonpunish))  }}</i><i>（个）</i>
          </div>
          <img src="~@/assets/images/public/guangshu.png" alt="" class="light">
          <img src="~@/assets/images/public/huan1.png" alt="" class="cir cir-1">
          <img src="~@/assets/images/public/huan2.png" alt="" class="cir cir-2">
          <img src="~@/assets/images/public/huan3.png" alt="" class="cir cir-3">
          <img src="~@/assets/images/public/huan4.png" alt="" class="cir cir-4">
          <div class="liner">
            <div class="liner-item liner-item-1">
              <img src="~@/assets/images/public/dian.png" alt="" class="cir-light">
              <div class="light-bg">
                <div class="inner" flex="space:around cross:center">
                  <img src="~@/assets/images/public/icon01.png" alt="">
                  <span>
                    <i>自然人行政许可</i><br>
                    <i class="num">{{midSources.natualpersonlicense}}</i><i>（个）</i>
                  </span>
                </div>
                <span class="light-corner"></span>
                <span class="light-corner"></span>
                <span class="light-corner"></span>
                <span class="light-corner"></span>
              </div>
            </div>
            <div class="liner-item liner-item-2">
              <img src="~@/assets/images/public/dian.png" alt="" class="cir-light">
              <div class="light-bg">
                <div class="inner" flex="space:around cross:center">
                  <img src="~@/assets/images/public/icon02.png" alt="">
                  <span>
                    <i>法人行政许可</i><br>
                    <i class="num">{{midSources.legalpersonlicense}}</i><i>（个）</i>
                  </span>
                </div>
                <span class="light-corner"></span>
                <span class="light-corner"></span>
                <span class="light-corner"></span>
                <span class="light-corner"></span>
              </div>
            </div>
            <div class="liner-item liner-item-3">
              <img src="~@/assets/images/public/dian.png" alt="" class="cir-light">
              <div class="light-bg">
                <div class="inner" flex="space:around cross:center">
                  <img src="~@/assets/images/public/icon03.png" alt="">
                  <span>
                    <i>自然人行政处罚</i><br>
                    <i class="num">{{midSources.natualpersonpunish}}</i><i>（个）</i>
                  </span>
                </div>
                <span class="light-corner"></span>
                <span class="light-corner"></span>
                <span class="light-corner"></span>
                <span class="light-corner"></span>
              </div>
            </div>
            <div class="liner-item liner-item-4">
              <img src="~@/assets/images/public/dian.png" alt="" class="cir-light">
              <div class="light-bg">
                <div class="inner" flex="space:around cross:center">
                  <img src="~@/assets/images/public/icon04.png" alt="">
                  <span>
                    <i>法人行政处罚</i><br>
                    <i class="num">{{midSources.legalpersonpunish}}</i><i>（个）</i>
                  </span>
                </div>
                <span class="light-corner"></span>
                <span class="light-corner"></span>
                <span class="light-corner"></span>
                <span class="light-corner"></span>
              </div>
            </div>
            <img class="liner-img liner-img-1" src="~@/assets/images/public/line1.png" alt="">
            <img class="liner-img liner-img-2" src="~@/assets/images/public/line2.png" alt="">
            <img class="liner-img liner-img-3" src="~@/assets/images/public/line3.png" alt="">
            <img class="liner-img liner-img-4" src="~@/assets/images/public/line4.png" alt="">
          </div>
        </div>
      </template> -->
      <template slot="inner">
        <Card>
          <template slot="title">
            <span>双公示采集情况</span>
          </template>
          <template slot="content">
            <chart ref="chart2" :options="returnTrend(collectionSituation)" style="width: 100%; height: 320px;"></chart>
          </template>
        </Card>
      </template>
    </Panel>
    <Panel flex="main:justify dir:top">
      <template slot="inner">
        <div flex="main:justify dir:top" style="height: 100%; padding-top: 10px;">
          <Card>
            <template slot="title">
              <span>一周新增</span>
            </template>
            <template slot="content">
              <div class="top-wrapper" flex="main:justify cross:center">
                <div class="new-container" flex="main:justify cross:center">
                  <div class="new-item" flex="space:around cross:center">
                    <img src="~@/assets/images/public/xuke.png" alt="">
                    <span>
                      <i class="white-font">行政许可数量</i><br>
                      <i class="num">{{newAdd.adminlicense}}</i><i class="white-font">（个）</i>
                    </span>
                  </div>
                  <div class="new-item" flex="space:around cross:center">
                    <img src="~@/assets/images/public/chufa.png" alt="">
                    <span>
                      <i class="white-font">行政处罚数量</i><br>
                      <i class="num">{{newAdd.adminpunish}}</i><i class="white-font">（个）</i>
                    </span>
                  </div>
                </div>
              </div>
            </template>
          </Card>
<!--          <Card>
            <template slot="title">
              <span>信用修复数据统计</span>
            </template>
            <template slot="content">
              <chart ref="chart3" :options="returnRepairBar(repair)" style="width: 100%; height: 320px;"></chart>
            </template>
          </Card>-->
          <Card>
            <template slot="title">
              <span>行政许可类别分布</span>
              <span></span>
            </template>
            <template slot="content">
              <chart ref="chart4" :options="returnPie(classify)" style="width: 100%; height: 350px;"></chart>
            </template>
          </Card>
          <Card>
            <template slot="title">
              <span>行政处罚类别分布</span>
              <span></span>
            </template>
            <template slot="content">
              <chart ref="chart4" :options="returnPie(classify2)" style="width: 100%; height: 350px;"></chart>
            </template>
          </Card>
        </div>
      </template>
    </Panel>
  </div>
</template>

<script>
  import echarts from 'echarts'
  import Panel from '../../../components/Panel/Panel'
  import Card from '../../../components/Card/Card'
  // import Animation3D from '../../../components/Animation3D/Animation3D'
  import { mapState } from 'vuex'
  // 统一变量
  const xyLineColor = '#535e83'
  const splitLineColor = '#283353'
  export default {
    name: 'Public',
    components: {
      Panel,
      Card
      // Animation3D
    },
    data() {
      return {
        dateTab: 0,
        open: false,
        date: ''
      }
    },
    computed: {
      ...mapState({
        deptList: state => state.publicModule.deptList,
        week: state => state.publicModule.week,
        collectionSituation: state => state.publicModule.collectionSituation,
        repair: state => state.publicModule.repair,
        classify: state => state.publicModule.classify,
        classify2: state => state.publicModule.classify2,
        midSources: state => state.publicModule.midSources,
        newAdd: state => state.publicModule.newAdd
      })
    },
    created() {
      this.initData()
    },
    mounted() {
      this.renderCvs()
      this.renderRadar()
      window.onresize = () => {
        this.$refs.chart2.resize()
      }
    },
    methods: {
      initData() {
        this.$store.dispatch('getPublicData')
      },
      handleClick() {
        this.open = !this.open
      },
      handleChange(date) {
        this.date = date
      },
      handleClear() {
        this.open = false
      },
      handleOk() {
        this.open = false
      },
      returnTrend(data) {
        return {
          color: ['#02b7f4', '#600606'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985'
              }
            }
          },
          dataset: {
            source: data
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [
            {
              axisLine: { lineStyle: { color: xyLineColor } },
              type: 'category',
              boundaryGap: false
            }
          ],
          yAxis: [
            {
              position: 'left',
              splitLine: { lineStyle: { color: splitLineColor } },
              axisLine: { lineStyle: { color: xyLineColor } },
              type: 'value',
              name: '（个）'
            }
          ],
          series: [
            {
              smooth: true,
              name: '行政许可',
              type: 'line',
              areaStyle: {}
            },
            {
              smooth: true,
              name: '行政处罚',
              type: 'line',
              areaStyle: {}
            }
          ]
        }
      },
      returnBar(data) {
        return {
          color: '#00abfb',
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
            containLabel: true
          },
          dataset: {
            source: data
          },
          yAxis: {
            name: '（个）',
            type: 'value',
            boundaryGap: [0, 0.01],
            axisLine: {
              lineStyle: {
                color: xyLineColor
              }
            },
            splitLine: { lineStyle: { color: splitLineColor } }
          },
          xAxis: {
            type: 'category',
            axisLine: {
              lineStyle: {
                color: xyLineColor
              }
            }
          },
          series: [
            {
              type: 'bar',
              showBackground: true,
              barWidth: 10,
              itemStyle: {
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    { offset: 0, color: '#39BBF3' },
                    { offset: 1, color: '#070c32' }
                  ]
                )
              }
            }
          ]
        }
      },
      returnRepairBar(data) {
        return {
          color: '#00abfb',
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
            containLabel: true
          },
          dataset: {
            source: data
          },
          yAxis: {
            name: '（个）',
            type: 'value',
            boundaryGap: [0, 0.01],
            axisLine: {
              lineStyle: {
                color: xyLineColor
              }
            },
            splitLine: { lineStyle: { color: splitLineColor } }
          },
          xAxis: {
            type: 'category',
            axisLine: {
              lineStyle: {
                color: xyLineColor
              }
            }
          },
          series: [
            {
              type: 'bar',
              showBackground: true,
              barWidth: 10,
              itemStyle: {
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    { offset: 0, color: '#2a4ad5' },
                    { offset: 1, color: '#070c32' }
                  ]
                )
              }
            }
          ]
        }
      },
      renderCvs() {
        const { offsetWidth, offsetHeight } = this.$refs.centerContainer
        this.$refs.centerCvs.width = offsetWidth
        this.$refs.centerCvs.height = offsetHeight
        const realCtx = this.$refs.centerCvs.getContext('2d')
        realCtx.beginPath()
        let radius = 200
        let centerX = offsetWidth / 2
        let centerY = offsetHeight / 2
        realCtx.arc(centerX, centerY, radius, 0, 2 * Math.PI)
        realCtx.fillStyle = 'rgb(96,245,253)'
        realCtx.fill()
        let fl = 1000
        let dots = this.getImgData(offsetWidth, offsetHeight, realCtx, fl)
        dots.forEach(dot => {
          dot.paint()
        })
      },
      getImgData(w, h, ctx, fl) {
        const imgData = ctx.getImageData(0, 0, w, h)
        ctx.clearRect(0, 0, w, h)
        let dots = []
        // 粒子点
        class Dot {
          // 三维中心 + 圆角
          constructor(centerX, centerY, centerZ, radius, alpha) {
            this.dx = centerX
            this.dy = centerY
            this.dz = centerZ
            this.tx = 0
            this.ty = 0
            this.tz = 0
            this.z = centerZ
            this.x = centerX
            this.y = centerY
            this.radius = radius
            this.alpha = alpha
          }
          paint() {
            ctx.save()
            ctx.beginPath()
            var scale = fl / (fl + this.z)
            // ctx.arc(w / 2 + (this.x - w / 2), h / 2 + (this.y - h / 2), this.radius * scale, 0, 2 * Math.PI)
            ctx.rect(w / 2 + (this.x - w / 2), h / 2 + (this.y - h / 2), this.radius * scale * 2, this.radius * scale * 2)
            ctx.fillStyle = `rgba(15,253,253,${this.alpha})`
            ctx.fill()
            ctx.restore()
          }
        }
        for (let x = 0; x < imgData.width; x += 24) {
          for (let y = 0; y < imgData.height; y += 24) {
            let i = (y * imgData.width + x) * 4
            if (imgData.data[i] >= 80) {
              let dot = new Dot(x - 2, y - 2, 1000, 8, (x + y) / (imgData.width + imgData.height))
              dots.push(dot)
            }
          }
        }
        return dots
      },
      renderRadar() {
        let CFG = {
          perDeg: 1,
        }

        let aTarget = []
        const radius = 200
        let can = this.$refs.radarCvs
        can.width = radius * 2
        can.height = radius * 2
        let ctx = can.getContext('2d')
        let deg = 0
        ctx.strokeStyle = 'rgba(63,255,234,1)'

        function init() {
          // ctx.fillStyle = 'rgba(0,50,0,1)';
          // ctx.arc(150, 150, 150, 0, 2 * Math.PI);
          // ctx.fill();
          requestAnimationFrame(loop)
        }

        function loop() {
          deg = (deg + CFG.perDeg * 2)

          if (deg % 360 === 0) {
            ctx.clearRect(0, 0, radius * 2, radius * 2)
          }
          cover()
          drawPosLine()
          drawRadar(deg)
          requestAnimationFrame(loop)
        }

        function cover() {
          ctx.save()
          ctx.fillStyle = 'rgba(3,30,43,0.02)'
          ctx.arc(radius, radius, radius, 0, 2 * Math.PI)
          ctx.fill()
          ctx.restore()
        }

        function drawPosLine() {
          ctx.beginPath()
          ctx.moveTo(radius, 0)
          ctx.lineTo(radius, radius * 2)
          ctx.closePath()
          ctx.stroke()

          ctx.beginPath()
          ctx.moveTo(0, radius)
          ctx.lineTo(radius * 2, radius)
          ctx.closePath()
          ctx.stroke()

          ctx.moveTo(radius, radius)
          ctx.beginPath()
          ctx.arc(radius, radius, 160, 0 * Math.PI, 2 * Math.PI)
          ctx.closePath()
          ctx.stroke()

          ctx.moveTo(150, 150)
          ctx.beginPath()
          ctx.arc(radius, radius, 100, 0 * Math.PI, 2 * Math.PI)
          ctx.closePath()
          ctx.stroke()
        }

        function drawRadar(iDeg) {
          ctx.fillStyle = 'rgba(88,225,238,.2)'
          ctx.beginPath()
          ctx.moveTo(radius, radius)
          ctx.arc(radius, radius, radius, (-2 * CFG.perDeg + iDeg) / 180 * Math.PI, (0 + iDeg) / 180 * Math.PI)
          ctx.closePath()
          ctx.fill()
        }

        function bornTarget() {
          aTarget.push({
            deg: Math.round(Math.random() * 360),
            r: Math.round(Math.random() * can.width / 2)
          })
        }

        init()
      },
      returnPie(data) {
        return {
          color: ['#553cff', '#fe3b3c', '#fb952f', '#4dcea7', '#00ccff', '#0e31e3', '#1167e2'],
          tooltip: {
            trigger: 'item',
            formatter: '{b}<br/>{c} ({d}%)'
          },
          series: [
            {
              name: '类别',
              type: 'pie',
              radius: ['50%', '65%'],
              avoidLabelOverlap: true,
              label: {
                show: true,
                color: '#fff',
                lineHeight: 20,
                align: 'center',
                formatter: p => p.name + '' + p.value
              },
              labelLine: {
                show: true
              },
              data: data.outer
            },
            {
              name: '合计',
              type: 'pie',
              radius: ['0', '40%'],
              avoidLabelOverlap: false,
              label: {
                align: 'center',
                show: true,
                position: 'center',
                color: '#fff',
                lineHeight: 20,
                formatter: p => p.name + '\n  ' + p.value
              },
              labelLine: {
                show: false
              },
              data: data.inner
            }
          ]
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  [flex~="space:around"] {
    -webkit-box-pack: justify;
    -webkit-justify-content: space-around;
    -ms-flex-pack: justify;
    justify-content: space-around
  }

  .handle-date
    font-size: 12px
    white-space nowrap

    i, a
      font-size: 12px
      line-height: 28px

    .active
      background-color: #0d1b4d

    .tab
      padding: 0 10px;
      display inline-block
      white-space nowrap
      line-height: 28px
      height: 28px
      margin-right: 4px
      -webkit-border-radius: 14px
      -moz-border-radius: 14px
      border-radius: 14px
      cursor pointer

  .handle-date >>> .bin-select-dropdown
    background-color: #051028
    font-size: 12px

  .public
    padding 20px 0
    height: 1000px
    box-sizing border-box

    > div
      &:nth-child(1)
        width 460px

      &:nth-child(2)
        width calc(100% - 920px)

      &:nth-child(3)
        width 460px

    .table
      margin-top: 10px

      .table-row
        line-height: 32px

        &:nth-child(odd)
          background-color: #001739

        span
          color #ffffff
          padding 0 10px

        &:nth-child(n+2)
          span:nth-child(2)
            color #00ccfe

        &:nth-child(n+2)
          span:nth-child(3)
            color #02d8cf

      &.scroll-list-486
        height: 486px
        overflow-y auto

        .table-row
          line-height: 40px

    .center
      height: 556px
      position relative
      transform: translateY(48px);
      background-image: url('~@/assets/images/overview/ge.png')
      background-position: center 0

      .light
        position absolute
        top: 50%
        left: 50%
        transform translate(-50%, -50%)
        animation shine-light infinite linear 8s

      .cloud
        position absolute
        top: 50%
        left: 50%
        width: 254px
        height: 129px
        transform translate(-50%, -50%)
        font-size: 12px
        background-image: url('~@/assets/images/public/yun.png')
        background-position: center center
        background-repeat: no-repeat
        color #fff
        text-align center
        padding 50px 0
        line-height: 30px

        .num
          color #fff

      .cir
        position absolute
        left: 50%
        transform translate(-50%, -50%)

        &.cir-1
          animation float-up-1 infinite linear 4s

        &.cir-2
          animation float-up-2 infinite linear 4s

        &.cir-3
          animation float-up-3 infinite linear 4s

        &.cir-4
          animation float-up-4 infinite linear 4s

      .liner
        position relative
        width: 100%
        height: 100%

      .liner-img
        position absolute

        &.liner-img-1
          left: 57%
          top: 40%
          transform-origin bottom
          transform translate(-50%, -50%) scaleY(0.8)

        &.liner-img-2
          left: 41%;
          top: 40%;
          transform-origin bottom
          transform translate(-50%, -50%) scaleY(0.8)

        &.liner-img-3
          left: 54%;
          top: 28%;
          transform-origin bottom
          transform translate(-50%, -50%) scaleY(0.8)

        &.liner-img-4
          left: 44%
          top: 28%
          transform-origin bottom
          transform translate(-50%, -50%) scaleY(0.8)

      .liner-item
        width: 240px
        height: 80px
        position absolute
        background-image: url('~@/assets/images/public/sgs_bg.png')
        background-repeat: no-repeat
        -webkit-background-size: cover
        background-size: cover
        background-origin: border-box;

        .light-corner
          opacity 0

        .light-bg
          background-color: transparent
          box-shadow none
          animation none
          border: none

        .cir-light
          animation shine-light-1 infinite linear 4s

        .inner
          width 240px
          height: 60px
          padding-right: 30px
          position relative

        &.liner-item-1
          left: 29%
          top: 86px
          transform translate(-50%, -50%)
          color #00e4ff

          .cir-light
            position absolute
            right: -5px
            top: 25%;
            opacity 1
            z-index 20

        &.liner-item-2
          left: 69%
          top: 86px
          transform translate(-50%, -50%)
          color #00efe3

          .num
            color #00efe3

          .cir-light
            position absolute
            left: -5px
            top: 25%;
            opacity 1
            z-index 20

        &.liner-item-3
          left: 24%
          top: 193px;
          transform translate(-50%, -50%)
          color #fc9530

          .num
            color #fc9530

          .cir-light
            position absolute
            right: -5px
            top: 25%;
            opacity 1
            z-index 20

        &.liner-item-4
          left: 74%
          top: 193px;
          transform translate(-50%, -50%)
          color #085af5

          .num
            color #085af5

          .cir-light
            position absolute
            left: -5px
            top: 25%;
            opacity 1
            z-index 20

    .top-wrapper
      height: 114px

      .new-container
        width: 100%

        .new-item
          width: 48%
          height: 80px
          background-image: url('~@/assets/images/summary/data_bg.png')

  .center-container1
    height: 460px
    position relative
    overflow hidden
    &::after
      content ''
      display block
      width: 100%
      height: 100%
      position absolute
      -webkit-background-size: contain
      background-size: contain
      background-image: url('~@/assets/images/summary/pic.png')
      background-repeat: no-repeat
      background-position: center center;
      z-index 8
    &::before
      content ''
      display block
      width: 100%
      height: 100%
      position absolute
      background-image: url('~@/assets/images/summary/mid.png')
      background-repeat: no-repeat
      background-position: center center;
      z-index 10

  .center-container
    position relative
    .show-geo
      width 100%
      height: 100%
      position absolute
      .item-count-bar:nth-child(1)
        top: 0
        left: 40px
      .item-count-bar:nth-child(2)
        top: 0
        right: 40px
      .item-count-bar:nth-child(3)
        bottom: 0
        left: 40px
      .item-count-bar:nth-child(4)
        bottom: 0
        right: 40px
  .item-count-bar
    position absolute
    height 80px
    width 220px
    display flex
    background: rgba(5,16,40,0.8)
    background-repeat: no-repeat
    align-items center
    justify-content space-between
    padding-bottom: 10px
    padding-left: 20px
    box-sizing border-box
    .icon
      display block
      width 50px
      height: 50px
    .count-square
      flex: 1
      padding-left: 10px
  .public-newly
    .board
      display flex
      justify-content space-between
      >div
        padding 4px 8px
        background-color: #042433
        width: 48%
        margin-right: 2px

  @keyframes float-up-1
    0% {
      top: 55%;
      opacity: 0
    }
    25% {
      top: 70%;
      opacity: 0
    }
    50% {
      top: 65%;
      opacity: 1
    }
    75% {
      top: 60%;
      opacity: 1
    }
    100% {
      top: 55%;
      opacity: 0
    }

  @keyframes float-up-2
    0% {
      top: 60%;
      opacity: 1
    }
    25% {
      top: 55%;
      opacity: 0
    }
    50% {
      top: 70%;
      opacity: 0
    }
    75% {
      top: 65%;
      opacity: 1
    }
    100% {
      top: 60%;
      opacity: 1
    }

  @keyframes float-up-3
    0% {
      top: 65%;
      opacity: 1
    }
    25% {
      top: 60%;
      opacity: 1
    }
    50% {
      top: 55%;
      opacity: 0
    }
    75% {
      top: 70%;
      opacity: 0
    }
    100% {
      top: 65%;
      opacity: 1
    }

  @keyframes float-up-4
    0% {
      top: 70%;
      opacity: 0
    }
    25% {
      top: 65%;
      opacity: 1
    }
    50% {
      top: 60%;
      opacity: 1
    }
    75% {
      top: 55%;
      opacity: 0
    }
    100% {
      top: 70%;
      opacity: 0
    }

  @keyframes shine-light
    0% {
      opacity: 0.2
    }
    25% {
      opacity: 1
    }
    50% {
      opacity: 0.2
    }
    75% {
      opacity: 1
    }
    100% {
      opacity: 0.2
    }

  @keyframes shine-light-1
    0% {
      opacity: 0.8
    }
    25% {
      opacity: 1
    }
    50% {
      opacity: 0.8
    }
    75% {
      opacity: 1
    }
    100% {
      opacity: 0.8
    }
</style>
