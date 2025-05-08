const technologies = ["Condition", "array", "loop"]
const newArray = ["variable", ...technologies]
console.log(newArray)

const fruits = ["Apple", "Banana", "Mango"]
const newFruits = [...fruits, "papaya", "orange"]
console.log(newFruits)

const frontEnd = ["JavaScript"]
const backEnd = ["Node.js"]
const database = ["MongoDB"]
const result = [...frontEnd, ...backEnd, ...database]
console.log(result)


const website = { name: "MySite", type: "e-commerce", status: "active" }
const newObject = {...website, theme:"dark"}
console.log(newObject)

const young = { name: "Arif", age: 30, country: "B Baria" }
const {country, ...allData} = young;
console.log(allData)

const car = { make: "Toyota", model: "Corolla", year: 2020 }
const newAddition = {...car, year: 2032}
console.log(newAddition)