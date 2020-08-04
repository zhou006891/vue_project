import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
    path: "/",
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('./../components/Login.vue')
  },
  {
    path: '/home',
    component: () => import('./../components/Home.vue')
  },
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.path==="/login") return next()
  //获取token
 const tokenStr = window.sessionStorage.getItem('token')
 if(!tokenStr) return next("/login")
 next()  
 })

export default router