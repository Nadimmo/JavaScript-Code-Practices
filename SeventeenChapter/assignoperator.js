let a = 59;
let b = a++ // post -increment
console.log("post-increment", b) // not change value 
let c = ++a;
console.log("per-increment", c) // value is change


let orange = 100
orange /= 15
console.log("divide this value by 15 then result:", orange)

let mango = 20;
mango &&= 10; // when value is truthy then set new value or value is falsy not change value /
console.log(mango)

let bananas = 50;
bananas *= 4
console.log(bananas)

let apples = 40;
apples -= 10;
console.log(apples)


let price = undefined;
price ||= 90; // || is or assign operator is working only falsy value and sent new value in variable;
console.log(price)

let tomato = 0;
tomato &&= 10; // && is add assign operator is only working is truthy value this variable value is not change
console.log(tomato)

let chary = 15; 
chary %= 6 // %= is modules assign operator is means modules in divide by value 
console.log(chary) 