<template>
  <div class="xyjcs">
    <bg-title>信易+措施</bg-title>
    <div class="bg-box">
      <VBrrage :arr="dataArr" />
    </div>
  </div>
</template>

<script>
import bgTitle from './bg-title.vue'
import VBrrage from '@/components/Brrage'
import Util from '@/common/utils/util'
const COLOR_LIST = ['rgba(255, 179, 102, 1)', 'rgba(0, 211, 255, 1)', 'rgba(50, 156, 255, 1)']

export default {
  components: { bgTitle, VBrrage },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      dataArr: [],
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      if (this.timer) {
        clearInterval(this.timer)
        this.timer = null
      }
      this.timer = setInterval(() => {
        this.sendBarrage()
        this.checkMax()
      }, 600)
    },
    //
    sendBarrage() {
      // 随机一个消息队列索引
      this.dataArr.push({
        direction: 'default',
        content: this.data[Util.getRandomInt(0, this.data.length - 1)],
        style: {
          color: COLOR_LIST[Util.getRandomInt(0, COLOR_LIST.length - 1)],
        },
      })
    },
    checkMax() {
      if (this.dataArr.length > 1000) {
        this.dataArr.unshift()
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
.xyjcs {
  height: 226px;
  .bg-box {
    position: relative;
    margin-top: -10px;
    background: rgb(5, 36, 81);
    height: 190px;
  }
}
</style>
