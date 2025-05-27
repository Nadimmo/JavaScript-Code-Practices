// (function(){
//     console.log("This is an IIFE (Immediately Invoked Function Expression)");
//     const message = "I am a local variable inside IIFE";
//     console.log(message);

// })();


// (()=>{
//     console.log("borrow form arrow")
// })()


(function(kelvin){
    const celsius = kelvin - 273.15;
    console.log("Temperature in Celsius: " ,+ celsius.toFixed(2));
})(300);