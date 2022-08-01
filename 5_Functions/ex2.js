/*

  In the exercises for the previous chapter,
  you wrote a dynamic greeter program named
  greeter.js. Add a function to this program
  that solicits the user's first and last
  names in separate invocations; the function
  should return the appropriate name as a string.
  Use the return values to greet the user with
  their full name.

*/

let readline = require('readline-sync');

function ask(whichName) {
  return readline.question(`What is your ${whichName} name? `);
}

let firstName = ask('first')
let lastName = ask('last');

console.log(`Hello ${firstName} ${lastName}!`);