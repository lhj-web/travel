<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in banners" :key="item.id">
        <img :src="item.image" class="swiper-img" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwipe',
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 3000,
      },
    };
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="stylus" scoped>
.wrapper
  overflow hidden
  height 0
  padding-bottom: 31.25%
  .swiper-img
    width 100%
</style>
