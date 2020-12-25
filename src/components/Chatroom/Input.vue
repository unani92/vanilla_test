<template>
  <div id="input-container">
    <div class="input-icon">
      <input
        type="text"
        placeholder="메시지를 입력하세요"
        v-model="inputText"
      >
      <i class="fas fa-arrow-circle-up"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Input",
    data() {
      return {
        inputText: null
      }
    }
  }
</script>

<style scoped>
  #input-container {
    width: 360px;
    height: 50px;
    background-color: white;
    position: sticky;
    bottom: 0;
  }
  .input-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 6px
  }
  input {
    width: 85%;
    height: 35px;
    border: 1px solid #aaaab4;
    border-radius: 10px;
    background-color: #F6F6F8;
    padding: 0 2rem 0 0.5rem;
    position: relative;
  }
  input:focus {
    outline: none;
  }
  i {
    color: #8A74FF;
    font-size: 1.3rem;
    position: absolute;
    right: 0;
    line-height: 2;
    z-index: 9999;
    text-align: right;
    margin-right: 1rem;
    cursor: pointer;
  }
</style>