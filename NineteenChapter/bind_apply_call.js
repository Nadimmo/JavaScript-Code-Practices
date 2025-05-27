const team = {
    name : "Manchester United",
    players: 24,
    play(){
        console.log(`Paying ${this.players} players of ${this.name}`);
    }
}

// team.play(); // this refer to team object

const tournament = {
    name: "World Cup",
    players: 320,
}
const result = team.play.bind(tournament); // bind method create new function with this refer to tournament object
// result()



const car = {
    speed: "120 km",
    price: 150000,

    drive(){
        console.log(`This car ${this.speed} speed per hour and price ${this.price} `)
    }
}

// car.drive()

const bike = {
    speed: "320 km",
    price: 34000
}
const truck = {
    speed: "100 km",
    price: 300000
}
// car.drive.call(bike)
// car.drive.call(truck)


const employee = {
    name: "Nadim Mostofa",
    role: "Web Developer",

    details(){
        console.log(`I am ${this.name} and my designation is ${this.role}`)
    }
}
// employee.details()

const manager = {
    name: "Alex Carry",
    role: "Manager"
}
// employee.details.apply(manager)


const classRoom = {
    name: 414,
    students: "Nadim Mostofa, Musa, Mobassar, Raju",
    attendance(){
        console.log(`Room No ${this.name} we are ${this.students}  inside `)
    }
}
// classRoom.attendance()
const lab = {
    name: 501,
    students: "Alex , Jhonson, Michel"
}
const result2 = classRoom.attendance.bind(lab)
result2()