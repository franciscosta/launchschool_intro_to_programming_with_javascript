/*

1. Functions

+ The ability to re-use code without repeating it
+ Originally names procedures
+ In Javascript we call procedures functions

*/

// Function definition
function greet() {
  console.log('Hello 👋');
}

// Function call
greet();

// Function call with arguments
function helloTo(person) {
  console.log(`Hello ${person}!`);
}

helloTo('James');
helloTo('Jimmy');
helloTo('Justin');

/*

+ We have extracted the logic of a program
+ In this case, from the content itself
+ The content gets passed in as an argument
+ We can now repeat the logic as many x as needed

function <name> (<parameters>) {
  <functionbody>
}

<name>(<arguments>);

+ You pass in the arguments for to replace the parameters

*/



/*

2. Return Values

+ We can make a function perform an operation
+ And return the result of that operation
+ All functions in JS evaluate to something
+ If there is no return, it evals to undefined

*/


function add(a, b) {
  return a + b;
}

square(6, 6); // > 12



/*

3. Default Parameters

+ You can provide default values to a function's parameter

function <name>(<param> = <default>) {
  <functionbody>
}

*/

function sayHelloTo(person = 'you') {
  console.log(`Hello ${person}!`);
}


/*

4. Nested Functions

+ You can have functions inside functions

*/

function square(number) {

  function multiply(number, number) {
    return number * number;
  }

  return multiply(number, number);
}

console.log(
  square(6)
);


/*

5. Function scope

+ Where a variable is created determines its scope
+ If created on the main document, its global to the doc
+ If created inside a function or a block, its local to that func or block

*/

function greetMe() {
  let firstName = 'Francisco'; // only avail inside greetMe
  console.log(`Hello ${firstName}`);
}

console.log(`Howdie, ${firstName}`); // Reference Error


/*

6. Functions vs. Methods

+ Javascript objects come with predefined methods
+ These methods cover some basic tasks

'Hello'.toUpperCase();

+ These methods get appended at the end of the value
+ As opposed to a function, that engulfs it

doSomething('Hello');

*/

'Hello'.toUpperCase();    // > HELLO


/*

7. Mutating the caller

+ Some methods mutate the caller 
+ While others return a copy of it

+ This is also true in functions
+ They can be written to mutate or to return a copy

+ Methods that work on primitive values never mutate
+ Because all primitives are immutable
+ Methods that work on mutable values (arrays, objects)
+ Might or might not mutate the original value

*/


// Mutating methods

let myName = 'Francisco';
myName.toUpperCase();       // myName is mutated

let numbers = [1, 2, 3];
numbers.pop()               // Pops the last num out


// Non-mutating methods

function addToArray(arr, newValue) {
  return arr.concat(newValue)
}

addToArray(numbers, 10);    // Returns a new array


// Mutating function

function updateArray(array, newValue, index) {
  array[index] = newValue;
  return array;
}

updateArray(numbers, 5, 0);


// Non-mutating function
function convertToUpperCase(string) {
  let copy = string;
  return copy.toUpperCase();  // Transforms the copy
}

convertToUpperCase(myName);


/*

8. Nested calls

+ A function can take a function call as an argument
+ In the example below:
  multiply is an argument of add
  add is an argument of log

*/

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

console.log(add(5, multiply(2, 2)));


/*

9. Three ways to define a function

*/


// 9.1 Function Declaration

something('Hi'); // You can call it before you declare it

function something(arg) {
  return arg;
}

// 9.2 Function Expression

let greet = function (person) {
  return `Hello ${person}!`;
};

greet('Frank'); // Has to be called after declaration

  // All JS functions are objects
  // Therefore you can assign them to a variable


// 9.3 Arrow Functions

let add = (a, b) => a + b; // implicit return keyword

add(1, 1); 


/*

10. Call Stack

+ How Javascript keeps track of what its doing
+ The call stack has a limited size 
+ If the stack runs out of room, returns a RangeError

add(multiply(subtract(9, 2), 9), 8);


Start of the program: 

4: ---
3: ---
2: ---
1: Starts with main

Then:

4: ---
3: ---
2: Calls add
1: Starts with main

Then: 

4: ---
3: Inside add, calls multiply
2: Calls add
1: Starts with main

Then:

4: Inside multiply, calls subtract
3: Inside add, calls multiply
2: Calls add
1: Starts with main

Now, it starts resolving the stack:

4: --- > returns subtrack value to multiply
3: Inside add, calls multiply
2: Calls add
1: Starts with main

Then:

4: ---
3: --- > returns multiply value to add
2: Calls add
1: Starts with main

Then

4: ---
3: ---
2: ---
1: Starts with main

*/

