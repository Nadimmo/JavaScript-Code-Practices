if(true == 1){
    console.log("same")
}else{
    console.log("different")
}

const a = {name:"nadim"}
const b = {name:"nadim"}
if(a === b){
    console.log("object is same")
}else{
    console.log("object is not same")
}

const array = [1,2,3];
const newVersion = array;
if(array === newVersion){
    console.log(" is same")
}else{
    console.log(" is not same")
}

// function newFunction(1,true){
//     if(1 === true){
//         console.log("is same value")
//     }
// }
// newFunction()

const str = "";
if(str == false){
    console.log("is same value")
}

if(null === undefined){
    console.log("whta's value") // don;t check compar both 
}

if( 1 == "1"){
    console.log("1 is same ")
}