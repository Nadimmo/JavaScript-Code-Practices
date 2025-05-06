const FirstIndex = (nums)=>{
    return nums[0]
}
const array = [2,34,54,436,7]
console.log("array first index value:", FirstIndex(array))

const ThreeNumberMultiple =(a,b,c)=>{
    return a*b*c;
}
console.log("multiple of three numbers:", ThreeNumberMultiple(45,33,6))

const CheckArrowFunction = ()=>{
    return "Unknown"
}
console.log(CheckArrowFunction())

const DivideValue = (price)=>{
    const result = price % 5;
    return result;
}
const object = {
    name: "nadim mostofa",
    price: 2079
}
console.log("Divide by 5 in object price value", DivideValue(object.price))


const LastIndex =(nums)=>{
    const result = nums.length -1;
    return result;

}
const array2 = [2,34,54,436,7]
console.log("Last index of array:", LastIndex(array2))

const SumOfArray =(nums)=>{
    const lastIndex  = nums.length - 1; 

    const firstNumber = nums[0];
    const lastNumber = nums[lastIndex]
    const total = firstNumber + lastNumber;
    return total
}
const array3 = [2,34,54,436,7,54,90]
console.log("sum of array first and last element:", SumOfArray(array3))