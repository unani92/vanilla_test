<template>
  <div class="btn" @click="SET_DARKMODE">
    {{ name }}
  </div>
</template>

<script>
  import { mapMutations, mapState } from "vuex";

  export default {
    name: "Button",
    props: {
      name: String,
      color: String
    },
    computed: {
      ...mapState(['darkMode'])
    },
    methods: {
      ...mapMutations(["SET_DARKMODE"]),
    }
  }
</script>

<style scoped>
  .btn {
    width: 100px;
    height: 40px;
    background-color: #654ea3;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #F6F6F8;
    font-weight: bolder;
    margin-right: 1.5rem;
    cursor: pointer;
  }
</style>