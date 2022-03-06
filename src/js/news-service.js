const API_KEY = '4c849de3a17848fba6b5da568b220f90';
const BASE_URL = 'https://newsapi.org/v2';

const options = {
  headers: {
    Authorization: API_KEY,
  },
};

export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchArticles(searchQuery) {
    // console.log(this);

    const url = `${BASE_URL}/everything?q=${this.searchQuery}&language=en&pageSize=5&page=${this.page}`;

    return fetch(url, options)
      .then(r => r.json())
      .then(({ articles }) => {
        this.incrementPage();
        return articles;
      });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
