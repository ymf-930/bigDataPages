<template>
  <div class="administrative-preparation" flex="main:left">
    <div class="left" flex="dir:top cross:center">
      <img class="icon" src="../../assets/images/overview/star.svg">
      <img class="icon-bottom" src="../../assets/images/overview/star-bottom.png">
    </div>
    <div class="right" flex="dir:top">
      <div class="icon-title">{{title}}</div>
      <div class="num-box" flex="main:left cross:bottom">
        <div class="num">{{ num }}</div>
        <!-- <span>人</span> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StarBox',
  props: {
    title: {
      type: String,
      default: ''
    },
    num: {
      type: Number,
      default: 31332
    }
  }
}
</script>

<style lang="stylus" scoped>

.administrative-preparation {

  .left {

    .icon {
      width: 28px;
      height: 28px;
      font-size: 28px;
      color: rgba(0, 211, 255, 1);
    }

    .icon-bottom {
      width: 88px;
      height: 46px;
    }

  }

  .right {
    padding-left: 20px;

    .icon-title {
      color: #fff;
      padding: 15px 0;
    }

    .num-box {

      .num {
        font-size: 20px;
        font-weight: 700;
      }

      span {
        color: #fff;
        font-size: 10px;
        height: 18px;
        line-height: 15px;
      }

    }
  }
}

</style>
