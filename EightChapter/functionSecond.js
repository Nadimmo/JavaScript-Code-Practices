function checkNumber(nums){
    if(nums % 2 === 0){
        return true;
    }else{
        return false;
    }
}
const array = [12, 45, 78, 45, 121254, 4, 5]
// console.log("check array length is even or ood", checkNumber(array), "array length", array.length)

function checkName(name){
    if(name){
        return name[0]
    }else{
        return name;
    }
}
const string = "Raju"
// console.log("return first latter ", checkName(string))


function checkSize(num){
    if(num > 10){
        return num / 10;
    }
    return num * 10;
}
// console.log("If the number is gretarthen 10 then divide by 10 or multiple by 10:", checkSize(3))

function sumOfArray(nums){
    return nums[0] + nums[1];
}
const array2 = [23,355,42]
// console.log("sum of array first two number", sumOfArray(array2))
// 

function PositiveOrNegative(n){
    if(n > 0){
        return n*2;
    }
    return n*3;
}
// console.log("if number is positive multiple by 2  or negative multiple by 3:  ", PositiveOrNegative(-4))

function checkStringLength(first,second){
    if(first.length > second.length){
        return true;
    }
    return false;
}
const firstName = "Nadim Mostofa"
const SecondName = "javascript"
console.log("if first name length is largest then show true or false", checkStringLength(firstName, SecondName))


function checkMultiple(num,num2){
    if(num*num2 > 100){
        return num*num2 / 2;
    }
    return num*num2;
}

console.log("Multiple", checkMultiple(10,5))