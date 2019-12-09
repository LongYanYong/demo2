import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './components'
import axios from 'axios'
import http from './utils/http'
import serviceAPI from './conf/services.js'
import pbulicFunc from './conf/publicFunc.js'
Vue.use(http)
Vue.prototype.$service = serviceAPI
Vue.prototype.$publicFunc = pbulicFunc
Vue.config.productionTip = false
// axios.defaults.timeout = 5000 // 请求超时
// axios.defaults.baseURL = 'http://yapi.demo.qunar.com/mock/51540/api/'  // api 即上面 vue.config.js 中配置的地址
// Vue.prototype.$axios = axios;

Vue.use(ElementUI)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
