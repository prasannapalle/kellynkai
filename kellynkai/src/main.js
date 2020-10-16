import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import subfolder from './components/Subfolder'
import HelloWorld from './components/HelloWorld'
Vue.use(VueRouter);
Vue.config.productionTip = false
const routes = [
  {path:'/',component:HelloWorld},
  {path:'/subfolder',component:subfolder}
]
const router = new VueRouter({
  routes
})
new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
