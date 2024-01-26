<template>
  <div class="ctn-card">
    <div class="imagem">
      <img :src="dadosPokemon.imagem" :alt="dadosPokemon.nome">
    </div>
    <div class="dados">
      <p>{{ dadosPokemon.nome }}</p>
      <span>{{ `#${dadosPokemon.id}` }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "cardPokemon",
    props: {
      dadosPokemon: {
        type: Object,
      }
    }
  }
</script>

<style lang="scss" scoped>
  $cardBackgroundColor: #fff;
  $cardBorderRadius: 2px;
  $cardBoxShadow: 5px 5px 4px rgba(0, 0, 0, 0.04);
  $cardPadding: 8px;
  $imageWidth: 100px;
  $fontSize: 12px;

  .ctn-card {
    background: $cardBackgroundColor;
    border-radius: $cardBorderRadius;
    box-shadow: $cardBoxShadow;
    padding: $cardPadding;
    
    .imagem {
      width: 100%;
      display: flex;
      justify-content: center;
      img {
        width: $imageWidth;
      }
    }

    .dados {
      display: flex;
      justify-content: space-between;
      align-items: center;
      p, span {
        font-size: $fontSize;
      }
    }
  }
</style>