// 1. substring
// Constructor: String
// Static v. Prototype: Prototype
let fullname = 'Francisco Costa';
let firstName = fullname.substring(0, 9);
console.log(firstName);


// 2. create
// Constructor: Object
// Static v. Prototype: Static
const person = {
  name: '',
  age: 0
};
const me = Object.create(person);
me.name = 'Francisco';
me.age = 34;
console.log(me.name, me.age);


// 3. fromCharCode
// Constructor: String
// Static v. Prototype: Static
let letter98 = String.fromCharCode(98);
console.log(letter98);


// 4. slice
// Constructor: String
// Static v. Prototype: Prototype
let city = 'San Francisco';
let partialName = city.slice(4); // from 4 to implicit end
console.log(partialName);


// 4. slice
// Constructor: Array
// Static v. Prototype: Prototype
let numbers = [1, 2, 3, 4, 5];
let subNumbers = numbers.slice(2, 4);
console.log(numbers, subNumbers);


// 5. toString
// Constructor: String
// Static v. Prototype: Prototype
let newString = new String('Francisco');
let extractedString = newString.toString();
console.log(newString, extractedString);