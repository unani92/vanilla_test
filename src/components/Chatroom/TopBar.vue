<template>
  <div id="top-bar">
    <i class="fas fa-chevron-left"></i>
    <i class="fas fa-cog"></i>
  </div>
</template>

<script>
  export default {
    name: "TopBar"
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
</style>