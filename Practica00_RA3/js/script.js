console.log("Hola, món! 🎉")
alert("Benvingut a la teva primera pràctica de JavaScript!")
const nom='Pere'
let edat = '25'
const ciutat = 'Girona'
console.log('Nom:' ,nom)
console.log('Edat:', edat)
console.log('Ciutat:', ciutat)
console.log(`Hola, sóc ${nom}, tinc ${edat} anys i visc a ${ciutat}.`)

//-------------------------------

const num1 = 15
const num2 = 7
console.log(`La suma de ${num1} i ${num2} és:`,num1 + num2)
console.log(`La resta de ${num1} i ${num2} és:`,num1 - num2)
console.log(`La multiplicació de ${num1} i ${num2} és:`,num1 * num2)
console.log(`La divisió de ${num1} i ${num2} és:`,num1 / num2)
console.log(`El residu de ${num1} i ${num2} és:`,num1 % num2)

//--------------------------------

const user = prompt('Quin és el teu nom?')
console.log(`El nom d'usuari és: ${user}`)
alert(`El nom d'usuari és: ${user}`)

//--------------------------------

edat = prompt('Quina edat tens?')
edat = parseInt(edat)
if (edat >= 18) {
    alert("Ets major d'edat")
} else {
    alert("Ets menor d'edat")
}

//--------------------------------

for(i=1; i < 11; i++){
    console.log(`Numero: ${i}`)
}

//--------------------------------
//Funcion tipo 1

function suma(a,b) {
    return a + b
}

console.log (suma(4,4))

//Funcion tipo 2
const a = 15
const b = 5
function suma2() {
    return a + b
}
console.log (suma2())

//--------------------------------

function isEvenOrOdd(number){
    
    if (number % 2 === 0){
        console.log('És parell')
    } else {
        console.log('Es senar')
    }
}
isEvenOrOdd(128)
//--------------------------------
document.querySelector('.mostrarMissatge').addEventListener('click',function(){ // Se puede llamar tambien si es un id con el #
    alert('Hello Trinidad')
})

document.querySelector('.mostrarMissatge').addEventListener('',function(){ // Se puede llamar tambien si es un id con el #
    alert('Hello Trinidad')
})
//--------------------------------
//document.querySelector('h1').style.color = 'red'

//--------------------------------
document.querySelector('h1').style.fontSize = '140px'

//--------------------------------
document.querySelector('h1').textContent = 'Hola Trinidad'

//--------------------------------
const paragraf = document.createElement('p')
paragraf.textContent = 'You are the best'
document.body.appendChild(paragraf)

//--------------------------------
document.body.removeChild(paragraf)

//--------------------------------
document.querySelector('h1').classList.add('colorBlue')

