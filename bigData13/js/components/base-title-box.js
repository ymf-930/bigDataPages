Vue.component('v-base-title-box', {
    template: `
    <div class="one-box" :style="{height:boxHeight}">
        <div class="title-box" flex="main:justify cross:center">
           {{title}}
           <div class="button" v-if="showBtn" @click="getDetail">详情</div>
        </div>
        <div class="content-box" flex="dir:top main:center cross:center">
            <slot></slot>
        </div>
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
