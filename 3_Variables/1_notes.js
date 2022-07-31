
/*

1. Variables

+ A way to label data with a descriptive name
+ Makes a program easier to understand 
+ i.e. 33 could mean anything; age = 33 is clear
+ A named area of a program's memory space where data is stored

*/

let answer = 42;              // Declare answer and assign 42 to it
answer = 43;                  // Reassign answer to 43
console.log(answer);          // Prints 43

/*

2. Naming

+ A variable's name must accurately and succintly describe its data
+ Non-descriptive names like 'x' are easy to forget
+ Names are more broadly refered to as 'identifiers'

Identifiers

+ In Javascript, identifiers can refer to:
  + variable names declared by let and var
  + constant names declared by const
  + property names
  + function names
  + function parameters
  + class names

*/

let firstName;                  // Initializing a variable; undefined
firstName = "Francisco";        // Bing a string literal to the variable
firstName = "Anthony";          // Variables can change
firstName = 42;                 // Can assign other types of values

/*

3. Constants

+ A constant has an immutable binding to its value
+ Once declared and assigned, cannot be changed

*/

const BIRTH_YEAR = 1988;
BIRTH_YEAR = 1999;            // TypeError
// const foo;                 // Also an error, consts need to have a challenge

/*

4. Variable Scope

+ let and const are block scoped
+ A block is a related set of statements and expressions in between { }

+ What constitutes a block:
  + if...else
  + while
  + do...while
  + for
  + switch
  + try...catch

+ Functions aren't technically blocks but:
  + they look & behave so much like blocks
  + therefore we tend to treat them as such
  + having said that, function scope =! block scope

*/

// In-Block scope
if (true) {
  let age = 34;     // this variable is only available inside { }
}
console.log(age);      // Reference error, age is not available here

// Not Block scope

let a = "foo";
if (true) {
  a = "bar";
}
console.log(a);       // "bar" -> a belongs to the global scope

/*

5. Implicit Var

p = 'boo';

+ Javacript implicitly makes it a var
+ var has global scope
+ this can mess with another existing variable called p
+ therefore always declare it as let or const

*/

