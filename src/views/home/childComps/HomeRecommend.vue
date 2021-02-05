<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item" v-for="info in infos" :key="info.id">
        <img class="item-img" :src="info.img"  />
        <div class="item-info">
          <p class="item-title">{{info.title}}</p>
          <p class="item-desc">{{info.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data() {
    return {
      infos: [
        {
          id: 1, img: '//imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_256x160_9fee6ccb.jpg', title: '泰山', desc: '会当凌绝顶，一览众山小',
        },
        {
          id: 2, img: '//imgs.qunarzz.com/p/p49/1503/57/68564ba646c4cb.jpg_256x160_e896532e.jpg', title: '藏马山滑雪场', desc: '实现滑雪和大自然的亲密结合',
        },
        {
          id: 3, img: '//imgs.qunarzz.com/p/p53/1809/59/a95e0544d16dc102.jpg_256x160_74bab347.jpg', title: '台儿庄古城', desc: '被誉为“中华民族扬威不屈之地',
        },
        {
          id: 4, img: '//imgs.qunarzz.com/p/p67/1512/a2/0ebfcd965b9391f7.jpg_256x160_04d5813d.jpg', title: '临沂茶山滑雪场', desc: '滑雪，赏雪，玩雪的理想之地',
        },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
@import '~assets/css/mixins.styl'
.title
  line-height 40px
  background-color #ccc
  text-indent 10px
  margin-top 10px
ul
  .item
    display flex
    list-style none
    overflow hidden
    height 90px
    .item-img
      width 85px
      height 85px
      padding 5px
    .item-info
      flex 1
      min-width 0
      padding .1rem
      .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()
      .item-desc
        line-height .4rem
        color #ccc
        ellipsis()
      .item-button
        background-color #ff9300
        border-radius .06rem
        padding 0 .2rem
        margin-top .16rem
        color #fff
        line-height .44rem
</style>
