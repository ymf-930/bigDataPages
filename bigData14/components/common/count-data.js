Vue.component('count-data', {
    template: `
    <div class="count-data-box">
      <div class="count-data">
        <count-to class='count-data-comp' :start-val='0' :end-val='num' separator="," :duration='2000' :decimals="decimals"></count-to>
        <span class="unit">{{unit}}</span>
      </div>
    </div>
  `,
    props: {
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
            default: 0
        }
    },
    data() {
        return {

        }
    },
    computed: {

    }
})