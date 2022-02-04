import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import com1 from './components/com1.vue'
import com2 from './components/com2.vue'
import doc from './components/doc.vue'
import UpdatePage from './components/updatePage.vue'
import Blog from './components/blog.vue'
import Api from './components/api.vue'
import Extensions from './components/extensions.vue'
import faq from './components/FAQ.vue'
import Learn from './components/learn.vue'
import mac from './components/apple/mac.vue'
import iphone from './components/apple/iphone.vue'
import ipad from './components/apple/ipad.vue'
import airpods from './components/apple/airpods.vue'
import watch from './components/apple/watch.vue'
import macair from './components/apple/mac/macair.vue'
import imac from './components/apple/mac/imac.vue'
import macpro from './components/apple/mac/macpro.vue'
import newsdetail from './components/news/detail.vue'
import youtube from './components/youtube.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {path: '/com1', component: com1},
  {path: '/com2', component: com2},
  {path: '/doc', component: doc},
  {path: '/update', component: UpdatePage},
  {path: '/blog', component: Blog},
  {path: '/api', component: Api},
  {path: '/extension', component: Extensions},
  {path: '/faq', component: faq},
  {path: '/learn', component: Learn},
  {path: '/macbook', component: mac},
  {path: '/iphone', component: iphone},
  {path: '/ipad', component: ipad},
  {path: '/airpods', component: airpods},
  {path: '/watch', component: watch},
  {path: '/macair', component: macair},
  {path: '/macpro', component: macpro},
  {path: '/imac', component: imac},

  //news
  { path: '/news/datail/:newsId', component: newsdetail },
  { path:'/youtube/:videoId', component: youtube}
]


const router = new VueRouter({
  routes,
  mode: 'history',
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
