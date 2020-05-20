'use strict';


//пример 1
let a = 1, b = 1, c, d;
c = ++a;
alert(c); // ответ: 2
/*
1.  Объявляются переменные a, b, c, d
    Переменным a и b присваевается число 1
    Переменные с и d при этом содержат undefined
2.  Выполняется префиксный инкремент к переменной "a"
    При этом, сначала значение переменной "a" увеличивается на 1
    Затем новое значение переменной "a" (2) присваевается переменной "c"
3.  Выполняется метод alert объекта windows и появляется модальное окно со значением переменной "c" (2)
*/


//пример 2
d = b++;
alert(d); //ответ: 1
/*
1.  Выполняется постфиксный инкремент к переменной "b"
    При этом, сначала возвращается значение переменной "b" (b=1)
    А затем значение "b" увеличивается на 1 (b=2)
    Переменной "d" присваевается возвращенное значение постфиксного инкремента (1)
2.  Выполняется метод alert объекта windows и появляется модальное окно со значением переменной "d" (d=1)
*/

//пример 3
c = 2 + ++a;
alert(c); //ответ: 5
/*
1.  Выполняется префиксный инкремент к переменной "a" (a=2)
    При этом, сначала значение переменной "a" увеличивается на 1 (a=3)
    Затем возвращается новое значение переменной "a" (a=3)
2.  Затем вычисляется значение выражения 2 + 3 = 5
    Число 5 присваевается переменной "c"
3.  Выполняется метод alert объекта windows и появляется модальное окно со значением переменной "c" (c=5)
*/

//пример 4
d = 2 + b++;
alert(d); //ответ: 4
alert(a); //3
alert(b); //3
/*
1.  Выполняется постфиксный инкремент к переменной "b"
    При этом, сначала возвращается значение переменной "b" (b=2)
    А затем значение "b" увеличивается на 1 (b=3)
2.  Затем вычисляется значение выражения 2 + 2 = 4
    Тут 2 получено при возврате знаничения перед инкрементрированием, хотя фактически сейчас b=3
    Число 4 присваевается переменной "d"
3.  Выполняется метод alert объекта windows и появляется модальное окно со значением переменной "d" (d=4)
4.  Выполняется метод alert объекта windows и появляется модальное окно со значением переменной "a" (a=3)
    Из предыдущих комментариев видно, чему сейчас равна переменная "a"
4.  Выполняется метод alert объекта windows и появляется модальное окно со значением переменной "b" (b=3)
    Из предыдущих комментариев видно, чему сейчас равна переменная "b"
*/