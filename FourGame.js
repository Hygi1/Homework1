const quiz = [
  {
    question: "В каком году Христофор Колумб открыл Америку?",
    options: ["1. 1492", "2. 1502", "3. 1607"],
    correctAnswer: 1,
  },
  {
    question: "Кто написал «Мону Лизу»?",
    options: ["1. Микеланджело", "2. Леонардо да Винчи", "3. Рафаэль"],
    correctAnswer: 2,
  },
  {
    question: "Какая империя пала в 476 году н.э.?",
    options: ["1. Османская", "2. Римская", "3. Византийская"],
    correctAnswer: 2,
  },
  {
    question: "Кто был первым президентом США?",
    options: [
      "1. Джордж Вашингтон",
      "2. Авраам Линкольн",
      "3. Томас Джефферсон",
    ],
    correctAnswer: 1,
  },
  {
    question: "Когда закончилась Вторая мировая война?",
    options: ["1. 1944", "2. 1950", "3. 1945"],
    correctAnswer: 3,
  },
];

function startQuiz() {
  let score = 0;

  for (let i = 0; i < quiz.length; i++) {
    const q = quiz[i];

    let questionText = q.question + "\n\n";
    for (let j = 0; j < q.options.length; j++) {
      questionText += q.options[j] + "\n";
    }

    const userInput = prompt(questionText);

    if (userInput === null) {
      alert("Викторина прервана!");
      return;
    }

    if (!userInput.trim() || isNaN(userInput)) {
      alert("Введите номер ответа (1, 2 или 3)");
      continue;
    }

    const answer = parseInt(userInput);
    if (answer === q.correctAnswer) {
      score++;
    }
  }

  alert(`Викторина завершена!\nПравильных ответов: ${score} из ${quiz.length}`);
}
