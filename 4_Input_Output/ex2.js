/*

  Modify the greeter.js program to
  ask for the user's first and last
  names separately, then greet the
  user with their full name.

*/

let readline = require('readline-sync');

let firstName = readline.question('What is your first name? ');
let lastName = readline.question('What is your last name? ');
let fullName = `${firstName} ${lastName}`
console.log(`Hello, ${fullName}!`);