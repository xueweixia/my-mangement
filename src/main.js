// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router/index'
import './assets/iconfont.css'
import './assets/styles/main.scss'
Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(Element)
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
