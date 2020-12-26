<template>
  <div class="other-chat">
    <div class="profile">
      <img @click="SET_ZOOM(chat.photo_url)" :src="chat.photo_url" alt="">
      <span>{{ chat.user_name }}</span>
    </div>
    <div class="chat">
      <div class="chat-text" v-if="chat.msg.mtype === 'text'">
        <p v-for="text in parseText" :key="text">{{ text }}</p>
      </div>
      <div style="font-size: 0.5rem; align-self: flex-end">{{ parseTime }}</div>
    </div>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    name: "OtherChat",
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
      ...mapMutations(["SET_ZOOM"]),
    },
    props: {
      chat: Object
    }
  }
</script>

<style scoped>
  .other-chat {
    margin: 1rem 0;
  }
  .profile {
    display: flex;
  }
  img {
    width: 30px;
    height: auto;
    border-radius: 3px;
    margin: 0 8px;
    cursor: pointer;
  }
  .profile span {
    font-size: 12px;
  }
  .chat {
    display: flex;
    margin-left: 2.5rem;
  }
  .chat-text {
    border-radius: 0 12px 12px 12px;
    background-color: white;
    color: black;
    max-width: 220px;
    margin-right: 1rem;
    font-size: 1rem;
    padding: 0.7rem;
  }
</style>