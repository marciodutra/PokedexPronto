<script setup>
import { ref, watch, onMounted } from 'vue'
import HomeBanner from '@/components/HomeBanner.vue'
import PokemonCard from '@/components/PokemonCard.vue'
import SearchInputs from '@/components/SearchInputs.vue'
import SelectInputs from '@/components/SelectInputs.vue'
import ScrollToTopButton from '@/components/ScrollToTopButton.vue'

import { usePokemonStore } from '@/stores/PokemonStore'

const pokemonStore = usePokemonStore()

onMounted(() => {
  if (pokemonStore.pokemonList.length === 0) {
    const showMoreButton = document.getElementById('show-more-button')
    const loader = document.getElementById('loader')
    showMoreButton.classList.add('d-none')
    loader.classList.remove('d-none')
    console.log(showMoreButton)
    console.log(loader)
    pokemonStore.fetchPokemons([], 1, 12)
  }
})
</script>

<template>
  <HomeBanner />
  <main>
    <section id="search-sort-pokemons" class="mt-2 mb-3 gap-2 gap-sm-0">
      <SearchInputs />
      <SelectInputs />
    </section>

    <h1>{{ pokemonStore.generation }}</h1>
    <v-divider></v-divider>

    <v-container style="padding: 0px">
      <v-row no-gutters>
        <v-col
          v-for="pokemon in pokemonStore.pokemonList"
          :key="`pokemon-${pokemon.id}`"
          cols="12"
          sm="6"
          md="4">
          <PokemonCard :pokemon="pokemon" />
        </v-col>
      </v-row>
    </v-container>
    <div class="big-blue-button">
      <v-btn
        id="show-more-button"
        elevated
        size="x-large"
        @click="pokemonStore.fetchPokemons(pokemonStore.pokemonList, pokemonStore.pokemonIndex, 18)">
      MOSTRAR MAIS POKÉMONS
      </v-btn>
      <div id="loader" class="d-none"></div>
    </div>
    <div>
      <ScrollToTopButton />
    </div>
  </main>
</template>

<style scoped>
h1 {
  text-align: center;
  color: #30a7d7;
  margin: 0;
}

#loader {
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #ccc;
  border-top-color: #111827;
  animation: spin 1s ease-in-out infinite;
  margin-right: 10px;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
