const numbers = [
  Math.floor(Math.random() * 10) + 1,
  Math.floor(Math.random() * 10) + 1,
  Math.floor(Math.random() * 10) + 1,
  Math.floor(Math.random() * 10) + 1,
  Math.floor(Math.random() * 10) + 1,
];

console.log("Исходный массив:", numbers);

for (let i = 0; i < numbers.length - 1; i++) {
  const sum = numbers[i] + numbers[i + 1];

  console.log(`Сумма элементов ${numbers[i]} и ${numbers[i + 1]} = ${sum}`);
}
