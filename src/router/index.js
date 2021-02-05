import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Home = () => import('views/home/Home.vue');
const City = () => import('views/city/City.vue');

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/city',
    name: 'City',
    component: City,
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
