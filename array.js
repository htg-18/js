const myArr=[1,2,3,4]

const myArrArr = new Array(1,2,3,4,5)

// console.log(myArr)
// console.log(myArrArr)
// console.log(myArrArr[2])

//Array Methods
// myArr.push(1,2,3)
const newArr=myArr.concat([1,2,3])

// console.log(myArr)
// console.log(newArr)

//spread operators to concat arrays
const newArrArr=[...myArr,...myArrArr,...newArr]
// console.log(newArrArr)

// slice(1,3)=> includes the 1st element but not the 3rd element but no change in the og array
// slice(1,3)=> includes the 1st element and the 3rd element and also changes the og array

//From
console.log(Array.from("Harsh"))

//Interesting case => gives an empty array
console.log(Array.from({name:"Harsh"}))

//Array.of a,b,c
let a=100,b=200,c=300
console.log(Array.of(a,b,c))