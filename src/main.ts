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

import './assets/styles/global.styl';

createApp(App)
  .component('Dropdown', Dropdown)
  .component('Button', Button)
  .component('ScrollPanel', ScrollPanel)
  .component('Menu', Menu)
  .component('Card', Card)
  .component('DataTable', DataTable)
  .component('Column', Column)
  .use(store)
  .use(router)
  .mount('#app');
