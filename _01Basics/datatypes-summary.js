//Primitive

// 7 types : String, Number , Boolean , undefined , null , Symbol, BigInt

//Reference (Non Primitive)

//Array , Objects , Functions

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId)

const bigNumber = 2632626535623625363n

const heros = ["ironman", "spiderman", "deadpool"]

let myObj = {
    name: "Abhay",
    age: 22,
}
const myFunction = function () {
    console.log("Hello world");
}
console.log(typeof heros);

//++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), heap (Non- Primitive) 

let myYoutubename = "Abhay Shakya"
let anotherName = myYoutubename
anotherName = "chaiaurcode"

console.log(myYoutubename)
console.log(anotherName);

let userOne ={
    email: "user@google.com",
    upi:"user@ybl",
}
let userTwo = userOne

userTwo.email = "abhay@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
