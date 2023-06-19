let x = document.getElementById("valorinicio");
let y = document.getElementById("valorfinal")

function contar()
{
        while(x.value <= parseInt(y.value))
    {
        //criar um elemento p 
        let paragrafo = document.createElement("p")
        //criar um texto
        let texto = document.createTextNode(x.value)

        //adicionar um texto no elemento 
        paragrafo.appendChild(texto);

        //adicionar o elemento no section
        document.getElementById("contar").appendChild(paragrafo)
        console.log(    x)
        x.value++ //(x = x + 1)
    }
}

