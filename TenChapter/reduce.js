const numbers = [5,10,15,20,25]
const total = numbers.reduce((sum,currentValue)=> sum + currentValue ,0)
console.log(total)

  const products = [
   {id: 1, name: 'lenovo', price: 65000},
   {id: 2, name: 'dell', price: 45000},
   {id: 3, name: 'hp', price: 40000},
   {id: 4, name: 'mac', price: 165000},
  ];
const totalPrice = products.reduce((sum, currentValue)=> sum + currentValue.price,0)
console.log("total product price:", totalPrice)

const multiply = [1,2,3,4,5]
const result = multiply.reduce((m,c)=> m*c)
console.log("multiply in array result:", result)


const arrays = [10,20,30,40,50,67]
const maxValue = arrays.reduce((first,second)=> Math.max(second))
console.log("max value in array:",maxValue)

const arrays2 = [100,200,300,400,500]
const sum = arrays2.reduce((s,c)=> s+c,50)
console.log("sum of arrays:", sum)