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
fetch(
  'https://api.weatherstack.com/current?access_key=addb9340d3bd931230aeb471899ebea6&query=39.9042,116.4074',
);

const url = 'https://newsapi.org/v2/everything?q=cars';
const options = {
  headers: {
    'X-Api-Key': '4330ebfabc654a6992c2aa792f3173a3',
  },
};

fetch(url, options);

const urlDogs = 'https://newsapi.org/v2/everything?q=dogs';
const opt = {
  headers: {
    Authorization: '4330ebfabc654a6992c2aa792f3173a3',
  },
};

fetch(urlDogs, opt);
