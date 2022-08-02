/*

  Reimplement the factorial function from exercise 2
  using recursion. Once again, you may assume that
  the argument is always a positive integer.

  function factorial(n) {
    let fact = 1;
    for (let i = n; i >= 1; i -= 1) {
      fact *= n;
      n -= 1;
    }
    return fact;
  }

*/

function factorial(n) {
  if (n < 2) return n;
  else return n * factorial(n - 1);
}



console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320