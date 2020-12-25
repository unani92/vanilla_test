<template>
  <div id="chatroom">
    <TopBar/>
  </div>
</template>

<script>
  import TopBar from "@/components/Chatroom/TopBar";
  export default {
    name: "ChatRoom",
    components: {
      TopBar
    }
  }
</script>

<style scoped>
  #chatroom {
    width: 360px;
    height: 720px;
    background-color: #F6F6F8;
    overflow-y: auto;
    border-radius: 5px;
  }
</style>