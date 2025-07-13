function getMinNumber(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
console.log(getMinNumber(8, 4));

function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    return "Число четное";
  } else {
    return "Число нечетное";
  }
}
function printSquareToConsole(number) {
  const square = number * number;
  console.log(`Квадрат числа ${number} равен ${square}`);
}

printSquareToConsole(5);

function checkUserAge() {
  const age = prompt("Сколько вам лет?");

  if (isNaN(age)) {
    alert("Пожалуйста, введите число");
    return;
  }

  const userAge = parseInt(age);

  if (userAge < 0) {
    alert("Вы ввели неправильное значение");
  } else if (userAge >= 0 && userAge <= 12) {
    alert("Привет, друг!");
  } else {
    alert("Добро пожаловать!");
  }
}
function multiplyNumbers(num1, num2) {
  const number1 = Number(num1);
  const number2 = Number(num2);

  if (isNaN(number1) || isNaN(number2)) {
    return "Одно или оба значения не являются числом";
  }

  return number1 * number2;
}

console.log(multiplyNumbers(5, 10));
console.log(multiplyNumbers("a", 5));
console.log(multiplyNumbers(7, "b"));
console.log(multiplyNumbers("3", "4"));

function checkAndCubeNumber() {
  const input = prompt("Введите число:");

  const number = Number(input);

  if (isNaN(number)) {
    return "Переданный параметр не является числом";
  }

  const cube = number ** 3;

  return `Число ${number} в кубе равняется ${cube}`;
}

for (let i = 0; i <= 10; i++) {
  console.log(checkAndCubeNumber(i));
}

function Circle(radius) {
  this.radius = radius;

  this.getArea = function () {
    return Math.PI * Math.pow(this.radius, 2);
  };

  this.getPerimeter = function () {
    return 2 * Math.PI * this.radius;
  };
}

const circle1 = new Circle(5);
const circle2 = new Circle(10);

console.log("Круг 1:");
console.log("Радиус:", circle1.radius);
console.log("Площадь:", circle1.getArea().toFixed(2));
console.log("Периметр:", circle1.getPerimeter().toFixed(2));

console.log("\nКруг 2:");
console.log("Радиус:", circle2.radius);
console.log("Площадь:", circle2.getArea().toFixed(2));
console.log("Периметр:", circle2.getPerimeter().toFixed(2));
