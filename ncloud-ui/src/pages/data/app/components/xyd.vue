<template>
  <div class="union-wrap">
    <bg-title>信易贷</bg-title>
    <div class="box box1">
      <div class="item" v-for="(item, index) in data" :key="index" :class="`item-${index}`">
        <div class="count">
          {{ item.count }}<span>{{ item.unit }}</span>
        </div>
        <div class="title">{{ item.title }}</div>
        <img src="~@/assets/images/application/arrow.png" />
      </div>
    </div>
    <div class="box box2">
      <div class="item" v-for="(item, index) in data2" :key="index">
        <div class="title">{{ item.title }}</div>
        <div class="count">
          {{ item.count }}<span>{{ item.unit }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BgTitle from './bg-title'

export default {
  name: 'xyd',
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
}
</script>

<style scoped lang="stylus">
.union-wrap {
  .box {
    position: relative;
    display: flex;
    height: 100px;
    margin: 16px 0;
    background: url('~@/assets/images/application/bottom.png') no-repeat 0 bottom;
    background-size: 100%;
    .item {
      flex: 1;
      text-align: center;
    }
    .count {
      font-size: 18px;
      font-weight: bold;
      color: rgba(255, 233, 178, 1);
      line-height: 40px;
      height: 40px;
      > span {
        font-size: 12px;
        padding: 0 4px;
        color: #fff;
      }
    }
    .title {
      color: #fff;
      line-height: 40px;
      height: 40px;
    }
    &.box1 {
      .item {
        padding-left: 40px;
        position: relative;
        background: url('~@/assets/images/application/icon1.png') no-repeat 0 center;
        background-size: 38%;
        &.item-1{
          background: url('~@/assets/images/application/icon2.png') no-repeat 0 center;
          background-size: 38%;
        }
        &.item-2{
          background: url('~@/assets/images/application/icon3.png') no-repeat 0 center;
          background-size: 38%;
        }
        img {
          content: '';
          position: absolute;
          bottom: 20px;
          right: 8px;
          height: 6px;
        }
        .count {
          padding-top: 10px;
        }
      }
    }
    &.box2 {
      padding-bottom: 12px;
      .item {
        background: url('~@/assets/images/application/yuan2.png') no-repeat center bottom;
        background-size: 80px 60px;
        .title {
          font-size: 12px;
        }
        .count {
          line-height: 1;
        }
      }
      &::after {
        display: none;
      }
    }
  }
}
</style>
