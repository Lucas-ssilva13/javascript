//addEventListener()
/* elemento .addEventListener(event,function)*/

let botao = document.getElementById("mybtn")

botao.addEventListener('click',MudarAlerta);
function MudarAlerta()
{
    alert("Olá Mundo!")
}