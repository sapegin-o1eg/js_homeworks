'use strict';

/*
Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя
параметрами. Т.е. например, функция для сложения должна принимать два числа, складывать их
и возвращать результат.
Обязательно использовать оператор return.
 */

console.log(sumTwoNumbers(1, 2));
console.log(subTwoNumbers(1, 2));
console.log(mulTwoNumbers(1, "2"));
console.log(divTwoNumbers(1, 2));

/**
 * Проверяет является ли аргумент числом
 * @param {number} n - что нужно проверить
 * @return {boolean} Является ли аргумент числом
 */
function inputIsValid (n) {
  if (typeof n === 'number' && !isNaN(n)) {
    return true;
  }
  console.warn(`Недопустимые данные: ${n}`);
  return false;
}

/**
 * @param {number} a - первый аргумент
 * @param {number} b - второй аргумент
 * @return {number} Сумма двух аргументов
 */
function sumTwoNumbers(a, b) {
  const _a = Number(a);
  const _b = Number(b);

  if (inputIsValid(_a) && inputIsValid(_b)) {
    return _a + _b;
  }
}

/**
 * @param {number} a - первый аргумент
 * @param {number} b - второй аргумент
 * @return {number} Разность двух аргументов
 */
function subTwoNumbers(a, b) {
  const _a = Number(a);
  const _b = Number(b);

  if (inputIsValid(_a) && inputIsValid(_b)) {
    return _a - _b;
  }
}

/**
 * @param {number} a - первый аргумент
 * @param {number} b - второй аргумент
 * @return {number} Произведение двух аргументов
 */
function mulTwoNumbers(a, b) {
  const _a = Number(a);
  const _b = Number(b);

  if (inputIsValid(_a) && inputIsValid(_b)) {
    return _a * _b;
  }
}

/**
 *
 * @param {number} a - первый аргумент
 * @param {number} b - второй аргумент
 * @return {number} Частное двух аргументов
 */
function divTwoNumbers(a, b) {
  const _a = Number(a);
  const _b = Number(b);

  if (inputIsValid(_a) && inputIsValid(_b)) {
    return _a / _b;
  }
}
