let numero = document.getElementById("numero")
let numero1 = document.getElementById("numero1")
let operador = document.getElementById("operador")
let resultado = document.getElementById("resultado")

function aperta(){
    switch(operador.value){
        case "+":
        let soma = parseInt(numero.value) + parseInt(numero1.value)
        resultado.innerHTML = soma
        break;
        case "*":
        let multiplicacao = parseInt(numero.value) * parseInt(numero1.value)
        resultado.innerHTML = multiplicacao
        break;
        case "/":
        let divisao = parseInt(numero.value) / parseInt(numero1.value)
        resultado.innerHTML = divisao
        break;
        case "-":
        let subtracao = parseInt(numero.value) - parseInt(numero1.value)
        resultado.innerHTML = subtracao
        break;
    }
}