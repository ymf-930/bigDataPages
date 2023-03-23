<template>
  <div class="rzph">
    <bg-title>融资排行</bg-title>
    <div class="table">
      <dv-scroll-board :config="config" style="width:100%;height:100%" />
    </div>
    <div class="table">
      <dv-scroll-board :config="config2" style="width:100%;height:100%" />
    </div>
  </div>
</template>

<script>
import BgTitle from './bg-title'

const defaultCfg = {
  headerBGC: 'rgba(5, 36, 81, 1)',
  oddRowBGC: 'rgba(5, 36, 81, 1)',
  evenRowBGC: 'rgba(7, 31, 67, 1)',
  headerHeight: 45,
}
export default {
  name: 'rzph',
  components: { BgTitle },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    data2: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    config() {
      const data = []
      this.data.forEach(item => {
        data.push([
          `<span style="font-size: 12px;" title="${item.name}">${item.name}</span>`,
          `<span style="color:#ffdb5c;">${item.xq}</span>`,
          `<span style="color:#ffdb5c;">${item.fk}</span>`,
          `<span style="color:#ffdb5c;">${item.num}</span>`,
        ])
      })
      return {
        header: ['金融机构', '需求金额(万元)', '放款金额(万元)', '放款笔数'],
        align: ['center', 'center', 'center', 'center'],
        ...defaultCfg,
        data,
      }
    },
    config2() {
      const data = []
      this.data2.forEach(item => {
        data.push([item.name, `<span style="color:#ffdb5c;">${item.cp}</span>`])
      })
      return {
        header: ['金融机构', '金融产品'],
        align: ['center', 'center'],
        ...defaultCfg,
        data,
      }
    },
  },
}
</script>

<style scoped lang="stylus">
.rzph {
  margin-top: 20px;
  >>> .dv-scroll-board {
    .header .header-item {
      display: flex;
      align-items: center;
      font-size: 14px;
      padding: 0 10px;
      box-sizing: border-box;
      white-space: break-spaces;
      overflow: visible;
      text-overflow: clip;
      transition: all 0.3s;
      line-height: 1.2em !important;
    }
  }

  .table {
    height: 280px;
    margin-top: 16px;
    margin-bottom: 20px;
  }
}
</style>
