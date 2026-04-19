// Lesson 1: JavaScript foundations
// Focus: variables, arithmetic, swapping values, comparisons, loops, and switch statements.

console.log("Hello Computer");

const profile = {
  name: "Priyasha",
  address: "86/xyz, Gorwa, Vadodara, Gujarat",
  city: "Vadodara",
};

console.log(profile);

function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

console.log("Addition:", add(43, 34));
console.log("Subtraction:", subtract(54, 7));
console.log("Multiplication:", multiply(5, 5676));
console.log("Division:", divide(3746823765, 5));

function swapWithTemp(number1, number2) {
  const temp = number1;
  number1 = number2;
  number2 = temp;
  return [number1, number2];
}

function swapWithDestructuring(number1, number2) {
  [number1, number2] = [number2, number1];
  return [number1, number2];
}

console.log("Swap with temp:", swapWithTemp(4, 5));
console.log("Swap with destructuring:", swapWithDestructuring(3, 5));

function maxOfTwo(number1, number2) {
  return number1 > number2 ? number1 : number2;
}

function maxOfThree(number1, number2, number3) {
  return Math.max(number1, number2, number3);
}

function minOfTwo(number1, number2) {
  return number1 < number2 ? number1 : number2;
}

function minOfThree(number1, number2, number3) {
  return Math.min(number1, number2, number3);
}

console.log("Max of two:", maxOfTwo(10, 20));
console.log("Max of three:", maxOfThree(10, 20, 15));
console.log("Min of two:", minOfTwo(10, 20));
console.log("Min of three:", minOfThree(10, 20, 15));

function isEven(number) {
  return number % 2 === 0;
}

console.log("Is 87 even?", isEven(87));
console.log("Is 88 even?", isEven(88));

function factorial(number) {
  let result = 1;
  for (let i = 2; i <= number; i += 1) {
    result *= i;
  }
  return result;
}

console.log("Factorial of 5:", factorial(5));

for (let number = 1; number <= 10; number += 1) {
  console.log("Count 1 to 10:", number);
}

for (let number = 101; number <= 130; number += 1) {
  console.log("Count 101 to 130:", number);
}

function getMonthName(monthNumber) {
  switch (monthNumber) {
    case 1:
      return "January";
    case 2:
      return "February";
    case 3:
      return "March";
    case 4:
      return "April";
    case 5:
      return "May";
    case 6:
      return "June";
    case 7:
      return "July";
    case 8:
      return "August";
    case 9:
      return "September";
    case 10:
      return "October";
    case 11:
      return "November";
    case 12:
      return "December";
    default:
      return "Invalid month number";
  }
}

console.log("Month 4:", getMonthName(4));
