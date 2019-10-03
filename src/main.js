// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 1. 추가 모듈 등록
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import '../static/css/theme-green/index.css'
import '../static/css/icon.css'
import 'babel-polyfill'

Vue.config.productionTip = false

// 2. Instance 생성
Vue.use(ElementUI, { size: 'small' })
Vue.prototype.$axios = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// 3. Login
router.beforeEach((to, from, next) => {
  const role = localStorage.getItem('ms_username')
  if (!role && to.path !== '/login') {
    next('/login')
  } else if (to.meta.permission) {
    role === 'admin' ? next() : next('/403')
  } else {
    if (navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor') {
      Vue.prototype.$alert('vue-quill-editor IE10 이상의 브라우저를 사용하세요.', '알림', {
        confirmButtonText: '확인'
      })
    } else {
      next()
    }
  }
})

/* eslint-disable no-new */
/*
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
*/
