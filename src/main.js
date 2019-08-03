import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {store} from './store/store'
import axios from 'axios'
import vSelect from 'vue-select'
import qs from 'qs'
import assert from 'assert'


Vue.component('v-select', vSelect)
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  qs,
  assert,
  render: h => h(App)
}).$mount('#app')
