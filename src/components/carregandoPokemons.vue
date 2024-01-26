<template>
  <div class="ctn">
    <p>Carregando...</p>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  $fontSize: 18px;
  .ctn {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-weight: 500;
      font-size: $fontSize;
    }
  }
</style>