
const argument = process.argv;
console.log(argument.slice(2,5));

const fs = require('fs');
fs.appendFileSync('./test.txt', argument.slice(2).toString())
