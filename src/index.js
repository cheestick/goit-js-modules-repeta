import './sass/main.scss';

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  articlesContainer: document.querySelector('.js-articles-container'),
};

const options = {
  headers: {
    Authorization: '4c849de3a17848fba6b5da568b220f90',
  },
};

const url = 'https://newsapi.org/v2/everything?q=cat&language=en&pageSize=5&page=1';

fetch(url, options)
  .then(r => r.json())
  .then(console.log);
// fetch('https://newsapi.org/v2/everything?q=cat&language=en&pageSize=5&page=2', options)
//   .then(r => r.json())
//   .then(console.log);
