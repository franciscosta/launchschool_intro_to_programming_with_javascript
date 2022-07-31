/*

  Write a program named age.js that
  includes someone's age and then
  calculates and reports the future
  age in 10, 20, 30 and 40 years.
  Below is the output for someone 20 years old.

*/

let age = 34;
let increment = 10;

for ( let i = 0; i < 4; i++ ) {
  age += increment;
  console.log(`In ${increment} years, you will be ${age} years old.`);
  increment += 10;
  age = 34;
}

