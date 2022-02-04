import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './route'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  data:{
    state: store.state
  },
  render: h => h(App),
  router
}).$mount('#app')
