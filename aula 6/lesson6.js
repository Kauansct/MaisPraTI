// console.log(10 > 5);
// console.log(10 < 5);
// console.log(10 <= 5);
// console.log(10 >= 5);
// console.log(10 == 5);
// console.log(10 == "10");
// console.log(10 === "10");
// console.log(10 != "10");
// console.log(10 !== "10");

const prompt = require('prompt-sync')();

// // operadores lógicos

// console.log

// let usuario = "Kauan";
// let senha = 180406;

// console.log(usuario === "Kauan" && senha === 180406); 

// const idade = 16;

// if(idade >= 18 && idade <= 32){
//     console.log("pode realizar o curso");
// }
// else{
//     console.log("Você não pode realizar o curso");
// }

// let resultadoTernario = (10 > 100) ? "Verdadeiro" : "Falso";

// let num = 10; 
// let num2 = 5;
// let num3 = 20;

// if(num % 2 == 0){
//     console.log("É par");
// } 
// else{
//     console.log("É impar");
// }

// let numMaior = num;

// if (numMaior == num2 || numMaior == num3){
//     console.log("Há números iguais")
// }
// else if (numMaior < num2){
//     numMaior = num2;
//     console.log("O maior número é "+numMaior);
// }
// else if (numMaior < num3){
//     numMaior = num3;
//     console.log("O maior número é "+numMaior);
// }

// let num1 = Number(Prompt("Insira o primeiro valor: "));
// let num2 = Number(prompt("Insira o segundo valor: "));
// let calc = String(prompt("Insira a opção desejada ( + - * / )"));

//calculadora

let diaSemana = Number(prompt("Insira o dia da semana desejada em (1,2,3,4,5,6,7): "));

switch(diaSemana){
    case 1:
        console.log("Segunda-feira");
        break;
    case 2:
            console.log("Terça-feira");
            break;
    case 3:
            console.log("Quarta-feira");
            break;
    case 4:
            console.log("Quinta-feira");
            break;
    case 5:
            console.log("Sexta-feira");
            break;
    case 6:
            console.log("Sabado");
            break;
    case 7:
            console.log("Domingo");
            break;
}

// calcula num dias em um mês

// - Sendo que o mês 1, 3, 5, 7, 8, 10 e 12 tem 31 dias
// - Os meses 4, 6, 9 e 11 tem 30 dias 
// - Mês 2 tem 28 dias