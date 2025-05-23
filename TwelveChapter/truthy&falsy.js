const string = "false";
if(!!string){
    console.log("this value is truthy")
}

const x = { };
if(x){
    console.log("x value is truthy")
}

const y = [];
if(y){
    console.log("y value is truthy")
}

const z = [];
if(!!z){
    console.log("z value is truthy")
}