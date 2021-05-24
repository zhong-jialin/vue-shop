import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'
import './assets/css/global.css'

//axios请求拦截

axios.interceptors.request.use(config => {
  //为请求头对象 添加Token验证的Authorization字段
  console.log(config);
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
import axios from 'axios'
//配置请求的根路径（api）
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
Vue.prototype.$http = axios


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
