const user = {
  name: "Данил",
  age: 24,
  isAdmin: true,
};

alert(`Данные пользователя:
  Имя: ${user.name}
  Возраст: ${user.age}
  Админ: ${user.isAdmin ? "Да" : "Нет"}`);

const userName = prompt("Как вас зовут?") || "Гость";
alert(`Привет, ${userName}!`);
