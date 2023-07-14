Vue.component("title-con", {
  template: `
    <div :style="style">
      <div class="title-con">
        <template v-if="showTitle">
          <div class="title-con-title">
            <div class="title-con-jt-con">
              <span>{{ title }}</span>
            </div>
          </div>
        </template>

        <div class="title-con-con" :style="conStyle">
          <slot />
        </div>
      </div>
    </div>
  `,
  props: {
    showTitle: {
      type: Boolean,
      default: true,
    },
    width: {
      type: String,
      default: "410px",
    },
    conHeight: {
      type: String,
      default: "auto",
    },
    padding: {
      type: String,
      default: "10px 0",
    },
    backgroundColor: {
      type: String,
      default: "rgba(11, 38, 76, 0.8)",
    },
    borderRadius: {
      type: String,
      default: "10px",
    },
    title: {
      type: String,
      default: "标题",
    },
  },
  data() {
    return {};
  },
  computed: {
    style() {
      return {
        width: this.width,
        backgroundColor: this.backgroundColor,
        borderRadius: this.borderRadius
      };
    },
    conStyle() {
      return {
        padding: this.padding,
        height: this.conHeight
      };
    },
  },
});