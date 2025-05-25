// Problem: 01
// async function fetchUserData() {
//     try{
//         const users = await fetch("https://jsonplaceholder.typicode.com/users/2") 
//         const response = await users.json()
//         console.log(response)
//     }catch(e){
//         console.log("Data not provide")
//     }
// }
// fetchUserData()


// Problem: 2
// async function fetchPostData() {
//     try{
//         const post = await fetch("https://jsonplaceholder.typicode.com/posts?userId=1") 
//         const response = await post.json()
//         console.log(response)
//     }catch(e){
//         console.log("Data not provide")
//     }
// }
// fetchPostData()

// const fetchPostData = async()=>{
//     try{
//         const post = await fetch("https://jsonplaceholder.typicode.com/posts?userId=2")
//         const res = await post.json()
//         console.log(res)
//     }catch(e){
//         console.log(e.message)
//     }
// }

// fetchPostData()



// Problem: 03
// async function Comments() {
//     try{
//         const comments =await fetch("https://jsonplaceholder.typicode.com/comments")
//         const res = await comments.json()
//         console.log(res)

//     }catch(e){
//         console.log(e.message)

//     }finally{
//          console.log("Request Complete")
//     }
    
// }
// Comments()

// Problem: 04
async function fetchUserDataById(id) {
    try{
        const users = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`) 
        const response = await users.json()
        console.log(response)
    }catch(e){
        console.log(e.message)
    }finally{
        console.log("Data Load Successfully")
    }
}
fetchUserDataById(8)