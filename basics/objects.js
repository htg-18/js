//singelton
// Object.create  =>constructor methodsingleton is formed
//name age location are all treated as strigs by the system

//OBJECT LITERAL
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

//ASSIGN METHOD
const obj1={
    a:1,b:2
}
const obj2={
    c:3,d:4,e:5
}

// stores the new object in obj4 abut also changes the obj1
// const onj4=Object.assign(obj1,obj2)
// const onj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}

console.log(obj3)