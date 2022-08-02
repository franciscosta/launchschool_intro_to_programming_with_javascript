/*

Loops

+ A means to repeat the execution code
+ In a controlled manner — i.e. 10 times, but not 11

1. While Loops

while (conditional expression) {
  // execute
}

*/


// Example no. 1

let counter = 0;

while (counter < 10) {
  console.log(counter);
  counter += 1;
}


// Example no. 2

let names = ['Francisco', 'Anthony', 'Travis'];
let upperCasedNames = [];
let index = 0;

while (index < names.length) {
  upperCasedNames.push(names[index].toUpperCase());
  index += 1;
}

console.log(upperCasedNames);


/*

2. Do-While loop

+ Similar to the while loop
+ But it executes at least once
+ Even if the condition is false
+ A great way to keep asking for input
+ Until the input is correct

*/

let readline = require('readline-sync');

let integer;

do {
   integer = Number(readline.question('Enter an integer: '));
} while (integer - parseInt(integer) !== 0);


/*

3. For Loops

for (initialization; condition; increment) {
  // > body of the loop
}

*/

for (let i = 0; i < 10; i += 1) {
  console.log(i);
}


/*

4. Controling loops

  continue
  + skips execution from that point on
  + goes back to the start

  break
  + breaks the loop

*/

for (let i = 0; i <= 12; i += 1) {
  if (i % 2 == 0) continue;
  if (i === 10) break;
  console.log(i);
}


/*

5. Array Iteration

+ Arrays have the .foreEch() method to iterate an array
+ You can pass another function as an arg to that method
+ That function will be executed for each element in the array

*/

let awesomeNames = ['Francisco', 'Frank', 'Peter', 'Anthony', 'Travis', 'Justin'];

awesomeNames.forEach( function (name) {
  console.log(`Hi ${name}.`);
});

// Can also use an arrow function here

awesomeNames.forEach(name => console.log(`Hi ${name}.`));



/*

6. Recursion

+ A recursive function is a function that calls itself
+ A recursion can be a form of looping

*/

// Example no. 1

function multiply(a, b) {
  if (b === 1) return a;
  else return a + multiply(a, b - 1);
}

console.log(
  multiply(2, 4) // recursive multiplication function
);


// Example no. 2: Fibbonacci
// Each number is the sum of all the numbers that precede it
// fib(0) > 0
// fib(1) > 1
// fib(2) > fib(1) + fib(0) = 1 + 0 = 1
// fib(3) > fib(2) + fib(1) + fib(0) = 1 + 1 + 0 = 2

function fib(n) {
  // if (n === 0) return 0;
  // if (n === 1) return 1;
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(7));