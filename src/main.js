import Vue from 'vue';
import 'normalize.css';
import 'assets/css/border.css';
import 'assets/icon/iconfont.css';
import 'swiper/dist/css/swiper.css';
import fastClick from 'fastclick';
import VueAwesomeSwiper from 'vue-awesome-swiper';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

fastClick.attach(document.body);

Vue.use(VueAwesomeSwiper);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
