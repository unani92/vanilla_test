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

  }
</style>