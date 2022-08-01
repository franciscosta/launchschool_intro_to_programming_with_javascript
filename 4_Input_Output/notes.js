/*

1. Input / Output from CLI

A computer needs to take input from some source
To perform some action on that inpur
And ultimately provide the output.

Multitude of inputs:
+ mice
+ keyboard
+ disks
+ the network
+ environmental sensors

This chapter concerns itself with a basic method
Reading keyboard input from the command line.

2. Readline API

Node has an API for getting command line input.
For now, we'll use a simplified API called readline-sync

3. Install readline-sync

+ create a package.json file in the directory
+ run the command: npm init -y
+ Once this is done, run the command:
+ npm install readline-sync --save

+ The --save saves the package in a dir "node_modules"
+ This means that any file in this directory
+ Can request to access this module 

*/

let readline = require('readline-sync');
let answer = readline.question('What\'s your name? ');
console.log(`Hello ${answer}`);

/*

+ .question is a method in readline
+ that lets me display a string in the command line
+ and then waits for the user to respond
+ Once the user types return, the value is returned

*/


/*

2. Coercing input 

+ Readline-sync always returns a string
+ If I'm working with numbers, I have to coerce it

*/


let number1 = readline.question('Enter a number: ');
let number2 = readline.question('Enter another number: ');
let sum = number1 + number2;

console.log(`The sum of ${number1} and ${number2} is ${sum}.`);


/*

3. Input / Output from the browser

*/

let browserInput = prompt('What is your name?');
console.log(`Good morning, ${browserInput}`);



