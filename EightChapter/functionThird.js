function OddNumberSum(nums){
    let sum = 0;
    for(let num of nums){
        // console.log(num)
        if(num % 2 === 1){
            sum += num 
        }
    }
    return sum
}

const array = [5, 15, 8, 7];
console.log("sum of odd number", OddNumberSum(array))


function CheckSmallNumber(nums){
  if(nums[0] < nums[1]){
    return nums[0]
  }
  return nums[1]
}
const array2 = [20,4,23]
console.log("which number is small", CheckSmallNumber(array2))


function AgeCalculate(age){
    if(age < 18){
        return 18;
    }else if(age > 45){
        return 45;
    }
    return age
}
console.log("Age show", AgeCalculate(23))


function EvenNumberSum(nums){
    let sum = 0;
    for(let num of nums){
        // console.log(num)
        if(num % 4 === 0){
            sum += num 
        }
    }
    return sum
}

const array3 = [2, 4, 5, 7, 8, 32, 45];
console.log("sum of even number", EvenNumberSum(array3))

function NumberDivider(num){
    if(num < 20){
        return 20*2
    }
    return num/20;
}
console.log("if number is largest 20 then is multiple by 2 or divide by 20:", NumberDivider(343))

function SumOfNegativeNumber(nums){
    let sum = 0;
    for(let num of nums){
        if(num < 0){
            sum += num
        }
    }
    return sum;
}
const array4 = [20,3,35,39,-5,7,4,-3]
console.log('sum of only negative number:', SumOfNegativeNumber(array4))