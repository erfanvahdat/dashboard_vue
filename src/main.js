// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';

// PrimeVue and PrimeIcons
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import 'primeicons/primeicons.css'
import ConfirmationService from 'primevue/confirmationservice';



import Menu from 'primevue/menu';
import Select from 'primevue/select';
import SelectButton from 'primevue/selectbutton';
import InputText from 'primevue/inputtext';
import ToggleButton from 'primevue/togglebutton';
import InputNumber from 'primevue/inputnumber';

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';           

import Tag from 'primevue/tag';
import Button from 'primevue/button';

import tarea from 'primevue/textarea';
import FileUpload from 'primevue/fileupload';
// import useToast from "primevue/usetoast";
import Toast from 'primevue/toast';

import FloatLabel from 'primevue/floatlabel';
import RadioButton from 'primevue/radiobutton';
import ConfirmDialog from 'primevue/confirmdialog';

import MultiSelect from 'primevue/multiselect';
import ripple  from 'primevue/ripple';


// Import Main components
import Chart from './components/Chart.vue';
import Sidebar from './components/Sidebar.vue';
import Header from './components/header.vue';
import Status from './components/Status.vue';
import Home from './components/Home.vue';
import Trade_PL from './components/Trade_platform.vue';
import Main from './components/Main_content.vue';
import Rank from './components/Rank.vue';
import reg from './components/registration.vue';
import Trade_history from './components/Trade_history.vue';
import Analyzing from './components/Analyzing.vue';
import Setting from './components/setting.vue';
import Live_pos from './components/Live_position.vue';


// Import sub_component
import order_button_sub from './sub_component/order_button.vue';
import input_sub from './sub_component/input.vue';


// Chart import modules
import ApexCharts from 'apexcharts';
import { Bar, Line } from 'vue-chartjs';


// Register components globally
const globalComponents = {
  'apexchart': ApexCharts,
  
  

  // main components
  'Chart': Chart,
  'BAR': Bar,
  'Line': Line,
  'Sidebar': Sidebar,
  'Head': Header,
  'Status': Status,
  'Home': Home,
  'Trade_pl': Trade_PL,
  'Main': Main,
  'Rank': Rank,
  'Registration': reg,
  'Trade_history': Trade_history,
  'Analyzing': Analyzing,
  'Setting': Setting,
  "Live_pos":Live_pos,
  "order_button_sub":order_button_sub,
  "input_sub":input_sub,
  


  // Primevue components
  "Menu":Menu,
  "Select":Select,
  "SelectButton":SelectButton,
  "InputText":InputText,
  "ToggleButton":ToggleButton,
  "DataTable":DataTable,
  "Column":Column,
  "ColumnGroup":ColumnGroup,
  "Row":Row,
  "InputNumber":InputNumber,  
  "Tag":Tag,
  "Button":Button,
  "tarea":tarea,
  "FileUpload":FileUpload,
  // "Toast":Toast,
  "MultiSelect":MultiSelect,
  "FloatLabel":FloatLabel,
  "RadioButton":RadioButton,
  "ripple":ripple,
  "ConfirmDialog":ConfirmDialog,


};

// Create Vue app instance
const app = createApp(App);




app.use(PrimeVue, {
  theme: {
      preset: Aura
  }
});
app.use(ConfirmationService);



// Register global components
Object.entries(globalComponents).forEach(([name, component]) => {
  app.component(name, component);
});

app.use(router).mount('#app');

