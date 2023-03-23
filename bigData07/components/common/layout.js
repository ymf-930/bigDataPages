Vue.component("layout", {
  template: `
  <div class="layout">
    <div class="global-head">
      <div class="nav-con">
        <div class="nav-btn nav-sjzl" :class="{ 'nav-sjzl-s': isSjzl }" @click="handleClickNavBtn('sjzl')"></div>
        <div class="nav-btn nav-xycn" :class="{ 'nav-xycn-s': isXycn }" @click="handleClickNavBtn('xycn')"></div>
        <div class="nav-sapce"></div>
        <div class="nav-btn nav-htly" :class="{ 'nav-htly-s': isHtly }" @click="handleClickNavBtn('htly')"></div>
        <div class="nav-btn nav-sxzl" :class="{ 'nav-sxzl-s': isSxzl }" @click="handleClickNavBtn('sxzl')"></div>
      </div>
    </div>

    <div class="content">
      <slot />
    </div>
  </div>
  `,
  props: {
    pageName: {
      type: String,
      default: "sjzl",
    },
  },
  data() {},
  computed: {
    isSjzl() {
      return this.pageName === "sjzl";
    },
    isXycn() {
      return this.pageName === "xycn";
    },
    isHtly() {
      return this.pageName === "htly";
    },
    isSxzl() {
      return this.pageName === "sxzl";
    },
  },
  created() {},
  methods: {
    handleClickNavBtn(pageName) {
      window.open('../pages/' + pageName + ".html", "_self");
    },
  },
});
