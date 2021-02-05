<template>
  <div id="city">
    <city-header />
  </div>
</template>

<script>
import CityHeader from './childComps/CityHeader.vue';

export default {
  components: { CityHeader },
  name: 'City',
  data() {
    return {};
  },
};
</script>

<style lang="stylus" scoped></style>
