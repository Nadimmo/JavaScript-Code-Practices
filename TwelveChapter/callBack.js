function greeting(text){
    console.log(text);
}
function sayHello(){
    console.log("Hello World")
}
greeting(sayHello)


function callBack(obj){
    console.log(Object.keys(obj));
}
const object = {name: "javaScript", age:30};
callBack(object)


function numberProcessor(num){
    console.log("divide by 5 then result:", num / 5)
}
numberProcessor(2230)

function FirstClassFunction(greetingHandler){
    greetingHandler();
    
}
function SecondClassFunction(){
    console.log("I am a second class function");
}
FirstClassFunction(SecondClassFunction);