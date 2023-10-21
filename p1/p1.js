const buttons=document.querySelectorAll('.button')
const body=document.querySelector('body')
// console.log(buttons)
buttons.forEach((button) =>{
    button.addEventListener('click',(e)=>{
        body.style.backgroundColor=e.target.id
    })
})