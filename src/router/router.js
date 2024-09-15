

import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import registration from '../components/registration.vue';

const routes = [
  
  { path: '/', component: Home },
  { path: '/settings', component: registration },
  
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
