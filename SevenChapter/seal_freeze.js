const headphone  = {
    brand: "Sony", price: 3000, color: "black"
}
Object.freeze(headphone) // don't add new property because this object is freeze now
headphone.country = "bangladesh"
// console.log(headphone)

const player = { name :"Messi", goals :800, club : "Inter Miami" }; 
// Object.freeze(player)
player.country = "US"
console.log(player)
// 
const book = { title: "Harry Potter", author: "JK Rowling", pages :500 }
Object.seal(book) // seal it's not delete and add any property in object just edit or update property in object
book.author = 'nadim mostofa'
// console.log(book)


const gaged = {
    name: "iPhone", price :120000, color :"Black"
}
delete gaged.price;
console.log(gaged)

const animal ={
    name: "Tiger", location: "Sundarban"
}
Object.freeze(animal)
// console.log(animal)

const food = { name: "Pizza", price: 500, size: "Large"}
Object.seal(food) // just update property not delete and add;
food.price = 300;
console.log(food)