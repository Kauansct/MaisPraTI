// let lista = Array()

// lista['hardware'] = Array()
// lista['fruta'] = Array()
// lista['pessoa'] = Array()

// lista['hardware'][0] = 'notebook'
// lista['hardware'][1] = 'mouse'
// lista['hardware'][2] = 'teclado'
// lista['fruta'][0] = 'maçã'
// lista['fruta'][1] = 'banana'

// console.log(lista)

let listaDeFruta = Array()

listaDeFruta[0] = 'Maçã'
listaDeFruta[1] = 'Banana'
listaDeFruta[2] = 'Melância'
listaDeFruta[3] = 'Uva'
listaDeFruta[4] = 'Morango'

// console.log(listaDeFruta.sort()) // a função sort() ordena as strings
// console.log(listaDeFruta.indexOf('Morango')) // a função indexOf() procura a posição do valor pesquisado
// console.log(listaDeFruta.indexOf('Abacaxi')) // se não houver o valor pesquisado dentro da variavel, resulta em -1 em sua posição

// listaDeFruta[0] = 6
// listaDeFruta[1] = 40
// listaDeFruta[2] = 25
// listaDeFruta[3] = 17
// listaDeFruta[4] = 32

// console.log(listaDeFruta.sort((a, b) => a - b)) // a função sort() com estes parâmetros ordena os numbers (a - b) = crescente (b - a) = decrescente

// function calcularArea(base, altura){ // ao criar funções se asemelham aos métodos em java. OBS: é preciso sempre retornar algum valor  
//     let area = base * altura
//     return area
// }

// let base = 10
// let altura = 20

// let area = calcularArea(base, altura)

// console.log(`A área possui ${area} metros quadrados`)

function ordenarArray(Array){
    return Array.sort()
}

console.log(ordenarArray(listaDeFruta))