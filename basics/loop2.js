const myCoding=[
    {
        name:"js",
        price:"99",
        instructor:"harsh"
    },
    {
        name:"js1",
        price:"991",
        instructor:"harsh1"
    },
    {
        name:"js2",
        price:"992",
        instructor:"harsh2"
    }
]
myCoding.forEach( (namee)=>{
    console.log(namee.price)
} )
//for each looep does not return a value even if a return statement is added to the loop
// so we need more types of loopes
//filter
const arr=[1,2,3,4,5,6,7,8,9,10,11]
const ans=arr.filter( (nums)=>nums>4 )
// console.log(ans)
//map
const newArr=arr.map( (nums)=> nums+10 )
console.log(newArr)

//chaining
const newAns=arr.map( (nums) => nums*10 )
              .map( (nums) => nums+1 )
              .filter( (nums)=>(nums>50) )
// console.log(newAns)

//find the sum of the element in the array. acc stores the cureent sum and cur stores the c
// current element in the array
const final=newAns.reduce( (acc,cur)=>(acc+cur),100 )
console.log(final)

// below metod is used to calculate the sum when in object 
//const final=newAns.reduce( (acc,item)=>acc+item.price,0)