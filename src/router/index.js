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
    path: '/edit',
    component: () => import('../views/wenben')
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
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
