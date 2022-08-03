/*

  Create a new object named myObj that uses myProtoObj as its prototype.

*/

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let newObject = Object.create(myProtoObj);

console.log(newObject.foo);