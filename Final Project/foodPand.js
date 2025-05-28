const restaurants = [
    { id: 1, name: "Pizza Place", menu: [{ name: "Pepperoni Pizza", price: 12 }] },
    { id: 2, name: "Sushi House", menu: [{ name: "Salmon Sushi", price: 15 }, { name: "Pasta", price: 13 }] }
];
const orders = [];
const reviews = [];
// Discount in percentage
const discountCodes = { "SAVE10": 10, "WELCOME15": 15 };

// Task: 1
// function getFoodPrice(restaurantName, foodName) {
//     const restaurant = restaurants.find(item => item.name === restaurantName)
//     if (!restaurant) {
//         console.log("Restaurant is not found")
//         return;
//     }
//     const foodItem = restaurant.menu.find(item => item.name === foodName)
//     // console.log(foodItem)
//     if (!foodItem) {
//         return console.log("Food Item not found")
//     }

//     let price = foodItem.price;
//     console.log(`Restaurant Name ${restaurantName} and Order Food ${foodName} and Price ${price}`)
//     return console.log(price)

// }
// getFoodPrice("Pizza Place", "Pepperoni Pizza")




// Task:2
function PlaceOrder(customer, restaurantName, foodName, discountCode) {
    const restaurant = restaurants.find(item => item.name === restaurantName)
    if (!restaurant) {
        console.log("Restaurant is not found")
        return;
    }
    const foodItem = restaurant.menu.find(item => item.name === foodName)
    // console.log(foodItem)
    if (!foodItem) {
        return console.log("Food Item not found")
    }

    let price = foodItem.price;

    if (price < 0) {
        return console.log("Minimum Price is not found")
    }


    const discountKey = Object.keys(discountCodes)
    const coupon = discountKey.find(key => key === discountCode) // check coupon code;
    const percentage = discountCodes[discountCode]

    if (!coupon) {
        return console.log("Cupone code is invalid")
    }

    let discountedPrice = price;

    if (coupon) {
        const discountAmount = (price * percentage) / 100;
        discountedPrice = price - discountAmount;
    }
    let order = { orderId: orders.length + 1, name: customer, restaurant: restaurantName, itemName: foodName, payAmount: discountedPrice, status: "pending" };

    orders.push(order)
    console.log(`you order is successfully placed order id: ${order.orderId}`)
    return order;


}
PlaceOrder("nadim", "Pizza Place", "Pepperoni Pizza", "SAVE10")
PlaceOrder("Bob", "Sushi House", "Salmon Sushi", "WELCOME15");
PlaceOrder("Charlie", "Sushi House", "Pasta", "SAVE10");
console.log(orders);


// Task:3
// function CityPlace(restaurantName) {
//     const restaurant = orders.filter(item => item.restaurant === restaurantName)
//     let totalSell = 0;
//     if (!restaurant) {
//         return totalSell;
//     }
//     totalSell = restaurant.reduce((previousValue, currentValue) => previousValue + currentValue.payAmount, 0)
//     console.log("your restaurant total sell:", totalSell, "taka")
//     return totalSell;
// }
// CityPlace("Sushi House")




// Task:4
// function SubmitReview(id, restaurantName, rating, review){
//         const restaurant = orders.find(item => item.restaurant === restaurantName)
//         const Id = orders.find(item => item.orderId === id)

//         if(!restaurant && !Id){
//             return console.log("na khay hudai review diban na")
//         }
//         if(restaurant && Id){
//             if(rating > 5 || rating < 0){
//                 return console.log("you have must submit rating 1 to 5")
//             }
//             if(review.length < 20 ){
//                 return console.log("you have must submit review minimum 20 word")
//             }
//         }
//         const reviewData = {id, restaurant: restaurantName, rating: rating, review}
//         console.log("your review is successfully submit")

//         reviews.push(reviewData)
//         return reviewData;
// }

// SubmitReview(1,"Sushi House", 5, "These changes make the code more readable, maintainable, and easier to understand, which aligns with the request for a approach.")
// console.log("all reviews:", reviews)