<template>
  <div class="split-date">
    <div class="date">
      {{ parsedDate }}
    </div>
    <div v-for="chat in value" :key="chat.id">
      <div v-if="chat.user_name === '주선자'">
        <OtherChat :chat="chat"/>
      </div>
      <div v-else>
        <MyChat :chat="chat"/>
      </div>
    </div>
  </div>
</template>

<script>
  import OtherChat from "@/components/Chatroom/Contents/OtherChat";
  import MyChat from "@/components/Chatroom/Contents/MyChat";

  export default {
    name: "SplitByDate",
    props: {
      date: String,
      value: Array
    },
    components: {
      OtherChat,
      MyChat
    },
    computed: {
      parsedDate() {
        let dateArr = this.date.split('-')
        return `${dateArr[0]}년 ${dateArr[1]}월 ${dateArr[2]}일`
      }
    }
  }
</script>

<style scoped>
  .date {
    width: 150px;
    height: 20px;
    border-radius: 10px;
    color: white;
    background-color: #aaaab4;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem auto;
    padding: 0.2rem 0;
  }
</style>