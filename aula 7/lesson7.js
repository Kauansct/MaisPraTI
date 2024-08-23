// for <variavel>; <condição>; <incremento>;

const prompt = require('prompt-sync')();

// let multplicador = Number(prompt('informe o número que você quer saber a tabuda: '));

// for(let counter = 0; counter <= 10; counter++){
//     // sempre que utilizamos crase em para informar algo na tela, ele consegue interpolar(adicionar, unir) string com variaveis 
//     console.log(`${multplicador} x ${counter} = `, multplicador * counter);
// }

// // imprimir os valores parea entre 1 e 20

// for (let i = 1; i <= 20; i += 2){
//     console.log(i);
// }

// caucular s soma dos números de 1 até 100

// let soma = 0; 

// for (let i = 0; i <= 100; i++){
//     soma += i;
// }
// console.log("O resultado da soma é: ", soma);

// imprimir os valores de 1 até 10 em oredem decrescente

// for (let i = 10; i >= 1; i--){
//     console.log(i);
// }

// utilização dos whiles

// let i = 10;
// while(i > 0){
//     console.log(i);
//     i--
// }

// calcular a soma nos númeors do 1 a 100

// let i = 0;
// let soma = 0;
// while(i <= 100){
//     soma += i;
//     i++;
// }
// console.log("O resultado da soma é:", soma);

// fazer um algoritmo para receber números decimais até que o ususario digite 0 e fazer a média artimetica desse números

// let user = Number(prompt("Digite um número para trasformar em decimal (0 para fazer a média): "));
// let soma = 0;
// let count = 0;


// while (user !== 0){
//     soma += user;
//     count++;
//     user = Number(prompt("Digite um número para trasformar em decimal (0 para fazer a média): "));
// }
// console.log(soma / count);

// uso do "do while"

// solicitar números ao usuario até que ele insira um numero negativo

let num = 0;
do {
    num = Number(prompt("Digite um número (número negativo finaliza o código): "));
} while(num > 0);

