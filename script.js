const form = document.querySelector('#form')
const numberA = document.querySelector('#numberA')
const numberB = document.querySelector('#numberB')

form.addEventListener('submit', function () {
    if(numberB.value > numberA.value){
        alert('O formulário é valido')
    }
    else {
        alert('Formulário inválido. Número B deve ser maior que número A.')
    }
} )