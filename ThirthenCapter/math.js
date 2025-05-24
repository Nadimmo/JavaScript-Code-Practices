console.log("min number of array:", Math.min(45, 11, 86, 23, 56, -12, -56))

console.log("max number of array:", Math.max(21,35, 67))

const x = 7.6;
const y = 7.2;
console.log("nearest whole number : ", Math.round(x), Math.round(y))

const i = 9.8;
const j = 5.3;
console.log("nearest smaller number : ", Math.floor(i), Math.floor(j))

const k = 3.1;
const l = 6.9;
console.log("nearest begets number : ", Math.ceil(k), Math.ceil(l))


console.log("absolute value of -34:", Math.abs(-34))


function CallMe(floatNumberInput){
    console.log(Math.round(floatNumberInput))
    console.log(Math.ceil(floatNumberInput))
    console.log(Math.floor(floatNumberInput))
}

CallMe(89.5)