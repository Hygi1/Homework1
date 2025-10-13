function getSquares(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Входной параметр должен быть массивом");
  }

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      throw new Error("Все элементы массива должны быть числами");
    }

    result.push(arr[i] * arr[i]);
  }

  return result;
}

// Пример использования:
const numbers = [1, 2, 3, 4, 5];
const squares = getSquares(numbers);
console.log(squares);
