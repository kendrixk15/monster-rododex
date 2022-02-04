import VueRouter from "vue-router"
import login from './components/login.vue'
import register from './pages/register.vue'
import main from './pages/main.vue'
import shopdetail from './pages/shopdetail.vue'
import shopdetailById from './pages/shopdetailById.vue'
import product from './pages/product.vue'
import myproduct from './pages/myproduct.vue'
import addproduct from './pages/addproduct.vue'
import editshop from './pages/editshop.vue'
import editproduct from './pages/editproduct.vue'



const routes = [
    {path: '/login', component: login },
    {path: '/register', component: register },
    {path: '/main', component: main },
    {path: '/shopdetail', component: shopdetail },
    {path: '/shopdetail/:shopId', component: shopdetailById },
    {path: '/products/:productId', component: product },
    {path: '/myproducts/:productId', component: myproduct },
    {path: '/newproduct', component: addproduct },
    {path: '/editshop', component: editshop },
    {path: '/editproduct/:productId', component: editproduct },

]

const router= new VueRouter({
    routes,
    mode: 'history'
})

export default router