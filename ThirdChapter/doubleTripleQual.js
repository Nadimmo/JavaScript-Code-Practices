const number1 = 50;
const number2 = "50";
console.log("Is Equal ", number1 == number2) // true
console.log("Is not Equal ", number1 === number2) // false

const first  = "javaScript";
const second = 'javaScript';
console.log("Is Equal ", first == second)
console.log("Is not Equal ", first === second)


// first number is a number and second number is a string when we are using first condition only check value in variable and second time using condition is always check value and data type then compare.
const num1 = 25;
const num2 = "25";
console.log("Is Equal ", num1 == num2) 
console.log("Is not Equal ", num1 === num2) 

// console.log("Is Equal ", "apple" == "apple")
// console.log("Is Equal ", "apple" === "apple")

const x = 15;
const y = "20";
console.log("value is not equal ", x != y)
console.log("value is  equal ", x !== y)

const a = hello; //ReferenceError: hello is not defined
const b = "Hello";
console.log("compare", a == b)
console.log("compare", a === b)
// console.log("compare", a !== b)
// console.log("compare", a != b)