/*

  Write a program that uses a multiply
  function to multiply two numbers and
  returns the result. Ask the user to
  enter the two numbers, then output
  the numbers and result as a simple equation.

*/

function ask() {
  let readline = require('readline-sync');
  return Number(readline.question('Enter a number: '));
}

function multiply(a = 0, b = 0) {
  return a * b;
}

console.log(multiply(ask(), ask()));