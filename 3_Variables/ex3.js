/*

  What happens when you run the
  following program? Why do we
  get that result?  

*/

{
  let foo = 'bar';
}

console.log(foo);

// TypeError: foo is not defined
// This because foo was declared outside of the scope of console.log