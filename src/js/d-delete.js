const BASE_URL = 'http://localhost:4040';

function deleteBooksById(update, bookId) {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(update),
  };

  return fetch(`${BASE_URL}/books/${bookId}`, options).then(res => res.json());
}
