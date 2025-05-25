try {
    const product = { name: 'Date', price: 430 }
    // const product = 'data corrupted'
    const productParsed = JSON.parse(product);
    console.log(productParsed);

} catch (e) {
    console.log("Invalid JSON Format", e.message);
}



function validateInput(email) {
    try {
        if (email.includes('@') === false) {
            throw new Error("Invalid email format");
        }
        console.log(email);

    } catch (e) {
        console.log(e.message);
    }
}
validateInput('example@com');


// try {
//     const text = {role: "CEO", weeklyHours: 1000}
//     const parseText = JSON.parse(text)
//     console.log(parseText)

// }finally {
//     console.log("Week is over")
// }


function CallMe(string){
    try{
        if(typeof string !== 'string') {
            throw new Error("Input must be a string");
        }
        console.log("You called me with: " + string);
    }catch(e) {
        console.log(e.message);
    }
}
CallMe("name");


try{
    console.log("Deleting Account")
}catch{
    console.log("Failed to Delete Account")
}finally{
    console.log("Account deletion attempt finished")
}