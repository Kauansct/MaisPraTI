// let teste = function(){
//     console.log('Olá, mundo?')
// }

// teste()

// function showFunction(successCallBack, erroCallback){
//     if(true){
//         successCallBack("ação bem sucedida")
//     } else{
//         erroCallback("erro na requisição")
//     }
// }

// let successCallBack = function(mensagem){
//     console.log(mensagem)
// }
// let erroCallback = function(mensagem){
//     console.log(mensagem)
// }

// showFunction(successCallBack, erroCallback)

// alguns métodos para string...

// let nome = "kauan"

// console.log(nome.length) // diz quantos caracteres há
// console.log(nome.charAt(3)) // diz qual é o caracter da possição desejada
// console.log(nome.indexOf('a')) // pesquisa quantas caracteres há na variavel de acordo com o caractere desejado
// console.log(nome.replace('uan', "kashi")) // substitui os carcteres selecionados por novos caracteres
// console.log(nome.substring(0, 4)) // o primeiro num dá um inicio e o segundo um fim para a variavel
// console.log(nome.toUpperCase) // transforma os caracteres em maiusculo
// console.log(nome.toLowerCase) // transforma os caracteres em menusculo
// console.log('-' + nome.trim() + '-') // remove os espaços sem carcteres das extremidade

// para matematica
// let num = 100.60

// console.log(Math.ceil(num)) // arredonda pra cima
// console.log(Math.floor(num)) // arredonda pra baixo
// console.log(Math.round(num)) // arredonda de forma inteligente
// console.log(Math.sqrt(num)) // faz raiz quadrada
// console.log(Math.pow(num, 2)) // faz potenciação
// console.log(Math.cbrt(num)) // faz raiz cubica
// console.log(Math.abs(num)) // retorna num absoluto
// console.log(Math.random() * 100) // gera num aleatorio

// datas

let date = new Date()

console.log(date.getDate())
console.log(date.getMonth() + 1)
console.log(date.getFullYear())
console.log(date.toString())
date.setDate(date.getDate() + 300)
console.log(date.toString())
date.setFullYear(date.getFullYear() + 300)
console.log(date.toString())

let date1 = new Date(2024, 7, 6)
let date2 = new Date(2023, 7, 6)

console.log(date1.toString())
console.log(date1.getTime()) // expresso em milisegundos

let milisigundosEntreDates = Math.abs(date1.getTime() - date2.getTime())
console.log(milisigundosEntreDates)

let milisigundosPorDia = (1 * 24 * 60 * 60 * 1000)
console.log(milisigundosPorDia)

let diasRestantes = (milisigundosEntreDates/milisigundosPorDia)
console.log(diasRestantes)








