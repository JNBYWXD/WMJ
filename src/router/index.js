import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import {isLogined}from '../utils/tools';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cart',
    name: 'Cart',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Cart.vue'),
    meta:{
      needLogin:true,
    }
  },
  {
    path: "/user",
    name: "User",
    component: () => import("../views/User.vue"),
    meta:{
      needLogin:true,
    }
  },
  {
    path: '/list',
    name: 'List',
    component: () => import('../views/List.vue'),
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import('../views/Detail.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/reg',
    name: 'Reg',
    component: () => import('../views/Reg.vue')
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to,from,next)=>{
  if(to.meta.needLogin){
    if(isLogined()){
      next();
    }else{
      next({
        name:'Login',
      })
    }
  }else{
    next()
  }
})

export default router
