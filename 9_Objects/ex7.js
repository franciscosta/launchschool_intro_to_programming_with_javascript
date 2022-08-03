/*

  Add a qux property with value 3 to the
  myObj object we created in the previous
  exercise. Now, examine the following code snippets:

*/

// From the previous exercise

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

// Current exercise

myObj['qux'] = 3;

let objKeys = Object.keys(myObj);  

objKeys.forEach(function(key) {
  console.log(key); 
});

// ['qux'] > Object.keys() gets only keys of object


for (let key in myObj) {
  console.log(key);
}

// ['foo', 'bar', 'qux'] > for/let gets both object and prototype