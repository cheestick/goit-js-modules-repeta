import pokemonCardTml from '../templates/pokemon-card';

const refs = {
  cardContainer: document.querySelector('.js-card-container'),
  searchForm: document.querySelector('.js-search-form'),
};

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const searchQuery = form.elements.query.value;
  if (!searchQuery.trim()) {
    alert('Please, type pokemon ID');
    return;
  }

  fetchPokemonById(searchQuery)
    .then(renderPokemonCard)
    .catch(onFetchError)
    .finally(() => form.reset());
}

function fetchPokemonById(pokemonId) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
  return fetch(url).then(response => response.json());
  // .then(pokemon => {
  //   console.log(pokemon);
  //   renderPokemonCard(pokemon);
  // })
}

function renderPokemonCard(pokemon) {
  const markup = pokemonCardTml(pokemon);
  console.log(markup);
  refs.cardContainer.innerHTML = markup;
}

function onFetchError(error) {
  console.log(error);
  alert('Ooops! Something gone wrong.');
}
