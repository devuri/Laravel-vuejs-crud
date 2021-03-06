import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import App from './App.vue';
import CreateItem from './components/CreateItem.vue';
import DisplayItems from './components/DisplayItems.vue';
import EditItem from './components/EditItem.vue';
const base_url = 'http://localhost/';
const routes = [
    {
        name: 'DisplayItems',
        path: '/',
        component: DisplayItems
    },
    {
        name: 'CreateItem',
        path: '/items/create',
        component: CreateItem
    },
    {
        name: 'EditItem',
        path: '/edit/:id',
        component: EditItem
    }

];

const router = new VueRouter({ mode: 'history', routes: routes });
new Vue(Vue.util.extend({ router }, App)).$mount('#app');