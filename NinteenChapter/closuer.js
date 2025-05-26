function fridgeTracker(){
    let count = 0

    return function(){
        count ++;
        return count;
    }
}
const nadim = fridgeTracker()
// const hasanur = fridgeTracker()
// console.log("how much fridge open nadim", nadim())
// console.log("how much fridge open nadim", nadim())
// console.log("how much fridge open hasanur", hasanur())


function taskTracker(){
    let count = 0;
    return function(){
        count ++;
        return count;
    }
}
const alex = taskTracker()
console.log("alex task finished:",alex())
console.log("alex task finished:",alex())