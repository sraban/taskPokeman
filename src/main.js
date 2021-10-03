import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';

import jQuery from 'jquery';
import bootstrap from 'bootstrap';

import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/css/bootstrap.css';
global.jQuery = jQuery;
global.$ = jQuery;

const app = createApp(App);
app.config.globalProperties.$http=axios;
app.mount('#app');
app.use(bootstrap);