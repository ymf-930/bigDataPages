Vue.component('v-base-count-data', {
  template: `
     <div class="data-box" flex="main:center cross:center">
        <div class="data-title">{{title}}</div>
        <div class="num-box" flex="main:center cross:center">
          <div 
            class="num-item" 
            flex="main:center cross:center" 
            v-for="(item,index) in handleNum(num)"
            :key="index"
          >
          </div>
          <div class="num">
            <count-to class='example1' :start-val='0' separator :end-val='parseInt(num)' :duration='2000'></count-to>
          </div>
        </div>
        <div class="data-dw">条</div>
      </div>
    `,
  props: {
    title:{
      type: String,
      default: '标题'
    },
    num: {
      type: [String, Number],
      default: '12345678'
    },
  },
  data() {
    return {
    }
  },
  mounted() {
  },
  methods: {
    handleNum(num) {
      var str = num + ""
      var arr = []
      str.split("").forEach(function (item) {
        arr.push(parseInt(item));
      })
      return arr
    }
  }
})
