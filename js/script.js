let btnIniciar = document.querySelector('#btn-iniciar')
let btnPausar = document.querySelector('#btn-pausar')
let btnStop = document.querySelector('#btn-stop')
let inputMinutos = document.getElementById('input-minutos')
let inputSegundos = document.getElementById('input-segundos')
let minutos = document.getElementById('minutos')
let segundos = document.getElementById('segundos')
let interval

inputMinutos.addEventListener('keypress',()=>{
    minutos.innerText=event.target.value
})
inputSegundos.addEventListener('keypress',()=>{
    segundos.innerText=event.target.value
})
btnIniciar.addEventListener('click',()=>{
    if(inputMinutos.value=="" &&  inputSegundos.value=="" ){
        alert('Introduza valores')
    }else{
        interval = setInterval(counter,1000)  
        btnIniciar.classList.add('ativar')
        btnIniciar.style.display='none'
        btnPausar.style.display='block'
    }  
})//funcão start//
btnPausar.addEventListener('click',()=>{
    clearInterval(interval)
    btnIniciar.style.display='block'
    btnIniciar.innerText='Reiniciar'
    btnPausar.style.display='none'
    btnStop.style.display='block'
})//funcão pause
btnStop.addEventListener('click',()=>{
    clearInterval(interval)
    segundos.innerText="00"
    minutos.innerText='00'
})//funcão stop
function counter(){
    segundos.innerHTML--
    if(segundos.innerText==0){
        minutos.innerText--
        segundos.innerText='60'
    } 
    if(minutos.innerText==0){
        segundos.innerText='00'
        minutos.innerText='00'
    }
}
