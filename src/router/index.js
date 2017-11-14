import Vue from 'vue'
import Router from 'vue-router'
import home from "../components/home/home.vue"

Vue.use(Router)

export default new Router({
  linkActiveClass:"mui-active",
  routes: [
    {
     path:"/",
     redirect:"/home" 
    },
    {
     path:"/home",
     component:home 
    }
  ]
})
