


import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import App from  './App.vue'





import { FwbListGroup, FwbListGroupItem, FwbDropdown   , FwbButton  } from 'flowbite-vue';
import { FwbSidebar, FwbSidebarItem, FwbSidebarDropdownItem } from 'flowbite-vue'

import { BeakerIcon  } from '@heroicons/vue/24/solid'
import AlertIcon from 'vue-ionicons/dist/ios-alert.vue'

// important components
import dashboard from './components/dashboard.vue';
import Chart from './components/Chart.vue';


import {
    FwbNavbar,
    FwbNavbarCollapse,
    FwbNavbarLink,
    FwbNavbarLogo,
  } from 'flowbite-vue'

import Menubar from 'primevue/menubar';


import Button from "primevue/button"
import Timeline from 'primevue/timeline';


const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

// Register components globally
app.component('fwb-list-group', FwbListGroup);
app.component('fwb-list-group-item', FwbListGroupItem);


app.component('fwb-dropdown', FwbDropdown);
app.component('fwb-button', FwbButton);
app.component('fwb-sidebar', FwbSidebar);
app.component('fwb-sidebar-item', FwbSidebarItem);
app.component('fwb-sidebar-dropdown-item', FwbSidebarDropdownItem);

app.component('fwb-navbar', FwbNavbar);
app.component('fwb-navbar-collapse', FwbNavbarCollapse);
app.component('fwb-navbar-link', FwbNavbarLink);
app.component('fwb-navbar-logo', FwbNavbarLogo);

app.component('BeakerIcon', BeakerIcon);
app.component('AlertIcon', AlertIcon);
app.component('Menubar', Menubar);
app.component('BB', Button);
app.component('Timeline', Timeline );





app.component("dashboard", dashboard);
app.component("Chart", Chart);

app.mount('#app');



//For Demo only
// var links = document.getElementsByClassName('link')
// for(var i = 0; i <= links.length; i++)
//    addClass(i)


// function addClass(id){
//    setTimeout(function(){
//       if(id > 0) links[id-1].classList.remove('hover')
//       links[id].classList.add('hover')
//    }, id*750) 
// }
