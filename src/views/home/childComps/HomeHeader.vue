<template>
  <div class="home-header">
    <div class="left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="center">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="right">
      城市
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  data() {
    return {};
  },
};
</script>

<style lang="stylus" scoped>
@import '~assets/css/variables.styl'
.home-header
  display flex
  background-color $bgColor
  height 43px
  line-height 43px
  color #fff
  .back-icon
    font-size 22px
  .left
    width 32px
    text-align center
  .center
    flex 1
    background-color #fff
    border-radius 5px
    height 32px
    line-height 32px
    margin-top 6px
    margin-left 10px
    padding-left 10px
    color #ccc
  .right
    width 64px
    text-align center
    .arrow-icon
      margin-left -2px
      font-size 12px
</style>
