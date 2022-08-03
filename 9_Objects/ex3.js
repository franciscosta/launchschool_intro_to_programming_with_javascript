/*

  Use object literal syntax (e.g., { key: value, ... } notation)
  to create an object that behaves as an array in a for statement.
  The object should contain at least 3 elements. You should place
  your code between the braces in the let statement:

*/

let myArray = {
  0: 'Peter',
  1: 'James',
  2: 'Priscilla',
  3: 'Frank',
  length: 4
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}

