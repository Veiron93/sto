import Vue from 'vue'
//import Vuetify from 'vuetify'
import App from './App.vue'
import router from './router'
import {store} from './store/store'
import axios from 'axios'
import vSelect from 'vue-select'
//Vue.use(Vuetify)
Vue.component('v-select', vSelect)
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
