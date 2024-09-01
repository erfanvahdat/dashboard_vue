

import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';


import NotFound from '../components/NotFound.vue'; // 404 component
import dashboard from '../components/dashboard.vue'; 

const routes = [
    {
        path: '',
        name: 'Home',
        component: dashboard
      },
  
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: dashboard
  },
  {
    path: '/:catchAll(.*)', // Catch-all route for 404
    name: 'NotFound',
    component: NotFound
  }


];

const router = createRouter({
  history: createWebHistory(),
  routes
});



export default router;
