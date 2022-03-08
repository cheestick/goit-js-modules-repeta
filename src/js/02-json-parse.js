const validJSON = '{ "name": "Mango", "age": 3 }';
const invalidJSON = '{ backend has returned such a miracle }';

try {
  console.log(1);

  console.log(JSON.parse(invalidJSON));

  console.log(2);
} catch (error) {
  console.log(error);
  if (error.name === 'SyntaxError') {
    console.log('JSON parse error. Do something!');
  }
}

console.log('After try..catch');
