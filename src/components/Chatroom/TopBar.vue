<template>
  <div id="top-bar" :class="{dark: darkMode}">
    <i class="fas fa-chevron-left"></i>
    <input @change="SET_DARKMODE" type="checkbox" id="switch" />
    <label :class="{'btn-dark': darkMode}" for="switch">Toggle</label>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'

  export default {
    name: "TopBar",
    computed: {
      ...mapState(["darkMode"])
    },
    methods: {
      ...mapMutations(["SET_DARKMODE"])
    }
  }
</script>

<style scoped>
  #top-bar {
    position: sticky;
    top: 0;
    width: 360px;
    height: 50px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 1rem 0.1rem rgba(15,16,17,0.1);
    z-index: 999;
  }
  i {
    margin: 0 1rem;
    font-size: 1.3rem;
    color: #aaaab4;
  }
  input[type=checkbox]{
    height: 0;
    width: 0;
    visibility: hidden;
  }

  label {
    cursor: pointer;
    text-indent: -9999px;
    width: 50px;
    height: 20px;
    background: white;
    display: block;
    border-radius: 100px;
    border: 1px solid gray;
    position: relative;
    margin-right: 1rem;
  }

  label:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    background: gray;
    border-radius: 30px;
    /*transition: 0.3s;*/
  }

  input:checked + label {
    background: gray;
  }

  input:checked + label:after {
    left: 100%;
    transform: translateX(-100%);
  }
  .dark {
    background-color: black !important;
    box-shadow: 0 0 1rem 0.5rem rgba(15,16,17,0.5) !important;
    color: white !important;
  }
  .btn-dark::after {
    background: white !important;
  }
</style>