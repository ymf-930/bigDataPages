Vue.component('count-data-evo', {
  template: `
    <div class="count-data-evo-box">
      <div class="text-box" flex="cross:center">
         <img src="../assets/img/score.png" alt="">
         <div class="title">{{countTitle}}</div>
      </div>
      <div class="count-data-evo">
        <count-to class='count-data-evo-comp' :start-val='0' :end-val='num' separator :duration='2000' :decimals="decimals"></count-to>
        <span class="unit">{{unit}}</span>
      </div>
    </div>
  `,
  props: {
    countTitle:{
      type: String,
      default: '标题'
    },
    unit:{
      type: String,
      default: '分'
    },
    num: {
      type: Number,
      default: 798580
    },
    decimals:{
      type: Number,
      default: 2
    }
  },
  data() {
    return {
    }
  },
  computed: {
  }
})