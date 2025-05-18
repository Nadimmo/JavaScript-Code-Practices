const numbers = [23, 44, 5, 3, 64, 75, 446, 73, 900]
const result = numbers.some(item => item > 100)
console.log(result)

const numbers2 = [23, 44, 5, 10]
const divide = numbers2.every(item => item / 5)
console.log(divide)

const words = ["ello","world", "newyork", "america"]
const check = words.some(item => item === "hello")
console.log(check)

const age = [23, 44, 5, 10]
const result2 = age.every(a => a >18)
console.log(result2)