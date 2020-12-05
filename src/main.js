import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { auth } from "./firebase/firebase";

import './assets/css/index.css'

import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBouFPwLmPCen4qxUFBRcMMAFEPq2NyL34',
    libraries: 'places'
  }
});

let app
auth.onAuthStateChanged((user) => {
  if(!app){
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }

  store.dispatch('fetchUser', user);
  // if(user){
  //   console.log(user)
  //   store.dispatch('fetchUser', user);
  // } else {
  //   console.log(user)
  // }
})

