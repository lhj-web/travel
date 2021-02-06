<template>
  <ul class="list">
    <li
      class="item"
      v-for="(alpha, index) in alphabet"
      :key="index"
      @click="toListAlpha"
    >{{alpha}}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphapet',
  data() {
    return {
      alphabet: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    };
  },
  methods: {
    toListAlpha(e) {
      this.$emit('getAlpha', e.target.innerText);
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '~assets/css/variables.styl'
.list
  display flex
  flex-direction column
  justify-content center
  position absolute
  top 1.58rem
  right 0
  bottom 0
  width 0.4rem
  .item
    text-align center
    line-height 0.31rem
    color $bgColor
</style>
