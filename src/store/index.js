import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    month: 8,
    day: 12,
    year: 2008,
    count: 0
  }, // data
  getters: {
    formattedDate: state => {
      return `${state.day}-${state.month}-${state.year}`
    }
  }, // computed
  mutations: {
    INCREASE_COUNT(state, payload = 1) {
      state.count += Number(payload)
    },
    INCREMENT_DAY(state) {
      state.day++
    },
    INCREMENT_MONTH(state) {
      state.month++
    },
    INCREMENT_YEAR(state) {
      state.year++
      state.month = 1
    }
  },
  actions: {

    incrementCournt(context, payload) {
      context.commit('INCREMENT_COUNT', payload)
    },

    incrementMonth(context) {

      if ((context.state.month + 1) > 12) {
        context.commit("INCREMENT_YEAR");
      } else {

        context.commit('INCREMENT_MONTH')
      }

    }
  }, // methods
  modules: {
  }
})
