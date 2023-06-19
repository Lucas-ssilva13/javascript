let box = document.getElementById("box")
let resultado = document.getElementById("resultado")

function apertar()
{
    switch(box.value){
        case "1":
            resultado.innerHTML = "esse dia não é util"
            break;
            case "2":
            resultado.innerHTML ="esse dia é util"
            break;
            case "3":
            resultado.innerHTML ="esse dia é util"
            break;
            case "4":
            resultado.innerHTML ="esse dia é util"
            break;
            case "5":
            resultado.innerHTML ="esse dia é util"
            break;
            case "6":
            resultado.innerHTML ="esse dia é util"
            break;
            case "7":
            resultado.innerHTML ="esse dia não é util"
            break;
    }
}