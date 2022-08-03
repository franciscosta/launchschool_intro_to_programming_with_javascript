/*

  1. Objects

  + Modeling problems as objects that:
    + have behaviors (perform actions)
    + have states (characteristics that distinguishes them from other objects)

  + Objects are collections of key-value pairs
  + Each item has a key and an associated value

*/

// Object Literal syntax

let person = {
  name: 'Francisco',
  age: 34,              // key is string but we can ommit quotes
  city: 'San Francisco',
  'last name': 'Costa'  // Needs quotes of multiple words
};

person.name;            // > Francisco
person.age;             // > 34
person.city;            // > San Francisco
person['last name'];    // > Costa

person;                 // {name: 'Francisco' .... } Returns the object

delete person.age;      // deletes the key value pair

const staticObject = Object.freeze({a: 1, b: 2}); // Freezes the object


/*

  2. Prototypes

  + Object can inherit from other objects
  + When (a) inherits from (b) we say that (b) is a prototype of (a)
  + (b) has now access to properties defined in (a)

*/

let bob = {
  name: 'Bob',
  age: 34
};

// Create an object based on Bob
let studentBob = Object.create(bob);

studentBob.age;  // > 34


/*

  3. Iteration

  + Can iterate over an object's properties

*/

// Each iteration passes the key down
for (let property in bob) {
  console.log(bob[property]);    // > Bob, 34
}


// Downside: iterates over an object's parent / prototype

let obj1 = {1:1, 2:2};
let obj2 = Object.create(obj1);
obj2[3] = 3;
obj2[4] = 4;

for (let prop in obj2) {
  console.log(obj2[prop]);    // > 3, 4, 1, 2
}


// Work around

for (let prop in obj2) {
  if (obj2.hasOwnProperty(prop)) console.log(obj2[prop]);    // > 3, 4
}


// Alternative

let keys = Object.keys(person);   // [name, age] an array of keys;
keys.forEach(key => console.log(person[key]));

// Only rely on iteration order if keys are alphabetic
// If numeric, negatives get grouped first, then positives, ...


/*

  4. Common Operations

*/

// Object.keys()

let personkeys = Object.keys(person);
personkeys;     // ['name', 'age', 'city']

// Object.values()

let personValues = Object.values(person);
personValues;   // ['Francisco', 34, 'San Francisco']

// Object.entries()

let personEntries = Object.entries(person);
personEntries;  // [ ['name', 'Francisco'], ['age', 34], ['city', 'San Francisco'] ]

// Object.assign(__,__);

let object1 = {1: 1};
let object2 = {2: 2};
Object.assign(object1, object2);

object1;      // {1: 1, 2: 2}
object2;      // {2: 2}

let object3 = Object.assign({}, object1, object2);
object3;      // {1: 1, 2: 2, 2: 2} // creates a third object


/*

  5. Objects or Arrays:

    + Does order matter? Arrays
    + Do I need quick access to any item? Objects
    + Do I have key-value pairs? Objects
    + Does accessing the first or last matter? Arrays

*/

