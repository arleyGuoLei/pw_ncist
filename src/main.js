import Vue from 'vue'
import 'normalize.css'
import '@/common/style.css'

import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  if (to.meta.name) {
    document.title = to.meta.name + ' - Ncist'
  }
  next()
})
