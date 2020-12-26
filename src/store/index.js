import Vue from 'vue'
import Vuex from 'vuex'
import { sortObj } from "@/utils";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id: 48,
    chats: JSON.parse(sessionStorage.getItem('chats')),
    chatArray: JSON.parse(sessionStorage.getItem('chat-array')),
    darkMode: false,
    clickZoom: {
      zoom: false,
      url: null
    }
  },
  mutations: {
    SET_CHATS(state, value) {
      state.chats = value
      state.chatArray = sortObj(value, false)
      sessionStorage.setItem('chat-array', JSON.stringify(state.chatArray))
      sessionStorage.setItem('chats', JSON.stringify(value))
    },
    SET_ID(state) {
      state.id ++
    },
    SET_ZOOM(state, value) {
      if (state.clickZoom.zoom) {
        state.clickZoom = {
          zoom: !state.clickZoom.zoom,
          url: null
        }
      } else {
        state.clickZoom = {
          zoom: !state.clickZoom.zoom,
          url: value
        }
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
