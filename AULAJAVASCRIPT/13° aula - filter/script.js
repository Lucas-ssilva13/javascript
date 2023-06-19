let idade = [20,19,17,26,27]
//filter() criar um vetor/array com o resultado do filtro aplicado pelo método, ou seja, os elementos que "passaram" na condição configurada no filtro.

let mostrar = document.getElementById("demostracao");
mostrar.innerHTML = idade.filter(MaiorDeIdade);

function MaiorDeIdade(idade)
{
    return idade >17;
}