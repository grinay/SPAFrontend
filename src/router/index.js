import Vue from 'vue'
import Router from 'vue-router'

//Pages
import RequestIndex from '@/components/Requests/Index.vue'
import RequestCreate from '@/components/Requests/Create.vue'
import MainPage from '@/components/Requests/Page.vue'

Vue.use(Router)
// class="gray-bg"


export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  exactActiveClass: '',
  routes: [
    {
      path: '/',
      redirect: {
        name: 'default'
      },
    },
    {
      path: '/requests/',
      component: MainPage,
      meta: {
        breadcrumb: 'Заявки',
        auth: true
      },
      children: [
        {
          path: '/requests/',
          component: RequestIndex,
          name: 'default',
          meta: {
            breadcrumb: 'Список заявок',
          },
        },
        {
          path: 'create',
          component: RequestCreate,
          meta: {
            breadcrumb: 'Создание заявки',
          },
        },
        {
          name: 'viewRequest',
          path: 'view/:id',
          component: require('@/components/Requests/View.vue'),
          meta: {
            breadcrumb: 'Просмотр заявки',
          },
        }
      ]
    }, {
      path: '/login',
      bodyClass: 'gray-bg',
      meta: {
        auth: false
      },
      component: require('@/components/Login/Index.vue')
    }

  ],

})
