<template>
  <div id="app">
    <Main/>
    <ChatRoom/>
  </div>
</template>

<script>
import { req } from "@/api";
import ChatRoom from "@/components/ChatRoom";
import Main from "@/components/Main";

export default {
  name: 'App',
  components: {
    ChatRoom,
    Main
  },
  async created() {
    const { data } = await req()
    console.log(data)
  }
}
</script>

<style>
  * {
    margin: 0;
  }
 #app {
   background-color: #8A74FF;
   width: 100%;
   height: 100vh;
   display: flex;
   align-items: center;
   justify-content: space-around;
 }
</style>
