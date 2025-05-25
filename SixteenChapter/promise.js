const getUsers = new Promise((resolve, reject) => {
    const users = ["js", "java", "python", "c++"];
    const user = false;
    if (user) {
        resolve(users)
    } else {
        reject("No users found")
    }
})
getUsers.then((users) => {
    console.log(users);
}).catch((error) => {
    console.log(error);
})


const payment = new Promise((resolve, reject) => {
    const amount = 90;
    if (amount > 0) {
        resolve(`you have pay this ${amount} taka`)
    } else {
        reject("minimum amount not found for pay!")
    }
})
payment.then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})


function SendEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const validation = emailPattern.test(email)
    
    const callMe = new Promise((resolve, reject) => {
        if(validation === true){
            resolve("Email Form Angora Princes")
        }else{
            reject("Lest Dance is spam folder")
        }
    })

    callMe.then((result)=>{
        console.log(result)
    }).catch(error =>{
        console.log(error)
    })
}

SendEmail("nadim23@gmail.com")