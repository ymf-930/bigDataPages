Vue.component('v-base-layout3', {
  template: `
    <div class="page-content">
      <div class="header" flex="dir:column cross:center">
         <div class="header-box show-nav" flex="dir:column main:justify">
            <div class="tab-center">{{title}}</div>
            <slot name="nav"></slot>
         </div>
      </div>
      <div class="content-box" flex="dir:top main:center">
        <div class="center" flex>
            <div class="center-left">    
                <slot name="left"></slot>
            </div>
            <div class="center-center">
                <slot name="center"></slot>
            </div>
            <div class="center-right">
                <slot name="right"></slot>
            </div>
        </div>
      </div>
    </div>`,
  props: {
    title: {
      type: String,
      default: '标题'
    },
  },
  data() {
    return {
    }
  },
  mounted() {

  },
  methods: {

  }
})
