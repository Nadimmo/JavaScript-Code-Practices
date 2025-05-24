function CallMe(string){
    if( typeof string !== "string"){
        return "Please provide an string"
    }
    return string
}
console.log(CallMe("javaScript"))


function ArrayCallMe(array){
    if(!Array.isArray(array) ){
        return "Please provide an array"

    }
    const indexArray = array.length;
    const lastIndex = indexArray - 1;
    return array[lastIndex];
}
const array = [10,20,30,40,50];
console.log("last element of array:",ArrayCallMe(array));


function getArea(width, hight){
    if(typeof width !== "number" || typeof hight !== "number"){
        return "Please provide an number"
    }
    return width*hight;
}
console.log("Rectangle area of:", getArea(45,40))