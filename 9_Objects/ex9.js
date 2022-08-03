/*

  What does the following program log to the console? Why?

*/

let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a); // 'hi
console.log(qux);   // 'hello

// Because objects are passed by reference to a function
// Whereas a primitive is passed by value
// argument1 is simply an address to the object
// argument2 is a value that gets copied into the function

