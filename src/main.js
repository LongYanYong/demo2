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

Vue.use(ElementUI)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
