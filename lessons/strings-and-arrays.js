// Lesson 2: Strings and arrays
// Focus: reversing strings, longest word, palindrome checks, array math, sorting, and substring checks.

function reverseString(text) {
  return text.split("").reverse().join("");
}

function findLongestWord(sentence) {
  const words = sentence.split(" ");
  let longestWord = words[0];

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

function containsSubstring(text, substring) {
  return text.includes(substring);
}

function isPalindrome(text) {
  const normalized = text.toLowerCase();
  const reversed = reverseString(normalized);
  return normalized === reversed;
}

function minInArray(values) {
  return Math.min(...values);
}

function sortArray(values) {
  return [...values].sort((a, b) => a - b);
}

function sumArray(values) {
  return values.reduce((total, value) => total + value, 0);
}

console.log("Reverse:", reverseString("Hello"));
console.log("Longest word:", findLongestWord("AA BBB CC DDDD"));
console.log("Contains substring:", containsSubstring("hello world", "world"));
console.log("Palindrome MOM:", isPalindrome("MOM"));
console.log("Minimum in array:", minInArray([3, 1, 4, 1, 5]));
console.log("Sorted array:", sortArray([3, 1, 4, 1, 5]));
console.log("Sum of array:", sumArray([1, 2, 3, 4, 5]));

// A small example with objects and arrays that is easy to read during practice.
const contactDetails = [
  { name: "Priyasha" },
  { address: "86/xyz, Gorwa, Vadodara, Gujarat" },
  { city: "Vadodara" },
];

for (const item of contactDetails) {
  console.log(item);
}
