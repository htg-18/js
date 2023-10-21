const form =document.querySelector('form')

form.addEventListener('submit', (e)=>{
   e.preventDefault();

   const height=parseInt(document.getElementById('height').value)
   const weight=parseInt(document.getElementById('weight').value)
//    console.log(height)
//    console.log(weight)
 if(height=='' || isNaN(height)|| height <40) {
    document.querySelector('#results').innerHTML=`${height} is not a valid height`
 }
 else if(weight=='' || isNaN(weight)|| weight <40) {
    document.querySelector('#results').innerHTML=`${weight} is not a valid weight`
 }
 else{
   const bmi=height*weight
   document.querySelector('#results').innerHTML=bmi
 }
})