<template>
  <div id="app" v-cloak>
    <div
      v-if="this.$route.path !== '/home' && this.$route.path !== '/home2' && this.$route.path !== '/xyd'"
      class="page-title-wrapper"
    >
      <span class="page-title">
        {{ returnRouteName() }}
      </span>
      <router-link class="to-home" to="/home">返回</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'app',
  methods: {
    returnRouteName() {
      let route = this.$route.path
      switch (route) {
        case '/overview':
          return '信用系统概况'
        case '/evaluation':
          return '信用评价专题'
        case '/application':
          return '信用应用专题'
        case '/summary':
          return '信用数据归集'
        case '/public':
          return '双公示专题'
        case '/union':
          return '联合奖惩专题'
        case '/map':
          return '区域数据归集'
        case '/affair':
          return '政务诚信看板'
        case '/xyd':
          return '信易贷数据分析'
      }
    },
  },
}
</script>
<style lang="stylus">
[v-cloak] {
  display: none;
}

$lightBgc = rgba(1, 23, 58, .6)
$lightBdc = rgba(2, 203, 255, .1)
$lightShadowColor = rgba(2, 203, 255, .2)
$fontColor = #02cbff
$bgc = #050819
.num
  color $fontColor
  font-weight: 400
  font-size: 22px

.font
  color #fff
  font-size: 12px

#app
  height: 100%;
  background-color: $bgc
  overflow-x auto
  overflow-y auto
i
  font-style normal

.page-title-wrapper
  background-image: url('~@/assets/images/overview/title_bg.png')
  background-repeat: no-repeat
  -webkit-background-size: auto 72px
  background-size: auto 72px
  background-position: top center
  width: 100%
  text-align center
  height: 80px;
  padding-top: 10px
  position relative

  .to-home
    position absolute
    right: 40px
    bottom 0
    background-color: #0d1b4d
    padding 4px 20px
    -webkit-border-radius: 18px
    -moz-border-radius: 18px
    border-radius: 18px
    cursor pointer

.page-title
  background-image: -webkit-linear-gradient(bottom, #1fb9fc, #1d80d2, #1850a7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700
  font-size: 36px
  line-height: 40px
  padding 10px 0
  letter-spacing 10px
.white-font
  color #fff
</style>
