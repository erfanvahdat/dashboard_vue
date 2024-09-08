// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import router from './router/router.js' ;  // Import the router

import { 
  FwbListGroup, FwbListGroupItem, FwbDropdown, FwbButton,
  FwbSidebar, FwbSidebarItem, FwbSidebarDropdownItem,
  FwbNavbar, FwbNavbarCollapse, FwbNavbarLink, FwbNavbarLogo 
} from 'flowbite-vue';

import { BeakerIcon } from '@heroicons/vue/24/solid';
import AlertIcon from 'vue-ionicons/dist/ios-alert.vue';

import Menubar from 'primevue/menubar';
import Button from 'primevue/button';
import Timeline from 'primevue/timeline';

import Dashboard from './components/dashboard.vue';
import Chart from './components/Chart.vue';




import sidebar from './components/Sidebar.vue';
import header from './components/header.vue';
import Status from './components/Status.vue';
import Trade_chart from './components/Trading_view_chart.vue';

// Chart import modules
import ApexCharts from 'apexcharts'
import { Bar,Line } from 'vue-chartjs'


const app = createApp(App);

app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});


// Register components globally
var  comp = {

  "apexchart":ApexCharts,
  'fwb-list-group': FwbListGroup,
  'fwb-list-group-item': FwbListGroupItem,
  'fwb-dropdown': FwbDropdown,
  'fwb-button': FwbButton,
  'fwb-sidebar': FwbSidebar,
  'fwb-sidebar-item': FwbSidebarItem,
  'fwb-sidebar-dropdown-item': FwbSidebarDropdownItem,
  'fwb-navbar': FwbNavbar,
  'fwb-navbar-collapse': FwbNavbarCollapse,
  'fwb-navbar-link': FwbNavbarLink,
  'fwb-navbar-logo': FwbNavbarLogo,
  'BeakerIcon': BeakerIcon,
  'AlertIcon': AlertIcon,
  'Menubar': Menubar,
  'BB': Button,
  'Timeline': Timeline,
  'dashboard': Dashboard,
  'Chart': Chart,
  "BAR":Bar,
  'Sidebar':sidebar,
  "Head":header,
  "Status":Status,
  "Trade_chart":Trade_chart,
};


// app.component(comp);

Object.entries(comp).forEach(([name, component]) => {
  app.component(name, component);
});



app.use(router);  // Use the router

app.mount('#app');
