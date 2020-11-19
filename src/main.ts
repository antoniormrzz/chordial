import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'primevue/resources/themes/mdc-dark-deeppurple/theme.css';
import 'primeflex/primeflex.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

const app = createApp(App)
  .use(store)
  .use(router)
  .mount('#app');

