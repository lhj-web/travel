<template>
  <div id="city">
    <city-header />
    <city-search />
  </div>
</template>

<script>
import CityHeader from './childComps/CityHeader.vue';
import CitySearch from './childComps/CitySearch.vue';

export default {
  components: { CityHeader, CitySearch },
  name: 'City',
  data() {
    return {};
  },
};
</script>

<style lang="stylus" scoped></style>
