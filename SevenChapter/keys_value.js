const book = {
    name: "The Overthinking",
    writer: "Nadim Mostofa",
    price: 60,
    publisher: "TWE",
    topic: "how to thinking"
}

// console.log(Object.keys(book))
// console.log(Object.values(book))


const article = { title: "Learning JS", category: "Programming" };
const hasAuthor = Object.keys(article)
// console.log("check author property in object", hasAuthor.includes("author"))

const laptop = { brand: "Dell", model: "Inspiron", price: 45000 };
for (let key in laptop) {
    const value = laptop[key]
    // console.log(key)
    // console.log(value)
}

const phone = { brand: "Samsung", model: "Galaxy S21", price: 85000 };
for (let key of Object.keys(phone)) {
    const value = phone[key]
    // console.log("property in object", key)
    // console.log("value in object",  value)
}

const bike = {
    brand: "Hero",
    price: 120000,
    model: "Splendor"
}

// console.log("value in object", Object.values(bike))


const books = { book1: "Harry Potter", book2: "The Hobbit", book3: "Game of Thrones" }
for (let book in books) {
    // console.log(books[book])
}

const numbers = { a: 10, b: 20, c: 30, d: 40 };
let sum = 0;
for (let num of Object.values(numbers)) {
    sum += num
}
// console.log("sum of object value", sum)

const player = {
    name: "Messi", team: "Argentina", goals: 91
}
// console.log("value of object", Object.values(player))

const building = {
    floors: 10,
    address: ["street Main Road", "city Dhaka"],
    type: "Commercial"
}

for(let key in building){
    console.log('value of object', building[key])
    console.log("key of object" ,key)
}