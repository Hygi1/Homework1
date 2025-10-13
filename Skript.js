function getNegativeNumbers(numbersArray) {
  if (!Array.isArray(numbersArray)) {
    throw new Error("Входной параметр должен быть массивом");
  }

  const negativeNumbers = [];

  for (let i = 0; i < numbersArray.length; i++) {
    if (typeof numbersArray[i] !== "number") {
      throw new Error("Все элементы массива должны быть числами");
    }

    if (numbersArray[i] < 0) {
      negativeNumbers.push(numbersArray[i]);
    }
  }

  return negativeNumbers;
}

function getNegativeNumbersFilter(numbersArray) {
  return numbersArray.filter((num) => num < 0);
}

// Пример использования:
const numbers = [1, -2, 3, -4, 5, -6, 7, 8, -9];
const negatives = getNegativeNumbers(numbers);
console.log(negatives);

const negativesFilter = getNegativeNumbersFilter(numbers);
console.log(negativesFilter);
