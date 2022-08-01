/*

  What does the following code log to the console?

*/

function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee'); // Nothing, returns stops execution before console.log can run



