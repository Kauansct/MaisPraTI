const prompt = require('prompt-sync')();


// 1

// let numAnterior1 = 0;
// let numAnterior2 = 1;

// console.log(numAnterior1);
// console.log(numAnterior2);

// for(let i = 2; i < 10; i++){
//     let soma = numAnterior1 + numAnterior2;
//     console.log(soma);
//     numAnterior1 = numAnterior2;
//     numAnterior2 = soma;
// }

// 2

// let num = Number(prompt("Digite um número para saber se é primo ou não: "))
// let count = 0

// for(let i = 1; i <= num; i++){
//     if(num % i === 0){
//         count++
//     }
// }
// if(count === 2){
//     console.log(`O número ${num} é primo`);
// }
// else{
//     console.log(`O número ${num} não é primo`);
// }

// 3 

// let resultado = ' ';
// count = 3

// for(let i = 1; i <= count; i++){
//     for(let j = 1; j <= i; j++){
//         resultado += i + ' ';
//         console.log(resultado)
//     }
// }

// 4

// let num = Number(prompt("Digite um número para descobrir o resultado do fatorial dele: "))

// let count = 1;
// let count2 = 1;
// let count3 = 2;
// let resultado = 0;

// while(count < num){
//     resultado = count2 * count3
//     count2 = resultado
//     count3++
//     count++
// }
// console.log(`O fatorial do número ${num} é ${resultado}`); 

// 5

// let num = Number(prompt("Digite um número para invertê-lo: "))
// let numClone = num 
// let invertido = 0;


// while(num !== 0){
//     let digito = num % 10;
//     invertido = invertido * 10 + digito;
//     num = (num - digito) / 10;
// }

// console.log(`O número invertido de ${numClone} é ${invertido}`)

// 6

// let num = Number(prompt("Digite um número para descobri se ele é palíndromo: "))
// let numClone = num
// let invertido = 0

// while(num !== 0){
//     let digito = num % 10;
//     invertido = invertido * 10 + digito;
//     num = (num - digito) / 10;
// }

// if(invertido === numClone){
//     console.log(`O número ${numClone} é um palíndromo`)
// }
// else{
//     console.log(`O número ${numClone} não é um palíndromo`)
// }

// 7

// let num = Number(prompt("Digite um número contar o número de digitos: "))
// let numClone = num
// let resultado = 0
// count = 0;

// do{
//     resultado = num / 10;
//     count++;
//     num = resultado;
// }while(resultado > 1)

// console.log(`Há ${count} dígitos no número ${numClone}`)

// 8

// let num = Number(prompt("Digite um número para fazer a soma dos digitos "))
// let numClone = num
// let soma = 0

// do{
//     let digito = num % 10;
//     soma += digito;
//     num = (num - digito) / 10;
// }while(num !== 0)

// console.log(`A soma dos digitos de ${numClone} é ${soma}`)

// 10

let num1 = Number(prompt("Digite o primeiro número para calcular o MDC: "))
let num2 = Number(prompt("Digite o segundo número para calcular o MDC: "))

numClone1 = num1
numClone2 = num2

