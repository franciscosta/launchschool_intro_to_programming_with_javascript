/*

  Write a function, evenOrOdd, that determines
  whether its argument is an even number. If it
  is, the function should log 'even' to the
  console; otherwise, it should log 'odd'. For
  now, assume that the argument is always an integer.

*/

function evenOrOdd(number) {
  return number % 2 ? `${number} is odd` : `${number} is even`;
}

console.log(
  evenOrOdd(2),
  evenOrOdd(3),
  evenOrOdd(4),
  evenOrOdd(124)
);