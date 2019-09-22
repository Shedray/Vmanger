import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import customer  from "@/components/customer";
import about from "@/components/about";
import add from "@/components/add"
import customerDetail from "@/components/customerDetail"
import edit from "@/components/edit";
Vue.config.productionTip = false
Vue.use(VueRouter)
// Vue.use(ElementUI)
import 'bootstrap3/dist/css/bootstrap.css'
import 'bootstrap3/dist/js/bootstrap'
// import $ from 'jquery'

const router = new VueRouter({
  mode:"history",
  base:__dirname,
  routes:[
    {
      path:'/',component:customer
    },
    {
      path: '/about',component: about
    },
      {
          path: '/add', component: add
      },
      {
          path:'/customer/:id',component:customerDetail
      },
    {
      path:'/edit/:id',component:edit
    }
  ]
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
