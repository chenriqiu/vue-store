import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/components/login.vue'
import Home from '@/components/Home.vue'
import Welcome from '@/components/Welcome.vue'
//路由懒加载
const users =() =>import('@/components/Users/Users.vue')
const Rights =() =>import('@/components/power/Rights.vue')
const Roles =() =>import('@/components/power/Roles.vue')
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
    component:Home,
    redirect: '/Welcome',
    children:[{
      path:'/Welcome',
      component:Welcome
    },
    {
      path:'/users',
      component:users
    },
    {
      path:'/rights',
      component:Rights
    },
    {
      path:'/roles',
      component:Roles
    }]
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
