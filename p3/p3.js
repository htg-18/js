const clock=document.querySelector('#clock')

//if the set interval is not set then the time will only be displayed once and will not be updated
setInterval(()=>{
    let date=new Date()
    // date.toLocaleTimeString()
    clock.innerHTML=date.toLocaleTimeString()
},1000)