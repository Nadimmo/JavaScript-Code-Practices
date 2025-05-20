const fruits = ["apple", "banana", "chary","date"]
const newFruits = fruits.slice(1,3)
console.log(newFruits)

const cars = ["Tesla", "BMW", "Toyota", "Ford"]
const newCars = cars.slice(0,2)
console.log(newCars)


const movies = ["Inception", "Titanic", "Joker", "Avatar", "Interstellar"]
const newMovies = movies.splice(2,2, "Batman", "Superman")
console.log(movies)
console.log(newMovies)

const players = ["messi", "ronaldo","nymer", "mbappe"]
const newPlayer = players.splice(2,1, "haland")
console.log(players)