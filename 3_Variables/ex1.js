/*

  Write a program named greeter.js
  that greets 'Victor' three times.
  Your program should use a variable
  and not hard code the string value
  'Victor' in each greeting. 
  
  Here's an example run of the program:

  $ node greeter.js
  Good Morning, Victor.
  Good Afternoon, Victor.
  Good Evening, Victor.

*/

let firstName = "Victor";
let timeOfDay = ['Morning', 'Afternoon', 'Evening'];

for (let i = 0; i <= 2; i++) {
  console.log( `Good ${timeOfDay[i]}, ${firstName}.` );
}

