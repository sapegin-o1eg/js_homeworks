'use strict';


let a = 2;
let x = 1 + (a *= 2);

/*
1.  Число 2 присваевается переменной "a" (a=2)
2.  Вычисляется выражение в скобках, т.к. обладает наивысшим приоритетом
    Значение переменной "a" (a=2) умножается на число 2, а результат (4) присваевается переменной "a" (a=4)
3.  Вычисляется выражение 1 + 4, результат (4) присваевается переменной "x" (x=4)
*/