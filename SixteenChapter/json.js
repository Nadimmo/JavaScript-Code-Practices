const user = {
    name: "nadim mostofa",
    email: "nadimmostafa334@gmail.com",
    address: "Rangpur city",
    orderHistory: ["Iphone 14 Pro Max", "MacBook Pro 16", "Apple Watch Series 8"],
}
// console.log("Convert js object to json stringify", JSON.stringify(user));


const shoppingCart = {
    products: ["bike ", "car", "mobile", "headPhone"],
    Totalprice: 120300,
    name: "nadim mostofa",
    id: 2021,
    contact: "nadimmostafa334@gmail.com"
}
// console.log("Convert js object to json stringify", JSON.stringify(shoppingCart));


const MovieDetails = {
    title: "Borbad",
    releaseYear: 2025,
    actors: ['Shakib Khan', 'Ridhika paul'],
    rating: 8.8
}
const newMovie = JSON.stringify(MovieDetails)
// console.log("Convert js object to json stringify", newMovie);
// console.log("Convert json stringify to js object", JSON.parse(newMovie));


const projects = [
    {
        projectName: "surveyor pro",
        teamMembers: [3],
        description: "this is a calculate surveyor web application you can see all functionality and authorization and authentication. ",
        deadline: 2025-4-12,
        task: {name: 'web app', status: 'pending' }
    },
    {
        projectName: "blogging platform",
        teamMembers: [3],
        description: "this is a calculate surveyor web application you can see all functionality and authorization and authentication. ",
        deadline: 2025-4-12,
        task: {name: 'web app', status: 'pending' }
    }
]
// console.log("Convert js object to json stringify", JSON.stringify(projects));

const productReview = {
    productName: "mac book",
    reviewerDetails: {name: "nadim mostofa", email: "nadimmostafa334@gmal.com"},
    rating: 8.7,
    text: "average"
}
const newReview = JSON.stringify(productReview)
const convertPars =    JSON.parse(newReview)
const convertArray = Object.entries(convertPars);
console.log("convert js object to js stringify:", newReview)
console.log("convert js object to js stringify:", convertArray)