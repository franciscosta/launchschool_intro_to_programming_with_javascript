/*

  Will this program produce an error when run? Why or why not?

*/

const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);   // > bar

// No
// A const, like let, is block scoped.
// Therefore the two do not interfere with each other.