// import fetch from 'node-fetch';


const promiseOne=new Promise(function(resolve, reject) {
    //DO ASYNC TASKS like DB calls
    setTimeout(function() {
        console.log("Async task is complete")
        resolve()
    },1000)
})
//.then is directly connected to the resolve value
promiseOne.then(function() {
   console.log("promise consumed")
})

new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({username:"harsh",password:"harsh"})
    },1000)
}).then(function(user){
    console.log(user.password)
})

new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error =false;
        if(!error){
            resolve({username:"harsh",password:"harsh123"})
        }else{
            reject("ERROR:something went wrong")
        }
    },1000)
}).then((user)=>{
   return user.password
}).then((pass)=>{
    console.log(pass)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("the promise is resolved or rejected")
})

const newPromise=new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error =true;
        if(!error){
            resolve({username:"harsh123",password:"harsh@123"})
        }else{
            reject("ERROR:I went wrong")
        }
    },1000)
})
async function consumeNewPromise(){
    try{
    const response=await newPromise
    console.log(response)
    }catch(error){
        console.log(error)
    }
}
consumeNewPromise()

// async function getUsers(){
//     try{
//       const response=await fetch('https://jsonplaceholder.typicode.com/users')
//       const data=await response.json()
//       console.log(data)
//     }catch(err){
//         console.log(err)
//     }
// }
// getUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})