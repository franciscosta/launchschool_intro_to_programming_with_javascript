/*

  Modify the age.js program you wrote
  in the exercises for the Input/Output
  chapter. The updated code should use
  a for loop to display the future ages.

*/

let readline = require('readline-sync');

let originalAge = Number(readline.question('What\'s your age? '));
let copyAge = originalAge;
let incrementInYears = 10;
let maxAge = 40;

for (let i = incrementInYears; i <= maxAge; i += incrementInYears) {
  copyAge += incrementInYears;
  console.log(`In ${i} you will be ${copyAge}.`);
}

