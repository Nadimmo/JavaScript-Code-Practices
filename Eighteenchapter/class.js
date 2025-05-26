class Vehicle {
    constructor(brand, model , price) {
        this.brand = "BMW"; 
        this.model = "X5";
        this.price = price;  
 
    }
}
const car = new Vehicle("BMW", "XS",50000);
const car2 = new Vehicle("Tesla", "Model S", 80000);
console.log(car)
console.log(car2)


class Worker {
    constructor(id,name, hoursWorked) {
        this.id = id;
        this.name = name;
        this.hoursWorked = hoursWorked;
    }
}
const worker = new Worker(1, "Tom Cursh", 101)
console.log(worker)


class Library {
    constructor(name,books, location) {
        this.name = name;
        this.books = books;
        this.location = location;
    }
}
const library = new Library("Cental Library", 1000, "Dhaka")
console.log(library instanceof Library) // true 


class ClassRoom {
    constructor(student,section, teacher) {
        this.student = student;
        this.section = "A",
        this.teacher = "Mr.Plumber";
    }
}
const room = new ClassRoom([], "B", "Mr.Alex")
console.log(room)


// class Product {
//     constructor(name, category, stock) {
//         this.name = name;
//         this.category = category;
//         this.stock = stock;
//     }
// }
// const product = new Product("mobile", "Electronic", 50)
// console.log(product)


class Product {
    constructor(name, category, stock) {
        this.name = name;
        this.category = category;
        this.stock = stock??=0 ; // set default value using nullish coalescing
    }
}
const product = new Product("mobile", "Electronic")
console.log(product)