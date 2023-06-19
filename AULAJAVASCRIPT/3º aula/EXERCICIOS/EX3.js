var P1 = document.getElementById("P1");
var P2 = document.getElementById("P2");
var resultado = document.getElementById("resultado");
var soma;

function SOMA()
{   
    soma = parseFloat(P1.value) / parseFloat(P2.value);
    resultado.innerHTML = soma;
}