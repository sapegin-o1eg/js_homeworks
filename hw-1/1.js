'use strict';

let temperatureCelsius = prompt('Введите температуру в градусах Цельсия');
let temperatureFahrenheit = (9 / 5) * temperatureCelsius + 32;

if (isNaN(temperatureFahrenheit)) {
  alert('Введено недопустимое значение');
} else {
  alert(`${temperatureCelsius} degrees Celsius is equal to ${temperatureFahrenheit.toFixed(2)} degrees in Fahrenheit`);
}