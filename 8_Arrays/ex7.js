/*

  Use reduce to compute the sum of the squares of all of the numbers in an array:

*/

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83

function square(e) {
  return e * e;
}

function sumOfSquares(array) {
  return array.reduce(function(accomulator, element) {
    return accomulator + square(element)
  }, 0);
}