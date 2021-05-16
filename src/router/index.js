import Vue from 'vue'
import VueRouter from 'vue-router'


const Home = () => import('@/views/home/Home')
const Profile = () => import('@/views/profile/Profile')
const Category = () => import('@/views/category/Category')
const ShopCart = () => import('@/views/shopcart/ShopCart')

Vue.use(VueRouter)


const routes = [
  {
    path: '',
    redirect: '/home'
  }, {
    path: '/home',
    component: Home
  }, {
    path: '/category',
    component: Category
  }, {
    path: '/shopcart',
    component: ShopCart
  }, {
    path: '/profile',
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
