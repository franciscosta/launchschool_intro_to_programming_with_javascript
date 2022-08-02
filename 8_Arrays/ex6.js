/*

  Use map and filter to first determine the
  lengths of all the elements in an array of
  string values, then discard the even values
  (keep the odd values).

*/

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

function oddLengths(array) {
  return array.map(function(element) {
    return element.length;
  }).filter(function(length) {
    if (length % 2 !== 0) return length
  });
}

