/*

  Write a function that logs whether a
  number is between 0 and 50 (inclusive),
  between 51 and 100 (inclusive),
  greater than 100, or less than 0.

*/


function numberRange(n) {

  let statement = `${n} is `

  if (n < 0) statement += 'less than 0';
  else if (n >= 0 && n <= 50) statement += 'between 0 and 50';
  else if (n >= 51 && n <= 100) statement += 'between 51 and 100';
  else statement += 'greater than 100';

  return statement;
}


console.log(
  numberRange(25),
  numberRange(75),
  numberRange(125),
  numberRange(-25), 
);