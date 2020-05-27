'use strict';

/*
Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока), конструктор Product, который
принимает параметры name и price, сохраните их как свойства объекта. Также объекты типа Product
должны иметь метод make25PercentDiscount, который будет уменьшать цену в объекте на 25%.
 */

/**
 * Product class
 *
 * @constructor
 * @param {String} name - Наименование продукта
 * @param {Number} price - Цена
 */
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  /**
   * Применить 25% скидку к продукту
   */
  make25PercentDiscount() {
    this.price = this.price * 0.75
  }
}

const product1 = new Product('Велосипед', 10000);
console.log(`Продукт "${product1.name}", Цена без скидки: ${product1.price}`);

product1.make25PercentDiscount();
console.log(`Продукт "${product1.name}", Цена со скидкой 25%: ${product1.price}`);
