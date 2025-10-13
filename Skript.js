const randomArray = Array.from({ length: 10 }, () =>
  Math.floor(Math.random() * 11)
);

function getEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}

const evenNumbers = getEvenNumbers(randomArray);

console.log("Исходный массив:", randomArray);
console.log("Массив четных чисел:", evenNumbers);
