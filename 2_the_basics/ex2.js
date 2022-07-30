/*

  Use the arithmetic operators to
  determine the individual digits
  of a 4-digit number like 4936:

  + thousands place is 4
  + hundreds place is 9
  + tens place is 3
  + ones place is 6

*/

// My initial solution

let number = 4936;

let thousands = parseInt(number / 1000);
let hundreds = parseInt(number % 1000 / 100);
let tens = parseInt(number % 100 / 10);
let ones = number % 10;

console.log(`Thousands: ${thousands} | Hundreds: ${hundreds} | Tens: ${tens} | Ones: ${ones}`);


