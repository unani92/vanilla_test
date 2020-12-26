<template>
  <div class="my-chat">
    <div class="mychat-box">
      <div style="font-size: 0.5rem; align-self: flex-end">{{ parseTime }}</div>
      <div class="mychat-text" v-if="chat.msg.mtype === 'text'">
        <p v-for="text in parseText" :key="text">{{ text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MyChat",
    props: {
      chat: Object
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
    }
  }
</script>

<style scoped>
  .my-chat {
    margin: 1rem 0;
  }
  .mychat-box {
    display: flex;
    margin-left: 2rem;
  }
  .mychat-text {
    border-radius: 12px;
    background-color: #8A74FF;
    color: white;
    width: 230px;
    margin-left: 1rem;
    font-size: 1rem;
    padding: 0.7rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>