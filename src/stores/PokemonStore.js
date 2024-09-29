import { defineStore } from 'pinia'

export const usePokemonStore = defineStore('PokemonStore', {  
  state: () => ({
    pokemonList: [],
    pokemonIndex: 1,
    pokemonDetails: {},
    nextPokemon: {},
    previousPokemon: {},
    generation: 'Geração 1 (Kanto)',
    generations: [
      'Geração 1 (Kanto)',
      'Geração 2 (Johto)',
      'Geração 3 (Hoenn)',
      'Geração 4 (Sinnoh)',
      'Geração 5 (Unys)',
      'Geração 6 (Kalos)',
      'Geração 7 (Alola)',
      'Geração 8 (Galar & Hisui)',
      'Geração 9 (Paldea)'
    ],
    sort: 'Número crescente',
    sorts: ['Número crescente', 'Número decrescente', 'A-Z', 'Z-A']
  }),
 
  getters: {
    shortPokemonList: (state) => {
      return state.pokemonList.slice(0, 12)
    }
  },
  
  actions: {
    async fetchPokemons(pokemonList, start_index, number) {     
      const showMoreButton = document.getElementById('show-more-button')
      const loader = document.getElementById('loader')
      if (showMoreButton && loader) {
        showMoreButton.classList.add('d-none')
        loader.classList.remove('d-none')
      }

      this.pokemonList = pokemonList
      let newList = []
      for (let i = start_index; i <= start_index + number - 1; i++) {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + i).then((response) =>
          response.json()
        )
        const pokemon = {
          id: response.id,
          name: response.forms[0].name,
          types: response.types.map((type) => type.type.name)
        }
        if (pokemon.id < 10) {
          pokemon.picture =
            'https://assets.pokemon.com/assets/cms2/img/pokedex/full/00' + pokemon.id + '.png'
        } else if (pokemon.id < 100) {
          pokemon.picture =
            'https://assets.pokemon.com/assets/cms2/img/pokedex/full/0' + pokemon.id + '.png'
        } else {
          pokemon.picture =
            'https://assets.pokemon.com/assets/cms2/img/pokedex/full/' + pokemon.id + '.png'
        }

        newList.push(pokemon)
      }
      this.pokemonList = this.pokemonList.concat(newList)
      if (this.sort != 'Ascending number') {
        this.sortPokemons(this.sort)
      }
      this.pokemonIndex = start_index + number
      
      if (showMoreButton && loader) {
        showMoreButton.classList.remove('d-none')
        loader.classList.add('d-none')
      }
    },
    async fetchDetails(id) {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + id).then((response) =>
        response.json()
      )
      this.pokemonDetails.id = response.id
      this.pokemonDetails.name = response.forms[0].name
      this.pokemonDetails.height = response.height
      this.pokemonDetails.weight = response.weight
      this.pokemonDetails.type = response.types.map((type) => type.type.name)
      const stats = response.stats.map((stat) => {
        return {
          name: stat.stat.name,
          value: stat.base_stat
        }
      })
      this.pokemonDetails.stats = stats
      if (this.pokemonDetails.id < 10) {
        this.pokemonDetails.picture =
          'https://assets.pokemon.com/assets/cms2/img/pokedex/full/00' +
          this.pokemonDetails.id +
          '.png'
      } else if (this.pokemonDetails.id < 100) {
        this.pokemonDetails.picture =
          'https://assets.pokemon.com/assets/cms2/img/pokedex/full/0' +
          this.pokemonDetails.id +
          '.png'
      } else {
        this.pokemonDetails.picture =
          'https://assets.pokemon.com/assets/cms2/img/pokedex/full/' +
          this.pokemonDetails.id +
          '.png'
      }
    },
    async nextPokemonDetails(id) {
      const nextId = id === 1010 ? 1 : parseInt(id, 10) + 1
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + nextId).then((response) =>
        response.json()
      )
      this.nextPokemon.id = response.id
      this.nextPokemon.name = response.forms[0].name
    },
    async previousPokemonDetails(id) {
      const previousId = id === 1 ? 1010 : parseInt(id, 10) - 1
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + previousId).then(
        (response) => response.json()
      )
      this.previousPokemon.id = response.id
      this.previousPokemon.name = response.forms[0].name
    },
    filterGeneration(newGeneration) {
      switch (newGeneration) {
        case 'Geração 1 (Kanto)':
          this.generation = 'Geração 1 (Kanto)'
          this.fetchPokemons([], 1, 12)
          break
        case 'Geração 2 (Johto)':
          this.generation = 'Geração 2 (Johto)'
          this.fetchPokemons([], 152, 12)
          break
        case 'Geração 3 (Hoenn)':
          this.generation = 'Geração 3 (Hoenn)'
          this.fetchPokemons([], 252, 12)
          break
        case 'Geração 4 (Sinnoh)':
          this.generation = 'Geração 4 (Sinnoh)'
          this.fetchPokemons([], 387, 12)
          break
        case 'Generation 5 (Unys)':
          this.generation = 'Generation 5 (Unys)'
          this.fetchPokemons([], 494, 12)
          break
        case 'Geração 6 (Kalos)':
          this.generation = 'Geração 6 (Kalos)'
          this.fetchPokemons([], 650, 12)
          break
        case 'Geração 7 (Alola)':
          this.generation = 'Geração 7 (Alola)'
          this.fetchPokemons([], 722, 12)
          break
        case 'Geração 8 (Galar & Hisui)':
          this.generation = 'Geração 8 (Galar & Hisui)'
          this.fetchPokemons([], 810, 12)
          break
        case 'Geração 9 (Paldea)':
          this.generation = 'Geração 9 (Paldea)'
          this.fetchPokemons([], 906, 12)
          break
        default:
          this.generation = 'Geração 1 (Kanto)'
          this.fetchPokemons([], 1, 12)
      }
    },
    sortPokemons(newSort) {
      switch (newSort) {
        case 'A-Z':
          this.sort = 'A-Z'
          this.pokemonList = this.pokemonList.sort((a, b) => {
            return a.name.localeCompare(b.name)
          })
          break
        case 'Z-A':
          this.sort = 'Z-A'
          this.pokemonList = this.pokemonList.sort((a, b) => {
            return b.name.localeCompare(a.name)
          })
          break
        case 'Ascending number':
          this.sort = 'Ascending number'
          this.pokemonList = this.pokemonList.sort((a, b) => {
            return a.id - b.id
          })
          break
        case 'Descending number':
          this.sort = 'Descending number'
          this.pokemonList = this.pokemonList.sort((a, b) => {
            return b.id - a.id
          })
          break
        default:
          this.sort = 'Ascending number'
          this.pokemonList = this.pokemonList.sort((a, b) => {
            return a.id - b.id
          })
      }
    },
    async fetchByName(name) {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + name)
        // .then(response => response.json())
        .then((response) => {
          if (response.status === 404) {
            return null
          } else {
            return response.json()
          }
        })
      return response
    }
  }
})
