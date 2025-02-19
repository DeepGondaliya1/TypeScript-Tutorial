"use strict";
// TypeScript number type represents the numeric values. All the numbers are represented as the floating point values. TypeScript also supports the binary, octal and hexadecimal numbers
// Number Types
/*
let count: number = 10;
console.log(count);

let decNum: number = 10.6; // floating point number
let binNum: number = 0b101001; // binary number
let octNum: number = 0o45; // octal number
let hexNum: number = 0x80fd; // hexadecimal number
*/
// String Types
/*
let str1: string = "a string primitive";
*/
// Boolean Types
/*
let varName: boolean = true;

let score: number = 80;
let isPassing: boolean = score >= 70;
let result: string = isPassing ? "Pass" : "Fail";
console.log(result);
*/
// Array Types
/*
var alphas1: string[] = ["1", "2", "3", "4"];
console.log(alphas1[0]);

var alphas2;
alphas2 = ["1", "2", "3", "4"];
*/
// Tuples Types
// tuples enable storing multiple fields of different types. Tuples can also be passed as parameters to functions.
/*
const myTuple: [number, string] = [10, "Hello"];

// Function Parameters and Tuple Types

function processData(data: [string, number]): void {
  const [name, age] = data;
  console.log(`Name: ${name}, Age: ${age}`);
}
let data: [string, number] = ["John", 32];
processData(data);

*/
// Enums Types
// Enums in TypeScript allow you to define a set of named constants. An enum is a way of giving more friendly names to sets of numeric values.
/*
enum HttpStatus {
  Success = 200,
  NotFound = 404,
  InternalServerError = 500,
}
console.log(HttpStatus.Success);
console.log(HttpStatus.NotFound);
console.log(HttpStatus.InternalServerError);
*/
// Any Type
// The any type in TypeScript is a specific type that can represent any value. It is generally used when a type of variable is unknown or not yet defined. It is like a placeholder that tells the TypeScript compiler to ignore type checking for the particular variable, function, etc.
/*
let x: any;
x = "Hello";
x = 23;
x = true;
*/
// Never Type
// The never type in TypeScript represents the values that can never occur.
/*
function infiniteLoop(): never {
    for (;;) {}
  }
  
infiniteLoop();
*/
// What is the difference between never and void in typescript?
// A function that doesn't explicitly return a value implicitly returns the value undefined in JavaScript. Although we typically say that such a function "doesn't return anything", it returns. We usually ignore the return value in these cases. Such a function is inferred to have a void return type in TypeScript.
// A function that has a never return type never returns. It doesn't return undefined, either. The function doesn't have a normal completion, which means it throws an error or never finishes running at all.
// Union Type
// Union types are a powerful way to express a value that can be one of the several types. Two or more data types are combined using the pipe symbol (|) to denote a Union Type.
/*
var val: string | number;
val = 12;
console.log("numeric value of val: " + val);
val = "This is a string";
console.log("string value of val: " + val);

function display(name: string | string[]) {
  // function body;
}
*/
// null vs. undefined
// In TypeScript, 'undefined' denotes that a variable has been declared but has not been assigned any value. On the other hand, 'null' refers to a non-existent object which is basically 'empty' or 'nothing'.
//Type Aliases
// It allows you to give a specific name to the type or define a custom type using the 'type' keyword.
/*
// Defining the type alias
type UserID = number;
// Defining the variable of type alias
let user1: UserID = 101;

type StringOrNumber = string | number;
function logMessage(message: StringOrNumber): void {
    console.log(message);
}
logMessage("Hello");
logMessage(123);
*/
