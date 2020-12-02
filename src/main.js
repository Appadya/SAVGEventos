import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/css/index.css'

import * as VueGoogleMaps from 'vue2-google-maps'
import firebase from 'firebase/app'

firebase.initializeApp(require('./firebase-config.json'));

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBouFPwLmPCen4qxUFBRcMMAFEPq2NyL34',
    libraries: 'places'
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
