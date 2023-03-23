Vue.component('v-base-info-water-card', {
  template: `
    <div class="info-water-card-box">
      <div class="water-circle-box">
          <img :src="imgPath" alt="">
      </div>
     <div class="water-title-box">
       <div class="title" :style="titleStyle" :class="{active:curActiveIndex === activeIndex}">
         {{title}}
       </div>
       <div class="value-box" :style="valueStyle" flex="main:justify cross:center">
          <div class="value">{{value}}</div>
          <div class="unit">{{unit}}</div>
       </div>
      </div>
    </div>`,
  props: {
    curActiveIndex: {
      type: String,
      default: ''
    },
    activeIndex: {
      type: String,
      default: ''
    },
    imgPath: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: '标题'
    },
    value: {
      type: Number,
      default: null
    },
    unit: {
      type: String,
      default: '条'
    },
    titleStyle: {
      type: String,
      default: ''
    },
    valueStyle: {
      type: String,
      default: ''
    },
    selectStatus: {
      type: Boolean,
      default: false
    },
    widthValue: {
      type: String,
      default: ''
    },
    heightValue: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      selectStyle: {
        width: this.widthValue,
        height: this.heightValue,
        fontWeight: '600'
      },
      selectStyleBase: {
        width: this.widthValue,
        height: this.heightValue
      }
    }
  },
  mounted() {

  },
  methods: {}
})
