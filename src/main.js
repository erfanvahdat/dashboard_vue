// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';

// PrimeVue and PrimeIcons
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import 'primeicons/primeicons.css';


import Menu from 'primevue/menu';


// Import custom components

import Chart from './components/Chart.vue';
import Sidebar from './components/Sidebar.vue';
import Header from './components/header.vue';
import Status from './components/Status.vue';
import Live_pos from './components/Live_Pos.vue';
import Trade_PL from './components/Trade_platform.vue';
import Main from './components/Main_content.vue';
import Rank from './components/Rank.vue';
import reg from './components/registration.vue';
import Trade_history from './components/Trade_history.vue';
import Analyzing from './components/Analyzing.vue';
import Setting from './components/setting.vue';

// Chart import modules
import ApexCharts from 'apexcharts';
import { Bar, Line } from 'vue-chartjs';


// Register components globally
const globalComponents = {
  'apexchart': ApexCharts,
  
  
  
  
  
  
  'Chart': Chart,
  'BAR': Bar,
  'Line': Line,
  'Sidebar': Sidebar,
  'Head': Header,
  'Status': Status,
  'Live_pos': Live_pos,
  'Trade_pl': Trade_PL,
  'Main': Main,
  'Rank': Rank,
  'Registration': reg,
  'Trade_history': Trade_history,
  'Analyzing': Analyzing,
  'Setting': Setting,

  "Menu":Menu,
  
};

// Create Vue app instance
const app = createApp(App);


// app.use(PrimeVue);
app.use(PrimeVue, {
  theme: {
      preset: Aura
  }
});

// Register global components
Object.entries(globalComponents).forEach(([name, component]) => {
  app.component(name, component);
});

app.use(router).mount('#app');
