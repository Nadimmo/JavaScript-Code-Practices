function sum(a, b) {
    const total = a + b;
    console.log("sum of number", total)
}
sum(10, 30)


function calculator(a, b) {
    const add = a + b;
    const subscript = a - b;
    const multiple = a * b;
    const division = a / b;
    console.log("sum of number", add)
    console.log("subscript of number", subscript)
    console.log("multiple of number", multiple)
    console.log("division of number", division)
}
// calculator(15, 20)


function totalOfSubjectMarks(a, b, c) {
    const total = a + b + c;
    console.log("total of subject marks", total)
}
totalOfSubjectMarks(40, 50, 60)

function ageCalculate(year) {
    const age = year - 2004;
    console.log("my age now", age)
}
ageCalculate(2025)

function calucateLow(taka) {
    const calculate = taka / 35;
    console.log("how much low i will be buy", calculate);
}
calucateLow(403)

function averageOfNumber(a, b, c) {
    const average = a + b + c / arguments.length;
    console.log("average of number", average)
}
averageOfNumber(30, 40, 60)


function sellingPrice(price) {
    const productPrice = price - 250;
    console.log("A product price", productPrice)
}
sellingPrice(540)

function yearsCalculate(years) {
    const year = years + 100;
    console.log("which years my age 100:", year)
}
yearsCalculate(2004)


function MobileHours(hours) {
    const totalHours = hours * 30;
    console.log("how much hours I can use mobile phone", totalHours)
}
MobileHours(6)