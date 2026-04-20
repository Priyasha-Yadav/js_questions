const os = require('os');
const fs = require('fs');

console.log(fs);
// const result = fs.readFileSync('./hello.js', 'utf8')
const result = fs.readFileSync('./hello.js', {encoding: 'utf-8'});


fs.writeFileSync('./hello.js', "Hello" );
fs.appendFileSync('./hello.js', "\nIndia")
fs.appendFileSync('./index.js', result);

