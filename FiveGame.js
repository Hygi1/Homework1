const choices = ["камень", "ножницы", "бумага"];

let score = {
  wins: 0,
  losses: 0,
  ties: 0,
};

function getUserChoice() {
  let choice = prompt("Выберите: камень, ножницы или бумага")
    .trim()
    .toLowerCase();
  while (!choices.includes(choice)) {
    choice = prompt("Неверный ввод! Выберите: камень, ножницы или бумага")
      .trim()
      .toLowerCase();
  }
  return choice;
}

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    score.ties++;
    return "Ничья!";
  } else if (
    (userChoice === "камень" && computerChoice === "ножницы") ||
    (userChoice === "ножницы" && computerChoice === "бумага") ||
    (userChoice === "бумага" && computerChoice === "камень")
  ) {
    score.wins++;
    return "Вы победили!";
  } else {
    score.losses++;
    return "Вы проиграли!";
  }
}

function rockPaperScissors() {
  const userChoice = getUserChoice();

  const computerChoice = getComputerChoice();

  const result = determineWinner(userChoice, computerChoice);

  const alertMessage =
    `Ваш выбор: ${userChoice}\n` +
    `Выбор компьютера: ${computerChoice}\n` +
    `Результат: ${result}\n\n` +
    `Счёт:\n` +
    `Победы: ${score.wins}\n` +
    `Поражения: ${score.losses}\n` +
    `Ничьи: ${score.ties}`;

  alert(alertMessage);
}
