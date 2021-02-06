<template>
  <div class="header">
    城市选择
    <div class="iconfont back-icon" @click="backHome">&#xe624;</div>
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
  position relative
  overflow hidden
  height $lineHeight
  line-height $lineHeight
  text-align center
  color #fff
  background-color $bgColor
  font-size .32rem
  .back-icon
    position absolute
    top 0
    left 0
    width .64rem
    text-align center
    font-size .4rem
</style>
