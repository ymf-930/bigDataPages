Vue.component('v-base-rank', {
  template: `
  <div class="rank-wrapper">
    <div class="rank-box" :ref="rankName" :style="{height:height?height+'px':lineHeight*slidesNum+'px'}">
      <div class="swiper-wrapper">
        <div class="rank-item swiper-slide" flex="main:justify cross:center" v-for="(item,index) in rankData" :key="index">
          <div class="rank-left" flex="cross:center">
            <div class="rank-num">{{index+1}}</div>
            <div class="rank-title">{{item.title}}</div>
          </div>
          <count-to class='num' :start-val='0' separator :end-val='item.num' :duration='2000'></count-to>
        </div>
      </div>
    </div>
    <img class="card-bottom" src="../../images/panel-bottom.png" alt="">
  </div>
`,
  props: {
    rankName:{
      type: String,
      default: 'rankBox'
    },
    rankData: {
      type: Array,
      default: () => []
    },
    // slides数量
    slidesNum: {
      type: Number,
      default: 6
    },
    // 单行高度
    lineHeight: {
      type: Number,
      default: 80
    },
    // 表格高度
    height: {
      type: Number,
      default: null
    },
    // 间隔时间
    delay: {
      type: Number,
      default: 1500
    },
  },
  data() {
    return {}
  },
  mounted() {
    // 列表滚动
    let _this = this
    const swiper = new Swiper(_this.$refs[_this.rankName], {
      direction: 'vertical',//滚动方向，垂直滚动
      slidesPerView: _this.slidesNum,//设置slider容器能够同时显示的slides数量,默认显示3行
      spaceBetween: 25,//间距为20
      loop: true,//循环滚动
      autoplay: {//匀速滚动
        delay: _this.delay,//间隔时间1000毫秒
      }
    })
  },
  methods: {}
})
