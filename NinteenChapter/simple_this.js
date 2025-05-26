const laptop = {
    brand: "Dell",

    getBrand(){
        return this.brand
    }
}

const mobile = {
    brand: laptop.getBrand()
}
console.log(mobile)


const manger = {
    tasks : [],

    assignWork(task){
      return this.tasks.push(task) // this refer to manger object
    }
}
console.log(manger.assignWork(["Task 1", "Task 2"])); 
console.log(manger.tasks)