<template>
  <div id="city">
    <city-header />
    <city-search />
    <city-list :letter="letter"/>
    <city-alphapet @getAlpha="getAlpha"/>
  </div>
</template>

<script>
// import { request } from 'network/request';

import CityAlphapet from './childComps/CityAlphapet.vue';
import CityHeader from './childComps/CityHeader.vue';
import CityList from './childComps/CityList.vue';
import CitySearch from './childComps/CitySearch.vue';

export default {
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphapet,
  },
  name: 'City',
  data() {
    return {
      letter: '',
    };
  },
  created() {
    // this.getCityList();
  },
  methods: {
    // getCityList() {
    //   request().then((res) => {
    //     console.log(res);
    //   });
    // },
    getAlpha(letter) {
      this.letter = letter;
    },
  },
};
</script>

<style lang="stylus" scoped></style>
