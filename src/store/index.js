import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    chats: JSON.parse(sessionStorage.getItem('chats')),
    chatArray: JSON.parse(sessionStorage.getItem('chat-array')),
    darkMode: false
  },
  mutations: {
    SET_CHATS(state, value) {
      let res = {}
      let { created_at } =
    }
  },
  actions: {
  },
  modules: {
  }
})
