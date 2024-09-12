

import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Dashboard from '../components/dashboard.vue';
import TradeChart from '../components/Trading_view_chart.vue';

const routes = [
  
  { path: '/', component: Home },
  { path: '/chart', component: TradeChart },


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
