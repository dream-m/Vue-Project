import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Document from '@/components/Document'
import Brief from '@/components/Brief'
import Index from '@/components/Index'
import Table from '@/components/Table'
import Upload from '@/components/package/upload'
import From from '@/components/package/form'
import Tabs from '@/components/package/tabs'
import Info from '@/components/info'
import Error from '@/components/error'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children : [
        {
          path:'/index',
          name:'主页',
          component: Index,
          meta: { title: '主页' }
        },
        {
          path:'/document',
          name:'文档',
          component: Document,
          meta: { title: '文档' }
        },
        {
          path:'/brief',
          name:'简述',
          component: Brief,
          meta: { title: '简述' }
        },
        {
          path:'/table',
          name:'表格',
          component: Table,
          meta: { title: '表格' }
        },
        {
          path:'/package/upload',
          name:'上传',
          component: Upload,
          meta: { title: '上传' }
        },
        {
          path:'/package/form',
          name:'表单',
          component: From,
          meta: { title: '表单' }
        },
        {
          path:'/package/tabs',
          name:'标签',
          component: Tabs,
          meta: { title: '标签' }
        },
        {
          path:'/info',
          name:'个人中心',
          component: Info,
          meta: { title: '个人中心' }
        },
        {
          path:'/error',
          name:'404页面',
          component: Error,
          meta: { title: '404页面' }
        }
      ]
    },
  ]
});

export default router;


