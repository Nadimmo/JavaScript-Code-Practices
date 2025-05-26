class Vehicle{
    constructor(brand, model, year, price, color) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.price = price;
        this.color = color;
    }
}

class Car extends Vehicle {
    constructor(brand, model, year, price, color, doors) {
        super(brand, model, year, price, color);
        this.doors = doors;
    }
}
class Motorcycle extends Vehicle {
    constructor(brand, model, year, price, color, type) {
        super(brand, model, year, price, color);
        this.type = type;
    }
}
class Truck extends Vehicle {
    constructor(brand, model, year, price, color, capacity) {
        super(brand, model, year, price, color);
        this.capacity = capacity;
    }
}

const car = new Car("Toyota", "Camry", 2020, 24000, "Blue", 4);
const motorcycle = new Motorcycle("Harley-Davidson", "Street 750", 2019, 7500, "Black", "Cruiser");
const truck = new Truck("Ford", "F-150", 2021, 30000, "Red", "1000kg");
// console.log(car)
// console.log(motorcycle)
// console.log(truck)




class Furniture {
    constructor(        type, material, color, dimensions, price
    ) {
        this.type = type;
        this.material = material;
        this.color = color;
        this.dimensions = dimensions;
        this.price = price;
        
    }
}
class Chair extends Furniture {
    constructor(type, material, color, dimensions, price, legs) {
        super(type, material, color, dimensions, price);
        this.legs = legs;
    }
}
class Table extends Furniture {
    constructor(type, material, color, dimensions, price, shape) {
        super(type, material, color, dimensions, price);
        this.shape = shape;
    }
}
class Sofa extends Furniture {
    constructor(type, material, color, dimensions, price, seatingCapacity) {
        super(type, material, color, dimensions, price);
        this.seatingCapacity = seatingCapacity;
    }
}
const chair = new Chair("Office Chair", "Leather", "Black", "45x45x100 cm", 150, 5);
const table = new Table("Dining Table", "Wood", "Brown", "180x90x75 cm", 500, "Rectangular");       
const sofa = new Sofa("Sofa", "Fabric", "Gray", "200x90x85 cm", 800, 5);
// console.log(chair)
// console.log(table)
// console.log(sofa)