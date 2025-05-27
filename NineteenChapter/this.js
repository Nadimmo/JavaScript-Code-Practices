// Where use this ?
// 1. Global Context or window object
// 2. class  ;
// 2. use strict
// 4. object method
// 5. normal function 
// 6.constructor function
// 7. object method arrow function




// const person = {
//     name: "John",
//     greet: () => {
//         return `Hello, I am ${this.name}`; // this value is undefined because is outer side in this and this follow lexical scope
//     }
// }

// console.log(person.greet());
const person = {
    name: "John",
    greet: function(){
        return `Hello, I am ${this.name}`; 
    }
}

console.log(person.greet());

console.log(this) // run in browser show window object
