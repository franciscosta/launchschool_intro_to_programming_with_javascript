/*

  What does the following code log
  to the console, and why?

*/

function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');
// > Product2 
// > Product3
// > Product not found!

// It prints both the matching case as well everything that follows
// Because there are no break statements
// Meaning that the switch continues to compute all the remaining options
// Even after finding a match