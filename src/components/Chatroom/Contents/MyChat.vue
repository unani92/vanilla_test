<template>
  <div class="my-chat">
    <div class="mychat-box">
      <div class="mychat-text" v-if="chat.msg.mtype === 'text'">
        <p v-for="text in parseText" :key="text">{{ text }}</p>
      </div>
      <div style="align-self: flex-end">
        <div style="display: flex">
          <span @click="copyClipBoard(chat.msg.content)" style="cursor:pointer; font-size: 8px; margin-right: 5px; margin-bottom: 4px">복사</span>
          <span @click="removeMsg({date: date ,id: chat.id})" style="cursor:pointer; font-size: 8px;">삭제</span>
        </div>
        <div style="font-size: 0.5rem;">{{ parseTime }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: "MyChat",
    props: {
      chat: Object,
      date: String
    },
    computed: {
      parseText() {
        return this.chat.msg.content.split('\\n')
      },
      parseTime() {
        let time = this.chat.created_at.split(' ')[1]
        let timeArr = time.split(':')
        if (Number(timeArr[0]) > 12) {
          return `오후 ${Number(timeArr[0])-12}:${timeArr[1]}`
        } else return `오전 ${Number(timeArr[0])}:${timeArr[1]}`
      }
    },
    methods: {
      ...mapActions(["copyClipBoard", "removeMsg"]),

    }
  }
</script>

<style scoped>
  .my-chat {
    margin: 1rem 0;
  }
  .mychat-box {
    display: flex;
    flex-direction: row-reverse;
    margin-left: 2rem;
  }
  .mychat-text {
    border-radius: 12px;
    background-color: #8A74FF;
    color: white;
    max-width: 220px;
    margin: 0 1rem;
    font-size: 1rem;
    padding: 0.7rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>