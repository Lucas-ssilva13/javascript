var P1 = document.getElementById("P1");
var P2 = document.getElementById("P2");
var P3 = document.getElementById("P3");
var P4 = document.getElementById("P4");
var resultado = document.getElementById("resultado");
var soma;

function SOMA()
{   
    soma = parseFloat(P1.value) * parseFloat(P2.value) *  parseFloat(P3.value) * parseFloat(P4.value);
    resultado.innerHTML = soma;
}