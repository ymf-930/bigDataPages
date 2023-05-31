Vue.component('v-content', {
    template: `
    <div class="content" flex="dir:top">
        <div class="title" flex="cross:center">
            <div class="dot"></div>
            <span class="name">{{title}}：</span>
        </div>
        <div class="choose">
            <b-row :gutter="40" class="all">
                <b-col span="14">
                    <div class="carousel">
                        <b-carousel
                            dots="outside"
                            radius-dot
                            arrow="always"
                            trigger="hover"
                            v-model="show"
                            loop
                        >
                            <b-carousel-item v-for="(item,index) in data" :keys="index">
                                <div class="demo-carousel-panel" flex="main:center">
                                    <img :src="item.img" class="pic-main">
                                </div>
                            </b-carousel-item>
                        </b-carousel>
                    </div>
                </b-col>
                <b-col span="10">
                    <div class="card">
                        <b-row :gutter="20">
                            <b-col span="8" v-for="(item,index) in data" :keys="index">
                                <div class="card-item" @click="handleClick(index)">
                                    <div class="pic" flex="main:center">
                                        <img :src="item.img" class="pic-right">
                                    </div>
                                    <div class="name" flex="main:center" :class="{'show-name': show === index}">
                                        <span>{{item.name}}</span>
                                    </div>
                                </div>
                            </b-col>
                        </b-row>
                    </div>
                </b-col>
            </b-row>
        </div>
    </div>`,
    props: {
        title: {
            type: String,
            default: '标题'
        },
        data: {
            type: Array,
            default: () => []
        },
    },
    data() {
        return {
            mainStyle: null,
            show: 0
        }
    },
    mounted() {
        // 列表滚动
        const swiper = new Swiper('.swiper-container', {
            centeredSlides: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            on:{
                slideChange: function(){
                    // this.show = this.activeIndex
                    console.log('--------------', this.$root)
                },
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        })
    },
    methods: {
        handleClick(index) {
            this.show = index
        }
    },
    watch: {
        data:{
            //  注意：属性值发生变化后，handler执行后获取的 newVal 值和 oldVal 值是一样的
            handler(newVal,oldVal) {
               this.show = 0
            },
            // 开启深度监听 deep
            deep: true
        }
    }
})
