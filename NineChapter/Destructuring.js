const product = { name: "Laptop", price: 50000, brand: "Dell" }
// const { name, price, brand } = product;
// console.log(brand)

const item = { name: "Mobile", price: 20000, phone: "Samsung" }
const { name, price, phone } = item;
console.log(phone, price)


const colors = ["red", "blue", "green", "yellow"];
const [first, second, third, four] = colors;
console.log(first, second)


const threeValue = [10, 20, 30]
const [one, two, three] = threeValue;
const secondValue = two;
console.log("second value of array:", secondValue)

const digits = [2, 4, 6, 8]
const [firstV, secondV, thirdV, fourV] = digits;
const twoDigits = secondV;
const eightDigits = fourV;
console.log("Digits in array first and last number", twoDigits, eightDigits)


function multiply(a, b) {
    return [a * 3, b * 3];
}
const [prothom, ditio] = multiply(3, 4)
console.log(prothom, ditio)


const person = { name: "Rahim", city: "Dhaka" }
const { name: user, city, phone: mobile = "N/A" } = person;
console.log(user, city, mobile)


const teacher = { name: "Maria", profession: "Teacher" }
const { name: alias, profession } = teacher;
console.log(alias, profession)