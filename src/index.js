import NewsApiService from './js/news-service.js';
import './sass/main.scss';
import articlesTpl from './templates/articles.hbs';

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  articlesContainer: document.querySelector('.js-articles-container'),
  loadMore: document.querySelector('[data-action="load-more"]'),
};

const newsApiService = new NewsApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMore.addEventListener('click', onLoadMore);

function onSearch(e) {
  e.preventDefault();
  newsApiService.query = e.currentTarget.elements.query.value;
  if (newsApiService.query.trim() === '') return alert('Enter something!');
  newsApiService.resetPage();
  newsApiService.fetchArticles(searchQuery).then(articles => {
    clearArticlesContainer();
    appendArticlesMarkup(articles);
  });
}

function onLoadMore() {
  newsApiService.fetchArticles(searchQuery).then(appendArticlesMarkup);
}

function appendArticlesMarkup(articles) {
  refs.articlesContainer.insertAdjacentHTML('beforeend', articlesTpl(articles));
}

function clearArticlesContainer() {
  refs.articlesContainer.innerHTML = '';
}
