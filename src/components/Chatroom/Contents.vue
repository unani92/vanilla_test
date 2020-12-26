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
  import { scrollBottom } from "@/utils";
  import SplitByDate from "@/components/Chatroom/Contents/SplitByDate";
  import { mapState, mapMutations } from 'vuex'

  export default {
    name: "Contents",
    components: {
      SplitByDate
    },
    methods: {
      ...mapMutations(["SET_CHATS"])
    },
    computed: {
      ...mapState(["chats", "chatArray"]),
    },
    async beforeCreate() {
      let res = {}
      const { data } = await req()
      data.forEach(chat => {
        let { created_at } = chat
        let sliced = created_at.split(' ')[0]
        if (res[sliced] === undefined) {
          res[sliced] = [chat]
        } else {
          res[sliced].push(chat)
        }
      })
      this.SET_CHATS(res)
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