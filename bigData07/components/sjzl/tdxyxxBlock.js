Vue.component('tdxyxx-block', {
  template: `
    <title-con title="特定信用信息">
      <div class="tdxyxx-block">
        <div>
          <div class="tdxyxx-block-data-wrap">
            <div v-for="(item, index) in data.slice(0, 4)" class="tdxyxx-block-data-con">
              <div class="tdxyxx-block-data-title">{{ item.title }}</div>
              <div class="tdxyxx-block-data-num">{{ item.value }}</div>
              <img :src="'/assets/img/sjzl/' + item.img" />
            </div>
          </div>
          <img class="tdxyxx-block-bottom" src="/assets/img/sjzl/xycn-bottom.png" />
        </div>

        <div>
          <div class="tdxyxx-block-data-wrap">
            <div v-for="(item, index) in data.slice(4, 7)" class="tdxyxx-block-data-con">
              <div class="tdxyxx-block-data-title">{{ item.title }}</div>
              <div class="tdxyxx-block-data-num">{{ item.value }}</div>
              <img :src="'/assets/img/sjzl/' + item.img"  />
            </div>
          </div>
          <img class="tdxyxx-block-bottom" src="/assets/img/sjzl/xycn-bottom.png" />
        </div>
      </div>
    </title-con>
  `,
  data() {
    return {
      data: [
        { title: '水', value: '12530', img: 'shui.png' },
        { title: '电', value: '12530', img: 'dian.png' },
        { title: '气', value: '12530', img: 'qi.png' },
        { title: '暖', value: '12530', img: 'nuan.png' },
        { title: '纳税', value: '1230569', img: 'nashui.png' },
        { title: '社保', value: '233568905',img: 'shebao.png' },
        { title: '不动产', value: '76352', img: 'budongchan.png' },
      ]
    }
  },
  created() {

  },
  methods: {

  }
})