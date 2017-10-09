// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 数据请求
import VueResource from 'vue-resource'
//图片延迟加载
import VueLazyload from 'vue-lazyload'
// axios IOS 9.0 不支持
import App from './App'
import store from './store'
import router from './router'

Vue.use(VueResource)
Vue.use(VueLazyload,{
  error: require('./assets/loading.svg'),
  loading: require('./assets/loading.svg'),
  attemp: 1
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,  //注入到根组件上
  router,
  template: '<App/>',
  components: { App }
})
