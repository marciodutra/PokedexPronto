<script setup>
import { RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="my-container">
    <Navbar />
    <Suspense>
      <router-view></router-view>
      <template v-slot:fallback>Carregando dados de Pokémon...</template>
    </Suspense>
    <Footer />
  </div>
</template>

<style>
#app {
  background-color: #eeeeee;
}

.my-container {
  margin: 0 auto;
  background-color: white;
}

main {
  padding: 8px;
  min-height: 100vh;
}

@media (min-width: 576px) {
  main {
    padding: 16px;
  }
}

@media (min-width: 768px) {
  main {
    padding: 16px 32px;
  }
}

.link-no-deco {
  text-decoration: none;
}

.big-blue-button {
  text-align: center;
  padding: 16px 0;
}

.big-blue-button button {
  background-color: #30a7d7;
  color: white;
}
</style>
