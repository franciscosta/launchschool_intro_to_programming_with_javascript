
// 1. Data types

// --------------------------------
// 1.1 Literals
'Hello, world!'   // string literal
3.14              // numeric literal
true              // boolean literal
{a: 1; b: 2}      // object literal
[ 1, 2, 3 ]       // array literal
undefined         // undefined literal


// --------------------------------
// 1.2 Strings
// Single or double quote
// Escape character: \
// String interpolation requires backticks: `

'Francisco Costa'
"'San Francisco' is a city"
`5 plus 5 equals ${5 + 5}` // ${expression}


// --------------------------------
// 1.3 Numbers
// All numbers are represented with Number type

1, 2, 3, 4.5, -6.77 // All numbers


// --------------------------------
// 1.4 Booleans

let toggleOn = true;
let sessionActive = false;


// --------------------------------
// 1.5 Undefined
// Absence of a value
// When a variable is declared without an explicit value
// Console.log is a function that returns undefined


// --------------------------------
// 1.6 Null
// Intentional absence of a value
// Undefined can arrise implicitly
// Null is always intentionally used

let foo = null;


// --------------------------------
// 1.7 typeof Operator

typeof 1          // number
typeof 'foo'      // string
typeof true       // boolean
typeof undefined  // undefined
typeof null       // object: a mistake in the language
typeof [1, 2, 3]  // object


// --------------------------------
// 1.8 Ops

2 + 2     // 4
2 - 1     // 1
2 * 2     // 4
8 / 2     // 4
16 % 4    // 4


// --------------------------------
// 1.9 NaN
// Not a number
 
0 / 0                   // NaN
typeof NaN              // object
Number.isNaN('hello')   // true
Number.isNaN(5)         // false


// --------------------------------
// 2.0 Infinity and -Infinity

1 / 0           // Infinity

// The difference between NaN and infinity
// NaN emerges as the result of an impossible operation
// Infinity represents actual infinity

1, 2, 3, 4, 5   // ....... Infinity

Infinity * Infinity    // Infinity
Infinity + Infinity    // Infinity
Infinity - Infinity    // NaN
Infinity / Infinity    // NaN
1234567890 / Infinity  // 0

-1 / 0                  // Infinity

typeof Infinity         // number

// Be careful:
let value1 = Infinity;
value1 === Infinity * 123456789   // true


// --------------------------------
// 2.1 Equality

2 === 2             // true
42 === 43           // false
'goo' === 'goo'     // true
'GOO' === 'goo'     // false


// --------------------------------
// 2.2 String concat

'foo' + ' bar'      // 'foo bar'
'1' + 2             // '12'

// Javascript implicitly coerces 2 to string
// If one is a string, the other will always be coerced to a string
// Having said that, there are exceptions

'5' - 3             // 2


// --------------------------------
// 2.3 Explicit coercion

Number('1');        // 1
Number('foo');      // NaN

parseInt('12');     // 12
parseInt('12xyz');  // 12 if starts w a number
parseInt(3.14)      // 3

parseFloat('12.5foo');    // 12.5

String(20);         // '20'


// --------------------------------
// 2.4 Arrays

[1, 2, 3, 4, 5]
[1, 'boo', true]

[1, 2, 3, 4, 5][0]    // 1


// --------------------------------
// 2.5 Objects
// Dictionary-like data structure
// Key-value pairs

let obj = { dog: 'barks', 
            cat: 'meows', 
            pig: 'oinks' };


obj['cat']        // 'meows'


// --------------------------------
// 2.6 Expressions
// Anything that evals to a value

2 + 2                     // = 4 
2                         // = 2
"Hello"                   // = "Hello"
console.log("Hello");     // = undefined


// --------------------------------
// 2.7 Statements
// A statement is not an expression — it does not evaluate
// Statements can include expressions as part of their syntax

// A statement is a line of code commanding an ask

let statem = 3;           // Assign the expression 3 to statem

// This includes:
// var, function, and class declarations
// loops and if statements
// return and break statements
// standalone expressions i.e. console.log(3);

// Any synctatic unit of code that expressions an action for the computer to perform.





