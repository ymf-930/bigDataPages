Vue.component('v-base-nav-circle', {
    template: `
      <div class="nav-circle-box" flex="dir:top cross:center main:center">
        <div class="circle-box"
          @click="openModal"
          @mouseenter="changeImageSrc('hover')"
          @mouseleave="changeImageSrc('')">
           <img class="circle-img" :src="activeCircle === num ? iconSrc2 : iconSrc" alt="">
           <div class="text-box">
               <div class="num-img">
                  <div class="num">{{num}}</div>
               </div>
               <div class="title" :class="{'active-title':activeCircle === num}">{{title}}</div>
               <div class="date">{{date}}</div>
           </div>
        </div>
        <img class="arrow" src="../../images/course/arrow.svg" alt="">
        <img class="dotted-line" src="../../images/course/dotted-line.svg" alt="">
        <img class="dot-circle" src="../../images/course/circle3.png" alt="">
      </div>`,
    props: {
        num: {
            type: String,
            default: '00'
        },
        title: {
            type: String,
            default: '标题'
        },
        date: {
            type: String,
            default: 'xx年x月x日'
        },
        activeCircle: {
            type: String,
            default: '01'
        }
    },
    data() {
        return {
            iconSrc: "../../images/course/circle1.png",
            iconSrc2: "../../images/course/circle2.png",
        }
    },
    mounted() {

    },
    methods: {
        changeImageSrc(way) {
            let tempStr = way === 'hover' ? 'circle2' : 'circle1'
            this.iconSrc = `../../images/course/${tempStr}.png`
        },
        openModal(){
            this.$emit('open')
        }
    }
})
  