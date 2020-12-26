<template>
  <div>
    <div id="chats" v-if="!clickZoom.zoom">
      <div v-for="content in chatArray" :key="content.date">
        <SplitByDate
          v-if="content.value.length"
          :date="content.date"
          :value="content.value"
        />
      </div>
    </div>
    <div class="zoom-photo" v-else>
      <div style="text-align: right">
        <i @click="SET_ZOOM(null)" class="fas fa-times"></i>
      </div>
      <img :src="clickZoom.url" alt="" style="width: 376px; height: auto">
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
      ...mapMutations(["SET_CHATS", "SET_ZOOM"])
    },
    computed: {
      ...mapState(["chats", "chatArray", "clickZoom"]),
    },
    async created() {
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
  .zoom-photo {
    background-color: black;
    height: 620px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 999999;
  }
  i {
    color: white;
    font-size: 2rem;
    margin: 0 1rem 4rem 0;
    cursor: pointer;
  }
</style>