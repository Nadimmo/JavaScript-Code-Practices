function Add(a = 0, b = 0, c = 3) {
    const result = a + b + c;
    return result;
}
console.log("sum of three number:", Add(2, 5))

function DepositMony(mony = 50) {
    return mony;
}
console.log("Deposit mony:", DepositMony(4530))

function GetValueOfUser(name = "anonymous", earn = 0) {
    if(!name.trim()){
        name = "anonymous"
    }
    return console.log("name of user", name, "and monthly earn", earn)
}
GetValueOfUser("nadim", 10000)

function Square(num=1){
    const result = num*num;
    return result;
}
console.log("Square of number", Square(5))

function Product(name="Unknown product",price=1){
    if(!name.trim()){
        name = "Unknown product"
    }
    return console.log("product name", name, "and price", price)
}
Product(" ", 20) 


function Books(name=["js book"]){
    return name;
}
const books = ["python", "java", "c++"]
console.log("Favorite books", Books(books))


function Quantity(product={price: 10, quantity: 1}){
    const totalPrice = product.price * product.quantity;
    return totalPrice;
}
const object = {price: 50, quantity: 5}
    console.log("any product total price", Quantity())