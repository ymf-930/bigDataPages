<template>
  <div class="summary" flex>
    <Panel>
      <template slot="inner">
        <div flex="main:justify dir:top" style="height: 100%;">
          <Card>
            <template slot="title">
              <span>本月数据分析</span>
            </template>
            <template slot="content">
              <div flex="main:justify">
                <span class="count-wrapper-item" flex="main:justify dir:top">
                  <img src="~@/assets/images/summary/icon_01.png" alt="">
                  <i class="font">归集数量</i>
                  <i class="num">{{monthAnalysis.collection}}</i>
                </span>
                <span class="count-wrapper-item" flex="main:justify dir:top">
                  <img src="~@/assets/images/summary/icon_02.png" alt="">
                  <i class="font">上报资源数量</i>
                  <i class="num">{{monthAnalysis.appear}}</i>
                </span>
                <span class="count-wrapper-item" flex="main:justify dir:top">
                  <img src="~@/assets/images/summary/icon_03.png" alt="">
                  <i class="font">上报部门数量</i>
                  <i class="num">{{monthAnalysis.reflux}}</i>
                </span>
              </div>
            </template>
          </Card>
          <Card>
            <template slot="title">
              <span>资源信息分类统计</span>
            </template>
            <template slot="content">
              <div flex="main:justify">
              <span class="count-wrapper-item" flex="main:justify dir:top">
              <i class="font">一级分类</i>
              <p><i class="num">{{classifyStatistic.lv1}}</i><i class="white-font">（条）</i></p>
            </span>
                <span class="count-wrapper-item" flex="main:justify dir:top">
              <i class="font">二级分类</i>
              <p><i class="num">{{classifyStatistic.lv2}}</i><i class="white-font">（条）</i></p>
            </span>
                <span class="count-wrapper-item" flex="main:justify dir:top">
              <i class="font">资源数</i>
              <p><i class="num">{{classifyStatistic.resourcecount}}</i><i class="white-font">（条）</i></p>
            </span>
                <span class="count-wrapper-item" flex="main:justify dir:top">
              <i class="font">部门数</i>
              <p><i class="num">{{classifyStatistic.deptcount}}</i><i class="white-font">（个）</i></p>
            </span>
              </div>
              <div>
                <chart ref="chart1" :options="returnBar(classifyStatistic.chartData)"
                       style="width: 100%; height: 220px;"></chart>
              </div>
            </template>
          </Card>
          <Card>
            <template slot="title">
              <div flex="main:justify">
                <span>部门数据归集统计分析</span>
              </div>
            </template>
            <template slot="content">
              <div class="table">
                <div class="table-row" flex="main:justify">
                  <span>部门名称</span>
                  <span>归集数量（条）</span>
                </div>
                <div class="table-row" v-for="(item, index) in classifyStatistic.deptList" :key="index"
                     flex="main:justify">
                  <span>{{ item.name }}</span>
                  <span>{{ item.count }}</span>
                </div>
              </div>
            </template>
          </Card>
        </div>
      </template>
    </Panel>
    <Panel style="padding-left: 0; padding-right: 0;" flex="main:justify dir:top">
      <template slot="outer">
        <div class="outer-wrapper">
          <div class="tip-wrapper" flex="space:around">
            <div class="tip-item">
              <div class="tip-item-inner" flex="space:around cross:center">
                <img src="~@/assets/images/summary/icon_zyxx.png" alt="">
                <span class="tip-item-font">
                  <i>资源信息数量</i><br>
                  <i class="num">{{summaryCounts.resource}}</i><i>（条）</i>
                </span>
              </div>
              <span class="light-corner"></span>
              <span class="light-corner"></span>
              <span class="light-corner"></span>
              <span class="light-corner"></span>
            </div>
            <div class="tip-item">
              <div class="tip-item-inner" flex="space:around cross:center">
                <img src="~@/assets/images/summary/icon_sjgj.png" alt="">
                <span class="tip-item-font">
                  <i>数据归集数量</i><br>
                  <i class="num">{{summaryCounts.collection}}</i><i>（条）</i>
                </span>
              </div>
              <span class="light-corner"></span>
              <span class="light-corner"></span>
              <span class="light-corner"></span>
              <span class="light-corner"></span>
            </div>
            <div class="tip-item">

              <div class="tip-item-inner" flex="space:around cross:center">
                <img src="~@/assets/images/summary/icon_bygj.png" alt="">
                <span class="tip-item-font">
                  <i>本月归集数量</i><br>
                  <i class="num">{{summaryCounts.month}}</i><i>（条）</i>
                </span>
              </div>
              <span class="light-corner"></span>
              <span class="light-corner"></span>
              <span class="light-corner"></span>
              <span class="light-corner"></span>
            </div>
          </div>
          <div class="float-tip-wrapper float-1" flex="main:justify">
            <span class="float-tip-wrapper-item" flex="dir:top cross:center">
              <img src="~@/assets/images/summary/icon_zrr.png" alt=""><br>
              <span><i>自然人数据总量</i></span>
              <span><i class="num">{{summaryCounts.naturalPerson}}</i><i>（条）</i></span>
            </span>
            <span class="float-tip-wrapper-item" flex="dir:top cross:center">
              <img src="~@/assets/images/summary/icon_fr.png" alt=""><br>
              <span><i>法人数据总量</i></span>
              <span><i class="num">{{summaryCounts.legalPerson}}</i><i>（条）</i></span>
            </span>
          </div>
          <div class="float-tip-wrapper float-2" flex="main:justify">
            <span class="float-tip-wrapper-item" flex="dir:top cross:center">
              <img src="~@/assets/images/summary/icon_zdrq.png" alt=""><br>
              <span><i>重点人群数据总量</i></span>
              <span><i class="num">{{summaryCounts.focusPerson}}</i><i>（条）</i></span>
            </span>
            <span class="float-tip-wrapper-item" flex="dir:top cross:center">
              <img src="~@/assets/images/summary/icon_yztg.png" alt=""><br>
              <span><i>验证通过率</i></span>
              <span><i class="num">{{summaryCounts.passPercent}}%</i><i></i></span>
            </span>
          </div>
          <div id="cvsBg" style="margin-top: 12px;width: 100%; height: 500px;"></div>
          <div class="mid-animation">
            <img src="~@/assets/images/summary/ball.png" alt="">
            <img src="~@/assets/images/summary/pan.png" alt="">
            <img src="~@/assets/images/summary/zhu.png" alt="">
            <div class="comet"></div>
            <div class="comet comet-copy-1"></div>
            <div class="comet comet-copy-2"></div>
          </div>
        </div>
      </template>
      <template slot="inner">
        <chart ref="chart2" :options="returnTrend(summaryCounts.chartList)" style="width: 100%; height: 320px;"></chart>
      </template>
    </Panel>
    <Panel>
      <template slot="inner">
        <div flex="main:justify dir:top" style="height: 100%;">
          <Card>
            <template slot="title">
              <span>数据归集来源对比</span>
            </template>
            <template slot="content">
              <chart ref="chart3" :options="returnRose(source)" style="width: 100%; height: 280px;"></chart>
            </template>
          </Card>
          <Card>
            <template slot="title">
              <div flex="main:justify">
                <span>资源数据分类数据分析</span>
              </div>
            </template>
            <template slot="content">
              <chart ref="chart4" :options="returnPie(naturalPersonAnalysis)"
                     style="width: 100%; height: 280px;"></chart>
            </template>
          </Card>
          <Card>
            <template slot="title">
              <span>最新部门填报记录</span>
            </template>
            <template slot="content">
              <div class="table">
                <div class="table-row" flex="main:justify">
                  <span>部门名称</span>
                  <span>资源信息（条）</span>
                </div>
                <div class="table-row" v-for="(item, index) in newestFillInDept" :key="index" flex="main:justify">
                  <span>{{ item.name }}</span>
                  <span>{{ item.count }}</span>
                </div>
              </div>
            </template>
          </Card>
        </div>
      </template>
    </Panel>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import echarts from 'echarts'
  import * as THREE from 'three'
  import Panel from '../../../components/Panel/Panel'
  import Card from '../../../components/Card/Card'
  // 统一变量
  const xyLineColor = '#535e83'
  const splitLineColor = '#283353'
  export default {
    name: 'Summary',
    data() {
      return {
        open: false,
        date: '',
        dateTab: 0,
        tab: 0
      }
    },
    created() {
      this.initData()
    },
    mounted() {
    },
    computed: {
      ...mapState({
        monthAnalysis: state => state.summary.monthAnalysis,
        classifyStatistic: state => state.summary.classifyStatistic,
        summaryCounts: state => state.summary.summaryCounts,
        source: state => state.summary.source,
        naturalPersonAnalysis: state => state.summary.naturalPersonAnalysis,
        newestFillInDept: state => state.summary.newestFillInDept
      })
    },
    methods: {
      initData() {
        this.$store.dispatch('getSummaryData')
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
      renderBall() {
        function render() {
          const container = document.getElementById('cvsBg')
          const w = container.clientWidth
          const h = container.clientHeight
          const cameraDeg = 45
          const aspect = w / h
          const near = 0.1
          const far = 10000
          const renderer = new THREE.WebGLRenderer({ alpha: true })
          const camera = new THREE.PerspectiveCamera(
            cameraDeg, aspect, near, far
          )

          const scene = new THREE.Scene()
          renderer.setClearColor(0xffffff, 0)
          renderer.setSize(w, h)

          // 附加DOM元素
          container.append(renderer.domElement)

          // 设置球体的值
          let radius = 72
          let segemnt = 60
          let rings = 60
          let sphereGeometry = new THREE.SphereGeometry(radius, segemnt, rings)
          let pMaterial = new THREE.PointsMaterial({
            color: 0xffffff,
            vertexColors: true,
            size: 1
          })
          let sphere = new THREE.Mesh(
            sphereGeometry
          )

          let particleSystem = new THREE.Points(sphereGeometry, pMaterial)

          // let pivotPoint = new THREE.Object3D();// 3d效果
          // sphere.castShadow = sphere.receiveShadow = true
          // sphere.rotation.x = 45
          // sphere.position.x = 0
          // sphere.position.y = 0
          // sphere.add(pivotPoint)// 球 添加3d效果

          let spotLight = new THREE.SpotLight('#ffffff')
          spotLight.position.set(-50, 50, 150)
          spotLight.castShadow = true
          spotLight.target = sphere
          spotLight.distance = 0
          spotLight.angle = 0.8

          let helper = new THREE.DirectionalLightHelper(spotLight, 50, 0xFFFFFF)

          camera.position.x = 0
          camera.position.y = 0
          camera.position.z = 400
          camera.lookAt(scene.position)

          scene.add(camera)
          scene.add(spotLight)
          scene.add(particleSystem)
          // scene.add(sphere)
          // scene.add(helper)

          function animate() {
            requestAnimationFrame(animate)
            particleSystem.rotation.y += 0.001
            renderer.render(scene, camera)
          }

          animate()
        }

        let init = () => {
          render()
        }
        init()
        window.onresize = init
      },
      returnTrend(data) {
        var max = 0
        for (let i = 1; i < data.length; i++) {
          var zrr = Number(data[i][1])
          var fr = Number(data[i][2])
          max = max > zrr ? max : zrr
          max = max > fr ? max : fr
        }
        return {
          dataset: {
            source: data
          },
          color: ['#02b7f4', '#2646c5'],
          title: {
            text: '资源信息归集趋势',
            textStyle: { color: '#fff' }
          },
          tooltip: {
            trigger: 'axis'
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
              boundaryGap: [0.2, 0.2],
              splitLine: { lineStyle: { color: splitLineColor } },
              axisLine: { lineStyle: { color: xyLineColor } },
              type: 'value',
              name: '(条)',
              // interval: 500,
              min: 0,
              max: max
            },
            {
              position: 'right',
              boundaryGap: [0.2, 0.2],
              splitLine: { lineStyle: { color: splitLineColor } },
              axisLine: { lineStyle: { color: xyLineColor } },
              type: 'value',
              name: '(条)',
              // interval: 500,
              min: 0,
              max: max
            }
          ],
          series: [
            {
              smooth: true,
              name: '自然人',
              type: 'line',
              areaStyle: {},
              yAxisIndex: 1
            },
            {
              smooth: true,
              name: '法人及其他组织',
              type: 'line',
              areaStyle: {}
            }
          ]
        }
      },
      returnRose(data) {
        return {
          color: ['#fbd860', '#35afc6', '#1f74f1', '#00cbfe'],
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
              radius: [30, 100],
              center: ['50%', '50%'],
              roseType: 'area'
            }
          ]
        }
      },
      returnPie(data) {
        return {
          color: ['#553cff', '#fe3b3c', '#fb952f', '#4dcea7', '#00ccff', '#0e31e3', '#1167e2'],
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          series: [
            {
              name: '自然人资源数据分类数据分析',
              type: 'pie',
              radius: ['50%', '65%'],
              avoidLabelOverlap: true,
              label: {
                show: true,
                color: '#fff',
                lineHeight: 20,
                align: 'center',
                formatter: p => p.name,
                fontSize: '10'
              },
              labelLine: {
                show: true
              },
              data: data.outer
            },
            {
              name: '自然人',
              type: 'pie',
              radius: ['0', '40%'],
              avoidLabelOverlap: false,
              label: {
                align: 'center',
                show: true,
                position: 'center',
                color: '#fff',
                lineHeight: 20,
                formatter: p => p.name + '\n  ' + p.value + '（条）'
              },
              labelLine: {
                show: false
              },
              data: data.inner
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
            top: '3%',
            containLabel: true
          },
          dataset: {
            source: data
          },
          xAxis: {
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
          yAxis: {
            type: 'category',
            axisLine: {
              lineStyle: {
                color: xyLineColor
              }
            },
            inverse: true
          },
          series: [
            {
              type: 'bar',
              showBackground: true,
              barWidth: 10,
              itemStyle: {
                barBorderRadius: 8,
                color: new echarts.graphic.LinearGradient(
                  0, 0, 1, 0,
                  [
                    { offset: 0, color: '#2380f2' },
                    { offset: 1, color: '#39BBF3' }
                  ]
                )
              }
            }
          ]
        }
      }
    },
    components: {
      Panel,
      Card
    }
  }
</script>

<style lang="stylus" scoped>
  $fontColor = #02cbff
  $bdw = 2px
  $bdh = 2px
  .green-font
    color #05f2e4

  [flex~="space:around"] {
    -webkit-box-pack: justify;
    -webkit-justify-content: space-around;
    -ms-flex-pack: justify;
    justify-content: space-around
  }

  .summary
    height: 1000px
    padding 20px 0
    box-sizing border-box

    > div
      &:nth-child(1)
        width 460px

      &:nth-child(2)
        width calc(100% - 920px)

      &:nth-child(3)
        width 460px

    .outer-wrapper
      width: 100%
      height: 600px
      background-image: url('~@/assets/images/overview/ge.png')
      background-repeat: no-repeat
      background-position: center 40%
      position relative

      .tip-wrapper
        position absolute
        top: 0
        left: 0
        width: 100%

        .tip-item
          width: 28%
          height: 100px
          background-image: url('~@/assets/images/summary/data_bg.png')
          position relative

          .light-corner
            content: ''
            display block
            position absolute
            width 8px
            height: 8px

            &:nth-of-type(1)
              top: 0
              left: 0
              border-top: $bdh solid $fontColor
              border-left: $bdw solid $fontColor
              -webkit-border-radius: 2px 0 0 0
              -moz-border-radius: 2px 0 0 0
              border-radius: 2px 0 0 0

            &:nth-of-type(2)
              top: 0
              right: 0
              border-top: $bdh solid $fontColor
              border-right: $bdw solid $fontColor
              -webkit-border-radius: 0 2px 0 0
              -moz-border-radius: 0 2px 0 0
              border-radius: 0 2px 0 0

            &:nth-of-type(3)
              bottom: 0
              left: 0
              border-bottom: $bdh solid $fontColor
              border-left: $bdw solid $fontColor
              -webkit-border-radius: 0 0 0 2px
              -moz-border-radius: 0 0 0 2px
              border-radius: 0 0 0 2px

            &:nth-of-type(4)
              bottom: 0
              right: 0
              border-bottom: $bdh solid $fontColor
              border-right: $bdw solid $fontColor
              -webkit-border-radius: 0 0 2px 0
              -moz-border-radius: 0 0 2px 0
              border-radius: 0 0 2px 0

          .tip-item-inner
            height: 100%
            padding-left: 20px
            line-height: 30px

          &:nth-of-type(1)
            .tip-item-font
              color #17d2e8

              .num
                color inherit

          &:nth-of-type(2)
            .tip-item-font
              color #02fbec

              .num
                color inherit

          &:nth-of-type(3)
            .tip-item-font
              color #065bf7

              .num
                color inherit

      .float-tip-wrapper
        position absolute
        left: 0
        width: 100%

        .float-tip-wrapper-item
          color #fff

          > span
            padding-bottom: 6px
          animation float-tip infinite ease-in-out 6s

        &.float-1
          padding 0 160px
          top: 140px

        &.float-2
          padding 0 60px
          top: 280px

    .mid-animation
      position absolute
      top: 50%
      left: 50%
      transform translate(-50%, -50%)
      height: 300px;
      width: 100%;

      img
        &:nth-child(1)
          position absolute
          top: 0
          left: 50%
          transform translateX(-50%)
          z-index 10

        &:nth-child(2)
          position absolute
          top: 200px
          left: 50%
          transform translateX(-50%)

        &:nth-child(3)
          position absolute
          top: 300px
          left: 50%
          transform translateX(-50%)

    .count-wrapper-item
      text-align center
      flex 1
      background-color: #001739
      background-image: url('~@/assets/images/summary/data_bg.png')
      margin: 20px 3px
      padding-top: 10px
      padding-bottom: 10px

      img
        width 40px
        height auto
        margin: 10px auto

      i
        line-height: 26px

    .table
      margin-top: 10px
      padding-bottom: 14px

      .table-row
        line-height: 28px

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

  @keyframes rotate {
    0% {
      transform: translateX(-50%) rotateX(76deg) rotateZ(0)
    }
    50% {
      transform: translateX(-50%) rotateX(76deg) rotateZ(.5turn)
    }
    100% {
      transform: translateX(-50%) rotateX(76deg) rotateZ(1turn)
    }
  }

  @keyframes rotate-reverse {
    0% {
      transform: translateX(-50%) rotateX(76deg) rotateZ(0) scale(.8)
    }
    50% {
      transform: translateX(-50%) rotateX(76deg) rotateZ(-0.5turn) scale(.8)
    }
    100% {
      transform: translateX(-50%) rotateX(76deg) rotateZ(-1turn) scale(.8)
    }
  }

  @keyframes shine {
    0% {
      opacity: 0.8
    }
    50% {
      opacity: 0.2
    }
    100% {
      opacity: 0.8
    }
  }

  $speed3 = 3s
  $speed2 = 2s
  .comet
    -webkit-border-radius: 50%
    -moz-border-radius: 50%
    border-radius: 50%
    width: 500px
    height: 500px
    border: 1px solid rgba(244, 144, 255, .2)
    box-shadow 0 0 50px #1890ff inset
    position absolute
    top: 88%
    left: 50%
    margin-left: -250px
    margin-top: -250px
    transform rotateX(70deg)
    animation rotate-comet linear infinite $speed3

    &:nth-of-type(2)
      top 82%

    &:nth-of-type(3)
      top 95%

    &::before
      position absolute
      top: -5px
      content ''
      left: 50%
      display inline-block
      width: 10px
      height: 10px
      -webkit-border-radius: 50%
      -moz-border-radius: 50%
      border-radius: 50%
      animation shine-comet infinite linear 1s

  .comet-reverse
    animation rotate-comet-reverse infinite linear $speed2

  .comet-copy-1
    animation shine-comet-scale-1 infinite linear $speed3

  .comet-copy-2
    animation shine-comet-scale-2 infinite linear $speed3

  @keyframes rotate-comet {
    0% {
      transform: rotateX(70deg) rotateZ(0)
    }
    50% {
      transform: rotateX(70deg) rotateZ(-0.5turn)
    }
    100% {
      transform: rotateX(70deg) rotateZ(-1turn)
    }
  }

  @keyframes rotate-comet-reverse {
    0% {
      transform: rotateY(0.5turn) scale(0.6) rotateX(70deg) rotateZ(0)
    }
    50% {
      transform: rotateY(0.5turn) scale(0.6) rotateX(70deg) rotateZ(-0.5turn)
    }
    100% {
      transform: rotateY(0.5turn) scale(0.6) rotateX(70deg) rotateZ(-1turn)
    }
  }

  @keyframes shine-comet-scale-1 {
    0% {
      transform: rotateY(0.5turn) scale(0.8) rotateX(70deg) rotateZ(0)
    }
    50% {
      transform: rotateY(0.5turn) scale(0.8) rotateX(70deg) rotateZ(-0.5turn)
    }
    100% {
      transform: rotateY(0.5turn) scale(0.8) rotateX(70deg) rotateZ(-1turn)
    }
  }

  @keyframes shine-comet-scale-2 {
    0% {
      transform: rotateY(0.5turn) scale(1.2) rotateX(70deg) rotateZ(0)
    }
    50% {
      transform: rotateY(0.5turn) scale(1.2) rotateX(70deg) rotateZ(1turn)
    }
    100% {
      transform: rotateY(0.5turn) scale(1.2) rotateX(70deg) rotateZ(2turn)
    }
  }

  @keyframes rotate-comet-reverse {
    0% {
      transform: rotateY(0.5turn) scale(1.4) rotateX(70deg) rotateZ(0)
    }
    50% {
      transform: rotateY(0.5turn) scale(1.4) rotateX(70deg) rotateZ(-0.5turn)
    }
    100% {
      transform: rotateY(0.5turn) scale(1.4) rotateX(70deg) rotateZ(-1turn)
    }
  }

  @keyframes shine-comet {
    0% {
      box-shadow: 0 0 20px rgba(255, 255, 255, 1), 0 0 18px rgba(255, 255, 255, 1), 0 0 20px rgba(255, 255, 255, 1), 0 0 15px rgba(255, 255, 255, 1), 10px 0 10px rgba(255, 255, 255, 0.8), 15px 0 8px rgba(255, 255, 255, 0.3), 20px 0 5px rgba(255, 255, 255, 0.3), 25px 0 4px rgba(255, 255, 255, 0.2), 30px 2px 2px rgba(255, 255, 255, 0.2), 36px 1px 2px rgba(255, 255, 255, 0.1), 0 0 10px #fff inset
    }
    50% {
      box-shadow: 0 0 20px rgba(255, 255, 255, 1), 0 0 18px rgba(255, 255, 255, 1), 0 0 20px rgba(255, 255, 255, 1), 0 0 15px rgba(255, 255, 255, 1), 10px 0 10px rgba(255, 255, 255, 0.6), 15px 0 8px rgba(255, 255, 255, 0.4), 20px 0 5px rgba(255, 255, 255, 0.4), 25px 0 4px rgba(255, 255, 255, 0.2), 30px 2px 2px rgba(255, 255, 255, 0.2), 36px 1px 2px rgba(255, 255, 255, 0.1), 0 0 10px #fff inset
    }
    100% {
      box-shadow: 0 0 20px rgba(255, 255, 255, 1), 0 0 18px rgba(255, 255, 255, 1), 0 0 20px rgba(255, 255, 255, 1), 0 0 15px rgba(255, 255, 255, 1), 10px 0 10px rgba(255, 255, 255, 0.8), 15px 0 8px rgba(255, 255, 255, 0.3), 20px 0 5px rgba(255, 255, 255, 0.3), 25px 0 4px rgba(255, 255, 255, 0.2), 30px 2px 2px rgba(255, 255, 255, 0.2), 36px 1px 2px rgba(255, 255, 255, 0.1), 0 0 10px #fff inset
    }
  }

  @keyframes float-tip {
    0% {
      transform: translateY(10px)
    }
    50% {
      transform: translateY(-10px)
    }
    100% {
      transform: translateY(10px)
    }
  }
</style>
