<template>
  <div id="input-container" :class="{dark: darkMode}">
    <div class="input-icon">
      <textarea
        :class="{'dark-textarea': darkMode}"
        placeholder="메시지를 입력하세요"
        v-model="inputText"
        @keypress.enter="submitInput"
      />
      <i @click="createMsg" v-show="inputText" class="fas fa-arrow-circle-up"></i>
    </div>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  import { scrollBottom } from "@/utils";

  export default {
    name: "Input",
    data() {
      return {
        inputText: null
      }
    },
    computed: {
      ...mapState(['chats', 'id', "darkMode"])
    },
    methods: {
      ...mapMutations(['SET_CHATS', "SET_ID"]),
      createMsg() {
        let now = new Date();
        let created_at = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
        let sliced = created_at.split(' ')[0]
        let res = this.chats
        let newNode = {
          created_at,
          id: this.id + 1,
          msg: {
            content: this.inputText,
            mtype: "text"
          },
          photo_url: "https://photo.vanillabridge.com/app_photos/agent_woman.jpg",
          user_id: 1,
          user_name: "소개녀"
        }
        if (res[sliced] === undefined) {
          res[sliced] = [newNode]
        } else {
          res[sliced].push(newNode)
        }
        this.SET_CHATS(res)
        this.SET_ID()
        this.inputText = null
        setTimeout(scrollBottom, 100)
      },
      submitInput(e) {
        if (!e.shiftKey && e.key === "Enter") {
          e.preventDefault()
          this.createMsg()
        } else {
          this.inputText = this.inputText + "\\n"
        }
      }
    }
  }
</script>

<style scoped>
  #input-container {
    width: 360px;
    height: 50px;
    background-color: white;
    position: absolute;
    bottom: 0;
  }
  .input-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 6px
  }
  textarea {
    width: 85%;
    height: 20px;
    border: 1px solid #aaaab4;
    border-radius: 10px;
    background-color: #F6F6F8;
    padding: 0.7rem 2rem 0.3rem 0.5rem;
    position: relative;
    resize: none;
  }
  textarea:focus {
    outline: none;
  }
  textarea::placeholder {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  i {
    color: #8A74FF;
    font-size: 1.3rem;
    position: absolute;
    right: 0;
    line-height: 2;
    z-index: 9999;
    text-align: right;
    margin-right: 1rem;
    cursor: pointer;
  }
  .dark {
    background-color: #1b1d21 !important;
    color: white !important;
  }
  .dark-textarea {
    background-color: #2c3036 !important;
    border: 1px solid #64646e !important;
    color: white !important;
  }
  .dark-textarea::placeholder {
    color: white !important;
  }
</style>