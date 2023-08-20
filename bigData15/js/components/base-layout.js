Vue.component('v-base-layout', {
  template: `
    <div class="page-content">
      <div class="header" flex="dir:column cross:center">
         <div class="header-box" flex="main:center">
            <div class="title gradient1">{{title}}</div>
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
