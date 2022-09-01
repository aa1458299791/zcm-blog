import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import waterfall from 'vue-waterfall2' // 瀑布流
import axios from 'axios'

axios.defaults.baseURL = 'http://1.15.171.11:3000/' // 给axios一个默认链接
Vue.prototype.$http = axios
// Vue.use(axios)

Vue.use(waterfall)

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
