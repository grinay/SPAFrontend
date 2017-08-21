// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import VueAuth from '@websanova/vue-auth'
import config from './config'
import vbclass from 'vue-body-class'

export const eventBus =  new Vue();

//Set moment as global component
window.moment = require('moment');


Vue.config.productionTip = false


//Global filter
Vue.filter("toDate", function (value) {
  return moment(value).format('DD.MM.YYYY HH:mm');
})

Vue.use(VueResource);
//Vue.use(VueAxios, axios);
Vue.use(BootstrapVue);


Vue.http.options.root = 'http://localhost:20087';
//Vue.http.options.credentials = true;
//Vue.axios.defaults.baseURL ='http://localhost:20087';

Vue.router = router;


Vue.use(vbclass, {router})

Vue.use(VueAuth, {
  auth: require('./extends/vue-auth/myauthdriver'),
  http: require('@websanova/vue-auth/drivers/http/vue-resource.1.x'),
  router: require('@websanova/vue-auth/drivers/router/vue-router.2.x'),
  fetchData: {url: 'auth/user', method: 'GET', enabled: false},
  refreshData: {url: 'auth/refresh', method: 'GET', enabled: false, interval: 0},
  loginData: {url: 'Token', method: 'POST', redirect: '/', fetchUser: false},
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  template: '<App/>',
  components: {App},
})
