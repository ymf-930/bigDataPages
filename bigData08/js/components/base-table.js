Vue.component('v-base-table', {
  template: `
    <div class="table-box">
        <div class="head" :style="{height:lineHeight+'px',lineHeight:lineHeight+'px'}">
          <span class="pl-5" v-for="(item,index) in columns" :style="{minWidth:item.minWidth+'px', textAlign:item.align}">{{item.title}}</span>
        </div>
        <div :ref="tableName" class="table-container" :style="{height:height?height+'px':lineHeight*slidesNum+'px'}">
          <ul class="swiper-wrapper">
            <div class="swiper-slide li" :class="disabledHover?'noHover':''" v-for="(item,index) in tableData" :style="{height:lineHeight+'px',lineHeight:lineHeight+'px'}">
              <div class="span pl-5" :style="{minWidth:citem.minWidth+'px', textAlign:citem.align}" v-for="(citem,cindex) in columns" :data-tiem="index" :title="item[citem.key]">{{ item[citem.key] }}</div>
            </div>
          </ul>
        </div>
    </div>`,
  props: {
    tableName:{
      type:String,
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
      default: 4
    },
    // 单行高度
    lineHeight: {
      type: Number,
      default: 42
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
      slidesPerView: _this.slidesNum,//设置slider容器能够同时显示的slides数量,默认显示4行
      spaceBetween: 0,//间距为0
      loop: true,//循环滚动
      autoplay: {//匀速滚动
        delay: _this.delay,//间隔时间1000毫秒
        // pauseOnMouseEnter: true,
      },
      preventLinksPropagation:false,
      on:{
        click: function(e){
          const index = e.target.dataset.tiem
          _this.SelectOne(index)
        },
      },
    })
    //6.6.2之前的版本需要通过代码实现此功能
    swiper.el.onmouseover = function(){
      swiper.autoplay.stop();
    }
    swiper.el.onmouseout = function(){
      swiper.autoplay.start();
    }
  },
  methods: {
    SelectOne(index) {
      this.$emit('select', this.tableData[index])
    }

  }
})
