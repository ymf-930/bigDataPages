Vue.component("title-circle", {
    template: `
    <div class="title-circle" :style="style">
      <img :src=circleImg height="100%" width="auto"/>
      <div class="circle-right">
        <div>
            <span class="number">{{value}}</span>
            <span>{{unit}}</span>
        </div>
        <span>{{text}}</span>
      </div>
    </div>
  `,
    props: {
        sColor: {
            type: String,
            default: "rgba(20, 156, 228, 0.8)",
        },
        eColor: {
            type: String,
            default: "rgba(18, 42, 80, 0.2)",
        },
        width: {
            type: String,
            default: "15%",
        },
        circleImg: {
            type: String,
            default: null,
        },
        value: {
            type: String,
            default: null,
        },
        unit: {
            type: Number,
            default: 0,
        },
        text: {
            type: String,
            default: null,
        },
    },
    computed: {
        style() {
            return {
                width: this.width,
            };
        },
    },
});
