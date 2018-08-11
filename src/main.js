import Vue from 'vue'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'

Vue.use(BootstrapVue);
Vue.use(VueRouter);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Login from './components/Login.vue';
import Hello from './components/Hello.vue';

const router = new VueRouter({
  routes: [
    { path: '/', name: 'login', component: Login },
    { path: '/user/:id', name: 'hello', component: Hello },
  ]
})


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
