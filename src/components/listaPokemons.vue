<template>
  <div class="ctn-lista">
    <CardPokemon v-for="(pokemon, i) in pokemons" :key="i" 
    :dadosPokemon="pokemon"/>
  </div>
</template>

<script>
  import CardPokemon from "@/components/cardPokemon.vue";

  export default {
    name: "listaPokemons",
    components: {
      CardPokemon
    },
    props: {
      listaPokemons: {
        type: Array,
      }
    },
    computed: {
      pokemons() {
        return this.listaPokemons;
      }
    }
  }
</script>

<style lang="scss" scoped>
  $minColumnWidth: 100px;
  $maxColumns: 6;
  $gap: 10px;

  .ctn-lista {
    display: grid;
    grid-template-columns: repeat($maxColumns, minmax($minColumnWidth, 1fr));
    gap: $gap;
    padding: 12px 0;

    @media (max-width: 900px) {
      grid-template-columns: repeat(4, minmax($minColumnWidth, 1fr));
    }

    @media (max-width: 600px) {
      grid-template-columns: repeat(3, minmax($minColumnWidth, 1fr));
    }

    @media (max-width: 450px) {
      grid-template-columns: repeat(2, minmax($minColumnWidth, 1fr));
    }
  }
</style>