Vue.component('v-base-content-modal', {
  template: `
    <div class="modal-mask" v-if="visible">
        <div class="content-modal-box" 
             flex="dir:top cross:center main:center">
          <div class="header-box">
             <div class="left">
               <div class="title">{{headerTitle}}</div>    
             </div>
             <img 
               class="back" 
               src="../images/course/back.png" 
               @click="closeModal"
               alt="">
          </div>
          <div class="content-box">
            <div class="title">
              <div class="dot"></div>
              <span>{{modalInfo.title}}：</span>
            </div>    
            <div class="content-container">
              <div class="left">
                <div class="swiper-container" ref="mySwiper">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="item in modalInfo.swiperList" :key="item.id">
                       <img :src="item.imgUrl" alt="">
                    </div>
                  </div>
                  <!-- Add Pagination -->
                  <div class="swiper-pagination"></div>
                  <!-- Add Arrows -->
                  <div class="swiper-button-next"></div>
                  <div class="swiper-button-prev"></div>
                </div>
               </div>
               <div class="right">
                  <div class="text-box">
                     <div class="text">{{modalInfo.swiperList[activeSlide].descText}}</div>
                  </div>
               </div>
            </div>
            <img class="modal-bg" src="../images/course/modal-bg.svg" alt="">
          </div>
        </div>
    </div>
    `,
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    headerTitle: {
      type: String,
      default: '头部标题'
    },
    modalInfo: {
      type: Object,
      default: () => {
      }
    },
  },
  data() {
    return {
      swiper: null,
      iconSrc: "../../images/home/nav-icon-bottom1.png",
      activeSlide: 0 // 当前的slide
    }
  },
  mounted:function () {
    var _self  = this
    // 列表滚动
    this.swiper = new Swiper('.swiper-container', {
      // spaceBetween: 30,
      centeredSlides: true,
      // autoplay: {
      //   delay: 2500,
      //   disableOnInteraction: false,
      // },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        slideChange: function () {
          _self.activeSlide = this.activeIndex
        },
      },
    })
  },
  methods: {
    closeModal() {
      this.$emit('close')
    }
  }
})
