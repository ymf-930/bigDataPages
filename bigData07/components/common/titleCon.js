Vue.component("title-con", {
  template: `
    <div :style="style">
      <div class="title-con">
        <template v-if="showTitle">
          <div class="title-con-line" />
          <div class="title-con-title">
            <div class="title-con-jt-con">
              <img src="/assets/img/common/titleCon/jt.png" />
              <span>{{ title }}</span>
            </div>
            <img class="title-con-icon" src="/assets/img/common/titleCon/icon.png" />
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
      default: "450px",
    },
    conHeight: {
      type: String,
      default: "auto",
    },
    padding: {
      type: String,
      default: "20px",
    },
    backgroundColor: {
      type: String,
      default: "rgba(11, 38, 76, 1)",
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
      };
    },
    conStyle() {
      return {
        padding: this.padding,
        height: this.conHeight,
      };
    },
  },
});