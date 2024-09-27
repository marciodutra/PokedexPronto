// INFO: API related constants
export const DATA_LIMIT = 21
export const DATA_OFFSET = 0
export const IMAGE_BASE_URL =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork'
export const CACHE_KEY_ALL_POKEMONS = 'ALL_POKEMONS'
export const CACHE_KEY_POKEMON_ID_PREFIX = 'POKEMON_ID_'
export const CACHE_DURATION = 60 * 60 * 1000 // 1 hour

// INFO: UI related constants
export const SORT_OPTIONS = [
  { label: 'Pokedex', value: 'id' },
  { label: 'Pokédex invertida', value: '!id' },
  { label: 'Nome descendente', value: 'name' },
  { label: 'Nome ascendente', value: '!name' }
]
