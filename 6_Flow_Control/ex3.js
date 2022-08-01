/*

  Let's improve our previous
  implementation of evenOrOdd.
  Add a validation check to
  ensure that the argument is
  an integer. If it isn't, the
  function should issue an error
  message and return.

*/

let readline = require('readline-sync');

function evenOrOdd(number) {
  let isInt = number - parseInt(number) === 0;
  if (isInt) return number % 2 ? `${number} is odd` : `${number} is even`;
  else return 'Please enter an integer.'
}

console.log(
  evenOrOdd( readline.question('Enter an integer: ') )
);