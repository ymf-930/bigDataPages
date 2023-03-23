<template>
  <div class="left-box">
    <bg-title>全市人口基本情况</bg-title>
    <div class="wrap wrap1">
      <div class="num-box">
        <div class="left-title">
          <div class="justify">全 市 人 口</div>
          <div class="justify">总 数</div>
        </div>
        <div class="bg-num">
          <span v-for="(num, index) in splitNum(data.totalCount)" :key="index">{{ num }}</span>
        </div>
        <div class="unit">人</div>
      </div>

      <div class="box">
        <div class="item" v-for="(item, index) in data.data1" :key="index">
          <div class="count">
            {{ item.count }}<span>{{ item.unit }}</span>
          </div>
          <div class="title">{{ item.title }}</div>
        </div>
      </div>
      <div class="box">
        <div class="item" v-for="(item, index) in data.data2" :key="index">
          <div class="count">
            {{ item.count }}<span>{{ item.unit }}</span>
          </div>
          <div class="title">{{ item.title }}</div>
        </div>
      </div>
    </div>

    <bg-title>全市市场主体基本情况</bg-title>
    <div class="wrap wrap2">
      <div class="num-box">
        <div class="left-title">
          <div class="justify">全市法人</div>
          <div class="justify">总 数</div>
        </div>
        <div class="bg-num">
          <span v-for="(num, index) in splitNum(data.legCount)" :key="index">{{ num }}</span>
        </div>
        <div class="unit">人</div>
      </div>

      <div class="box">
        <div class="item" v-for="(item, index) in data.data3" :key="index">
          <div class="count">
            {{ item.count }}<span>{{ item.unit }}</span>
          </div>
          <div class="title">{{ item.title }}</div>
        </div>
      </div>
    </div>

    <div style="height: 350px">
      <bg-title>网站概况</bg-title>

      <div class="num-box2">
        <div class="name">网站注册数量</div>
        <div class="count-total">
          <div class="num-item" v-for="(num, index) in splitNum(data.webCount1)" :key="index">
            {{ num }}
          </div>
        </div>
      </div>

      <div class="num-box2">
        <div class="name">网站访问数量</div>
        <div class="count-total">
          <div class="num-item" v-for="(num, index) in splitNum(data.webCount2)" :key="index">
            {{ num }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bgTitle from '../../app/components/bg-title.vue'
export default {
  components: { bgTitle },
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    splitNum(num) {
      return num.toString().split('')
    },
  },
}
</script>

<style lang="stylus" scoped>
.left-box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  color: #fff;
  .justify {
    text-align: justify;
    text-align-last: justify;
  }
  .wrap {
    .num-box {
      display: flex;
      align-items: center;
      .left-title {
        width: 86px;
        padding-right: 8px;
      }
      .bg-num {
        display: flex;
        justify-content: flex-end;
        padding: 0 6px 0 0;
        > span {
          height: 36px;
          line-height: 36px;
          padding: 0 6px;
          width: 30px;
          text-align: center;
          margin: 0 3px;
          font-size: 22px;
          color: #ffe9b2;
          background: #071f43;
        }
      }
      .unit {
        width: 22px;
        color: #409eff;
      }
      margin-bottom: 16px;
    }

    .box {
      display: flex;
      height: 80px;
      margin-bottom: 4px;
      .item {
        background-color: rgba(7, 31, 67, 1);
        flex: 1;
        text-align: center;
        margin-right: 4px;
        &:last-child {
          margin-right: 0;
        }
      }
      .count {
        font-size: 18px;
        color: #fff;
        line-height: 40px;
        height: 40px;
        > span {
          font-size: 12px;
          padding: 0 4px;
        }
      }
      .title {
        color: #4096ff;
        line-height: 40px;
        height: 40px;
      }
    }
  }

  .num-box2 {
    margin-bottom: 40px;
    .name {
      width: 75%;
      margin: 0 auto;
      text-align: center;
      font-weight bold;
      font-size: 16px;
      color: #ffe9b2;
      line-height: 24px;
      padding: 6px 0 8px;
      border-bottom: 1px dashed rgba(255, 255, 255, .7);
    }
    .count-total {
      display flex;
      align-items: center;
      justify-content: center;
      background: url('~@/assets/images/application/title-bg1.png') no-repeat 0 bottom;
      background-size: 100%;
      height: 58px;
      margin: 6px 0;
      .num-item {
        background: url('~@/assets/images/application/num-bg.png') no-repeat 0 0;
        background-size: 30px 37px;
        height: 37px;
        line-height: 37px;
        text-align: center;
        font-size: 18px;
        width: 30px;
        margin: 0 8px;
      }
    }
  }
}
</style>
