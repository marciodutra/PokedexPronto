<script setup>
import AboutCard from '@/components/AboutCard.vue'
</script>

<template>
  <main>
    <h1>Sobre este site</h1>
    <v-divider></v-divider>
    <p>
      Este site foi criado por Márcio Dutra, conheça meu (<a
        href="https://meuportifolioangular.netlify.app/">Portfólio</a
      >):
    </p>
    <p class="fst-italic">
      Aprendi bastante VueJS graças ao
      <a href="https://www.udemy.com/course/vue-js-3-desenvolvimento-web-moderno-com-vuex-vue-router/?couponCode=OF83024E" target="_blank">Vue JS 3 Completo com Composition API, Vuex & Vue Router</a>. Aprenda Desenvolvimento Web com Vue 3 do zero ao avançado. Exercícios e desafios incluídos para aprendizado rápido!
    </p>
    <p>São utilizadas a PokéAPI e diversas tecnologias relacionadas ao Vue:</p>
    <div class="row">
      <AboutCard
        title="Vue.js (version 3)"
        link="https://vuejs.org/"
        description="Vue é uma estrutura JavaScript para construção de interfaces de usuário. Ele se baseia em HTML, CSS e JavaScript padrão e fornece um modelo de programação declarativo e baseado em componentes que ajuda a desenvolver interfaces de usuário com eficiência, sejam elas simples ou complexas."
        logo="https://kinsta.com/wp-content/uploads/2022/06/vue-logo.png"
        button="Vue"
      />
      <AboutCard
        title="Create-Vue"
        link="https://github.com/vuejs/create-vue"
        description="A maneira recomendada de iniciar um projeto Vue com tecnologia Vite.
          Vite é uma ferramenta de construção que visa fornecer uma experiência mais rápida
          e experiência de desenvolvimento mais enxuta para projetos web modernos."
        logo="https://vitejs.dev/logo-with-shadow.png"/>
      <AboutCard
        title="PokéAPI"
        link="https://pokeapi.co/"
        description="A API Pokémon RESTful. Todos os dados Pokémon que você precisa em um só lugar, facilmente acessíveis por meio de uma API RESTful moderna."
        logo="https://c1.tablecdn.com/pa/pokeapi-api.jpg"
        button="PokéAPI"
      />
      <AboutCard
        title="Vue Router"
        link="https://router.vuejs.org/"
        description="Vue Router é o roteador oficial do Vue.js. Ele se integra profundamente ao núcleo do Vue.js para facilitar a construção de aplicativos de página única com Vue.js."
        logo="https://scotch-res.cloudinary.com/image/upload/w_1500,q_auto:good,f_auto/media/3660/h49pHk3ORDWKylIlU7bE_maxresdefault.jpg"
        button="Vue Router"
      />
      <AboutCard
        title="Pinia"
        link="https://pinia.vuejs.org/"
        description="A loja intuitiva para Vue.js.
        Pinia é uma biblioteca de loja para Vue,
        ele permite que você compartilhe um estado entre componentes/páginas."
        logo="https://miro.medium.com/v2/resize:fit:800/1*TOGHpRhMF0wGXhsrCga94w.png"
        button="Pinia"
      />
      <AboutCard
        title="Vuetify "
        link="https://vuetifyjs.com/en/"
        description="A Vue Component Framework.
        Vuetify é uma biblioteca de UI de código aberto que não exige habilidades de design, com componentes Vue lindamente feitos à mão."
        logo="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-dark-atom.svg"/>
    </div>
  </main>
</template>

<style scoped>
h1 {
  text-align: center;
  color: #30a7d7;
  margin: 0;
}

a {
  text-decoration: none;
  color: #30a7d7;
}
</style>
