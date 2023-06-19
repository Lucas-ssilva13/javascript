//eventos 
/* no javascript, eventos são ações ou ocorrencias que acontecem na página web que estamos implementando. esses eventos geralmente invocam funções que irão executar as
operações dejesadas. exemplo  de evento são: o usuario clica em um botão na pagina */

/*exemplo de eventos:
- clica no mouse 
-quando a pagina é carregada
-quando uma imagem foi carregada
-quando o mouse passa sobre o elemento 
-quando um formulario HTML é enviado*/

let nome = document.getElementById('abc') 
function mudar()
{
    nome.innerHTML = 'São os alunos de Santo Amaro s2';
}

let DataDeHoje = document.getElementById('demo')
function Data()
{
    DataDeHoje.innerHTML = Date();
}

function carregaAviso()
{
    alert('voce acessou a pagina')
}
let obj = document.getElementById('obj')
function mudardefrase()
{
    obj.innerHTML = 'obrigado !'
}

function VoltarAFrase()
{
    obj.innerHTML = 'passe o mouse aqui!'
}