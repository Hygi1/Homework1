// Задача 1

// const array = [1, 5, 4, 10, 0, 3];

// for (let i = 0; i < array.length; i++) {
//     if (array[i] === 10) {
//         console.log(array[i]);
//         break;
//     }
//     console.log(array[i]);
// }

//  Задача 2

//  const array = [1, 5, 4, 10, 0, 3];

// const index = array.indexOf(4);
// console.log(index);

// Задача 3

// const numbers = 1, 3, 5, 10, 20;

// const result = numbers.join(' ');
// console.log(result);

// Задача 4

// const rows = 3;
// const cols = 3;

// const matrix = [];

// for (let i = 0; i < rows; i++) {

//     matrix[i] = [];

//     for (let j = 0; j < cols; j++) {

//         matrix[i][j] = 1;
//     }
// }

// console.log(JSON.stringify(matrix, null, 2));

// Задача 5

// const array = [1, 1, 1];

// array.push(2, 2, 2);

// console.log(array);

// Задача 6

// const array = [9, 8, 7, 'a', 6, 5];

// const result = array
//   .filter(item => typeof item === 'number')
//   .sort((a, b) => a - b);

// console.log(result);

// Задача 7

// const numbers = [9, 8, 7, 6, 5];

// const userInput = prompt('Угадайте число из массива (от 5 до 9):');

// if (userInput === null) {
//     alert('Вы отменили игру');
// } else {

//     const userNumber = parseInt(userInput, 10);

//     if (numbers.includes(userNumber)) {
//         alert('Угадал!');
//     } else {
//         alert('Не угадал');
//     }
// }

// Задача 8

// const str = 'abcdef';

// const reversed = str.split('').reverse().join('');
// console.log(reversed);

// Задача 9

// const array = [
//   [1, 2, 3],
//   [4, 5, 6]
// ];

// const result1 = [].concat(...array);
// console.log(result1);

// Задача 10

// const numbers = [
//     Math.floor(Math.random() * 10) + 1,
//     Math.floor(Math.random() * 10) + 1,
//     Math.floor(Math.random() * 10) + 1,
//     Math.floor(Math.random() * 10) + 1,
//     Math.floor(Math.random() * 10) + 1
// ];

// console.log('Исходный массив:', numbers);

// for (let i = 0; i < numbers.length - 1; i++) {

//     const sum = numbers[i] + numbers[i + 1];

//     console.log(
//         `Сумма элементов ${numbers[i]} и ${numbers[i + 1]} = ${sum}`
//     );
// }

// Задача 11

// function getSquares(arr) {

//     if (!Array.isArray(arr)) {
//         throw new Error('Входной параметр должен быть массивом');
//     }

//     const result = [];

//     for (let i = 0; i < arr.length; i++) {

//         if (typeof arr[i] !== 'number') {
//             throw new Error('Все элементы массива должны быть числами');
//         }

//         result.push(arr[i] * arr[i]);
//     }

//     return result;
// }

// Задача 12

// function getWordLengths(wordsArray) {

//     if (!Array.isArray(wordsArray)) {
//         throw new Error('Входной параметр должен быть массивом');
//     }

//     const lengths = [];

//     for (let i = 0; i < wordsArray.length; i++) {

//         if (typeof wordsArray[i] !== 'string') {
//             throw new Error('Все элементы массива должны быть строками');
//         }

//         lengths.push(wordsArray[i].length);
//     }

//     return lengths;
// }

// Задача 13

// function getNegativeNumbers(numbersArray) {

//     if (!Array.isArray(numbersArray)) {
//         throw new Error('Входной параметр должен быть массивом');
//     }

//     const negativeNumbers = [];

//     for (let i = 0; i < numbersArray.length; i++) {

//         if (typeof numbersArray[i] !== 'number') {
//             throw new Error('Все элементы массива должны быть числами');
//         }

//         if (numbersArray[i] < 0) {
//             negativeNumbers.push(numbersArray[i]);
//         }
//     }

//     return negativeNumbers;
// }

// Задача 14

// const randomArray = Array.from({length: 10}, () =>
//  Math.floor(Math.random() * 11)
// );

// function getEvenNumbers(arr) {
//  return arr.filter(num => num % 2 === 0);
// }

// const evenNumbers = getEvenNumbers(randomArray);

// console.log('Исходный массив:', randomArray);
// console.log('Массив четных чисел:', evenNumbers);

// Задача 15

// function calculateAverage(arr) {
//   if (arr.length === 0) return 0;

//   const sum = arr.reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     0
//   );

//   return sum / arr.length;
// }

// const average = calculateAverage(randomArray);

// console.log("Исходный массив:", randomArray);
// console.log("Среднее арифметическое:", average.toFixed(2));

// Задача 1  Встроенные объекты

// const str = 'js';
// const upperStr = str.toUpperCase();
// console.log(upperStr); // Выведет: JS

// Задача 2  Встроенные объекты

// function filterByPrefix(arr, prefix) {

//   if (!Array.isArray(arr) || typeof prefix !== 'string') {
//     return [];
//   }

//   const lowerPrefix = prefix.toLowerCase();

//   return arr.filter(item => {

//     if (typeof item !== 'string' || item.length === 0) {
//       return false;
//     }

//     return item.toLowerCase().startsWith(lowerPrefix);
//   });
// }

// Задача 3  Встроенные объекты

// Math.floor(32.58884);
// Math.ceil(32.58884);
// Math.round(32.58884);

// Задача 4  Встроенные объекты

// const numbers = [52, 53, 49, 77, 21, 32];

// const min = Math.min(...numbers);
// const max = Math.max(...numbers);

// console.log('Минимальное значение:', min);
// console.log('Максимальное значение:', max);

// Задача 5  Встроенные объекты

// function printRandomNumber() {
//   const randomNum = Math.floor(Math.random() * 10) + 1;
//   console.log(randomNum);
// }

// printRandomNumber();

// Задача 6  Встроенные объекты

// function generateRandomArray(n) {
//   if (typeof n !== "number" || !Number.isInteger(n) || n <= 0) {
//     throw new Error("Аргумент должен быть положительным целым числом");
//   }

//   const length = Math.floor(n / 2);

//   const randomArray = [];
//   for (let i = 0; i < length; i++) {
//     const randomNum = Math.floor(Math.random() * (n + 1));
//     randomArray.push(randomNum);
//   }

//   return randomArray;
// }

// Задача 7  Встроенные объекты

// function getRandomInRange(min, max) {
//   if (typeof min !== "number" || typeof max !== "number") {
//     throw new Error("Аргументы должны быть числами");
//   }
//   if (!Number.isInteger(min) || !Number.isInteger(max)) {
//     throw new Error("Аргументы должны быть целыми числами");
//   }
//   if (min > max) {
//     throw new Error("Минимальное значение не может быть больше максимального");
//   }

//   min = Math.ceil(min);
//   max = Math.floor(max);

//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// Задача 8  Встроенные объекты

// const now = new Date();
// console.log(now);

// Задача 9  Встроенные объекты

// const currentDate = new Date();
// const futureDate = new Date(currentDate);
// futureDate.setDate(currentDate.getDate() + 73);

// console.log('Текущая дата:', currentDate.toLocaleDateString());
// console.log('Дата через 73 дня:', futureDate.toLocaleDateString());

// Задача 10  Встроенные объекты

// function formatDate(date) {

//   const months = [
//     'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
//     'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
//   ];

//   const weekdays = [
//     'воскресенье', 'понедельник', 'вторник', 'среда',
//     'четверг', 'пятница', 'суббота'
//   ];

//   const day = date.getDate();
//   const monthIndex = date.getMonth();
//   const year = date.getFullYear();
//   const weekdayIndex = date.getDay();

//   const hours = String(date.getHours()).padStart(2, '0');
//   const minutes = String(date.getMinutes()).padStart(2, '0');
//   const seconds = String(date.getSeconds()).padStart(2, '0');

//   return `Дата: ${day} ${months[monthIndex]} ${year} — это ${weekdays[weekdayIndex]}.\nВремя: ${hours}:${minutes}:${seconds}`;
// }
