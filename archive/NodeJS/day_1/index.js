const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

module.exports = [add, subtract ];
const [x, substract] = require('./index.js');


const result = x(5, 6);
console.log(result)


const sub = substract(5, 6);
console.log(sub)