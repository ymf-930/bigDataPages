<template>
  <div class="evaluation" flex>
    <!-- 左侧面板-->
    <Panel>
      <template slot="inner">
        <pjzb :data="numList.registerNumList" :data2="numList.watchNumList"></pjzb>
        <zbfx :data="pieData" />
      </template>
    </Panel>
    <!-- 中间面板-->
    <Panel style="padding-left: 0; padding-right: 0;">
      <template slot="inner">
        <djfb :data="distributionData1" :data2="distributionData2" />
        <qsfx :data="qsfx" />
      </template>
    </Panel>
    <!-- 右侧面板-->
    <Panel>
      <template slot="inner">
        <right-box :data="rightData" />
      </template>
    </Panel>
  </div>
</template>

<script>
import Panel from '../../../components/Panel/Panel'
import Pjzb from './components/pjzb.vue'
import Djfb from './components/djfb.vue'
import Qsfx from './components/qsfx.vue'
import RightBox from './components/right-box.vue'
import Zbfx from './components/zbfx.vue'
import { mapState } from 'vuex'

export default {
  name: 'Evaluation',
  data() {
    return {
    }
  },
  components: {
    Panel,
    Pjzb,
    Djfb,
    Qsfx,
    RightBox,
    Zbfx,
  },
  computed: {
    ...mapState({
      numList: state => state.evaluationNew.numList,
      rightData: state => state.evaluationNew.rightData,
      qsfx: state => state.evaluationNew.qsfx,
      distributionData1: state => state.evaluationNew.distributionData1,
      distributionData2: state => state.evaluationNew.distributionData2,
      pieData: state => state.evaluationNew.pieData,
    }),
  },
  created() {
    this.initData()
  },
  methods: {
    initData() {
      this.$store.dispatch('getEvaluationNewData')
    },
  },
}
</script>

<style lang="stylus" scoped>
/deep/ .bin-table {
  background-color: #072649;
}

/deep/ .bin-table td {
  background: rgba(7, 31, 67, 1);
}

/deep/ .bin-table-border td, .bin-table-border th {
  border-right: 1px solid #072649;
}

/deep/ .bin-table .bin-table-header th, .bin-table .bin-table-fixed-header th {
  background-color: rgba(5, 36, 81, 1);
  border: 1px solid #072649;
}

/deep/ .bin-table-cell {
  color: #fff;
}

//覆盖表格样式
/deep/ .bin-table-border td, .bin-table-border th {
  border: 1px solid #072649;
}

/deep/ .bin-table-wrapper{
  &.bin-table-wrapper-with-border:after, &.bin-table-wrapper-with-border:before {
    background-color: #072649;
  }
}

//表格隔行换色
/deep/ .bin-table .odd-row td {
  background: rgba(7, 31, 67, 1);
}

/deep/ .bin-table .even-row td {
  background: rgb(5, 36, 81, 1);
}
.evaluation {
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
