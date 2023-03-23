Vue.component('table-swiper', {
  template: `
    <div class="table-box">
        <div class="head" :style="{height:lineHeight+'px',lineHeight:lineHeight+'px'}">
          <span v-for="(item,index) in columns" :style="{fontSize:headFontSize+'px'}">{{item.title}}</span>
          <img src="../assets/img/common/table-icon.png" class="img-top" width="13" height="4" alt="">
          <img src="../assets/img/common/table-icon.png" class="img-bottom" width="13" height="4" alt="">
        </div>
        <div :ref="tableName" class="table-container" :style="{height:height?height+'px':lineHeight*slidesNum+'px'}">
          <ul class="swiper-wrapper">
            <div class="swiper-slide li" v-for="(item,index) in tableData" :style="{height:lineHeight+'px',lineHeight:lineHeight+'px'}">
            <div class="span" :class="showColors?'span'+index:''" v-for="(citem,cindex) in columns" :data-tiem="index" :style="{paddingLeft:'60px'}">
              {{ item[citem.key] }}
              <img src="../assets/img/common/table-icon.png" class="img-top" width="13" height="4" alt="" v-if="cindex===0">
              <img src="../assets/img/common/table-icon.png" class="img-bottom" width="13" height="4" alt="" v-if="cindex===0">
            </div>
            </div>
          </ul>
        </div>
    </div>`,
  props: {
    tableName: {
      type: String,
      default: 'tableBox'
    },
    // 表格列表
    columns: {
      type: Array,
      default: () => [],
    },
    // 表格数据
    tableData: {
      type: Array,
      default: () => [],
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
    // 间隔时间
    delay: {
      type: Number,
      default: 1500
    },
    disabledHover: {
      type: Boolean,
      default: true
    },
    // 多彩表格
    showColors:{
      type: Boolean,
      default: false
    }
  },
  data() {
    return {

    }
  },
  mounted() {
    // 列表滚动
    let _this = this
    const swiper = new Swiper(_this.$refs[_this.tableName], {
      direction: 'vertical',//滚动方向，垂直滚动
      slidesPerView: _this.slidesNum,//设置slider容器能够同时显示的slides数量,显示2行
      spaceBetween: 0,//间距为0
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
    //   this.$emit('select', this.tableData[index])
    // }

  }
})
