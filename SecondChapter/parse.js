const num = '20'
const convertNumber = parseInt(num)
console.log("total", convertNumber + 10)

const pie = '3.1416';
console.log("Integer Number", parseInt(pie)) // 3

const book = "premikBoy";
console.log("String to Number", parseInt(book)) // NaN

const num1 = 2.789 ;
const num2 = 3.456 ;
console.log("Number of Total", (num1 + num2).toFixed(2)) 

const num3 = "12.34";
const num4 = "56.78";
const total = parseInt(num3) + parseInt(num4);
console.log("Total", total) 

const num5 = "5.4321";
const num6 = "10.5678";
console.log("Number of value first", parseFloat(num5).toFixed(1), "Number of value second", parseFloat(num6).toFixed(1)) // 5.4 10.6


const num7 = "42.45689754";
console.log("Round 3 length of number", parseFloat(num7).toFixed(3))