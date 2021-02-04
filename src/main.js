import Vue from 'vue';
import 'normalize.css';
import 'assets/css/border.css';
import 'assets/icon/iconfont.css';
import fastClick from 'fastclick';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

fastClick.attach(document.body);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
