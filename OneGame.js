let secretNumber;
let attempts = 0;
let gameStarted = false;

function startGame() {
  if (!gameStarted) {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    gameStarted = true;
    playGame();
  }
}

function playGame() {
  if (!gameStarted) return;

  let userInput = prompt(
    "Угадайте число от 1 до 100 (Попыток: " + attempts + ")"
  );

  if (userInput === null) {
    gameStarted = false;
    return;
  }

  let guess = parseInt(userInput);
  attempts++;

  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert("Введите число от 1 до 100!");
    playGame();
    return;
  }

  if (guess === secretNumber) {
    alert("Поздравляем! Вы угадали число за " + attempts + " попыток!");
    gameStarted = false;
  } else if (guess < secretNumber) {
    alert("Загаданное число больше!");
    playGame();
  } else {
    alert("Загаданное число меньше!");
    playGame();
  }
}

function resetGame() {
  gameStarted = false;
  attempts = 0;
}
