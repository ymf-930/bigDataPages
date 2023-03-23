<template>
  <div class="red-black-box">
    <bg-title>红黑名单统计</bg-title>
    <div class="red-black-wrapper" flex>
      <div class="container">
        <div class="red-list">
          <img src="~@/assets/images/overview/icon_hong.png" alt="" />
          <i class="white-font">红名单</i>
          <i class="num">{{ data.redCount }}</i>
          <i class="white-font">（个）</i>
        </div>
        <div class="msg-list" flex="wrap:wrap">
          <div
            class="msg-list-item"
            v-for="(item, index) of data.redData"
            :key="index"
            flex="main:center"
          >
            <img class="rb-icon" src="~@/assets/images/overview/icon_hgrz.png" alt="" />
            <span>
              <p class="white-font">{{ item.title }}</p>
              <p>
                <i class="num">{{ item.count }}</i>
                <i class="white-font">（{{ item.unit }}）</i>
              </p>
            </span>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="red-list">
          <img src="~@/assets/images/overview/icon_hei.png" alt="" />
          <i class="white-font">黑名单</i>
          <i class="num">{{ data.blackCount }}</i>
          <i class="white-font">（个）</i>
        </div>
        <div class="msg-list" flex="wrap:wrap">
          <div
            class="msg-list-item"
            v-for="(item, index) of data.blackData"
            :key="index"
            flex="main:center"
          >
            <img class="rb-icon" src="~@/assets/images/overview/icon_hgrz.png" alt="" />
            <span>
              <p class="white-font">{{ item.title }}</p>
              <p>
                <i class="num">{{ item.count }}</i>
                <i class="white-font">（{{ item.unit }}）</i>
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bgTitle from '../../app/components/bg-title.vue'
export default {
  components: { bgTitle },
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style lang="stylus" scoped>
.red-black-wrapper
  .container
    width 50%
    .red-list
      padding-bottom: 10px
      text-align center
      background-image: url('~@/assets/images/overview/tuopan.png')
      background-repeat: no-repeat
      background-position: bottom center
      img, i
        vertical-align middle
        padding 10px

    .msg-list
      padding-top: 20px

      .msg-list-item
        width: 50%
        height: 70px
        margin-top: 15px

        .rb-icon
          margin-right: 10px
          width: 52px
          height: 52px

        span
          width: 170px
</style>
