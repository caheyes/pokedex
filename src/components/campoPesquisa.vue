<template>
  <div>
    <input type="search" placeholder="Search" class="campoPesquisa" @input="emitirBuscarPokemon" v-model="nomePesquisado">
  </div>
</template>

<script>
  export default {
    name: "campoPesquisa",
    data(){
      return {
        nomePesquisado: ""
      }
    },
    methods: {
      emitirBuscarPokemon() {
        this.$emit('buscarPokemon', this.nomePesquisado);
      }
    }
  }
</script>

<style lang="scss" scoped>
  $borderColor: #ccc;
  $placeholderColor: #ccc;
  $fontSize: 14px;
  $paddingY: 12px;
  .campoPesquisa {
    width: 100%;
    background: transparent;
    border: none;
    border-bottom: 1px solid  $borderColor;
    font-size: $fontSize;
    padding: $paddingY 0;
    outline: none;

    &::placeholder {
      color: $placeholderColor;
      font-size: $fontSize;
    }
  }
</style>