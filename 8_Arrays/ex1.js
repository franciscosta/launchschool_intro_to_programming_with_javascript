/*

  In the following code, what are the final
  length values for array1, array2, array3, array4, and array5?

*/

let array1 = [1, 2, undefined, 4];
// 4

let array2 = [1];
array2.length = 5;
// 5: Added <4 empty items> at the end

let array3 = [];
array3[-1] = [1];
// 0: Added the element as an object

let array4 = [1, 2, 3, 4, 5];
array4.length = 3;
// 3: Truncated the array

let array5 = [];
array5[100] = 3;
// 101: Needed to add 100 items before it so it could add 3 at the end