<template>
  <div class="union-wrap">
    <bg-title>联合奖惩</bg-title>
    <div class="box">
      <div class="item" v-for="(item,index) in data" :key="index">
        <div class="count">{{ item.count }}<span>{{ item.unit }}</span></div>
        <div class="title">{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import BgTitle from './bg-title'

export default {
  name: 'union-box',
  components: { BgTitle },
  props: {
    data: {
      type: Array,
      default: () => ([]),
    },
  },
}
</script>

<style scoped lang="stylus">
.union-wrap {
  .box {
    background-color: rgba(7, 31, 67, 1);
    display: flex;
    height: 80px;
    margin: 16px 0;
    .item {
      width: 33.33%;
      text-align: center;
      border-right: 1px solid rgba(8, 48, 91, 1);
      &:last-child {
        border-right: none;
      }
    }
    .count {
      font-size: 18px;
      color: rgba(255, 233, 178, 1);
      line-height: 40px;
      height: 40px;
      > span {
        font-size: 12px;
        padding: 0 4px;
      }
    }
    .title {
      color: #fff;
      line-height: 40px;
      height: 40px;
    }
  }
}
</style>
