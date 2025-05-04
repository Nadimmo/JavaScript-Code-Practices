for(let i = 1; i <= 30; i++) {
    if(i % 5 === 0){
        // console.log("1 to 50 number divisible by 5:",i);
    }
}

for(let i = 20; i <= 50; i++){
    if(i % 7 === 0){
        // console.log("20 to 50 divisible by 7 number:",i);
    }
}

for(let i = 40; i <= 80; i++){
    if(i % 5 === 0 && i % 7 === 0){
        // console.log("40 to 80 divisible by 5 and 7 number:",i);
    }
}

let sum = 0;
for(let i = 1; i <= 40; i++){
    if(i % 13 === 0){
        sum += i;
    }
}
// console.log("Sum of number from 1 to 40:",sum);


for(let i = 1; i <= 50; i += 4){
    // console.log("Number from 1 to 50 with increment of 4:",i);
}

for(let i = 0; i <= 100; i++){
    if(i % 9 === 0 && i % 6 === 0){
        // console.log("0 to 100 divisible by 9 and 6 number:",i);
    }
}

let sum2 = 0;
for(let i = 1; i <= 50; i++){
    if(i % 3 === 0 && i % 4 === 0){
        sum2 += i;
    }
}
console.log("Sum of number from 1 to 50 divisible by 3 and 4:",sum2);