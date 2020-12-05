import Vue from 'vue'
import Vuex from 'vuex'
import place from './modules/place'
import auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    place,
    auth
  }
})
