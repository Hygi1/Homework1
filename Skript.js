function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateOperation() {
  const operations = ["+", "-", "*", "/"];
  return operations[getRandomInt(0, 3)];
}

function mathQuiz() {
  const num1 = getRandomInt(1, 20);
  const num2 = getRandomInt(1, 20);
  const operation = generateOperation();

  let expression = `${num1} ${operation} ${num2}`;

  let correctAnswer;
  switch (operation) {
    case "+":
      correctAnswer = num1 + num2;
      break;
    case "-":
      correctAnswer = num1 - num2;
      break;
    case "*":
      correctAnswer = num1 * num2;
      break;
    case "/":
      correctAnswer = Math.floor(num1 / num2);
      break;
  }

  const userAnswer = prompt(`Решите пример: ${expression}`);

  if (userAnswer === null) {
    alert("Операция отменена");
  } else if (parseInt(userAnswer) === correctAnswer) {
    alert("Правильно! 🎉");
  } else {
    alert(`Неверно! Правильный ответ: ${correctAnswer}`);
  }
}

mathQuiz();
