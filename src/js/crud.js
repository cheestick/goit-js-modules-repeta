const BASE_URL = 'http://localhost:4040';

function addBook(book) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  };

  return fetch(`${BASE_URL}/books`, options).then(res => res.json());
}

function renderBook(book) {
  console.log('Backend response: draw UI');
  console.log(book);
}
