let x = null;
x ??= 77;
console.log(x)

const product = {
    name: "pen",
    price: 5,
    brand: "matador"
}
const setStock = product?.stock??0 
console.log("use nullish coalescing set default value, ",setStock)


const productDetails = {
    name: "pen",
    price: 5,
    brand: "matador",
    discount : -0
}
const result = productDetails?.discount??10;
console.log(result) // is not working because ?? just working in null and undefined 

const vehicle = {
    name: "BMW",
    price: 120000,

}
const setEngine = vehicle?.engine??"Engine is missing"
console.log(setEngine)

const restaurant = {
    name: "city star", 
    address: "Rangpur city"
}
const setMenu = restaurant?.menu??"menu not available"
console.log(setMenu)