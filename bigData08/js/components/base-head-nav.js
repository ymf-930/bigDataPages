Vue.component('v-base-head-nav', {
  template: `
    <div class="nav-box">
        <ul flex="main:center">
            <li
                class="nav-item"
                :class="{'nav-item-active': activeNav === item.key}"
                @click="navChange(item)"
                v-for="item in navList"
                :key="item.key">
                {{item.value}}
            </li>
        </ul>
    </div>`,
  props: {
    activeNav:{
      type: String,
      default: ''
    }
  },
  data() {
    return {
      // 头部导航
      navList: [
        {key: 'back', value: '返回首页', navLink: 'index.html'},
        {key: 'course', value: '建设历程', navLink: 'course.html'},
        {key: 'job', value: '试点工作', navLink: 'job.html'},
        {key: 'supervision', value: '信用监管', navLink: 'supervision.html'},
        {key: 'center', value: '数据中心', navLink: 'center.html'},
        {key: 'server', value: '信用服务', navLink: 'server.html'},
      ],
    }
  },
  mounted() {

  },
  methods: {
    navChange(nav){
      const {key, navLink} = nav
      this.activeNav = key
      window.open(navLink, '_self')
    },
  }
})
