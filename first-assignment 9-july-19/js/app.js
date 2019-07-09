// 1. Write a program to print ‘hello world’

console.log('hello world');

// 2. Variables, Data-types and operators

// 1. Declare a variable and test variable name rules and log the variable value. 
var myString = 'this is test value';
var myValue = 30;
console.log(myString, myValue);

// 2. Comment Javascript code (single and multi-line comment).

// single line code in javascript
/* this is a multiline comment in javascript */

// 3.	Store values using assignment operator

var a, b;
a = 5;
b = a;

console.log(b); // b = 5;

// 4.	Add two numbers using plus operator
var a, b, c;
a = 3;
b = 4;
c = a + b;
console.log(c) // 7

// 5.	Subtract One number from another
var a, b, c;
a = 3;
b = 4;
c = a - b;
console.log(c) // -1

// 6.	Multiply two numbers
var a, b, c;
a = 7;
b = 2;
c = a * b;
console.log(c) // 14

// 7.	Divide one number by other

var a, b, c;
a = 35;
b = 3;
c = a / b;
console.log(c) // 11.666666666666666

// 8.	Increment a number using both pre and post increment.
var a, b;
a = 5;
b = 8;
console.log(++a); // 6
console.log(b++); // 8

// 9.	What will be the output of the following program.

var i = 4;
var j = 21;
var k = ++i * 7 + 2 - j--;
console.log(k); // 16

// 10.	Write a program to get remainder of 17 divided by 3.
var a, b;
a = 17;
b = 3;
console.log (a % b);  // remainder is 2

// 11.	Declare a string variable and log the typeof of variable.

var string = "string";
console.log(typeof string);  // string

// 12.	Print a string “ Alan said, “Peter is learning Javascript” ”(ignore first and last quote) use escape character.

console.log(" Alan said, \“Peter is learning Javascript\” ");


// 13.	Concat two strings using plus operator.
var a, b;
firstName = 'Vinod';
lastName = 'Yadav';

console.log(firstName + " " + lastName); // Vinod Yadav

// 14.	Concat two strings using plus equal (+=) operator
a = 'firstString '
b = 'secondString';
c = a += b;
console.log(c); // firstString secondString

// 15.	Append a number variable to string
var a, b, c;

a = '3'
b = 3;
c = a + b;
console.log(c); // 33

// 16.	Store multiples values in one variable using JS array

var arr = [10,20,30,40,50];
console.log(arr); // [10, 20, 30, 40, 50]

// 17.	Verify a variable is an array using isArray() method.
var newArray = Array.isArray([10,20,30,40,50])
console.log(newArray); // true

// 18.	Find the length of an array
console.log (arr.length); // 5

// 19.	Create an array with five elements and access the 3rd element using indexes.

var myArray = [25, 'myName', 75, 'new text', '50'];
console.log(myArray[2]); // 75

// 20.	Create an array with 10 elements and then update the 5th and 6th position with new values using index.

var myArray = [25, 'myName', 75, 'new text', '50', true, 345, false, 0, 2.5];

myArray[4] = '5th position';
myArray[5] = '6th position'

console.log(myArray);

// 21.	Add a element to an existing array using push() method.

arr.push("new value insert");
console.log(arr);