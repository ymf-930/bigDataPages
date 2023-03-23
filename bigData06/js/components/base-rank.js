Vue.component('v-base-rank', {
  template: `
    <div class="rank-box" flex="dir:top cross:center">
       <div class="title">
         {{rankData.title}}
       </div>
       <div class="rank-content" flex="dir:top cross:center">
         <div class="tab-box" flex="main:justify cross:center">
         <div class="tab-item" v-for="(item,index) in rankData.data.slice(0,2)">
           <div class="left">
             <div class="circle" :class="{'odd-circle':item.sort===2}">{{item.sort}}</div>   
           </div>
           <div class="right" flex="dir:top cross:center">
              <div class="rank-title">{{item.rankTitle}}</div>       
              <div class="content">
                <div class="value">{{item.value}}</div>
                <div class="unit">{{unit}}</div>
              </div>
           </div>       
         </div>
       </div>
       <div :ref="rankName" class="tab-inline-box" :style="{height:height?height+'px':lineHeight*slidesNum+'px'}">
          <div class="tab-inline-item swiper-wrapper" v-for="(item,index) in rankData.data.slice(2)">
            <div class="swiper-slide">
              <div class="top" flex>
                <div class="sort">{{item.sort}}</div>
                <div class="rank-title">{{item.rankTitle}}</div> 
              </div>      
             <div class="bottom">
               <b-progress :percent="item.percent" status="text" active><span class="value">{{item.value}}</span></b-progress>
             </div> 
            </div>
          </div> 
       </div>
       </div>
       <div class="bottom-img"></div>
    </div>`,
  props: {
    rankName:{
      type: String,
      default: 'rankBox'
    },
    rankData: {
      type: Object,
      default: () => {}
    },
    // slides数量
    slidesNum: {
      type: Number,
      default: 3
    },
    // 单行高度
    lineHeight: {
      type: Number,
      default: 60
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
    unit: {
      type: String,
      default: '条'
    }
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
      spaceBetween: 0,//间距为0
      loop: true,//循环滚动
      autoplay: {//匀速滚动
        delay: _this.delay,//间隔时间1000毫秒
        pauseOnMouseEnter: true,
      },
      preventLinksPropagation:false
    })
  },
  methods: {}
})
