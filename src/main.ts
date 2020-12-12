import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'primevue/resources/themes/mdc-dark-deeppurple/theme.css';
import 'primeflex/primeflex.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

import Button from 'primevue/button';
import Dropdown from 'primevue/dropdown';
import ScrollPanel from 'primevue/scrollpanel';
import Menu from 'primevue/menu';
import Card from 'primevue/card';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Tooltip from 'primevue/tooltip';
import InputText from 'primevue/inputtext';
import AutoComplete from 'primevue/autocomplete';
import RadioButton from 'primevue/radiobutton';
import Divider from 'primevue/divider';

import './assets/styles/global.styl';

createApp(App)
  .component('Dropdown', Dropdown)
  .component('Button', Button)
  .component('ScrollPanel', ScrollPanel)
  .component('Menu', Menu)
  .component('Card', Card)
  .component('DataTable', DataTable)
  .component('Column', Column)
  .component('InputText', InputText)
  .component('AutoComplete', AutoComplete)
  .component('RadioButton', RadioButton)
  .component('Divider', Divider)
  .directive('tooltip', Tooltip)
  .use(store)
  .use(router)
  .mount('#app');
