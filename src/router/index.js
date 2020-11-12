import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/components/login.vue'
import Home from '@/components/Home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect: '/login'
  },
  {
    path:'/login',
    component:login
  },
  {
    path:'/Home',
    component:Home
  }
]

const router = new VueRouter({
  routes,
  meta: 'history'
})

//挂载路由导航守卫
router.beforeEach((to, from, next) => {
  //to and from are Route Object,next() must be called to resolve the hook}
  if (to.path === '/login') return next()
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router
