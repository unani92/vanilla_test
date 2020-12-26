<template>
  <div id="chats">
    <div v-for="content in chatArray" :key="content.date">
      <SplitByDate
        :date="content.date"
        :value="content.value"
      />
      <hr>
    </div>
  </div>
</template>

<script>
  import { req } from "@/api";
  import { sortObj, scrollBottom } from "@/utils";
  import SplitByDate from "@/components/Chatroom/Contents/SplitByDate";

  export default {
    name: "Contents",
    components: {
      SplitByDate
    },
    methods: {

    },
    data() {
      return {
        chats: {},
        chatArray: []
      }
    },
    async created() {
      const { data } = await req()
      data.forEach(chat => {
        let { created_at } = chat
        let sliced = created_at.split(' ')[0]
        if (this.chats[sliced] === undefined) {
          this.chats[sliced] = [chat]
        } else {
          this.chats[sliced].push(chat)
        }
      })
      console.log(this.chats)
      this.chatArray = sortObj(this.chats, false)
      console.log(this.chatArray)
    },
    mounted() {
      setTimeout(scrollBottom, 100)
    },
  }
</script>

<style scoped>
  #chats {
    height: 620px;
    overflow-y: auto;
  }
</style>