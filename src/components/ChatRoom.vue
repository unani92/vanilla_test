<template>
  <div id="chatroom" :class="{dark: darkMode}">
    <TopBar/>
    <div v-if="clickMsgMenu.fire" class="system-msg">
      {{ clickMsgMenu.msg }}
    </div>
    <Contents/>
    <Input/>
  </div>
</template>

<script>
  import TopBar from "@/components/Chatroom/TopBar";
  import Input from "@/components/Chatroom/Input";
  import Contents from "@/components/Chatroom/Contents";
  import { mapState } from 'vuex'

  export default {
    name: "ChatRoom",
    components: {
      TopBar,
      Input,
      Contents
    },
    computed: {
      ...mapState(["clickMsgMenu", "darkMode"])
    },
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
  .system-msg {
    width: 360px;
    height: 50px;
    background-color: #654ea3;
    position: absolute;
    z-index: 999999;
    top: 50px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .dark {
    background-color: #1b1d21 !important;
    color: white !important;
  }
</style>