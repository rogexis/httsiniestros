require('./bootstrap');

import App from './components/App.vue';

import VueAxios from 'vue-axios';
import axios from 'axios';


import { createRouter, createWebHistory } from 'vue-router';


import { routes } from './routes';
import { createApp } from 'vue';


// createApp.use(createRouter);
// createApp.use(VueAxios, axios);

const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(App);
app.use(router)
app.use(VueAxios, axios);
app.mount('#app')