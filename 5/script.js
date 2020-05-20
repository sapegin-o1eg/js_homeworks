'use strict';

/*
Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических
операций
(использовать функции из задания 4) и вернуть полученное значение.
 */

console.log(mathOperation(2, 4, "sum"));
console.log(mathOperation(2, 4, "sub"));
console.log(mathOperation("2", 4, "mul"));
console.log(mathOperation(2, 4, "div"));

/**
 * В зависимости от переданного значения операции (operation)
 * выполняет одну из арифметически операций над двумя числами
 * @param {number} arg1 - первое число
 * @param {number} arg2 - второе число
 * @param {string} operation=("sum"|"sub"|"mul"|"div) - одна из четырех операций
 * @return {number} Результат операции
 */
function mathOperation(arg1, arg2, operation) {
  switch (operation) {
    case "sum":
      return sumTwoNumbers(arg1, arg2);
    case "sub":
      return subTwoNumbers(arg1, arg2);
    case "mul":
      return mulTwoNumbers(arg1, arg2);
    case "div":
      return divTwoNumbers(arg1, arg2);
    default:
      console.warn(`Ведено недопустимое значене: ${operation}`);
  }
}

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
