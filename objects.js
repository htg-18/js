//singelton
// Object.create  =>constructor methodsingleton is formed
//name age location are all treated as strigs by the system

const mySym=Symbol("key1")
const myObj={
    name:"harsh",
    age:18,
    location:"Jaipur",
    loggedIn:false,
    "full Name":"harsh Shah",
    [mySym]:"mykey1"
}

//obj can also be accessed through this method 
// console.log(myObj["age"])

//does not work
// console.log(myObj.full Name)

// console.log(myObj["full Name"])
// console.log(typeof (myObj[mySym]))
// console.log(myObj)

//dont know why but the arrow fuction does not work Hello undefined printed?
myObj.greetings=function(){
   return  console.log(`Hello ${this.name}`)
}
console.log(myObj.greetings())