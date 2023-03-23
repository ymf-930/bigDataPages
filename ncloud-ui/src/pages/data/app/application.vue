<template>
  <div class="application" flex>
    <Panel>
      <template slot="inner">
        <union-box :data="appData.union" />
        <red-black-box :data="appData.redBlack" />
        <report-chart :data="appData.report" />
      </template>
    </Panel>
    <Panel style="padding-left: 0; padding-right: 0;">
      <template slot="inner">
        <xyj
          :depart-count="appData.xyj.departCount"
          :incentives-count="appData.xyj.incentivesCount"
          :data="appData.xyj.data"
        />
        <xyjcs :data="appData.xyjcs" />
        <fjfl :data="appData.fjfl" />
      </template>
    </Panel>
    <Panel>
      <template slot="inner">
        <xyd :data="appData.xyd.data" :data2="appData.xyd.data2" />
        <rzph :data="appData.rzph" :data2="appData.rzcp" />
      </template>
    </Panel>
  </div>
</template>

<script>
import Panel from '../../../components/Panel/Panel'
import UnionBox from './components/union-box'
import RedBlackBox from './components/red-black-box'
import ReportChart from './components/report-chart'
import Xyd from './components/xyd'
import Xyj from './components/xyj'
import Fjfl from './components/fjfl'
import Rzph from './components/rzph'
import Xyjcs from './components/xyjcs.vue'
import { mapState } from 'vuex'

export default {
  name: 'Application',
  components: {
    Rzph,
    Fjfl,
    Xyj,
    Xyd,
    ReportChart,
    RedBlackBox,
    UnionBox,
    Panel,
    Xyjcs,
  },
  data() {
    return {}
  },
  computed: {
    ...mapState({
      appData: state => state.applicationNew,
    }),
  },
  created() {
    this.initData()
  },
  methods: {
    initData() {
      this.$store.dispatch('getApplicationNewData')
    },
  },
}
</script>

<style scoped lang="stylus">
@import "~@/assets/styles/font/iconfont.css"
.wrap-title
  >>> .card-title
    background-size: 100% 20px;
i:not(.num)
  color #fff
.application {
  color: #fff;
  height: 1000px;
  box-sizing border-box;
  padding: 20px 0;

  > div {
    &:nth-child(1) {
      width 450px
    }

    &:nth-child(2) {
      width calc(100% - 900px)
    }

    &:nth-child(3) {
      width 450px
    }
  }
}
</style>
