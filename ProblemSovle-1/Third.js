function AverageOfEvenNumber(nums) {
    let evenNumber = [];
    for (let num of nums) {
        if (num % 2 === 0) {
            evenNumber.push(num)
        }
    }

    let sum = 0;
    if (evenNumber.length === 0) {
        return 0; // error handler if is not of a number;
    }
    for (let i of evenNumber) {
        sum += i; // sum of even number
    }
    const average = sum / evenNumber.length;
    return average;
}

// const array =  [13,11,9,15]; // output : 0 
const array = [2, 5, 63, 6, 36, 3, 86, 35]
console.log("sum of evenNumber in array", AverageOfEvenNumber(array))


function OddNumberArray(nums) {
    let oddarray = [];
    for (let num of nums) {
        if (num % 2 === 1) {
            oddarray.push(num)
        }
    }
    return oddarray;
}
const array2 = [2, 43, 53, 63, 6, 64, 8, 9]
console.log("odd number array:", OddNumberArray(array2))


function OddNumber(nums) {
    for (let num of nums) {
        if (num % 2 === 1) {
            return console.log("No odd numbers found")
        } else {
            return console.log("Odd numbers found")
        }
    }
}
const array3 = [2, 43, 53, 63, 6, 64, 8, 9]
OddNumber(array3)



function AverageOfOddNumber(nums) {
    let oddNumber = [];
    for (let num of nums) {
        if (num % 2 === 1) {
            oddNumber.push(num)
        }
    }

    let sum = 0;
    if (oddNumber.length === 0) {
        return 0; // error handler if is not of a number;
    }
    for (let i of oddNumber) {
        sum += i; // sum of even number
    }
    const average = sum / oddNumber.length;
    return average.toFixed(2);
}

// const array =  [13,11,9,15]; // output : 0 
const array4 = [2, 5, 63, 6, 36, 3, 86, 35, 77]
console.log("sum of oddNumber in array", AverageOfOddNumber(array4))


function SubstricArray(nums) {
    let newarray = [];
    for (let num of nums) {
        if (num % 2 === 1) {
            newarray.push(num - 1)
        }
    }
    return newarray
}
const number = [3,32,5,7,8]
console.log("new array substric 1 :", SubstricArray(number))