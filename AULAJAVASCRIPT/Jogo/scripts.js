let VidaHeroi;
let AtaqueHeroi;
let XPHeroi;
let NivelHeroi;
let ClassedosHerois = ["mago", "ninja", "viking"];
let NomeDoHeroi;

NomeDoHeroi = document.getElementById("nomedopersonagem");
mensagemdoNome = document.getElementById("mensagem");

function enviar()
{
    if(NomeDoHeroi.value != ""){
        mensagemdoNome.innerHTML = "olá " + NomeDoHeroi.value +  ". seja bem vindo ao jogo !!"
    }
    else{
        mensagemdoNome.innerHTML = " digite o seu nome para iniciarmos o jogo !"
    }
}

