const sandueis =  [ 30,40,50,60,77,32]
const upToValue = sandueis.map(item => item + 13)
console.log("sandueis taka", upToValue)

const players = ["messi", "ronaldo", "play", "zidan", "nymer", "maradona"]
const newPlayer = players.filter(str => str.length > 5)
console.log("new player list", newPlayer)

const array = [20,23,4,50,16,7]
const newArray = array.find(item => item > 20)
console.log("new array", newArray)

const hight = [66,69,78,76,56,44,87]
const perfect = hight.filter(h => h > 69)
console.log("perfect hight ", perfect)
const divide = hight.map(h => h/5)
console.log("divide by 5 then value:", divide)

const friends = ['java', 'javascript', 'ruby', 'python', 'swift']
const position = friends.map(friend => friend[2])
console.log("friend name third latter", position)

const array2 = ["Tom", "Harry","Jack", "Sam"]
const result = array2.find(item => item[0] === "H")
console.log("which name start H:", result)

const array3 = [3,3,4,53,63]
const result2 = array3.forEach(item => console.log(item))