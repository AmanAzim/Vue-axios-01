import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'
import axios from 'axios';

axios.defaults.baseURL='https://vue-axios-78d11.firebaseio.com';

axios.defaults.headers.common['Authorization']= 'lalala';
axios.defaults.headers.get['Accepts']='aman';//'application/json'

axios.interceptors.request.use(config=>{
  console.log('request:',config);
  config.headers['something']='just testing';
  return config;
});
axios.interceptors.response.use(res=>{
  console.log('response:',res);
  return res;
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
