const randomArray = Array.from(
  { length: 6 },
  () => Math.floor(Math.random() * 10) + 1
);

function calculateAverage(arr) {
  if (arr.length === 0) return 0;

  const sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  return sum / arr.length;
}

const average = calculateAverage(randomArray);

console.log("Исходный массив:", randomArray);
console.log("Среднее арифметическое:", average.toFixed(2));
