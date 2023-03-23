Vue.component("color-block", {
  template: `
    <div class="color-block" :style="style">
      <div class="color-block-line" :style="lineStyle" />
      <div class="color-block-con" :style="conStyle">
        <slot />
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
      default: "359px",
    },
    conHeight: {
      type: String,
      default: "97px",
    },
  },
  computed: {
    style() {
      return {
        width: this.width,
      };
    },
    lineStyle() {
      return {
        backgroundColor: this.sColor,
      };
    },
    conStyle() {
      return {
        height: this.conHeight,
        backgroundImage: `linear-gradient(${this.sColor}, ${this.eColor})`,
      };
    },
  },
});
