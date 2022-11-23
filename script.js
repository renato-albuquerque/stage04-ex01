let numberOne = prompt("Digite o primeiro número")
let numberTwo = prompt("Digite o segundo número")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const mult = numberOne * numberTwo
const div = (numberOne / numberTwo).toFixed(1)
const restDiv = numberOne % numberTwo

alert(`A soma dos dois números é: ${sum}`)
alert(`A subtração dos dois números é: ${sub}`)
alert(`A multiplicação dos dois números é: ${mult}`)
alert(`A divisão dos dois números é: ${div}`)
alert(`O resto da divisão dos dois números é: ${restDiv}`)

alert(`Próxima etapa: Desafios
Desafio 01: Verifique se a soma dos dois números é par (ou ímpar).
Desafio 02: Verifique se os dois números inseridos são iguais (ou diferentes).
`)

if (sum % 2 == 0) {
    alert("A soma dos dois números é par.")
} else {
    alert("A soma dos dois números é ímpar.")
}

if (numberOne === numberTwo) {
    alert("Os números são iguais.")
} else {
    alert("Os números são diferentes.")
}


