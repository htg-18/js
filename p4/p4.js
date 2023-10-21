const ran=Math.floor(Math.random()*100)+1
console.log(ran)
const form =document.querySelector('#guessForm')
const lastResult=document.querySelector('.lastResult')
const guesses=document.querySelector('.guesses')
const guessField=document.getElementById('guessField')
const lowOrHi=document.querySelector('.lowOrHi')
let attempts=10
let play=true
let result
const arr=[]

form.addEventListener('submit',(e)=>{
   e.preventDefault()
   if(guessField.value<1 || guessField.value>100 ||isNaN(guessField.value)){
    lowOrHi.innerHTML="Enter a valid number"
   }else if(!play){
    lowOrHi.innerHTML=`You have ${result} the game.Starting a new game...Enter again to restart`
    play=true
    arr=[]
    attempts=10
    result=""
    ran=Math.floor(Math.random()*100)+1
   }else if(attempts===1){
    lowOrHi.innerHTML="You have run out of attempts"
    play=false
    result="lost"
   }else{
   attempts--;
   lastResult.innerHTML = attempts;
   arr.push(guessField.value)
   guesses.innerHTML = arr;
//    can also be done by the below method
//    guesses.innerHTML+=`${guessField.value}`
   if(guessField.value==ran){
    lowOrHi.innerHTML=`Found ${guessField.value} is the correct number`
    // form.style.display="none"
    play=false
    result ="won"
   }else{
    lowOrHi.innerHTML=`Try Again. ${guessField.value} is the wrong number`
   }
   guessField.value=""
}
})