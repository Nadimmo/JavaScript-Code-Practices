let x = 10;
let y = 20;

console.log("initialize value", x, y)

// x=y; 
// y=x;

const temp = x;
x = y;
y = temp;
console.log(x, y)