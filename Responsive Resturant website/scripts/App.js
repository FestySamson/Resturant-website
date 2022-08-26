const toggle = document.getElementById('btn')
const navDiv = document.querySelector('.nav-link')
const dark = document.getElementById('dark')
const option =document.querySelector('.option')
const input = document.getElementById('input')
const do2 = document.querySelector('.do2')

toggle.addEventListener('click', ()=>{
navDiv.classList.toggle('active')
})
dark.addEventListener('click', ()=>{
    console.log('dark')
    document.body.classList.toggle('dark')
    do2.classList.toggle('none')
    
})
 function show(anything){
     input.value = anything
 }
 input.addEventListener('click',()=>{
     option.classList.toggle('show')
 })

 const slide = document.querySelector('.slide')
const up = document.getElementById('up')
const down = document.getElementById('down')

let x = 0

up.addEventListener('click', ()=>{
    if( x > '-900'){
        x = x-300
        slide.style.top = x + 'px'
    }
})

down.addEventListener('click', ()=>{
    if( x < 0){
        x = x + 300
        slide.style.top = x + 'px'
    }
})