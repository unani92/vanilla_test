<template>
  <div id="chatroom">
    <TopBar/>
    <Input/>
  </div>
</template>

<script>
  import TopBar from "@/components/Chatroom/TopBar";
  import Input from "@/components/Chatroom/Input";

  export default {
    name: "ChatRoom",
    components: {
      TopBar,
      Input
    }
  }
</script>

<style scoped>
  #chatroom {
    position: relative;
    width: 360px;
    height: 720px;
    background-color: #F6F6F8;
    overflow-y: auto;
    border-radius: 5px;
  }
</style>