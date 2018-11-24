


实现的加解密看路由 ↓

```js
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/ks',
      name: 'ks', //1.1.1 凯撒加密
      component: () => import('./views/pw_ks'),
      meta: {
        name: '凯撒加密'
      }
    },
    {
      path: '/wjne',
      name: 'wjne', //1.1.2 维吉耐尔
      component: () => import('./views/pw_wjne'),
      meta: {
        name: '维吉耐尔'
      }
    },
    {
      path: '/vernam',
      name: 'Vernam', //1.1.2 维吉耐尔
      component: () => import('./views/pw_vernam'),
      meta: {
        name: 'Vernam'
      }
    },
    {
      path: '/rf',
      name: 'rf', //1.1.2 维吉耐尔
      component: () => import('./views/pw_rf'),
      meta: {
        name: '栅栏置换'
      }
    },{
      path: '/dlzh',
      name: 'dlzh', //1.1.2 单轮分栏式置换
      component: () => import('./views/pw_dlzh'),
      meta: {
        name: '单轮分栏式置换'
      }
    },
    {
      path: '/md5',
      name: 'md5',
      component: () => import('./views/pw_md5'),
      meta: {
        name: 'MD5'
      }
    },
    {
      path: '/sha',
      name: 'sha',
      component: () => import('./views/pw_sha'),
      meta: {
        name: 'SHA'
      }
    },
    {
      path: '/des',
      name: 'des',
      component: () => import('./views/pw_des'),
      meta: {
        name: 'DES'
      }
    }, {
      path: '/rsa',
      name: 'rsa',
      component: () => import('./views/pw_rsa'),
      meta: {
        name: 'RSA'
      }
    }, {
      path: '/aes',
      name: 'aes',
      component: () => import('./views/pw_aes'),
      meta: {
        name: 'AES'
      }
    },

    {path: '*', redirect: '/ks', hidden: true}
  ]
})


```
