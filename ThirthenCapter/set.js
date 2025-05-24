const array = new Set([1,2,2,3,3,4,5])
console.log("new array remove duplicate", array)


const array2 = new Set([])
array2.add(10)
array2.add(20)
array2.add(10)
array2.add(30)
console.log(array2)

const array3 = [1,2,3,3,4,5,5 ,6,8, 9, 7,7];
const newArray = [...new Set(array3)]
console.log(newArray)
