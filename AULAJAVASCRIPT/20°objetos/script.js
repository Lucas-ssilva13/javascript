
//vetor
let cor = ["Azul", "Vermelho"]

const tarefas = 
[
    {
        id: 1,
        texto: 'levar o lixo para fora',
        Completado: true, 
    },
    {
        id: 2,
        texto: 'Encontrar o chefe',
        Completado: true,
    },
    {
        id: 3,
        texto: 'consulta no dentista',
        Completado: false,
    }
]

tarefas.forEach(teste)

function teste(tarefas)
{
    console.log(tarefas.texto)
}