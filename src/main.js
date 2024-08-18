


import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'



import App from './App.vue'
import CompOne from './components/CompOne.vue'
import CompTwo from './components/CompTwo.vue'


// const router = createRouter({
//     history: createWebHistory(),
//     routes: [
//         { path: '/:comp1', component: CompOne },
//         { path: '/:comp2', component: CompTwo },
//     ]
// });

const app = createApp(App)

// app.use(router);
app.component('comp1', CompOne);
app.component('comp2', CompTwo);

app.mount('#app')