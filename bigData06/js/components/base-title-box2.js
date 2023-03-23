Vue.component('v-base-title-box2', {
    template: `
    <div class="one-box2" :style="boxStyle">
                        <div class="left-top"></div>
                        <div class="left-bottom"></div>
                        <div class="right-top"></div>
                        <div class="right-bottom"></div>
                        <slot name="right"></slot>
                        <div class="title-box" flex="main:center cross:center" :style="{fontSize:fontSize}">
                            {{title}}
                        </div>
                        <slot></slot>
                    </div>`,
    props: {
        title: {
            type: String,
            default: '标题'
        },
        // 外部样式
        boxStyle: {
            type: String,
            default: ''
        },
        fontSize: {
            type:String,
            default: '16px'
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

    }
})
