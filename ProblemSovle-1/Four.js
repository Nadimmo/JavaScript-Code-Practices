function CheckDuplicate(nums){
    let newArray = [];
    for(let num of nums){
        if(newArray.includes(num)  === false){
            newArray.push(num)
        }
    }
    return newArray
    
}

const array = [2,233,4,2,2,6,8,6,9]
console.log(CheckDuplicate(array))

function CheckDuplicateString(names){
    let newString = [];
    for(let item of names){
        if(newString.includes(item) === false){
            newString.push(item)
        }
    }
    return newString
}

const string = ["nadim", "babul", "babul", "kabul", "sabul", "navul", "kabul"]
console.log("new string array", CheckDuplicateString(string))