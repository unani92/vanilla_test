<template>
  <div id="chatroom">
    <TopBar/>
    <Contents/>
    <Input/>
  </div>
</template>

<script>
  import TopBar from "@/components/Chatroom/TopBar";
  import Input from "@/components/Chatroom/Input";
  import Contents from "@/components/Chatroom/Contents";

  export default {
    name: "ChatRoom",
    components: {
      TopBar,
      Input,
      Contents
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