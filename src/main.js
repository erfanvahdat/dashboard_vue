// src/main.js
import { createApp } from 'vue';
import App from './App.vue';


import router from './router/router';


// Import components
import {
  FwbListGroup, FwbListGroupItem, FwbDropdown, FwbButton,
  FwbSidebar, FwbSidebarItem, FwbSidebarDropdownItem,
  FwbNavbar, FwbNavbarCollapse, FwbNavbarLink, FwbNavbarLogo 
} from 'flowbite-vue';

import { BeakerIcon } from '@heroicons/vue/24/solid';
import AlertIcon from 'vue-ionicons/dist/ios-alert.vue';


// Import custom components
import Dashboard from './components/dashboard.vue';
import Chart from './components/Chart.vue';
import Sidebar from './components/Sidebar.vue';
import Header from './components/header.vue';
import Status from './components/Status.vue';
import Live_pos from './components/Live_Pos.vue';
import Trade_PL from './components/Trade_platform.vue';
import Main from './components/Main_content.vue';



// Chart import modules
import ApexCharts from 'apexcharts';
import { Bar, Line } from 'vue-chartjs';


// Register components globally
const globalComponents = {
  'apexchart': ApexCharts,
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
  'dashboard': Dashboard,
  'Chart': Chart,
  'BAR': Bar,
  'Line': Line,
  'Sidebar': Sidebar,
  'Head': Header,
  'Status': Status,
  
  "Live_pos":Live_pos,
  "Trade_pl":Trade_PL,
  "Main":Main,
  
  
  
};

// Create Vue app instance
const app = createApp(App);




// Register global components
Object.entries(globalComponents).forEach(([name, component]) => {
  app.component(name, component);
});


app.use(router).mount('#app');