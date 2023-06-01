Vue.component('v-base-panel-box', {
    template: `
    <div class="panel-box" :style="{height:boxHeight}">
        <div class="title-box" flex="cross:center">
           <img src="../images/common/panel-title-icon.png" alt="">
           <span>{{title}}</span>
           <div class="button" v-if="showBtn" @click="getDetail">详情</div>
        </div>
        <slot></slot>
    </div>`,
    props: {
      title: {
        type: String,
        default: '标题'
      },
      // 盒子高度
      boxHeight: {
        type: String,
        default: ''
      },
      showBtn: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        mainStyle: null
      }
    },
    mounted() {

    },
    methods: {
      getDetail(){
        this.$emit('detail')
      }
    }
  })
