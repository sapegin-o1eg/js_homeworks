'use strict';

/*
4 Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку
15%, можете использовать метод forEach https://mzl.la/1AOMMWX :
 */

const products = [
  {
    id: 3,
    price: 200,
  },
  {
    id: 4,
    price: 900,
  },
  {
    id: 1,
    price: 1000,
  },
];

console.log('изначальные цены');
for (let product of products) {
  console.log(`id=${product.id}, цена=${product.price}`);
}

products.forEach((product, idx) => {
  products[idx].price = product.price * 0.85
});

console.log('цены со скидкой 15%💰🛒💵');
for (let product of products) {
  console.log(`id=${product.id}, цена=${product.price}`);
}
