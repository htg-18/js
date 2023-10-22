const key=document.querySelector('.key')
const body=document.querySelector('body')

const logkey=(e)=>{
    console.log(e.code)
    key.innerHTML=e.key
}

window.addEventListener('keypress',logkey)