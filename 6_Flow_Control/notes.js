/*

1. Flow Control

+ As a program runs, the data flows
+ Control flow defines that flow

Comparison Operators:
< <= == === >= > != !==

Logical Operators:
&& || ! !true !false !(3 === 3)

*/

let readline = require('readline-sync');

let number = Number(readline.question('Enter a number: '));

if (number < 3) {
  console.log('It\'s smaller than 3.');
} else if (number == 3) {
  console.log('It\'s exactly 3.');
} else {
  console.log('It\'s bigger than 3.');
}

// Loose equality
if (3 == '3') console.log('This will print.');

// Strict equality
if (3 === '3') console.log('This won\'t print.');



/*

2. Short circuiting

+ && and || use the short circuiting mechanism

isGreen(object) && isMetal(object)
+ both need to be true
+ if the first isn't true
+ the operation short circuits
+ and the second half isn't computed

isGreen(object) || isMetal(object)
+ only one needs to be true
+ if the first is true
+ the ops short circuits too
+ therefore the second half isn't computed

*/



/*

3. Truthiness vs. Falsiness

+ Javascript coerces any value to true or false
+ Everything gets coerced to true except:
  + 0 -0 0n
  + false
  + ''  -> empty strings
  + undefined
  + NaN+
  + null


*/

if (3) console.log('I\'m true!');
if (0) console.log('I won\'t print.');

let x;
if (x = 3) console.log('It works too');  // Also truthy


// Truthiness + Short-circuits

console.log( 3 && 'foo' );    // > foo
console.log( 'foo' && 3 );    // > 3
console.log( 0 && 'foo' );    //> 0
console.log( 'foo' && 0 );    //> 0

console.log( 3 || 'foo' );    // > 3
console.log( 'foo' || 3 );    // foo
console.log( 0 || 'foo' );    // foo
console.log( 'foo' || 0 );    // 0


// This is useful when I'm not sure I'll assign a value to a var

let a;
let b = a || 'default value'; // Assign a if truthy, otherwise revert to default


/*

4. Operator Precedence

+ Priority 1: < <= > >=
+ Priority 2: === !== == !=
+ Priority 3: &&
+ Priority 4: ||

*/

'foo' || 0 && 3   // > evals && and then ||


/*

5. Ternary Operator

+ shortest way to write an if else statement

<expression> ? <if true> : <else>

*/

3 > 4 ? 'this' : 'that';                //  that

let message = true ? 'this' : 'that';   // this



/*

6. Switch Statement

+ Similar to an if
+ But with a different structure
+ Strictly compares a single valye against multiple values

*/

let y = 3;

switch (y) {
  case 1:
    console.log('not this');
    break; 
  case 2:
  case 5:
  case 6:
  case 7:
    console.log('not that');
    break; // break so it stops executing once it finds the case
  default:
    console.log('This will print!');
    break;
}





