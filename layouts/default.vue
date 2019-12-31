<template>
  <div>
    <nav-bar></nav-bar>
    <nuxt />
  </div>
</template>

<script>
  import NavBar from '../components/NavBar';
  export default {
    head() {
      return {
        title: 'Vehicle History - QA',
        meta: [
          {
            hid: 'VH-QA id',
            name: 'description',
            content: 'Vehicle History questions & answers.'
          }
        ]
      };
    },
    components: {
      NavBar
    },
}
</script>

<style>
  body {
    font-family: 'Roboto', sans-serif;
    background-color: #FAFAFA;
  }
  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
      outline: none;
  }
</style>
