<template>
  <div id="home">
    <home-header />
  </div>
</template>

<script>
import HomeHeader from './childComps/HomeHeader.vue';

export default {
  components: { HomeHeader },
  name: 'Home',
  data() {
    return {};
  },
};
</script>

<style lang="stylus" scoped></style>
