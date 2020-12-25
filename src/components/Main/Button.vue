<template>
  <div class="btn">
    {{ name }}
  </div>
</template>

<script>
  export default {
    name: "Button",
    props: {
      name: String,
      color: String
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