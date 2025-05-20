const array = [50, 12, 28, 8, 15]
array.sort((a, b) => a - b)
console.log(array)

const array2 = [13, 2, 45, 9, 6]
array2.sort((a, b) => b - a)
console.log("descending in array:", array2)


const friends = [{ name: "Nadim Mostofa", age: 21 }, { name: "Avi", age: 25 }, { name: "Alicen", age: 22 }]
friends.sort((a, b) => a.age - b.age)
console.log(friends)

const names = ["nabil", "zubayer", "sarwar", "fahim"]
names.sort()
console.log(names)