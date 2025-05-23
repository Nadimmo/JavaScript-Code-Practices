const taxRate = 15;
function calculateTax(price) {
    const totalTax = (price / 100)*taxRate
    return totalTax
}
console.log(calculateTax(1540), "is the tax amount"); 

function FirstClassFunction(){
    let insideSecret  = "internal secret hidden place"
}
// console.log(insideSecret); // ReferenceError: insideSecret is not defined

{
let temperature = 100;
}
// console.log(temperature); // ReferenceError: temperature is not defined

function schoolDetails(){
    let schoolName = "RTSC";
    function displaySchoolName(){
        console.log(schoolName)
    }
    displaySchoolName()
}
schoolDetails()