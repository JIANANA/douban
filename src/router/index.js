import Vue from 'vue'
import VueRouter from 'vue-router'
import Hot from '@/views/Hot.vue'
import Movie from '@/views/Movie.vue'
import Top from '@/views/Top.vue'
import Detail from '@/views/Detail.vue'
Vue.use(VueRouter)
const routes = [
  // Hot正在热映组件
  { path: '/', redirect: '/hot' },
  { path: '/hot', component: Hot },
  { path: '/movie', component: Movie },
  { path: '/top', component: Top },
  { path: '/detail/:id', component: Detail }
]

const router = new VueRouter({
  routes
})

export default router
