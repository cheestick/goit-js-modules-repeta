export default class NewsApiService {
  constructor() {}

  fetchArticles(searchQuery) {
    const options = {
      headers: {
        Authorization: '4c849de3a17848fba6b5da568b220f90',
      },
    };

    const url = `https://newsapi.org/v2/everything?q=${searchQuery}&language=en&pageSize=5&page=1`;

    fetch(url, options)
      .then(r => r.json())
      .then(console.log);
  }
}
