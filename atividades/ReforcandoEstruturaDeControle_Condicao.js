const prompt = require('prompt-sync')();

// 1

// const num1 = Number(prompt('Digite um número: '));

// if(num1 > 0){
//     console.log("É um número positivo")
// }
// else if(num1 < 0){
//     console.log("É um número negativo")
// }
// else{
//     console.log("É zero")
// }

// 2

// const ano = Number(prompt("Digite um ano: "));

// if((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)){
//     console.log("É um ano bissexto");
// }
// else{
//     console.log("Não é um ano bissexto");

// }

// 3

// let nota1 = Number(prompt("Digite a primeira nota deste aluno: "));
// let nota2 = Number(prompt("Digite a segunda nota deste aluno: "));
// let nota3 = Number(prompt("Digite a terceira nota deste aluno: "));

// let media = (nota1 + nota2 + nota3) / 3

// console.log(`As médias das notas é ${media.toFixed(2)}`)

// if(media >= 90){
//     console.log("Você tirou nota A!!! Parabéns")
// }
// else if(media >= 75 && media < 90){
//     console.log("Você tirou nota B!!")
// }
// else if(media >= 60 && media < 75){
//     console.log("Você tirou nota C! Ta na média")
// }
// else if(media >= 50 && media < 60){
//     console.log("Você tirou nota D! Melhore")
// }
// else if(media >= 35 && media < 50){
//     console.log("Você tirou nota E! Melhore urgentemente")
// }
// else{
//     console.log("Você tirou nota F! Melhor repetir de ano...")
// }

// 4

// let num = Number(prompt("Digite um número para descobrir se ele é impar ou par: "));

// if(num % 2 === 0){
//     console.log("É um número par")
// }
// else if(num % 2 ==! 0){
//     console.log("É um número impar")
// }
// else{
//     console.log("Número invalido")
// } 

// 5

// let idade = Number(prompt("Digite a idade do nadador(a): "));

// if(idade > 5 && idade <= 7){
//     console.log("Infantil A");
// }
// else if(idade > 7 && idade <= 10){
//     console.log("Infantil B");
// }
// else if(idade > 10 && idade <= 13){
//     console.log("Juvenil A");
// }
// else if(idade > 13 && idade <= 17){
//     console.log("Juvenil B");
// }
// else if(idade > 18){
//     console.log("Adulto");
// }
// else{
//     console.log("ERRO...");
// }

// 6 

// let diaDaSemana = Number(prompt("Digite um número de 1 a 7 correspondente ao dia da semana: "));

// switch(diaDaSemana){
//     case 1:
//         console.log("Segunda-feira")
//         break;
//     case 2:
//         console.log("Terça-feira")
//         break;
//     case 3:
//         console.log("Quarta-feira")
//         break;
//     case 4:
//         console.log("Quinta-feira")
//         break;
//     case 5:
//         console.log("Sexta-feira")
//         break;
//     case 6:
//         console.log("Sabado")
//         break;
//     case 7:
//         console.log("Domingo")
//         break;
// }

// 7

// let num1 = Number(prompt("Digite o primeiro número para ser calculado: "));
// let num2 = Number(prompt("Digite o segundo número para ser calculado: "));
// let operador = prompt("Digite o operador a ser utilizado (+ - * /): ");


// switch(operador){
//     case "+":
//         console.log(num1 + num2);
//         break;
//     case "-":
//         console.log(num1 - num2);
//         break;
//     case "*":
//         console.log(num1 * num2);
//         break;
//     case "/":
//         console.log(num1 / num2);
//         break;
// }

// 8 

// let num = Number(prompt("Digite um número de 1 a 4 correspondente ás estações do ano: "));

// switch(num){
//     case 1:
//         console.log("Primavera")
//         break;
//     case 2:
//         console.log("Verão")
//         break;
//     case 3:
//         console.log("Outono")
//         break;
//     case 4:
//         console.log("Inverno")
//         break;    
// }

// 10

let peso = Number(prompt("Digite o seu peso: "));
let altura = Number(prompt("Digite a sua altura: "));
let imc = peso / (altura ** 2)

if(imc < 0 ){
    console.log(`ERRO...`)
}
else if(imc > 0 && imc < 18.5){
    console.log("Abaixo do peso")
}
else if(imc >= 18.5 && imc < 25){
    console.log("Peso normal");
}
else if(imc >= 25 && imc < 30){
    console.log("Sobrepeso");
}
else if(imc >= 30 && imc < 35){
    console.log("Obesidade grau I");
}
else if(imc >= 35 && imc < 40){
    console.log("Obesidade grau II");
}
else{
    console.log("Obesidade grau III")
}
