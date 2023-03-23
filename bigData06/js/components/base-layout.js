Vue.component('v-base-layout', {
  template: `
    <div class="page-content" flex="dir:column">
            <div class="header" flex="main:center">
                <div class="header-tab tab-left" @click="goPage1(pageName1)">{{leftTitle}}</div>
                <div class="tab-center">{{title}}</div>
                <div class="header-tab tab-right" @click="goPage2(pageName2)">{{rightTitle}}</div>
                <div id="time" class="time"></div>
            </div>
            <div class="center" flex>
                <div class="center-left con-bg">
                    <div class="left-top"></div>
                    <div class="left-bottom"></div>
                    <div class="right-top"></div>
                    <div class="right-bottom"></div>
                    <slot name="left"></slot>
                </div>
                <div class="center-center">
                    <slot name="center"></slot>
                </div>
                <div class="center-right con-bg">
                    <div class="left-top"></div>
                    <div class="left-bottom"></div>
                    <div class="right-top"></div>
                    <div class="right-bottom"></div>
                    <slot name="right"></slot>
                </div>
            </div>
        </div>`,
  props: {
    title: {
      type: String,
      default: '标题'
    },
    leftTitle: {
      type: String,
      default: '左按钮'
    },
    rightTitle: {
      type: String,
      default: '右按钮'
    },
    pageName1: {
      type: String,
      default: 'collection'
    },
    pageName2: {
      type: String,
      default: ''
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
    goPage1(){
      window.open(this.pageName1, '_self')
    },
    goPage2(){
      window.open(this.pageName2, '_self')
    }

  }
})
