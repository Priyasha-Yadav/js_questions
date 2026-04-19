// Lesson 3: Numbers and loops
// Focus: digits, prime numbers, Fibonacci, Armstrong numbers, and counting patterns.

function countDigits(number) {
  return Math.abs(number).toString().length;
}

function sumOfDigits(number) {
  return Math.abs(number)
    .toString()
    .split("")
    .reduce((total, digit) => total + Number(digit), 0);
}

function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let divisor = 2; divisor * divisor <= number; divisor += 1) {
    if (number % divisor === 0) {
      return false;
    }
  }

  return true;
}

function primesBetween(from, to) {
  const primes = [];

  for (let number = from; number <= to; number += 1) {
    if (isPrime(number)) {
      primes.push(number);
    }
  }

  return primes;
}

function isArmstrong(number) {
  const digits = number.toString().split("").map(Number);
  const power = digits.length;
  const total = digits.reduce((sum, digit) => sum + digit ** power, 0);
  return total === number;
}

function fibonacciSequence(steps) {
  if (steps <= 0) {
    return [];
  }

  if (steps === 1) {
    return [0];
  }

  const sequence = [0, 1];

  for (let index = 2; index < steps; index += 1) {
    sequence.push(sequence[index - 1] + sequence[index - 2]);
  }

  return sequence;
}

function factorial(number) {
  let result = 1;

  for (let i = 2; i <= number; i += 1) {
    result *= i;
  }

  return result;
}

function multiplicationTable(number, limit = 10) {
  const table = [];

  for (let multiplier = 1; multiplier <= limit; multiplier += 1) {
    table.push(`${number} x ${multiplier} = ${number * multiplier}`);
  }

  return table;
}

console.log("Digits in 3267:", countDigits(3267));
console.log("Sum of digits in 123:", sumOfDigits(123));
console.log("Is 34 prime?", isPrime(34));
console.log("Primes between 2 and 10:", primesBetween(2, 10));
console.log("Is 153 an Armstrong number?", isArmstrong(153));
console.log("Fibonacci sequence:", fibonacciSequence(5));
console.log("Factorial of 5:", factorial(5));
console.log("Table for 4:", multiplicationTable(4));
