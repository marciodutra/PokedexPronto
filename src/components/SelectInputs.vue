<script setup>
import { ref, watch } from 'vue'
import { usePokemonStore } from '@/stores/PokemonStore'

const pokemonStore = usePokemonStore()

const generation = ref(pokemonStore.generation)

watch(generation, (newGeneration) => {
  pokemonStore.filterGeneration(newGeneration)
})

const sort = ref(pokemonStore.sort)

watch(sort, (newSort) => {
  pokemonStore.sortPokemons(newSort)
})
</script>

<template>
  <div class="row justify-content-between gap-3 gap-sm-0">
    <div class="mx-auto col-10 col-sm-6 col-md-5 col-lg-4">
      <v-select
        label="Selecione uma geração"
        :items="pokemonStore.generations"
        v-model="generation"
        variant="solo-filled">
      </v-select>
    </div>
    <div class="mx-auto col-10 col-sm-6 col-md-5 col-lg-4">
      <v-select
        label="Classificar Pokémons por"
        :items="pokemonStore.sorts"
        v-model="sort"
        variant="solo-filled">
      </v-select>
    </div>
  </div>
</template>

<style scoped></style>
