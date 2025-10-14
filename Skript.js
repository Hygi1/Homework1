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
