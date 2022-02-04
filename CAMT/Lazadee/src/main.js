import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './route'
import store from './store'
import VModal from 'vue-js-modal'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VModal)

new Vue({
  data:{
    state: store.state
  },
  render: h => h(App),
  router
}).$mount('#app')
