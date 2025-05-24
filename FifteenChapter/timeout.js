// setTimeout(()=>{
// console.log(" I wasted 3 second of my file by looking at screen doing nothing")
// },3000)

let num = 131;
// setInterval(() => {
//     num = num + 2;
//     console.log(num); 
    
// },2000);


let text =  "I am learning javaScript";
let count = 0
const setIntervalId = setInterval(()=>{
    console.log(text)
    count++;
    if(count === 6){
        clearInterval(setIntervalId);
        console.log("Interval cleared after 6 iterations");
    }
},2000)

