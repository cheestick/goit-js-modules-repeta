import pokemonCardTml from '../templates/pokemon-card';

const refs = {
  cardContainer: document.querySelector('.js-card-container'),
};

fetch('https://pokeapi.co/api/v2/pokemon/2')
  .then(response => response.json())
  // .then(pokemon => {
  //   console.log(pokemon);
  //   renderPokemonCard(pokemon);
  // })
  .then(renderPokemonCard)
  .catch(error => console.log(error));

function renderPokemonCard(pokemon) {
  const markup = pokemonCardTml(pokemon);
  console.log(markup);
  refs.cardContainer.insertAdjacentHTML('afterbegin', markup);
}
