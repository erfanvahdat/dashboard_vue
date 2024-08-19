

import { createApp } from 'vue';
import App from  './App.vue'
import { FwbListGroup, FwbListGroupItem, FwbDropdown   } from 'flowbite-vue';
import { FwbButton } from 'flowbite-vue';


const app = createApp(App);

// Register components globally
app.component('fwb-list-group', FwbListGroup);
app.component('fwb-list-group-item', FwbListGroupItem);
app.component('fwb-dropdown', FwbDropdown);
app.component('fwb-button', FwbButton);

app.mount('#app');