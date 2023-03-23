<template>
  <div class="fjfl">
    <bg-title>信用分级分类监管</bg-title>
    <dv-scroll-board :config="config" style="width:100%;height:200px" />
  </div>
</template>

<script>
import BgTitle from './bg-title'

const defaultCfg = {
  headerBGC: 'rgba(5, 36, 81, 1)',
  oddRowBGC: 'rgba(5, 36, 81, 1)',
  evenRowBGC: 'rgba(7, 31, 67, 1)',
}
export default {
  name: 'fjfl',
  components: { BgTitle },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    config() {
      const data = []
      this.data.forEach(item => {
        data.push([item.depart, `<span style="color:#ffdb5c;">${item.field}</span>`])
      })
      return {
        header: ['监管部门', '监管领域'],
        align: ['center', 'center'],
        ...defaultCfg,
        data,
      }
    },
  },
}
</script>

<style scoped lang="stylus">
.fjfl {
  height: 240px;
}
</style>
