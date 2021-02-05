<template>
  <div class="header">
    <div class="iconfont back-icon" @click="backHome">&#xe624;</div>
    城市选择
  </div>
</template>

<script>
export default {
  name: 'CityHeader',
  data() {
    return {};
  },
  methods: {
    backHome() {
      this.$router.back();
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~assets/css/variables.styl'
.header
  overflow hidden
  height $lineHeight
  line-height $lineHeight
  text-align center
  color #fff
  background-color $bgColor
  font-size 0.32rem
  .back-icon
    width .64rem
    text-align center
    font-size .4rem
</style>
