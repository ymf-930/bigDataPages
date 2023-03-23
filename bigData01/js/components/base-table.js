Vue.component('v-base-table', {
  template: `
    <div class="table-box" :class="{shadow:flag}">
        <div class="head" :style="{height:lineHeight+'px',lineHeight:lineHeight+'px'}">
          <span v-for="(item,index) in columns">{{item.title}}</span>
        </div>
        <div :ref="tableName" class="table-container" :style="{height:height?height+'px':lineHeight*slidesNum+'px'}">
          <ul class="swiper-wrapper">
            <div class="swiper-slide li" :class="disabledHover?'noHover':''" v-for="(item,index) in tableData" :style="{height:lineHeight+'px',lineHeight:lineHeight+'px'}">
            <div class="span" v-for="(citem,cindex) in columns" :data-tiem="index">{{ item[citem.key] }}</div>
            </div>
          </ul>
        </div>
    </div>`,
  props: {
    tableName:{
      type:String,
      default: 'tableBox'
    },
    flag: {
      type: Boolean,
      default: false
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
      default: 2
    },
    // 单行高度
    lineHeight: {
      type: Number,
      default: 40
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
    disabledHover:{
      type: Boolean,
      default: true
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
      preventLinksPropagation:false,
      on:{
        click: function(e){
          const index = e.target.dataset.tiem
          _this.SelectOne(index)
        },
      },
    })
    
  },
  methods: {
    SelectOne(index) {
      this.$emit('select', this.tableData[index])
    }

  }
})
