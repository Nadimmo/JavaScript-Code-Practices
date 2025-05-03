const fruits = ["apple", "banana", "orange", "grape", "kiwi"];
if(fruits.includes("mango")){
    console.log("Mango is in the array.");
}else{
    console.log("Mango is not in the array.");
}

const man = ["babul", "kabul", "alif"]
const result = man.indexOf("babul")
console.log("index of ",result)

const city = ["Dhaka", "Chittagong","rajshahi"]
const result1 = city.includes("RajShahi")
console.log("check city", result1)

const weather = ["mag", "bisti", "cool",'borsa']
if(weather.includes('bisti')){
    console.log("I need umbrella")
}else{
    console.log("No rain no pain")
}

const sports = ["football", "cricket", "volleyball"]
const result3 = sports.includes("badminton")
console.log("check sport", result3)