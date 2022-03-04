import pokemonCardTml from '../templates/pokemon-card';
import API from './api-service';
import getRefs from './get-refs';

const refs = getRefs();

refs.searchForm.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const searchQuery = form.elements.query.value;
  if (!searchQuery.trim()) {
    alert('Please, type pokemon ID');
    return;
  }

  API.fetchPokemonById(searchQuery)
    .then(renderPokemonCard)
    .catch(onFetchError)
    .finally(() => form.reset());
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

//request parameters: pokemon?limit=100&offset=200

fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200');
fetch('https://pixabay.com/api/?key=4823621-792051e21e56534e6ae2e472f&q=cat&image_type=photo');
