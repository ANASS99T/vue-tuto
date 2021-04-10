import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    month:'08',
    day:12,
    year:2021,
  },
  getters: {
    formattedDate: state => {
      return `${state.year} - ${state.month} - ${state.day}`
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
