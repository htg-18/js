// console.log("hello world")

"use strict";//treat all the code as new syntax
// alert(3+3) not used as we are in node envirement and not in browser 
 
//stack(primitive) && heap(non primitive)
let userOne={
    email:"user@example.com",
    upi:"upi",
}

let userTwo=userOne

userTwo.email="user2@example.com"

console.log(userTwo)
console.log(userOne)