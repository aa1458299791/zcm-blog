import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

// 核心：解决代码冗余
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    redirect: '/home',
    // 设置子路由实现页内跳转
    children: [
      // 首页
      {
        path: 'home',
        component: () => import('../views/HomePage')
      },
      // 博客
      {
        path: 'blog',
        component: () => import('../views/Blog')
      },
      //  博客详情
      {
        path: 'blog/details',
        component: () => import('../views/Blog/components/BlogDetails')
      },
      // ****************************************
      // 工作
      {
        path: 'work',
        component: () => import('../views/work')
      },
      //  工作详情
      {
        path: 'work/details',
        component: () => import('../views/work/components/BlogDetails')
      },
      // 生活
      {
        path: 'life',
        component: () => import('../views/life')
      },
      //  工作详情
      {
        path: 'life/details',
        component: () => import('../views/life/components/BlogDetails')
      },
      // 影集
      {
        path: 'photo',
        component: () => import('../views/photo')
      }
    ]
  },
  {
    path: '/edit', // 编辑
    component: () => import('../views/wenben')
  },
  {
    path: '/login', // 登录
    component: () => import('../views/LoginPage')
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'hash', // history
  base: process.env.BASE_URL,
  routes
})

// 配置路由守卫      第一个参数去往目标路由对象，第二个参数是来源的路由对象，第三个参数是接下来执行的操作
router.beforeEach((to, form, next) => {
  // 如果访问编辑页，则判断是否有token
  if (to.path === '/edit') {
    const token = localStorage.getItem('token')

    if (!token) {
      return next('/login')
    } else {
      return next()
    }
  }
  // 如果用户未登录，则跳转到/login
  // const userinfo = JSON.parse(sessionStorage.getItem('userinfo'))
  // if (!userinfo) {
  //   return next('/login')
  // }
  // 如果用户已登录，则放行
  next()
})

export default router
