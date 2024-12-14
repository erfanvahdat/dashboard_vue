// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router.js';


// PrimeVue and PrimeIcons
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import 'primeicons/primeicons.css';
import ConfirmationService from 'primevue/confirmationservice';


// Import PrimeVue components
import Menu from 'primevue/menu';
import Select from 'primevue/select';
import SelectButton from 'primevue/selectbutton';
import InputText from 'primevue/inputtext';
import ToggleButton from 'primevue/togglebutton';
import InputNumber from 'primevue/inputnumber';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import Row from 'primevue/row';
import Tag from 'primevue/tag';
import Button from 'primevue/button';
import tarea from 'primevue/textarea';
import FileUpload from 'primevue/fileupload';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';

import FloatLabel from 'primevue/floatlabel';
import RadioButton from 'primevue/radiobutton';
import ConfirmDialog from 'primevue/confirmdialog';
import MultiSelect from 'primevue/multiselect';
import Divider from 'primevue/divider';
import Badge from 'primevue/badge';
import Slider from 'primevue/slider';
import TreeSelect from 'primevue/treeselect';
import ConfirmPopup from 'primevue/confirmpopup';
import Skeleton from 'primevue/skeleton';
import Checkbox from 'primevue/checkbox';
import DatePicker from 'primevue/datepicker';
import Textarea from 'primevue/textarea';



// Import Main components
import Sidebar from './components/Sidebar.vue';
import Header from './components/header.vue';
import Status from './components/Status.vue';
import Home from './components/Home.vue';
import Main from './components/Main.vue';
import Rank from './components/Rank.vue';
import Charts from './components/Charts.vue';
import Trade_history from './components/Trade_history.vue';
import Analyzing from './components/Analyzing.vue';
import Setting from './components/setting.vue';
import Live_pos from './components/Trade.vue';
import login from './components/login.vue';
import trade_journal from './components/Trade_journal.vue';
import reg from './components/registration.vue';



// Import sub_component
import order_button_sub from './sub_component/order_button.vue';
import input_sub from './sub_component/input.vue';
import Alert from './sub_component/alert.vue';
import login_icon from './sub_component/login_icon.vue';
import loading_spin from './sub_component/loading_spin.vue';
import clock from './sub_component/clock.vue';
import second_clock from './sub_component/second_clock.vue';
import calculator from './sub_component/calculator.vue';

// Chart import modules
import VueApexCharts from "vue3-apexcharts";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

import { Bar, Line } from 'vue-chartjs';

// Register components globally
const globalComponents = {
  // 'apexchart': VueApexCharts,
  'Line': Line,
  'Head': Header,
  'Sidebar': Sidebar,
  'Status': Status,
  'Home': Home,
  'Main': Main,
  'Rank': Rank,
  "Charts": Charts,
  'Registration': reg,
  'Trade_history': Trade_history,
  'Analyzing': Analyzing,
  'Setting': Setting,
  'Live_pos': Live_pos,
  'order_button_sub': order_button_sub,
  'input_sub': input_sub,
  'Menu': Menu,
  'Select': Select,
  'SelectButton': SelectButton,
  'InputText': InputText,
  'ToggleButton': ToggleButton,
  'DataTable': DataTable,
  'Column': Column,
  'ColumnGroup': ColumnGroup,
  'Row': Row,
  'InputNumber': InputNumber,
  'Tag': Tag,
  'Button': Button,
  'tarea': tarea,
  'FileUpload': FileUpload,
  'MultiSelect': MultiSelect,
  'FloatLabel': FloatLabel,
  'RadioButton': RadioButton,
  // 'ripple': ripple,
  // 'ConfirmDialog': ConfirmDialoEg,
  'Alert': Alert,
  "login": login,
  "login_icon": login_icon,
  "Trade_journal": trade_journal,
  "Badge": Badge,
  "TreeSelect": TreeSelect,
  "loading_spin": loading_spin,
  "Slider": Slider,
  "ConfirmPopup": ConfirmPopup,
  "Toast": Toast,
  "Divider": Divider,
  "Skeleton": Skeleton,
  "Checkbox":Checkbox,
  "clock":clock,
  "second_clock":second_clock,
  "calculator": calculator,
  "DatePicker" : DatePicker,

  

};

// Create Vue app instance
const app = createApp(App);


// Use PrimeVue and other plugins
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
});

app.use(ConfirmationService);
app.use(VueApexCharts);
app.use(ToastService);



// Register global components
Object.entries(globalComponents).forEach(([name, component]) => {
  app.component(name, component);
});




// Mount the app
app.use(router).mount('#app');


