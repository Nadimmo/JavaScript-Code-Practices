function TaxCalculate(incomeAmount) {
    if (incomeAmount <= 50000) {
        // 10 % tax
        const tax = incomeAmount / 100 * 10;
        return tax;
    } else if (incomeAmount >= 50001 && incomeAmount <= 100000) {
        // 20 % tax
        const tax = incomeAmount / 100 * 20;
        return tax;
    } else if (incomeAmount >= 100001 && incomeAmount <= 200000) {
        // 30% tax
        const tax = incomeAmount / 100 * 30;
        return tax;
    } else if (incomeAmount > 200000) {
        // 40% tax
        const tax = incomeAmount / 100 * 40;
        return tax;
    } else {
        return incomeAmount
    }
}

console.log('Income Tax in Total amount:', TaxCalculate(50000), "taka")


function PackageDelivery(weight) {
    if (weight < 10) {
        return console.log("package delivery less then 10Kg: 100 taka");
    } else if (weight < 20) {
        return console.log("package delivery less then 20Kg: 300 taka");
    } else if (weight < 50) {
        return console.log("package delivery less then 50Kg: 1000 taka");
    } else {
        return console.log("package delivery for per kg : 100 taka")
    }
}
PackageDelivery(40)

function GPACalculate(mark) {
    if (mark >= 80) {
        return console.log("your grad is: A");
    } else if (mark >= 70 && mark <= 79) {
        return console.log("your grad is: B");
    } else if (mark >= 60 && mark <= 69) {
        return console.log("your grad is: C");
    } else if (mark >= 50 && mark <= 59) {
        return console.log("your grad is: D");
    } else {
        return console.log("your are fail");
    }
}
GPACalculate(45)


function LeapYearCount(years) {
    let countYears = 0;
    for (let year of years) {
        if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)){
             countYears++
        }
    }
    return countYears;
}
const array = [1996, 2000, 1900, 2004, 2019]
console.log("count leap years", LeapYearCount(array))