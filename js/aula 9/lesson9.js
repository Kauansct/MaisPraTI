// some os elementos de um array
function somaElementosArray(teste){
    let soma = 0
    for(let i = 0; i <= teste.length - 1; i++){
        soma += teste[i]
    }
    console.log(soma)
}
// encontre o maior número em um array 
function maiorNumArray(teste){
    let maiorNum = teste[0];

    for(let i = 0; i <= teste.length - 1; i++){
        if(maiorNum < teste[i]){
            maiorNum = teste[i]
        }
    }

    console.log(maiorNum)
}
// reverter um array
function reverteArray(teste){
    let teste1 = []

    for(let i = teste.length - 1; i >= 0; i--){
        teste[i] = teste1.push(teste[i])
    }
    console.log(teste1)
    // Para facilitar esta ação utilize arrayQualquer.reverse()
}
//criam um novo array contendo apenas os números pares
function arrayPares(teste){
    let teste2 = []

    for(let i = 0; i <= teste.length; i++){
        if(teste[i] % 2 == 0){
            teste2.push(teste[i])
        }
    }
    console.log(teste2)
}
// contar decorrencias de um valor

function NumSemelhantes(){
    let valor = 2
    count = 0
    let teste = [40, 3, 50, 2]

    for(let i = 0; i <= teste.length; i++){
        if(teste[i] === valor){
            count++
        }
    }

    if(count === 1){
        console.log(`Não há números semelhantes para ${valor}`)
    }
    else if(count === 0){
        console.log(`Não há número ${valor}`)
    }
}
// arrays/vetores multidimencionais

function matrizes(){

    let matriz = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]
    let matriz1 = [
        [4,5,3],
        [9,4,7],
        [1,6,1]
    ]
    let matriz2 = []
    console.log(matriz)
    console.table(matriz)
    console.log(matriz[0][2])

    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz[i].length; j++){
            console.log(`Elemento na posição [${i}][${j}]: ${matriz[i][j]}`)
        }
    }
}
// somar matrizes

// let resultado = []

// for(let i = 0; i < matriz.length; i++){
//     let somaLinha = []
//     for(let j = 0; j < matriz[i].length; j++){
//         somaLinha.push(matriz[i][j] + matriz1[i][j])
//     }
//     resultado.push(somaLinha)
// }

// console.table(resultado)
let A = [20, 40, 30]
maiorNumArray(A)