function number(num){
    if(num > 10){
        return true;
    }else{
        return false
    }
}
console.log(number(4))

function Divisible(num){
    if(num % 13 === 0){
        return true;
    }else{
        return false;
    }
}
console.log(Divisible(26))

function Bill(rice,curry,drinks){
    return rice + curry + drinks;
}
console.log("Total Bill", Bill(20,20,30))

function Vote(age){
    if(age > 18){
        return console.log("Eligible for Voting")
    }else{
        return console.log("Not Eligible")
    }
}
Vote(11)


const name = "Nadim Mostofa"
function StringLength(name){
    return name.length;
}
console.log("Length of String", StringLength(name))


function NumberOfAverage(a,b,c){
    return a+b+c / arguments.length;
}
console.log("Average of Number", NumberOfAverage(34,54,64))

function CheckNegative(num){
    if(num < 0){
        return num * -1
    }else{
        return num
    }
}
console.log("Check Number Negative of Positive", CheckNegative(-5))