const currentDateTime = new Date() // show international time 
// const currentDateTime = new Date().toLocaleDateString() // show only local month/day/year
console.log(currentDateTime)

const setSpecificDate = new Date(2035, 6,15,14,45,30)
console.log(setSpecificDate)

const showCurrentYear = new Date().getFullYear()
console.log(showCurrentYear)

const setYear = new Date()
setYear.setFullYear(2040)
console.log(setYear)

const day  = new Date("2029-2-16").getDay()
console.log("day in :", day)