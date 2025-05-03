const invited = true;
const mony = 200;

if (invited === true) {
    console.log("I will go to the party")
    if (mony >= 1000) {
        console.log(" I will gift for my friend")
    } else {
        console.log("I will not gift my friend")
    }
} else {
    console.log("I will not go to the party")
}


const isEatingTea = true;
const isEatingBiscuit = true;

if (isEatingTea === true) {
    console.log("cha dibo")
    if (isEatingBiscuit === true) {
        console.log("biscuit dibo ")
    } else {
        console.log("sudhu cha ready")
    }
} else {
    console.log("bosa bosa start jolsa dakho")
}


const accountActive = true;
const subscription = false;

if (accountActive === true) {
    console.log("account is active")
    if (subscription === true) {
        console.log("you can see premium version")
    } else {
        console.log("you see free version")
    }
} else {
    console.log("account not active")
}

const freezeHaveFood = false;
const foodApp = false;

if (freezeHaveFood === true) {
    console.log("I will make hot this food ")
} else {
    if (foodApp === true) {
        console.log("I will order any food")
    } else {
        console.log("ajka ami roja")
    }
}

const guestPeople = 400;
const gift = true;
if(guestPeople > 100){
    if(gift === true){
        console.log("Lets party all night.")
    }
}else{
    console.log("I will party with myself")
}