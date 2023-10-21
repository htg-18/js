//rest operator
// function hello(...num1){
//    return num1
// }

const ans=hello(100,200,300,400)
//the ans returrned in in the form of an array [100,200,300,400]
console.log(ans)
//only 300 and 400 in the array
function hello(val1,val2,...num1){
   return num1
}

const user={
    username:"harsh",
    prices:199
}
function Obj(anyObject){
    console.log(`userNmae is ${anyObject.username} and pricr is ${anyObject.price}`)
}

//price is undefined
Obj(user)

//case 1
//works fine returns 6
console.log(addOne(5))
function addOne(num){
  return num+1;
}

//case 2
//error is thrown that addTwo not defined

// console.log(addTwo(5))
// const addTwo=(num)=>{
//   return num+2;
// }

function chai(){
    let username="harsh";
    //undefined
    console.log(this.username);
    //also does not work with arrow functions
}
chai()

//arrow functions me agr curly brackets use kiya to return likhna hoga agr nahi kiya to nahi likhna
const num=(num1,num2)=>(num1+num2)
//return obj in array function
const num1=(num1,num2)=>({username:"harsh"})