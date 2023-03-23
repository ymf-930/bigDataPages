<template>
  <div class="djfb">
    <bg-title>信用等级分布</bg-title>
    <div class="center-box">
      <div class="grade-distribution">
        <div class="left-wrapper" flex="dir:top">
          <div class="center-table-title">自然人等级分布</div>
          <b-table :show-header="false" :columns="column" :data="data" border>
            <template #num="{row}">
              <span style="color:#409eff">{{ row.num }}</span>
            </template>
          </b-table>
        </div>
        <div class="center-wrapper">
          <Animation3D class="bg-3d" />
          <!-- <img src="../../../../assets/images/overview/grade-distribution.png" alt="" />
          <div
            v-for="i in 8"
            :key="i"
            class="line"
            :style="{ top: `${60 + (i - 1) * 38}px` }"
          ></div> -->
        </div>
        <div class="right-wrapper" flex="dir:top">
          <div class="center-table-title">法人等级分布</div>
          <b-table :show-header="false" :columns="column" :data="data2" border>
            <template #num="{row}">
              <span style="color:#409eff">{{ row.num }}</span>
            </template>
          </b-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bgTitle from '../../app/components/bg-title.vue'
import Animation3D from '../../../../components/Animation3D/Animation3D'
export default {
  components: { bgTitle, Animation3D },
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
  data() {
    return {
      column: [
        {
          title: '等级',
          key: 'rank',
          align: 'center',
        },
        {
          title: '数量',
          slot: 'num',
          align: 'center',
        },
        {
          title: '比例',
          key: 'rate',
          align: 'center',
        },
      ],
    }
  },
}
</script>

<style lang="stylus" scoped>
.center-box {
  position: relative;

  .grade-distribution {
    display: flex;
    justify-content: center;
    padding-top: 24px;

    .left-wrapper, .right-wrapper {
      width: 250px;
      position: relative;

      .center-table-title {
        font-size: 16px;
        height: 42px;
        line-height: 42px;
        font-weight: bold;
        color: #fff;
        text-align: center;
        background: url('~@/assets/images/overview/center-bottom.png') no-repeat -8px bottom;
        background-size: 270px 30px;
      }

      /deep/ .bin-table td, .bin-table th {
        height: 36px;
        line-height: 36px;
      }
    }

    .center-wrapper {
      position: relative;
      /* width: 300px; */
      width: 400px;
      margin: 0 33px;
      img {
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translate(-50%, 0);
        width: 265px;
        height: 284px;
        z-index : 2;
      }
      .line {
        position: absolute;
        top: 60px;
        left: 0;
        right: 0;
        height: 2px;
        background-color: #072649;
      }
    }
  }
}
</style>
