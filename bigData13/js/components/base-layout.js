Vue.component('v-base-layout', {
  template: `
    <div class="page-content" flex="dir:top">
      <div class="header" flex="main:center">
          <div class="tab-center">{{title}}</div>
          <div id="time" class="time"></div>
      </div>
      <div class="center" flex>
          <div :class="['center-left', isZhenPage ? 'zhen zhen-left' : 'con-bg']">
              <div class="left-top"></div>
              <div class="left-bottom"></div>
              <div class="right-top"></div>
              <div class="right-bottom"></div>
              <slot name="left"></slot>
          </div>
          <div :class="isZhenPage ? 'zhen-center' : 'center-center'">
              <slot name="center"></slot>
          </div>
          <div :class="['center-right', isZhenPage ? 'zhen zhen-right' : 'con-bg']">
              <div class="left-top"></div>
              <div class="left-bottom"></div>
              <div class="right-top"></div>
              <div class="right-bottom"></div>
              <slot name="right"></slot>
          </div>
      </div>
      <img class="bottom-img" src="../images/bottom-bg.png" alt="">
    </div>`,
  props: {
    title: {
      type: String,
      default: '标题'
    },
    isZhenPage: {
      type: Boolean
    },
  },
  data() {
    return {
      mainStyle: null
    }
  },
  mounted() {

  },
  methods: {

  }
})
