Vue.component('list-swiper', {
  template: `
    <div class="list-box">
        <div class="head" v-if="showHead" :style="{height:lineHeight+'px',lineHeight:lineHeight+'px'}">
          <span v-for="(item,index) in columns" :style="{fontSize:headFontSize+'px'}">{{item.title}}</span>
        </div>
        <div :ref="listName" class="list-container" :style="{height:height?height+'px':lineHeight*slidesNum+'px'}">
          <ul class="swiper-wrapper">
            <div class="swiper-slide li" v-for="(item,index) in listData" :style="{height:lineHeight+'px',lineHeight:lineHeight+'px'}">
              <div class="span" v-for="(citem,cindex) in columns" :data-tiem="index">
                <span v-if="citem.key==='num'">{{ item[citem.key] }}{{unit}}</span>
                <span v-else-if="citem.key==='text'">{{ item[citem.key] }}</span>
                <img v-else :src="item[citem.key]" alt="">
              </div>
            </div>
          </ul>
        </div>
    </div>`,
  props: {
    listName: {
      type: String,
      default: 'listBox'
    },
    // 表格列表
    columns: {
      type: Array,
      default: () => [],
    },
    // 表格数据
    listData: {
      type: Array,
      default: () => [],
    },
    showHead: {
      type: Boolean,
      default: false
    },
    // slides数量
    slidesNum: {
      type: Number,
      default: 5
    },
    // 单行高度
    lineHeight: {
      type: Number,
      default: 35
    },
    headFontSize:{
      type: Number,
      default: 14
    },
    // 表格高度
    height: {
      type: Number,
      default: null
    },
    spaceBetween: {
      type: Number,
      default: null
    },
    // 间隔时间
    delay: {
      type: Number,
      default: 1500
    },
    disabledHover: {
      type: Boolean,
      default: true
    },
    unit: {
      type: String,
      default: '人'
    },
  },
  data() {
    return {

    }
  },
  mounted() {
    // 列表滚动
    let _this = this
    const swiper = new Swiper(_this.$refs[_this.listName], {
      direction: 'vertical',//滚动方向，垂直滚动
      slidesPerView: _this.slidesNum,//设置slider容器能够同时显示的slides数量,显示2行
      spaceBetween: _this.spaceBetween,//间距为0
      loop: true,//循环滚动
      autoplay: {//匀速滚动
        delay: _this.delay,//间隔时间1000毫秒
        pauseOnMouseEnter: true,
      },
      preventLinksPropagation: false,
      // on: {
      //   click: function (e) {
      //     const index = e.target.dataset.tiem
      //     _this.SelectOne(index)
      //   },
      // },
    })

  },
  methods: {
    // SelectOne(index) {
    //   this.$emit('select', this.listData[index])
    // }
  }
})
