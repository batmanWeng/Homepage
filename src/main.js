import Vue from 'vue'
import 'muse-ui/dist/muse-ui.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import './css/custombase.css'
import MuseUI from 'muse-ui'
import VueResource from 'vue-resource'
import './api/api'
import router from './router/routes'
import store from './store/store'//使用vuex。
import './tools/tools'
Vue.use(VueResource)
Vue.use(MuseUI)
const app = new Vue({
  router,
  store
}).$mount('#app')
window.HOST_NAME = "http://192.168.9.238";


