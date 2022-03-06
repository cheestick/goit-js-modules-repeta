import NewsApiService from './js/news-service.js';
import './sass/main.scss';
import articlesTpl from './templates/articles.hbs';
import LoadMoreBtn from './js/components/load-more-btn';

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  articlesContainer: document.querySelector('.js-articles-container'),
};

const loadMoreBtn = new LoadMoreBtn({ selector: '[data-action="load-more"]', hidden: true });
const newsApiService = new NewsApiService();

refs.searchForm.addEventListener('submit', onSearch);
loadMoreBtn.refs.button.addEventListener('click', onLoadMore);

function onSearch(e) {
  e.preventDefault();

  newsApiService.query = e.currentTarget.elements.query.value;

  if (newsApiService.query.trim() === '') return alert('Enter something!');
  loadMoreBtn.show();
  loadMoreBtn.disable();
  newsApiService.resetPage();
  newsApiService.fetchArticles(searchQuery).then(articles => {
    clearArticlesContainer();
    appendArticlesMarkup(articles);
    loadMoreBtn.enable();
  });
}

function onLoadMore() {
  loadMoreBtn.disable();
  newsApiService.fetchArticles(searchQuery).then(articles => {
    appendArticlesMarkup(articles);
    loadMoreBtn.enable();
  });
}

function appendArticlesMarkup(articles) {
  refs.articlesContainer.insertAdjacentHTML('beforeend', articlesTpl(articles));
}

function clearArticlesContainer() {
  refs.articlesContainer.innerHTML = '';
}
