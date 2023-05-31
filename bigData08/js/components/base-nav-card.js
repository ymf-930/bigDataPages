Vue.component('v-base-nav-card', {
    template: `
      <div class="nav-card-box" 
           flex="dir:top cross:center main:center" 
           @click="goPage(linkUrl)">
        <div class="icon-box"   
          @mouseenter="changeImageSrc('hover')"
          @mouseleave="changeImageSrc('')">
           <img class="icon-img" :src="imgUrl" alt="">
           <img class="icon-bottom" :src="iconSrc" alt="">
        </div>
        <div class="title-box">
          <img :src="titleUrl" alt="">
        </div>
        <img class="drop" src="../../images/home/drop.png" alt="">
      </div>`,
    props: {
        imgUrl: {
            type: String,
            default: '../../images/home/nav-card-icon1.png'
        },
        titleUrl: {
            type: String,
            default: '../../images/home/nav-card-title1.png'
        },
        linkUrl:{
            type: String,
            default: '#'
        }
    },
    data() {
        return {
            iconSrc: "../../images/home/nav-icon-bottom1.png",
        }
    },
    mounted() {

    },
    methods: {
        changeImageSrc(way) {
            let tempStr = way === 'hover' ? 'bottom2' : 'bottom1'
            this.iconSrc = `../../images/home/nav-icon-${tempStr}.png`
        },
        goPage(link) {
            window.open(link, '_blank')
        }
    }
})
  