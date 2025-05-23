let num = 15;
let copy = num;
copy = 20;
console.log(num, copy) // variable reassign 

let arr = [1, 2, 3];
let copyArr = arr;
copyArr = 88;
console.log(arr, copyArr) // variable reassign anv value not change because this is non-primitive data type//


let language = {name: "JavaScript", age:30};
let newVersion = language;
newVersion.location = "Browser";
console.log(language, newVersion) // reference type