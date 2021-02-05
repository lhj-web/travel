<template>
  <div id="home">
    <home-header />
    <home-swipe :banners="banners" class="swipe"/>
    <home-icons />
  </div>
</template>

<script>

import HomeHeader from './childComps/HomeHeader.vue';
import HomeIcons from './childComps/HomeIcons.vue';
import HomeSwipe from './childComps/HomeSwipe.vue';

export default {
  components: { HomeHeader, HomeSwipe, HomeIcons },
  name: 'Home',
  data() {
    return {
      banners: [
        {
          id: 1,
          image: '//imgs.qunarzz.com/vs_ceph_vcimg/6ff121fd416169b8d56c60384e3baf79.jpeg',
        },
        {
          id: 2,
          image: '//imgs.qunarzz.com/vs_ceph_vcimg/f7813c9431796cc32ae7b7a78447342e.jpeg',
        },
        {
          id: 3,
          image: '//imgs.qunarzz.com/vs_ceph_vcimg/569cae4ae98e9793f7341e85eed73c54.jpeg',
        },
        {
          id: 4,
          image: '//imgs.qunarzz.com/vs_ceph_vcimg/f03f5ac90ae59d0d9c6332a2bfd9782e.jpeg',
        },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
#home
  height 100vh
</style>
