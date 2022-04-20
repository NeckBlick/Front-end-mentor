const button = document.querySelector('#button')

button.addEventListener("click", (event) =>{
    event.preventDefault()

const inputN = document.querySelector('#name')
const inputNl = document.querySelector('#name2')
const inputE = document.querySelector('#email')
const inputS = document.querySelector('#senha')
const sumir = document.querySelector("#sumir")
const sumir2 = document.querySelector("#sumir2")
const sumirE = document.querySelector("#sumirE")
const sumirS = document.querySelector("#sumirS")
const form = document.getElementsByTagName("form")

if(inputN.value == ""){
    inputN.classList.add("errorInput")
    sumir.style.display = 'block'
}
if(inputNl.value == ""){
    inputNl.classList.add("errorInput")
    sumir2.style.display = 'block'
}
if(inputE.value == ""){
    inputE.classList.add("errorInput")
    inputE.value = "email@example/com"
    inputE.style.color = "var(--Red--primary)"
    sumirE.style.display = 'block'
}
if(inputS.value == ""){
    inputS.classList.add("errorInput")
    sumirS.style.display = 'block'
}


})