// Quiz bank: JavaScript basics
// Each item includes the prompt, choices, and the correct answer for self-study.

const quizQuestions = [
  {
    prompt: "What happens after calling push on an array?",
    code: ["let a = [1, 2, 3];", "a.push(4);", "console.log(a);"],
    choices: ["[1, 2, 3]", "[1, 2, 3, 4]", "[4, 1, 2, 3]", "Error"],
    answer: "[1, 2, 3, 4]",
  },
  {
    prompt: "What is the result of adding a number and a string?",
    code: ["let x = 10;", "let y = '10';", "console.log(x + y);"],
    choices: ["20", "10", "NaN", "1010"],
    answer: "1010",
  },
  {
    prompt: "What does delete do to an object property?",
    code: ["let obj = { name: 'Deep', age: 17 };", "delete obj.name;", "console.log(obj);"],
    choices: ["Keeps both properties", "Removes name", "Removes age", "Throws an error"],
    answer: "Removes name",
  },
  {
    prompt: "Which type stores true or false values?",
    choices: ["Boolean", "Number", "String", "Null"],
    answer: "Boolean",
  },
  {
    prompt: "What is the difference between == and ===?",
    code: ["console.log(10 == '10');", "console.log(10 === '10');"],
    choices: ["Both are false", "Both are true", "Loose equality and strict equality", "No difference"],
    answer: "Loose equality and strict equality",
  },
];

function printQuiz(questions) {
  questions.forEach((question, index) => {
    console.log(`Question ${index + 1}: ${question.prompt}`);

    if (question.code) {
      question.code.forEach((line) => console.log(line));
    }

    question.choices.forEach((choice, choiceIndex) => {
      console.log(`  ${choiceIndex + 1}. ${choice}`);
    });

    console.log(`Answer: ${question.answer}`);
    console.log("");
  });
}

printQuiz(quizQuestions);
