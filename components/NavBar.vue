<template>
  <div id="navbar">
    <nuxt-link class="logo-link" to="/">
      <logo></logo>
    </nuxt-link>
  </div>
</template>

<script>
  import Logo from './Logo';
  export default {
    components: {
      Logo
    },
  }
</script>

<style scoped>
  #navbar {
    width: 100%;
    height: 48px;
    background-color: #2878BE;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12);
    position: fixed;
    top: 0;
    z-index: 5;
  }
  .logo-link {
    height: 48px;
  }
  #navbar svg {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: inherit;
  }
</style>