Vue.component('count-data-evo', {
  template: `
    <div class="count-data-evo">
      <div v-for="i in length" :key="i" class="count-data-evo-num">
        <span v-if="i <= dValue" class="count-data-evo-zero">0</span>
      </div>
      <count-to class='count-data-evo-comp' :start-val='0' :end-val='num' separator :duration='2000'></count-to>
    </div>
  `,
  props: {
    length: {
      type: Number,
      default: 8
    },
    num: {
      type: Number,
      default: 798580
    }
  },
  data() {
    return {
      
    }
  },
  computed: {
    dValue() {
      var res = 0
      const numLength = String(this.num).length
      if (numLength < this.length) {
        res = this.length - numLength
      }
      return res
    }
  }
})