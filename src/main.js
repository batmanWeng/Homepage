import Vue from 'vue'
import 'muse-ui/dist/muse-ui.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import MuseUI from 'muse-ui'
import router from './router/routes'
Vue.use(MuseUI)
const app = new Vue({
  router,
}).$mount('#app')
window.HOST_NAME = "http://192.168.9.238";


