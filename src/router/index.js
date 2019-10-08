import Vue from 'vue';

import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Home from '../pages/Home.vue'
import Classify from '../pages/Classify.vue'
import Channel from '../pages/Channel.vue'
import Cart from '../pages/Cart.vue'
import Mine from '../pages/Mine.vue'
import Reg from '../pages/Reg.vue';
import Login from '../pages/Login.vue';
import NotFound from '../pages/NotFound.vue';



let router = new VueRouter({
    routes:[
        {
            name:'home',
            path:'/home',
            component: Home,
            
        },
        {
            path: '/',  //当浏览器地址为/home时，显示Home组件的内容
            redirect: '/home'
        },
        {
            path:'/classify',
            component: Classify,
        },
        {
            path:'/channel',
            component: Channel,
        },
        {
            path:'/cart',
            component: Cart,
        },
        {
            path:'/mine',
            component: Mine,
        },
        {
            path:'/reg',
            component: Reg,
        },
        {
            path:'/login',
            component: Login,
        },
        {
            path: '/404',
            component: NotFound
        },
        {
            path: '*',
            redirect: '/404'
        }
        
    ]
})

export default router;