Vue.component('v-base-count3', {
  template: `
      <div flex="main:center cross:center" class="pt-20 pb-20">
          <slot/>
          <div flex="dir:top cross:left">
              <div flex="main:center cross:baseline">
                  <count-to class='count3-count' :style="{color: color}" :start-val='0' separator :end-val='num' :duration='2000'></count-to>
              </div>
              <span class="count3-name">{{text}}</span>
          </div> 
      </div>
    `,
  props: {
    color: {
      type: String,
      default: '#17dcff'
    },
    text: {
      type: String,
      default: '标题'
    },
    num: {
      type: [String, Number],
      default: '12345678'
    }
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