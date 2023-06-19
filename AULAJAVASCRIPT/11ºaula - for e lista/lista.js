let produtos = document.getElementById("produtos") 

function minhafuncao()
{
        //criar um elemento li
    let li = document.createElement("li");
    // criar um texto 
    let texto = document.createTextNode(produtos.value);
    //adicionar um texto no elemento 
    li.appendChild(texto)
    //adicionar o li na MINHALISTA
    document.getElementById("minhalista").appendChild(li) 
}
