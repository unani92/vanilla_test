<template>
  <div id="input-container">
    <div class="input-icon">
      <textarea
        placeholder="메시지를 입력하세요"
        v-model="inputText"
      />
      <i v-show="inputText" class="fas fa-arrow-circle-up"></i>
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
  }
  .input-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 6px
  }
  textarea {
    width: 85%;
    height: 20px;
    border: 1px solid #aaaab4;
    border-radius: 10px;
    background-color: #F6F6F8;
    padding: 0.7rem 2rem 0.3rem 0.5rem;
    position: relative;
    resize: none;
  }
  textarea:focus {
    outline: none;
  }
  textarea::placeholder {
    display: flex;
    justify-content: center;
    align-items: center;
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