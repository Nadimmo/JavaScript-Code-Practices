const friends = "Raju,Rana,Rifat,Rony,Hasan,Kibi";
console.log(friends.split(","))


const arrays = ['Raju', 'Rana', 'Rifat', 'Rony', 'Hasan', 'Kibi']
console.log("convert array to string:", arrays.join(","))

const string = "function if else while";
console.log("split in every word:", string.split("  "))

const language = ["javaScript", "python", "java"]
console.log("convert to string and between in semicolon", language.join(" ; "))

const loopName = "for,while,for-in,'for-of,'do-while,foreach";
console.log(loopName.split(","))

const text = "  console log debug  ";
console.log("remove white space in string:", text.trim())

const str1 = "pus";
const str2 = "pop";
const str3 = "shift";
const str4 = "unshift";
console.log("join 4 variable in one string:", str1.concat(" ",str2," ", str3, " ", str4))


const text2 = "hello javaScript developer";
const startLength = text2.indexOf("javaScript");
const endLength = startLength + ("javaScript").length

console.log("spit javascript word in string:", text2.slice(startLength,endLength))


const text3 = "code more learn more";
const start = text3.indexOf("learn");
const end = start + ("learn").length;

console.log("spit learn word in string:", text3.substring(start,end))