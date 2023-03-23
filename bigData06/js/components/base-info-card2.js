Vue.component('v-base-info-card2', {
    template: `
      <div class="info-card-box2" flex="dir:top cross:center main:center">
       <div class="title" :style="titleStyle">
         {{title}}
       </div>
       <div class="value-box" :style="valueStyle" flex="main:justify cross:center">
        <div class="value">
        <count-to  class='example1' :start-val='0' :end-val='value' :duration='1500'></count-to> 
        </div>
          <div class="unit">{{unit}}</div>
       </div>
      </div>`,
    props: {
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
        default: ''
      },
      titleStyle: {
        type: String,
        default: ''
      },
      valueStyle: {
        type: String,
        default: ''
      }
    },
    data() {
      return {}
    },
    mounted() {
  
    },
    methods: {}
  })
  