// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mintui from "mint-ui"
import "mint-ui/lib/style.css"
import vueresource from "vue-resource"
import "./assets/mui/css/mui.css"
import "./assets/css/index.css"


Vue.use(mintui)
Vue.use(vueresource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
