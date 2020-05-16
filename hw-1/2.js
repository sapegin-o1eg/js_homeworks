'use strict';

var admin = null;
var name = null;

name = "Василий";
admin = name;
name = "Проверка на копирование по значению а не по ссылке";

alert(admin);