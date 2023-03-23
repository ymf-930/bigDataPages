<template>
  <div class="content-box">
    <div class="title-box">
      <div class="title">{{ title }}</div>
    </div>
    <div class="content">
      <div class="content-item" v-for="(item, index) in numList" :key="index">
        <div class="num">{{ item }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NumBox',
  props: {
    title: {
      type: String,
      default: '',
    },
    numList: {
      type: Array,
      default() {
        return [1, 0, 1, 2, 3, 4]
      },
    },
  },
}
</script>

<style lang="stylus" scoped>
.content-box {
  display :flex;
  flex-direction :column;
  justify-content :center;
  align-items :center;

  .title-box {
    display : flex;
    justify-content :center;
    text-align: center;
    color: #fff;
    font-size: 18px;
    letter-spacing: 2px;
    padding: 10px 0;

    .title {
      padding-bottom: 8px;
      border-bottom:1px dashed #fff
      font-size: 16px;
    }
  }

  .content {
    width: 100%;
    height: 58px;
    display: flex;
    justify-content: center;
    background: url("../../assets/images/overview/num-box-bg.png") center no-repeat;
    background-size: 100%;

    .content-item {
      display: flex;
      justify-content: center;
      align-items: center;
      background: url("../../assets/images/overview/num-bg.png") center no-repeat;
      width: 30px;
      height: 37px;
      padding: 0 25px;

      .num {
        font-size: 14px;
        color: #fff;
      }
    }
  }
}
</style>
