Vue.component('v-base-layout', {
  template: `
    <div class="page-content" :class="{'has-bg':hasBg}" flex="dir:column">
      <div class="header" flex="dir:column cross:center">
         <div class="header-box" :class="{'show-nav': showNav}" flex="dir:column main:justify">
            <div class="tab-center">{{title}}</div>
            <slot name="nav"></slot>
         </div>
      </div>
      <div class="center" flex="main:center cross:center">
         <slot name="center"></slot>
      </div>
      <div class="bottom">
         <slot name="bottom"></slot>
      </div>
      <slot name="side"></slot>
      <slot name="modal"></slot>
    </div>`,
  props: {
    title: {
      type: String,
      default: '标题'
    },
    hasBg: {
      type: Boolean,
      default: true
    },
    showNav: Boolean
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
