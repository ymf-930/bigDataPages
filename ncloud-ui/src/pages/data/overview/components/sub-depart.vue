<template>
  <div class="sub-depart">
    <bg-title>数据提报部门</bg-title>
    <div class="dept-list" style="margin-bottom: 10px;">
      <div class="header-wrapper" flex="main:justify">
        <span class="list-header" flex-box="1">部门名称</span>
        <span class="list-header" style="width: 140px;">数量</span>
        <!-- <span class="list-header" style="width: 80px;">入库率</span> -->
      </div>
      <div class="body-wrapper" flex="main:justify" v-for="(item, index) in data" :key="index">
        <span
          flex-box="1"
          style="max-width: 250px;overflow:hidden; white-space:nowrap; text-overflow:ellipsis;"
          :title="item.name"
        >
          {{ item.name }}
        </span>
        <span style="width: 140px;">{{ item.count }}</span>
        <!-- <span style="width: 80px;">{{ item.percent }} %</span> -->
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
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="stylus" scoped>
.dept-list
    color #fff
    .list-header
      font-weight: 700
    div
      height 30px
      line-height: 30px
      &:nth-child(odd)
        background-color: #001739
      &:nth-child(even)
        background-color: #061029
      span
        text-align center
</style>
