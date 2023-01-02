let sec = 15
const startCounter = () => {
    setInterval(counter, 1000)
}

const counter = () => {
    if(sec >= 0 ){
        document.getElementById('timer').innerText = sec--     
    }
    
    if(sec == 0 ){
        setTimeout(()=>{
             window.location.href = 'https://chat.whatsapp.com/DO6kAjZpQI2DakYpy7swb4'
        },1500)
    }
}

 startCounter()







// const startCounter = () => {
//     let timer = 15
//     setInterval(()=> {
//         if (--timer > 0)
//     })
// }