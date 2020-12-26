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
  import SplitByDate from "@/components/Chatroom/Contents/SplitByDate";

  export default {
    name: "Contents",
    components: {
      SplitByDate
    },
    methods: {
      sortObj(obj) {
        let res = []
        for (let [key, value] of Object.entries(obj)) {
          res.push({ date: key, value })
        }
        res.sort((a,b) => {
          let keyA = new Date(a.date)
          let keyB = new Date(b.date)
          if (keyA < keyB) return -1;
          if (keyA > keyB) return 1;
          return 0
        })
        return res
      },
      scrollBottom() {
        let container = document.getElementById('chats')
        container.scrollTop = container.scrollHeight
      }
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
      this.chatArray = this.sortObj(this.chats)

    },
    mounted() {
      // setTimeout(this.scrollBottom, 100)
    },
  }
</script>

<style scoped>
  #chats {
    height: 620px;
    overflow-y: auto;
  }
</style>