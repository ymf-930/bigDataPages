Vue.component("layout", {
  template: `
  <div class="layout">
    <div class="global-head">
      <div class="title">{{headTitle}}</div>
    </div>
    <div class="content">
      <slot />
    </div>
  </div>
  `,
  props: {
    headTitle:{
      type: String,
      default: '标题'
    }
  },
  data() {},
  computed: {},
  created() {},
  methods: {},
});
