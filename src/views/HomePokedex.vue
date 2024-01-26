<template>
  <section class="container">
    <CampoPesquisa @buscarPokemon="buscarPokemon"/>
    <ListaPokemons :listaPokemons="listaPokemonsExibidos" v-if="!carregando"/>
    <CarregandoPokemons v-else/>
  </section>
</template>

<script>
  import CampoPesquisa from "@/components/campoPesquisa.vue";
  import ListaPokemons from "@/components/listaPokemons.vue";
  import CarregandoPokemons from "@/components/carregandoPokemons.vue";

  export default {
    name: "homePokedex",
    components: {
      CampoPesquisa,
      ListaPokemons,
      CarregandoPokemons
    },
    data() {
      return {
        carregando: false,
        listaPokemons: [],
        listaPokemonsExibidos: []
      }
    },
    mounted() {
      this.listarTodosPokemons();
    },
    methods: {
      //get
      buscarPokemon(nomePesquisado) {
        const termoPesquisaLowerCase = nomePesquisado.toLowerCase();

        if(termoPesquisaLowerCase.trim() === "") {
          this.listaPokemonsExibidos = this.listaPokemons;
        } else {
          this.listaPokemonsExibidos = this.listaPokemons
          .filter(pokemon =>
            pokemon.nome.toLowerCase().includes(termoPesquisaLowerCase)
          )
          .sort((a, b) => {
            const inicioA = a.nome.toLowerCase().indexOf(termoPesquisaLowerCase);
            const inicioB = b.nome.toLowerCase().indexOf(termoPesquisaLowerCase);

            if (inicioA === inicioB) {
              return a.nome.localeCompare(b.nome);
            }
            return inicioA - inicioB;
          });
        }
      },

      listarTodosPokemons(url = 'https://pokeapi.co/api/v2/pokemon', limite = 151) {
        this.carregando = true;

        fetch(url)
        .then((res) => res.json())
        .then(async (json) => {
          const pokemons = await Promise.all(json.results.map(async (pokemonInfo) => {
            const urlInfos = await fetch(pokemonInfo.url);
            const infoEspefica = await urlInfos.json();

            return {
              id: infoEspefica.id,
              nome: this.$formataPrimeiraLetraMaiuscula(infoEspefica.name),
              imagem: infoEspefica.sprites.front_default,
            };
          }));

          if (this.listaPokemons.length + pokemons.length <= limite) {
            this.listaPokemons = this.listaPokemons.concat(pokemons);

            // Verifica se tem mais paginas
            if (json.next) {
              this.listarTodosPokemons(json.next, limite);
            }
          } else {
            const pokemonFinal = pokemons.slice(0, limite - this.listaPokemons.length);
            this.listaPokemons = this.listaPokemons.concat(pokemonFinal);
            this.listaPokemonsExibidos = this.listaPokemons;
          }
        })
        .catch(() => {
          alert('Ocorreu um erro ao listar os pokémons. Tente novamente mais tarde.');
        })
        .finally(() => {
          this.carregando = false;
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 21px 16px;
  }
</style>
