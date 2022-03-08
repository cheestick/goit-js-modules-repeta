const BASE_URL = 'http://localhost:4040';

function removeBookById(bookId) {
  const url = `${BASE_URL}/books/${bookId}`;
  const options = {
    method: 'DELETE',
  };

  return fetch(url, options).then(res => res.json());
}

removeBookById(33).then(console.log);
