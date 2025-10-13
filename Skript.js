function getWordLengths(wordsArray) {
  if (!Array.isArray(wordsArray)) {
    throw new Error("Входной параметр должен быть массивом");
  }

  const lengths = [];

  for (let i = 0; i < wordsArray.length; i++) {
    if (typeof wordsArray[i] !== "string") {
      throw new Error("Все элементы массива должны быть строками");
    }

    lengths.push(wordsArray[i].length);
  }

  return lengths;
}

function getWordLengthsMap(wordsArray) {
  return wordsArray.map((word) => word.length);
}

// Пример использования:
const words = ["привет", "мир", "javascript", "функция"];
const lengths = getWordLengths(words);
console.log(lengths);

const lengthsMap = getWordLengthsMap(words);
console.log(lengthsMap);
