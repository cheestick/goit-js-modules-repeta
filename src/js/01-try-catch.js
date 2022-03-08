// Обработка ошибок с try...catch
//  - Синтаксис
//  - Какие ошибки ловит
//    - ❌ ошибки парсинга (parsing errors)
//    - ✅ ошибки выполнения (runtime errors)
//  - Ловит только ошибки в синхронном коде
//    - Как словить ошибку в асинхронном коде
//  - Объект ошибки
//    - name
//    - message
//    - stack
//  - Блок catch без объекта ошибки

// only sync code

try {
  console.log('inside TRY before myVar');

  myVar;

  console.log('inside TRY after myVar');
} catch (error) {
  console.dir(error);
  console.log('Error!');
}

console.log('After try..catch');

// setTimeout(() => {
//   try {
//     myVar;
//   } catch (error) {
//     console.log('Async ERROR!');
//   }
// }, 1000);
