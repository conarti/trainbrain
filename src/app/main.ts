import '@quasar/extras/material-icons/material-icons.css';
import '@quasar/extras/material-symbols-rounded/material-symbols-rounded.css';
import 'quasar/src/css/index.sass';
import { createPinia } from 'pinia';
import {
  LocalStorage,
  Quasar,
} from 'quasar';
import { createApp } from 'vue';
import App from './app.vue';
import router from './router';

const app = createApp(App);

app.use(Quasar, {
  config: {
    dark: 'auto',
  },
  plugins: {
    LocalStorage,
  },
});
app.use(createPinia());
app.use(router);

app.mount('#app');
