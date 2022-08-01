/*

  Modify the age.js program you wrote
  in the exercises for the Variables
  chapter. The updated code should ask
  the user to enter their age instead
  of hard-coding the age in the program.
  Here's an example run:

  How old are you? 22
  You are 22 years old.
  In 10 years, you will be 32 years old.
  In 20 years, you will be 42 years old.
  In 30 years, you will be 52 years old.
  In 40 years, you will be 62 years old.

*/

let readline = require('readline-sync');

let originalAge = Number(readline.question('How old are you? '));
let updatedAge = originalAge;
let increment = 10;

console.log(`You are ${originalAge} years old.`);

for ( let i = increment; i < 40; i += 10 ) {
  updatedAge += increment;
  console.log(`In ${increment}, you will be ${updatedAge} years old.`);
  increment += 10;
  updatedAge = originalAge;
}