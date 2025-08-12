const name = "Abhay"
const repoCount = 50

//console.log(name + repoCount + " Value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String(`Abhay-Pratap-com`)

console.log(gameName.__proto__)

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4)
//console.log(newString);


const anotherString = gameName.slice(-12 , 4)
console.log(anotherString);

const newStringOne = "  Abhay    "
console.log(newStringOne)
console.log(newStringOne.trim());

const url = "https://abhay.com/abhay%20Pratap"

console.log(url.replace('%20' , '-'));
console.log(url.includes('abhay'));

console.log(gameName.split('-'));
