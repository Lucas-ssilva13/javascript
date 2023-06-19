//unidimensionais
//podemos criar vetores assim:

const num1 = new Array
(30,-1,5,3,121);
//ou podemos fazer:
const num2 = [-2, 40,16,111,33,64];

console.log(num1)
console.log(num2)

//acessando elementos diversos dos array

console.log(`primeiro elemento de num1: ${num1[0]}`)
console.log(num2[0])

//acesse o terceiro elemento de num1
console.log(num1[2])


//acesse o quinto elemento de num2
console.log(num2[4])

console.log(num1[0] + num1[1])
//Arrays bidimensionais
console.clear();

const matrix = [
    ['banana', 'maçã', 'pêra'],
    ['laranja', 'true', 1],
    [null, "uva", -350],
];
console.log(matrix)
console.log(matrix[0])
console.log(matrix[0][1])
console.clear();

//alterar um valor do array
let moedas = ['real', 'dolar', 'coroa', 'peso'];
console.log(moedas)
moedas[1] = 'yen'; 
console.log(moedas);

let matrix2 = [
    [1,2,3],
    [4,5,6],
]
matrix2[0][1] = 10;
console.log(matrix2);

//tamanho de arrays
let vetor = [0,1,2,3,4];
console.log(vetor.length);

//remover e/ou  inserir elementos 
//pop() <- remover o ultimo elemento 
const frutas = ["laranja", "banana", "manga"];
let x = frutas.pop()

console.log(frutas)
console.log(x)

//shift <- remover o primeiro 
let y = frutas.shift()
console.log(frutas);

//delete <- rwemove qualquer um
const veiculos = ["carro", "barco", "moto"];
delete veiculos[1];
console.log(veiculos);

let z = veiculos.push("avião")
console.log(veiculos)
veiculos[1] = "lucas"
console.log(veiculos)