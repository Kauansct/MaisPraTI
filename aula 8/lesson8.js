// Arrays e vetores

let carros = Array();

carros[0] = 'civic'
carros[1] = 10             // array em javaScript pode alocar qualquer tipo e valor de variavel
carros[2] = true
carros['pedro'] = '-24'

let motos = Array('CBR', 'Kawazaki', 20, '-40'); // os arrays podem ser escritos dessas formas tb
let livros = ['Senhor dos anéis', 'Hobbit', 'Harry Potter'];

livros.push('Sherlock Holmes') // push adiciona uma nova variavel
livros.unshift('1984') // adiciona na primeira possição da variavel
livros.pop() // remove a ultima varivel do array
livros.shift() // remove a primeira vaivel do array
livros
console.log(livros)
