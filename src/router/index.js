import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/frontend/HomePageView'

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/frontend/LoginView.vue')
  },
  {
    path:'/register',
    name:'register',
    component: () => import('../views/frontend/RegisterView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from) => {
    console.log(to,from)
})



export default router
