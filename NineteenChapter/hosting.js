// comments += 1;
const comments = 10;
// console.log(comments) // ReferenceError: Cannot access 'comments' before initialization




// views /= 2;
const views = 100;
// console.log(views) // ReferenceError: Cannot access 'views' before initialization



console.log(MaxNumber(87,12)) // javaScript is automatically up to function declaration and when need this then use it this is js by default nature

function MaxNumber(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}