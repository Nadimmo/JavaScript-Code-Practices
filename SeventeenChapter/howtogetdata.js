const array = [{id:1, name:"mukta", address: "mirpur"}]
console.log((array[0].address))

const library = {
    name: "City Library",
    books: [{id:1, title: "javaScript Basic", price: 300}, {id:2, title: "Python Basic", price: 400}],
}
console.log(library.books[1].price)

const school = {
    name: "ABC High School",
    students: [{id:1, name: "Alex" }, {id:2, title: "John"}],
}
console.log(school.students[0].name)


const shope = {
    items: [{name: 'pen', stock: 100}, {name: "notebook", stock: 50}]
}
console.log(shope.items[1].stock)


const movie = {title: "Inception", director: {name: "Nolan", age: 50}, rating: 8.8 }
console.log(movie.director.name)


const game = {
    name: "football",
    players: [{id: 1, name: "Lional Messi"}, {id: 2, name: "Cristiano Ronaldo"}]
}
console.log(game.players[0].name)