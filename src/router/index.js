import {createRouter,createWebHistory } from 'vue-router'
import Home from '@/views/home/Home.vue'
import Category from '@/views/category/Category.vue'
import Profile from '@/views/profile/Profile.vue'
import Shopcart from '@/views/shopcart/Shopcart.vue'


const routes = [
  {
    path:'/',
    redirect: '/home'
  },
  { 
    path: '/home',
    component: Home 
  },
  { 
    path: '/category',
    component: Category 
  },
  { 
    path: '/shopcart',
    component: Shopcart 
  },
  { 
    path: '/profile',
    component: Profile 
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;