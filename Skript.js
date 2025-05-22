let a = 10;
alert(a);
a = 20;
alert(a);

let a = 10;
alert(a);
a = 20;
alert(a);

let a = 10;
alert(a);
a = 20;
alert(a);
const firstIPhoneYear = 2007;
alert(firstIPhoneYear);

const a = 10;
const b = 2;
alert(
  `Сумма: ${a + b}\nРазность: ${a - b}\nПроизведение: ${a * b}\nЧастное: ${
    a / b
  }`
);

const result = 2 ** 5; // Возведение в степень (2^5 = 32)
alert(result);

const a = 9;
const b = 2;
const remainder = a % b;
alert(remainder);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);
const age = prompt("Сколько вам лет?");
alert(`Вам ${age} лет!`);

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

let password = "пароль";
let userInput = prompt("Введите пароль");
if (userInput === password) console.log("Пароль введен верно");
else console.log("Пароль введен неправильно");

let c = 2;
if (c > 0 && c < 10) {
  console.log("Верно");
} else {
  console.log("Неверно");
}
c = 0;
if (c > 0 && c < 10) console.log("Верно");
else console.log("Неверно");
c = 10;
if (c > 0 && c < 10) console.log("Верно");
else console.log("Неверно");
c = -3;
if (c > 0 && c < 10) console.log("Верно");
else console.log("Неверно");
c = 2;
if (c > 0 && c < 10) console.log("Верно");
else console.log("Неверно");

let d = 24;
let e = 46;
if (d > 100 || e > 100) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

let a = "2";
let b = "3";
alert(+a + +b);

let monthNumber = 12;

switch (monthNumber) {
  case 12:
  case 1:
  case 2:
    console.log("Зима");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Весна");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Лето");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Осень");
    break;
  default:
    console.log("Ошибка");
}
