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
    },
    clickMsgMenu: {
      fire: false,
      msg: null
    }
  },
  mutations: {
    SET_DARKMODE(state) {
      state.darkMode = !state.darkMode
    },
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
    },
    SET_MSGMENU(state, value) {
      if (value === 'copy') {
        state.clickMsgMenu.fire = true
        state.clickMsgMenu.msg = '클립보드에 복사되었습니다.'
      } else if (value === 'remove') {
        state.clickMsgMenu.fire = true
        state.clickMsgMenu.msg = '메시지가 삭제되었습니다.'
      } else {
        state.clickMsgMenu = { fire: false, msg: null }
      }
    }
  },
  actions: {
    copyClipBoard({ commit }, value) {
      let textarea = document.createElement('textarea')
      textarea.value = value
      document.body.appendChild(textarea)
      textarea.select()
      textarea.setSelectionRange(0, 9999)

      document.execCommand('copy')
      document.body.removeChild(textarea)

      // 시스템메시지 2초간 노출 이후 제거
      commit('SET_MSGMENU', 'copy')
      setTimeout(() => commit('SET_MSGMENU', null), 2000)
    },
    removeMsg({ state, commit }, { date, id }) {
      let chatAll = state.chats
      chatAll[date] = chatAll[date].filter(chat => chat.id !== id)
      commit('SET_CHATS', chatAll)

      // 시스템메시지 2초간 노출 이후 제거
      commit("SET_MSGMENU", 'remove')
      setTimeout(() => commit('SET_MSGMENU', null), 2000)
    }
  },
  modules: {
  }
})
