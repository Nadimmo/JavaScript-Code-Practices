const sentence = " I bought an orange";
const changeOrange = sentence.replace(/orange/, "grape")
console.log(changeOrange)

const sentence2 = " I like to have apple and banana";
const check = /ana/;
console.log(check.test(sentence2))


const sentence3 = " I am eating apple. apple is good . apple  help to me a lot";
console.log("change in sentence apple to javaScript", sentence3.replace(/apple/g, "javaScript"))