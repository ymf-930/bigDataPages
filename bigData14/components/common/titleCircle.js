Vue.component("title-circle", {
    template: `
       <div class="title-circle-box" :style="style">
           <div class="title-circle">
                <span>{{text}}</span>
                <div flex="main:center cross:center">
                    <span :style="{color:color}">{{value}}</span>
                    <span :style="{color:color}">{{unit}}</span>
                </div>
                <span :style="{color:color}">{{rate}}</span>
           </div>
       </div>
  `,
    props: {
        width: {
            type: String,
            default: "33.333%",
        },
        circleImg: {
            type: String,
            default: '',
        },
        value: {
            type: String,
            default: '',
        },
        unit: {
            type: String,
            default: '人',
        },
        text: {
            type: String,
            default: '',
        },
        rate: {
            type: String,
            default: '',
        },
        color:{
            type: String,
            default: '#fff',
        }
    },
    computed: {
        style() {
            return {
                width: this.width,
                backgroundImage: `url(${this.circleImg})`
            };
        },
    },
});
