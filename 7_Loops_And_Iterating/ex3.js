/*

  The following code causes an infinite loop
  (a loop that never stops iterating). Why?

*/

let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

// Because counter = 1 is truthy and will therefore always eval to being true