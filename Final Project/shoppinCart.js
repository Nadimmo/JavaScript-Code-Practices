let products = [
    { id: 1, name: "Smartphone", price: 200, stock: 10 },
    { id: 2, name: "Laptop", price: 800, stock: 5 }
];

let cart = [];
let orders = [];

// Task:1
function addToCart(productId, quantity) {
    const product = products.find(p => p.id === productId);
    const ProductPrice = product.price;
    const ProductId = product.id;
    if (!product) {
        console.log("Product not found");
        return;
    }
    if (product.stock < quantity) {
        console.log("Not enough stock available");
        return;
    }
    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity += quantity;
    } else {
        cart.push({ ProductId, quantity, ProductPrice });
    }
    product.stock -= quantity;
    console.log(`${product.name} added to cart and quantity is ${quantity} `);
}
addToCart(1, 2);
addToCart(2, 3);
addToCart(1, 3);


// Task:2
function viewCart(cartItem) {
    console.log("view all cart item", cartItem)
}
viewCart(cart)



// Task:3
function placeOrder(cartItem) {

    if (cartItem.length < 0) {
        return console.log("your cart is empty")
    }
    if (cartItem.length > 0) {
        const order = cartItem.map(item => item)
        let totalPrice = 0;

        for (let i = 0; i < order.length; i++) {
            totalPrice += order[i].ProductPrice * order[i].quantity;
        }
        return orders.push( totalPrice)
    }
}
placeOrder(cart);
console.log("Total Price :", orders)