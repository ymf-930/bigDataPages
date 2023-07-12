Vue.component('v-base-count2', {
  template: `
      <div flex="main:justify cross:center">
          <img class="img-icon" :src="imgUrl" alt="">
          <div flex="dir:top cross:left">
              <span class="count2-name">{{text}}</span>
              <div flex="main:center cross:baseline" :style="{color: color}">
                  <count-to class='count2-count' :start-val='0' separator :end-val='num' :duration='2000'></count-to>
                  <span class="pl-5">{{unit}}</span>
              </div>
          </div> 
      </div>
    `,
  props: {
    imgUrl: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: '#479ffe'
    },
    text: {
      type: String,
      default: '标题'
    },
    num: {
      type: [String, Number],
      default: '12345678'
    },
    unit: {
      type: String,
      default: '个'
    },
  },
  data() {
    return {

    }
  },
  mounted() {

  },
  methods: {

  }
})