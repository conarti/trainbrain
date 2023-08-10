import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass';
import { createPinia } from 'pinia';
import { Quasar } from 'quasar';
import { createApp } from 'vue';
import App from './app.vue';
import router from './router';

const app = createApp(App);

app.use(Quasar, {
  config: {
    dark: true,
  },
});
app.use(createPinia());
app.use(router);

app.mount('#app');
