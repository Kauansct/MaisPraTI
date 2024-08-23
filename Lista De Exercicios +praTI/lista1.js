let prompt = require('prompt-sync')();

function imparOuPar(){
    let num = Number(prompt("Digite um número para descobrir se este é impar ou par: "))

    if(num % 2 === 0){
        console.log(`O número ${num} é par`)
    }
    if(num % 2 !== 0){
        console.log(`O número ${num} é impar`)
    }
}

function classificarIdade(){
    let idade = Number(prompt("Digite a idade da pessoa: ")) 

    if(idade > 0 && idade < 13){
        console.log(`Esta pessoa é uma criança`)
    }
    else if(idade >= 13 && idade < 18){
        console.log(`Esta pessoa é um adolescente`)
    }
    else if(idade >= 18 && idade < 65){
        console.log(`Esta pessoa é um(a) adulto(a)`)
    }
    else if(idade >= 65){
        console.log(`Esta pessoa é um(a) idoso(a)`)
    }
    else{
        console.log(`Idade fora dos limites. Reiniciando comando...`)
        classificarIdade()
    }
}

function aprovacao(){
    let nota = Number(prompt("Digite a nota de aprovação deste aluno de 1 a 10: "))

    if(nota < 0 || nota > 10){
        console.log(`Nota fora dos limites. Reiniciando comando...`)
        aprovacao()
    }
    else if(nota >= 0 && nota < 6){
        console.log(`Aluno reprovado`)
    }
    else{
        console.log(`Aluno aprovado`)
    }
}

function controleVolume(){
    let volume = 0
    let sair = false
    
    while(!sair){
        console.log(`Opção 1: Aumentar volume\nOpção 2: Diminuir volume\nOpção 3: Sair`)

        let opcao = Number(prompt(`Digite uma das três opções: `))

    
        switch(opcao){
            case 1:
                if(volume === 10){
                    console.log(`O volume já está no máximo`)
                } 
                else {
                    let aumento = Number(prompt("O quanto deseja aumentar o volume (1 a 10): "));
                    if (volume + aumento > 10) {
                        console.log(`O volume não pode exceder 10. Repetindo comando...`);
                    } else {
                        volume += aumento;
                        console.log(`Volume atual: ${volume}`);
                    }
                }
                break
            case 2: 
                if(volume === 0){
                    console.log(`O volume já está no mínimo`)
                }
                else {
                    let diminui = Number(prompt("O quanto deseja diminuir o volume (1 a 10): "));
                    if (volume - diminui < 0) {
                        console.log(`O volume não pode ser menor que 0. Repetindo comando...`);
                    } else {
                        volume -= diminui;
                        console.log(`Volume atual: ${volume}`);
                    }
                }
                break
            case 3: 
                console.log(`Saindo...`)
                sair = true
                break

            default:
                console.log(`Opção inválida. Tente novamente.`);
                break;
        }
    }
}

function calculoImc(){
    let peso = Number(prompt("Digite o seu peso: "));
    let altura = Number(prompt("Digite a sua altura: "));
    let imc = peso / (altura ** 2)

    if(imc > 0 && imc < 18.5){
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
    else if(imc >= 40){
        console.log("Obesidade grau III")
    }
    else{
        if(peso <= 0 && altura <= 0){
            console.log(`Peso e altura fora dos limites. Reiniciando comando...`)
            calculoImc()
        }
        else if(peso <= 0){
            console.log(`Peso fora dos limites. Reiniciando comando...`)
            calculoImc()
        }
        else{
            console.log(`Altura fora dos limites. Reiniciando comando...`)
            calculoImc()
        }
    }
}

function ladosTriangulo(){
    let a = Number(prompt(`Digite o tamanho do lado A: `))
    let b = Number(prompt(`Digite o tamanho do lado B: `))
    let c = Number(prompt(`Digite o tamanho do lado C: `))

    if(a < b + c && b < a + c && c < a + b){
        if(a === b && b === c){
            console.log(`É um triângulo equilátero`)
        }
        else if(a === b || a === c || b === c){
            console.log(`É um triângulo isósceles`)
        }
        else{
            console.log(`É um triângulo escaleno`)
        }
    }
    else{
        console.log(`Não é um triângulo`)
    }
}

function precoTotalMacas(){
    let num = Number(prompt(`Digite o número de maçãs que deseja comprar: `))

    if(num > 0 && num < 12){
        let calculo = num * 0.30
        console.log(`Preço total: R$ ${calculo.toFixed(2)}`)
    }
    else if(num >= 12){
        let calculo = num * 0.25
        console.log(`Preço total: R$ ${calculo.toFixed(2)}`)
    }
    else{
        console.log(`Número fora dos limites. Reiniciando comando...`)
        precoTotalMacas()
    }
}

function ordenarValores(){
    let num1 = Number(prompt(`Digite o 1º número: `))
    let num2 = Number(prompt(`Digite o 2º número: `))

    if(num1 > num2){
        console.log(`Valores em ordem crescente: ${num2}, ${num1}`);
    } 
    else if(num2 > num1){
        console.log(`Valores em ordem crescente: ${num1}, ${num2}`);
    }
    else{
        console.log(`Número fora dos limites. Reiniciando comando...`)
        ordenarValores()
    }
}

function contagemRegressiva(){
    for(let i = 10; i > 0; i--){
        console.log(i)
    }
}

function print10X(){
    let num = Number(prompt(`Digite um número para printar na tela 10 vezes: `))

    for(let i = 0; i < 10; i++){
        console.log(num)
    }
}

function somar(){
    let soma = 0
    
    for(let i = 1; i < 6; i++){
        let num = Number(prompt(`Digite o ${i}º número da soma: `))
        soma += num
    }
    console.log(`Resultado da soma: ${soma}`)
}

function tabuada(){
    let num = Number(prompt(`Digite um número para imprimir a tabuada: `))

    for(let i = 1; i < 11; i++){
        let resultado = num * i
        console.log(`${num} X ${i} = ${resultado}`)
    }
}

function numDecimais(){
    let count = 0
    let soma = 0
    let num

    do{
        num = Number(prompt(`Digite um número decimal (ou 0 para finalizar): `))

        if(num !== 0){
            count++
            soma += num
        }

    } while(num !== 0)

    if(count > 0){
        let media = soma / count
        console.log(`A média aritmética dos números digitados é ${media}`)
    }
    else{
        console.log(`Nenhum número foi digitado`)
    }
}

function fatorial(){
    let num =  Number(prompt(`Digite um número para calcular o fatorial: `))
    let fatorial = 1
    
    if(num < 0){
        console.log(`Não é possível calcular o fatorial de um número negativo. Reiniciando comando...`)
        fatorial()
    }

    for(let i = 2; i <= num; i++){
        fatorial *= i
    }
    console.log(`O fatorial de ${num} é ${fatorial}`)
}

function fibonacci(){
    let numAnterior1 = 0
    let numAnterior2 = 1

    console.log(numAnterior1)
    console.log(numAnterior2)

    for(let i = 2; i < 10; i++){
        let soma = numAnterior1 + numAnterior2
        console.log(soma)
        numAnterior1 = numAnterior2
        numAnterior2 = soma
    }
}

//imparOuPar()
//classificarIdade()
//aprovacao()
//controleVolume()
//calculoImc()
//ladosTriangulo()
//precoTotalMacas()
//ordenarValores()
//contagemRegressiva()
//print10X()
//somar()
//tabuada()
//numDecimais()
//fatorial()
//fibonacci()