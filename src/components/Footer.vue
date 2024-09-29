<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="footer">
    <div class="container">
      <footer class="py-3">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item"><router-link :to="`/`" class="nav-link px-2">Home</router-link></li>
          <li class="nav-item">
            <router-link :to="`/about`" class="nav-link px-2">Informações</router-link>
          </li>
        </ul>
        <p class="text-center">
          Vue 3 Pokedex | Feito por
          <a href="https://meuportifolioangular.netlify.app/" class="fw-bold" target="_blank">Márcio Dutra</a
          >
        </p>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.footer {
  background-color: #eeeeee;
}
a,
p {
  color: #30a7d7;
}
</style>
