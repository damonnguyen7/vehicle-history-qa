<template>
  <div id="error">
    <p>Oops something went wrong</p>
    <p>{{error}}</p>
  </div>
</template>

<script>
  export default {
    computed: {
      error() {
        return this.$store.state.questions.error;
      }
    }
  }
</script>

<style scoped>
  #error {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
  }
  .p {
    color: red;
  }
</style>