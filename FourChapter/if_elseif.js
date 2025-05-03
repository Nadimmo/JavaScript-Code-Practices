const price = 4500;
if(price > 6000){
    const discount = (price / 100)*15;
    const pay = price - discount;
    console.log("You have to pay : " + pay ,"taka then discount 15%");
}else if(price > 3000){
    const discount = (price/100)*5;
    const pay = price - discount;
    console.log("You have to pay:", pay, "taka then discount 5%")
}else{
    console.log("You have no discount you will pay full amount")
}

const age = 70;
const amount = 4932;
if(age < 12){
    console.log("It's my honor don't pay mony")
}else if(age  > 60){
    const pay =  amount - (amount/100)*50;
    console.log("You have to pay:", pay, "taka then discount 50%")
}else{
    console.log("Don't have discount")
}

const taka = 5593;
if(taka < 1000){
    console.log("Deposit your bank account")
}else if(taka >= 1000 && taka <= 5000){
    console.log("Dindash Life")
}else if(taka > 5000){
    console.log("tumi amaka bia koro")
}else{
    console.log("Dhur vag")
}


const marks = 76;
if(marks < 50){
    console.log("you are fail")
}else if(marks >= 50 && marks <=80){
    console.log("you are pass")
}else if(marks > 80){
    console.log("you are A+")
}else{
    console.log("try next time you can better")
}

const temperature = -4;
if(temperature < 0){
    console.log("Ice")
}else if(temperature >= 0 && temperature <=20){
    console.log("cool cool")
}else if(temperature > 20){
    console.log("Hot Hot")
}else{
    console.log("normal weather")
}

const playerLevel = 35;
if(playerLevel < 10){
    console.log("novice")
}else if(playerLevel >= 10 && playerLevel <= 50){
    console.log("expert")
}else if(playerLevel > 50){
    console.log("pro gammer")
}else{
    console.log("try better")
}