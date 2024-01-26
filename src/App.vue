<template>
  <main id="app">
    <HomePokedex/>
  </main>
</template>

<script>
  import HomePokedex from "./views/HomePokedex.vue";

  export default {
    components: {
      HomePokedex
    }
  }
</script>

<style lang="scss">
  body {
    background-color: #EDEDED; 
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }
  
  p {
    margin: 0;
  }

  span {
    margin: 0;
  }
</style>
