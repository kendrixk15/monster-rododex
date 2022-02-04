import VueRouter from 'vue-router'
import login from './components/pages/login.vue'
import main from './components/pages/main.vue'
import register from './components/pages/register.vue'
import usertweet from './components/usertweet.vue'
import editprofile from './components/pages/editprofile.vue'
import userbyid from './components/pages/userbyid.vue'
import editAvatar from './components/pages/editAvatar.vue'


const routes =[
    {path: '/login', component: login },
    {path: '/main', component: main},
    {path: '/register', component: register},
    {path: '/usertweet', component: usertweet},
    {path: '/editprofile', component: editprofile},
    {path: '/userbyid', component: userbyid},
    {path: '/editavatar', component: editAvatar},
]

const router  = new VueRouter({
    routes,
    mode: 'history'
})

export default router
