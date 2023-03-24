<template>
  <div class="overview" flex>
    <Panel>
      <template slot="inner">
        <left-box :data="leftData" />
      </template>
    </Panel>
    <Panel style="padding-left: 0; padding-right: 0;" flex="main:justify dir:top">
      <template slot="outer">
        <center-box :count-num-list="countNumList" :data="centerData" />
      </template>
      <template slot="inner">
        <red-black :data="redBlack" />
      </template>
    </Panel>
    <Panel>
      <template slot="inner">
        <report-chart :data="report" />
        <fltj :top="fltj.topData" :chart-data="fltj.chartData" />
        <sub-depart :data="subDepart" />
      </template>
    </Panel>
  </div>
</template>

<script>
import Panel from '@/components/Panel/Panel.vue'
import RedBlack from './components/red-black.vue'
import CenterBox from './components/center-box.vue'
import LeftBox from './components/left-box.vue'
import ReportChart from './components/report-chart.vue'
import Fltj from './components/fltj.vue'
import SubDepart from './components/sub-depart.vue'
import { mapState } from 'vuex'
export default {
  name: 'Overview',
  data() {
    return {
      color: ['#1167e2', '#4dcea7', '#fc9530', '#ff3b3c', '#563cff', '#0fbce0', '#0c31e2']
    }
  },
  components: { Panel, RedBlack, CenterBox, LeftBox, ReportChart, Fltj, SubDepart },
  computed: {
    ...mapState({
      redBlack: state => state.overview.redBlack,
      countNumList: state => state.overview.countNumList,
      leftData: state => state.overview.leftData,
      centerData: state => state.overview.centerData,
      report: state => state.overview.report,
      fltj: state => state.overview.fltj,
      subDepart: state => state.overview.subDepart
    }),
  },
  created() {
    this.initData()
  },
  methods: {
    initData() {
      this.$store.dispatch('getOverviewData')
    },
  },
}
</script>

<style lang="stylus" scoped>
.overview {
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
