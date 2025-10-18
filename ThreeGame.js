function reverseText(str) {
  return str.split("").reverse().join("");
}

function flipTextGame() {
  const input = prompt("Введите текст:");
  if (input === null) return alert("Отмена");
  if (!input.trim()) return alert("Пустой ввод!");
  alert(`Результат:\n${reverseText(input)}`);
}
