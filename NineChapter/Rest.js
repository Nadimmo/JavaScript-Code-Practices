const product = { name: "Laptop", price: 50000, brand: "Dell" };
const {name, ... lastTwpValue} = product;
console.log(lastTwpValue)

const project = { id: 101, title: "Web App", budget: 3000, client: "Tech Corp" };
const {title, ... allValue} = project;
console.log(allValue)

const programmer = { name: "Sophia", language: "JavaScript", experience: 5, specialty: "Frontend", tools: "React" };
const {language, specialty, ... details} = programmer;
console.log(details)

const array  = [10, 20, 3, 30, 300, 3000] ;
const [first,second, ... allNumber] = array;
console.log(allNumber)

function Add(a,b,...c){
    return a+b;
}
console.log("sum of two number:", Add(3,55,4,53,5))

function AverageOfNumber(...numbers){
    let sum = 0;
    for(let num of numbers){
        sum += num;
    }
    const average = sum / numbers.length;
    return console.log("average of  array:", average)
}
AverageOfNumber(1,2,3,4,5,6)