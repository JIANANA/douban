import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入vuex共享文件
import store from './vuex/store'
// 引入css文件
import './assets/css/global.css'
// 引入字体图标文件
import './assets/fonts/iconfont.css'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
