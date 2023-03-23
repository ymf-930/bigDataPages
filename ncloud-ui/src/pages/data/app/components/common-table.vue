<template>
  <div class="common-table">
    <b-table :columns="columns" :data="data" stripe></b-table>
  </div>
</template>

<script>
export default {
  name: 'common-table',
  props: {
    columns: {
      type: Array,
      default: () => ([]),
    },
    data: {
      type: Array,
      default: () => ([]),
    },
  },
}
</script>

<style scoped lang="stylus">
.common-table {

}
</style>
