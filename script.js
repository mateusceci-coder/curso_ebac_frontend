const form = document.querySelector('#form')
const inputA = document.querySelector('#numberA')
const inputB = document.querySelector('#numberB')

form.addEventListener('submit', function (e) {


    e.preventDefault()

    const numberA = parseFloat(inputA.value)
    const numberB = parseFloat(inputB.value)

   if(numberB > numberA){
        alert('O formulário é valido')
    }
    else {
        alert('Formulário inválido. Número B deve ser maior que número A.')
    } 
} )