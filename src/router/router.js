

import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Test from '../components/test.vue';
import Dashboard from '../components/dashboard.vue';

const routes = [
  
  { path: '/', component: Home },
  { path: '/test', component: Test },
  // { path: '/dashboard', component: Dashboard },
  
  // { 
  //   path: '/dashboard', 
  //   component: Dashboard,

  //   children: [
  //     { path: '', component: () => import('../components/Home.vue') },  // Default child route
      
  //   ]
  // }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
