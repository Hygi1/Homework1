const numbers = [9, 8, 7, 6, 5];

const userInput = prompt("Угадайте число из массива (от 5 до 9):");

if (userInput === null) {
  alert("Вы отменили игру");
} else {
  const userNumber = parseInt(userInput, 10);

  if (numbers.includes(userNumber)) {
    alert("Угадал!");
  } else {
    alert("Не угадал");
  }
}
