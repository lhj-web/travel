<template>
  <div class="search">
    <input type="text" placeholder="输入城市名或拼音" class="search-input" />
  </div>
</template>

<script>
export default {
  name: 'CitySearch',
  data() {
    return {};
  },
};
</script>

<style lang="stylus" scoped>
@import '~assets/css/variables.styl'
.search
  height .72rem
  background-color $bgColor
  padding 0 .1rem
  .search-input
    box-sizing border-box
    width 100%
    padding 0 .1rem
    height .62rem
    line-height .62rem
    text-align center
    border-radius .06rem
    color #666
</style>
