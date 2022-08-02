/*

1. Arrays

+ An ordered list of elements
+ Elements can be of any kind
+ You can access them by their index position
+ The index position starts at zero
+ I can get the number of elements with the length method

*/

let myArray = [1, 2.4, true, 'San Francisco'];

let anElement = myArray[3];                       // > San Francisco
let arrayLength = myArray.length;                 // > 4
let lastElement = myArray[arrayLength - 1];       // > San Francisco

/*

2. Modifying an Array

*/

myArray[1] = 3.14;                                // Modifies an element
myArray[arrayLength] = 'Berkeley';                // Adds an element at the end

const newArray = [1, 2, 3];                       // the reference to the array is contant
newArray[0] = 123;                                // but the items themselves are mutable

const immutableArray = Object.freeze([1, 2, 3]);  // This array is actually immutable
const anotherImmut = Object.freeze([1, [1, 2]]);  // Only works one level deep; nested arrays are mutable
const yetAnother = Oject.freeze(1, Object.freeze([2, 3]));    // Needs to be done at all levels

/*

3. Add / Remove Methods

*/

// Mutate the original array
myArray.push(7);                                  // Adds 7 at the end
myArray.push(8, 9);                               // Can add multiple

// Return a new array
myArray.concat(3, 4, 5);                          // Returns a new array

// Remove items
myArray.pop();                                    // Removes the last item
myArray.splice(2, 4);                             // Removes 4 items starting at position 2

/*

4. ForEach Method

<array>.forEach( callBackFuction(<arrayElement>) {
  doSomethingTo(<arrayElement>);
});

*/

let anotherOne = [1, 2, 3, 4, 5, 6, 7];

anotherOne.forEach( function(element) {
  console.log(element);                           // Print all elements to the console
});                                               // Returns 'undefined'

anotherOne.forEach(element => console.log(element));


/*

5. Map Method

+ Performs an operation on each element of the array
+ Like forEach, you pass it a callback function
+ map does not modify the original array

*/

// Modification + side effects
let modifiedArray = [];
anotherOne.map(element => modifiedArray.push(element += 1));          // Adds 1 to each number in the array
anotherOne.forEach(element => modifiedArray.push(element + 1));       // Another way of achieving this

// Cleaner method
let modArray = anotherOne.map(element => element + 1);                // Do it in the declaratin variable



/*

6. Filter Method

+ For each element, return it or not based on the retun value of the callback
+ If the callback returns a truthy value, return the element

*/

let arr = [1, 2, 3, 4, 5];
let smallerArr = arr.filter(i => i > 3);    
smallerArr;                                 // [4, 5]
arr;                                        // [1, 2, 3, 4, 5]


/*

7. Reduce Method

+ Reduce an array to a single value
+ Number at the end is the starting value

*/

let sum = arr.reduce( (accomulator, element) => accomulator + element, 0);
let sum1 = arr.reduce( (accomulator, elem) => accomulator * elem, 1);

let letters = ['a', 'b', 'c'];
let mergedLetters = letters.reduce( (a, e) => a + e, ''); // Can reduce text
mergedLetters;              // abc



/*

8. Oddities

*/

// Arrays are objects
typeof [1, 2, 3];       // object
[1, 2, 3].isArray();    // true


// Modifying the length property truncates the array
[1, 2, 3, 4, 5].length = 2;     // [1, 2]
[1, 2].length = 5;              // [1, 2, <3 empty items>]


// Can add key-value pairs to an array since array is object
// This does not get accounted by length property
[1, 2, 3, 'pi': 3.14];          // length is still 3


// Unset show up like <3 empty items> until I access the value
let newArr1 = new Array(3);
newArr1;        // [<3 empty items>];
newArr1[0];     // undefined
newArr1.length; // 3 > length includes empty items

let newArr2 = [undefined, undefined, undefined];
newArr2;        // [undefined, undefined, undefined]
newArr2;        // undefined
newArr2.length; // 3 


// Object.keys only counts the set items
let arrKeys = Object.keys(newArr1);
newArr1.length;   // 3
arrKeys;          // 0



/*

9. Array Equality

+ Arrays are only equal when they are the same object

*/

// Not the same object
[1, 2, 3] === [1, 2, 3];        // false

// The same object
let a = [1, 2, 3];
let b = a;
a === b;                        // true

// To determine equality in the array content, need to write a func

function areEqual(a1, a2) {

  // if length is not the same, they're not
  if (a1.length !== a2.length) return false;

  // if any item differs, they're not
  for (let i = 0; i < a1.length; i += 1) {
    if (a1[i] !== a2[i]) return false
  }

  // if all passes, they are
  return true;
}

areEqual([1, 2, 3], [1, 2, 3]);   // true
areEqual([1], [1, 2]);            // false



/*

10. Other methods

*/


// Includes
// Is element x in the array
// It uses === to check if the element is there
// Meaning it can't check if there's a nested array

[1, 2, 3].includes(2);            // true
[1, [2, 3]].includes([2, 3]);     // false even though [2, 3] is present


// Sort
// Sorts the array > mutates the original object

let arr4 = [1, 4, 5, 2, 3];
arr4.sort();                      // [1, 2, 3, 4, 5]


// Slice (NOT splice)
// Extracts and returns a portion of the array
// Args are the start end end of the splice, inclusive

let arr5 = [1, 2, 3, 4, 5, 6, 7].splice(1, 3);
arr5;   // [2, 3, 4]


// Reverse
// Mutates the original

[1, 2, 3].reverse();  // [3, 2, 1]