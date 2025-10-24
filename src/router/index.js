import { createRouter, createWebHistory } from 'vue-router'
import WeatherCheck from '../WeatherCheck.vue'  // 引入刚刚创建的页面

const routes = [
  {
    path: '/',
    redirect: '/WeatherCheck'  // 打开网站默认跳转到天气页面
  },
  {
    path: '/WeatherCheck',
    component: WeatherCheck   // 定义天气查询页面路由
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
