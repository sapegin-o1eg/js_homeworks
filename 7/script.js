'use strict';

/*
7 Нарисовать горку с помощью console.log (используя цикл for), как показано на рисунке,
только у вашей горки должно быть 20 рядов, а не 5:
x
xx
xxx
xxxx
xxxxx
 */

/**
 * Печатает в консоль горку с заданным количеством рядов
 * @param { number } n=5 - кол-во рядов
 * @param { string } char="5" - символ для печати горки
 */
function printHeapToConsole(n = 5, char = "*") {
  for (let i = 1; i <= n; i++) {
    console.log(Array(i + 1).join(char));
  }
}

printHeapToConsole(20, 'x');

console.log(Array(81).join("-"));

printHeapToConsole(3, "🌲");
