<template>
  <div class="red-black-box">
    <bg-title>红黑名单统计</bg-title>
    <div class="red-black-title">
      <div class="name">红名单</div>
      <div class="count-total">
        <div class="num-item" v-for="(num, index) in splitNum(data.redCount)" :key="index">
          {{ num }}
        </div>
      </div>
    </div>
    <div class="red-black-table">
      <div class="box box2">
        <div class="item" v-for="(item, index) in data.redData" :key="index">
          <div class="title">{{ item.title }}</div>
          <div class="count">
            {{ item.count }}<span>{{ item.unit }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="red-black-title">
      <div class="name">黑名单</div>
      <div class="count-total">
        <div class="num-item" v-for="(num, index) in splitNum(data.blackCount)" :key="index">
          {{ num }}
        </div>
      </div>
    </div>
    <div class="red-black-table">
      <div class="table-item" v-for="(item, index) in data.blackData" :key="index">
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
  name: 'red-black-box',
  components: { BgTitle },
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    splitNum(num) {
      return num.toString().split('')
    },
  },
}
</script>

<style scoped lang="stylus">
.red-black-box {
  margin-bottom: 20px;
  .red-black-title {
    .name {
      width: 75%;
      margin: 0 auto;
      text-align: center;
      font-weight bold;
      font-size: 16px;
      color: rgba(245, 138, 156, 1);
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
  .red-black-table {
    display: flex;
    flex-wrap: wrap;
    .table-item {
      width: 50%;
      .count {
        font-size: 18px;
        background-color: rgba(7, 31, 67, 1);
        color: rgba(255, 233, 178, 1);
        line-height: 30px;
        padding-left: 16px;
        height: 30px;
        > span {
          font-size: 12px;
          padding: 0 4px;
        }
      }
      .title {
        color: #fff;
        padding-left: 16px;
        line-height: 30px;
        height: 30px;
        font-size: 12px;
        background-color: rgba(5, 36, 81, 1);

      }
    }

    .box {
      position: relative;
      display: flex;
      width: 100%;
      height: 100px;
      margin: 6px 0;
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
}
</style>
