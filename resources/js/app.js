require('./bootstrap');

import App from './components/App.vue';

import VueAxios from 'vue-axios';
import axios from 'axios';


import { createRouter, createWebHistory } from 'vue-router';


import { routes } from './routes';
import { createApp } from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core'

import { faPhone, faCircleCheck } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
library.add(faPhone, faCircleCheck)
// createApp.use(createRouter);
// createApp.use(VueAxios, axios);
import Popup from "./components/popUps/Popup.vue"
const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon)
app.component("Popup", Popup);
app.use(router)
app.use(VueAxios, axios);
app.mount('#app')