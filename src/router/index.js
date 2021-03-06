import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/dashboard'
    },
    {
      path: '/',
      component: resolve => require(['../components/common/Home.vue'], resolve),
      meta: { title: 'Home' },
      children: [
        {
          path: '/dashboard',
          component: resolve => require(['../components/page/Dashboard.vue'], resolve),
          meta: { title: 'Dashboard' }
        },
        {
          path: '/icon',
          component: resolve => require(['../components/page/Icon.vue'], resolve),
          meta: { title: 'Icon' }
        },
        {
          path: '/table',
          component: resolve => require(['../components/page/BaseTable.vue'], resolve),
          meta: { title: 'Table' }
        },
        {
          path: '/tabs',
          component: resolve => require(['../components/page/Tabs.vue'], resolve),
          meta: { title: 'Tabs' }
        },
        {
          path: '/form',
          component: resolve => require(['../components/page/BaseForm.vue'], resolve),
          meta: { title: 'Form' }
        },
        {
          path: '/editor',
          component: resolve => require(['../components/page/VueEditor.vue'], resolve),
          meta: { title: 'Editor' }
        },
        {
          // markdown
          path: '/markdown',
          component: resolve => require(['../components/page/Markdown.vue'], resolve),
          meta: { title: 'markdown editor' }
        },
        {
          // Upload
          path: '/upload',
          component: resolve => require(['../components/page/Upload.vue'], resolve),
          meta: { title: 'Upload' }
        },
        {
          // vue-schart
          path: '/charts',
          component: resolve => require(['../components/page/BaseCharts.vue'], resolve),
          meta: { title: 'Charts' }
        },
        {
          // Drag
          path: '/drag',
          component: resolve => require(['../components/page/DragList.vue'], resolve),
          meta: { title: 'Drag' }
        },
        {
          path: '/permission',
          component: resolve => require(['../components/page/Permission.vue'], resolve),
          meta: { title: '권한없음', permission: true }
        },
        {
          path: '/404',
          component: resolve => require(['../components/page/404.vue'], resolve),
          meta: { title: '404' }
        },
        {
          path: '/403',
          component: resolve => require(['../components/page/403.vue'], resolve),
          meta: { title: '403' }
        }
      ]
    },
    {
      path: '/login',
      component: resolve => require(['../components/page/Login.vue'], resolve)
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
