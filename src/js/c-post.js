const BASE_URL = 'http://localhost:4040';

const newBook = {
  title: 'Will of Ukraine',
  author: 'Maksym Chystiakov',
  genres: ['memories'],
  rating: 9.89,
};

function addBook(book) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(book),
  };

  return fetch(`${BASE_URL}/books`, options).then(res => res.json());
}

addBook(newBook)
  .then(renderBook)
  .catch(error => console.log(error));

addBook({
  title: 'Pray of Ukraine',
  author: 'Maksym Chystiakov',
  genres: ['philosofy'],
  rating: 9.0,
}).then(renderBook);

addBook({
  title: 'Ukraine. The Liberty',
  author: 'Maksym Chystiakov',
  genres: ['politics'],
  rating: 8.5,
}).then(renderBook);

function renderBook(book) {
  console.log('Becked requested. lets draw an interface');
  console.log(book);
}
