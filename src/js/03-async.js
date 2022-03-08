function getFruit(name) {
  const fruits = {
    strawberry: '🍓',
    kiwi: '🥝 ',
    apple: '🍎',
  };

  return new Promise((resolve, reject) => setTimeout(() => resolve(fruits[name]), 500));
}

async function aMakeSmoothie() {
  try {
    console.time('aMakeSmoothie');
    const apple = getFruit('apple');
    const kiwi = getFruit('kiwi');
    const berry = getFruit('strawberry');

    const fruits = await Promise.all([apple, kiwi, berry]);
    console.log(fruits);

    console.timeEnd('aMakeSmoothie');

    return fruits;
  } catch (error) {
    console.log('ERROR ' + error);
  }
}

aMakeSmoothie().then(console.log);

console.log('sync code');

function makeSmoothie() {
  getFruit('apple').then(apple => {
    console.log(apple);
    getFruit('kiwi').then(console.log);
  });
}

// //ASYNC sintax variations:

// async function fn() {}

// const fn = async function () {};

// const arr = async () => {};

// const x = {
//   async getName() {},
// };

// class X {
//   async getName() {}
// }
