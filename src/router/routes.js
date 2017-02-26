/**
 * Created by baird on 2016/12/30.
 */
import Vue from 'vue'
import App from '../App'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//路由配置
const routes = [
    {path:'/',component:App}
];
const router = new VueRouter({
    routes
})
export  default router
