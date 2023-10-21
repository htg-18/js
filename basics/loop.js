const arr=[1,2,3,4,5,6,7,8,9,10,11]
//foreach has access the the value,index and the whole array
arr.forEach( (item,index,array)=>{
    console.log(item,index,array)
} )

//just like auto it in cpp
for (const val of arr) {
    // console.log(val)
}

//map:- unique values in maps
const map = new Map();
map.set('foo', 'bar');
map.set('bara', 'baz');
map.set('baz', 'bazaz');
// returns an array of 3 enteries
// for (const iterator of map) {
//     console.log(iterator)
// }

for (const [key,values] of map) {
    // console.log(key)
}

// objects are not iterable like the above maps  IMPORTANT!!!!!!!   
const course={
    name:"js",
    price:"99",
    instructor:"harsh"
}
for (const key in course) {
    // console.log(course[key])
}
//when  for in is used on arrays it return the indices of the array as keys
// for of displays array content 