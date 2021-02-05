<template>
  <div class="icons">
    <div class="icon" v-for="(icon, index) in icons" :key="index">
      <img :src="icon.img" />
      <p>{{icon.title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data() {
    return {
      icons: [
        { title: '海外酒店', img: 'https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png' },
        { title: '低价机票', img: 'https://picbed.qunarzz.com/a36d2288f19e54562338f4d8ef986288.png' },
        { title: '汽车票船票', img: 'https://picbed.qunarzz.com/377db8cb2143aebf01869c9baad3d325.png' },
        { title: '自由行', img: 'https://picbed.qunarzz.com/ae617a31e0bd5803d76918b817f6d942.png' },
        { title: '民宿客栈', img: 'https://picbed.qunarzz.com/01d2f57f920666364197a850dab859a8.png' },
        { title: '专车自驾', img: 'https://picbed.qunarzz.com/01d2f57f920666364197a850dab859a8.png' },
        { title: '赚钱-信用卡', img: 'https://picbed.qunarzz.com/5b6737be49ca243072ca614f07803b83.png' },
        { title: '旅游团购', img: 'https://picbed.qunarzz.com/1e107321f5396ea4994cd832232ecf8a.png' },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
@import '~assets/css/mixins.styl'
.icons
  display flex
  width 100%
  justify-content space-around
  flex-wrap wrap
  .icon
    width 25%
    img
      width 25%
      vertical-align middle
      margin-left 33%
    p
      text-align center
      font-size 14px
      margin-top 6px
      ellipsis()
</style>
