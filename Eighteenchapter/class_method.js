class Hotel {
    constructor(name, room, price) {
        this.name = name;
        this.price = price;
        this.room = room;
    }

    getName() {
        return this.name;
    }
}
const hotel = new Hotel("ABS Family", 50, 2500)
console.log("Hotel Name :", hotel.getName())



class Employee {
    constructor(name, designation, salary) {
        this.name = name;
        this.designation = designation;
        this.salary = salary;
    }

    getSalary() {
        return this.salary;
    }
}
const employee = new Employee("Nadim Mostofa", "Web Developer", 15000)
console.log("Employee Salary:", employee.getSalary())



class Library {
    constructor(books = []) {
        this.books = books;
    }

    addBook(book) {
        if (Array.isArray(book)) {
            this.books.push(...book);
            return this.books;
        } else {
            this.books.push(book)
        }
        return this.books;
    }

    hasBook(book) {
        if (this.books.includes(book)) {
            return console.log("Books is found")
        } else {
            return console.log("Books is not found")
        }
    }
}
const library = new Library()
library.addBook(["javaScript", "Python", "Java", "C++"])
library.hasBook("Java")
console.log(library)



class ShoppingCard {
    constructor(products = [], totalPrice = 0) {
        this.products = products;
        this.totalPrice = totalPrice;

    }

    addToCard(product, price) {
        if (Array.isArray(product)) {
            this.products.push(...product)
            return this.products;
        } else {
            this.products.push(product);
        }
        this.totalPrice += price
        return this.products
    }

    getTotalPrice(){
        return this.totalPrice;
    }
}
const cart = new ShoppingCard()
cart.addToCard("laptop", 40000 )
cart.addToCard("Pad", 5000 )
cart.addToCard("iphone", 31000 )
console.log("Total Price:", cart.getTotalPrice())
console.log(cart)

