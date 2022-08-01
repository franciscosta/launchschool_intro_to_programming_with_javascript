/*

  What does this code log to the
  console? Does executing the foo
  function affect the output?
  Why or why not?

*/

let bar = 1;
function foo() {
  let bar = 2;
}

foo(); // No it does not, the second bar exists within the scope of the function

console.log(bar); // > 1