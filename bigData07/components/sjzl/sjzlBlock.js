Vue.component('sjzl-block', {
  template: `
    <title-con title="数据总览">
      <div class="sjzl-block">
        <div class="sjzl-block-group">
          <div class="sjzl-block-title">
            <span>数据归集总量</span>
          </div>
          <div class="sjzl-block-num">
            <count-data-evo :num="798628"></count-data-evo>
          </div>
          <div class="sjzl-block-line"></div>
        </div>

        <div class="sjzl-block-group">
          <div class="sjzl-block-title">
            <span>数据归集总量</span>
          </div>
          <div class="sjzl-block-num">
            <count-data-evo :num="2012452"></count-data-evo>
          </div>
          <div class="sjzl-block-line"></div>
        </div>

        <div class="sjzl-block-group">
          <div class="sjzl-block-title">
            <span>数据归集总量</span>
          </div>
          <div class="sjzl-block-num">
            <count-data-evo :num="8736357"></count-data-evo>
          </div>
          <div class="sjzl-block-line"></div>
        </div>
      </div>
    </title-con>
  `,
  data() {

  },
  created() {

  },
  methods: {

  }
})