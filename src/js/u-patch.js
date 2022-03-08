const BASE_URL = 'http://localhost:4040';

function updateBooksById(update, bookId) {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(update),
  };

  return fetch(`${BASE_URL}/books/${bookId}`, options).then(res => res.json());
}

updateBooksById({ title: 'Newes BBIGGESSTT HTML test book' }, 13).then(console.log);
updateBooksById({ rating: 1 }, 18);
updateBooksById({ rating: 4, author: 'Mango' }, 17);
