<template>
  <div id="chats">

  </div>
</template>

<script>
  import { req } from "@/api";

  export default {
    name: "Contents",
    data() {
      return {
        chats: null
      }
    },
    async created() {
      const { data } = await req()
      this.chats = data
    }
  }
</script>

<style scoped>
  #chats {
    height: 620px;
    overflow-y: auto;
  }
</style>