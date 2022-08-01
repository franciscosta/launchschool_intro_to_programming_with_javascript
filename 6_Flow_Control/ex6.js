/*

  What does this code output to the console?

*/

function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);

// > Not Empty

// Everything that isn't on the small list of falsey values is truthy