import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index';
import Home from '@/views/Home';


Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: ()=>import(/*webpackChunkName: "Home page"*/ '@/views/Home')
    },
    
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
