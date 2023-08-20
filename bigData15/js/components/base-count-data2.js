Vue.component('v-base-count-data2', {
  template: `
    <div class="data-box2" flex="main:center cross:center">
      <div class="data-title">数据归集总量</div>
      <div class="num-box" flex="cross:center">
        <div class="num-item" flex="main:center cross:center" v-for="(item,index) in handleNum(num)"
            :key="index">
        </div>
        <div class="num">
        <count-to  class='example1' :start-val='0' separator :end-val='num' :duration='2000'></count-to>
        </div>
      </div>
      <div class="data-dw">条</div>
    </div>
    `,
  props: {
    num: {
      type: [String, Number],
      default: '12345678'
    },

  },
  data() {
    return {
      itemList: '24557801'
    }
  },
  mounted() {
    this.numFun(this.itemList)
  },
  methods: {
    handleNum(num) {
      var str = num + ""
      var arr = []
      str.split("").forEach(function (item) {
        arr.push(parseInt(item));
      })
      return arr
    },
    numFun(startNum, maxNum) {
      var that = this
      let numText = startNum;
      let golb; // 为了清除requestAnimationFrame
      function numSlideFun() { // 数字动画
        numText += 5; // 速度的计算可以为小数 。数字越大，滚动越快
        if (numText >= maxNum) {
          numText = maxNum;
          cancelAnimationFrame(golb);
        } else {
          golb = requestAnimationFrame(numSlideFun);
        }
        that.amount = numText
        // console.log(numText)
      }

      numSlideFun(); // 调用数字动画
    }

  }
})
