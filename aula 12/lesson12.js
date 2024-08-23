// introdução a objetos
// um objeto inicia com chaves

const prompt = require('prompt-sync')();

let serie = {
    nome: "The Boys",
    genero: ["Ação", "paródia", "Heróis"],
    NumTemporadas: 4,
    status: "Em andamento",
    classificacao: 18,
    NumEpisodio: {
        temp1: 10,
        temp2: 12,
        temp3: 10,
        temp4: 5
    },

    mostrarCaracteristicas: function() {
        return `O nome da série é: ${this.nome} e sua classificação é +${this.classificacao}`
    }

}

// no final do código inicia-se o for_in e for_off(aqui é apenas uma pratica dele)
// for(let chave in serie){
//     console.log(`${chave}: ${serie[chave]}`)
// }

// for(chave of Object.keys(serie)){
//     console.log(`${chave}: ${serie[chave]}`)
// }

// console.log(serie.mostrarCaracteristicas())

// let livro = {
//     autor: "Kauan Scheffer Tedesco",
//     cor: "Verde",
//     numPaginas: 50,
//     usado: false,
//     preco: 74.99,
//     haLeitor: true,
//     nomeLeitor: "pedro",

//     adicionarLeitor: function(){
//         if(this.haLeitor == false){
//             this.haLeitor = true
//             this.nomeLeitor = String(prompt("Digite o nome do leitor: "))
//             return `Adicionado este livro para ${this.nomeLeitor}`
//         }
//         else{
//             return `${this.nomeLeitor} esta lendo este livro`
//         }
//     }

// }

// console.log(livro)
// console.log(livro.adicionarLeitor())

// let atleta = {
//     nome: "Kauan",
//     altura: 1.72,
//     idade: 18
// }
// podemos adicionar atributos fora dos objetos
// atleta.nascionalidade = "Brasil"
// atleta.celebrarVitoria = function() { return "GANHEI AEEEE... DALE GRÊMIO"}

// console.log(atleta)
// console.log(atleta.celebrarVitoria())

// let obj1 = {
//     nome: "Bruce",
//     profissao: "Batman"
// }

// let obj2 = obj1

// obj2.companheiro = "Robin"

// console.log(obj1)
// console.log(obj2)

// function computador(processador, gpu, ram, armazenamento){
//     this.processador = processador
//     this.gpu = gpu
//     this.ram = ram
//     this.armazenamento = armazenamento

//     this.ligar = function(){
//         console.log(`O ${this.processador} está funcionando`)
//     }

//     this.mostrarEspecificacoes = function(){
//         return `Processador: ${this.processador}
//                 Gpu: ${this.gpu}
//                 Ram: ${this.ram}
//                 Armazenamento: ${this.armazenamento}`
//     }
// }

// let pc = new computador("i9", "RTX4090", "16GB", "500GB SSD")
// console.log(pc.mostrarEspecificacoes())

// // como fazer uma fabrica(factory)

// function jogos(titulo, genero, anoLancamento, empresa, jogar){
//     return {
//         titulo,
//         genero,
//         anoLancamento,
//         empresa,
//         jogar
//     }
// }

// let jogo1 = jogos("Rainbow 6", "FPS", 2002, "Ubisoft", () => {return 'jogando'})


// intodução da utilização do for_in e for_off

// for in
// conseque acessar em arrays multdimencionais
// for(let chave in jogo1){
//     console.log(`${chave}: ${jogo1[chave]}`)
// }

// for of
// conseque acessar em arrays unidimensionais(precisam ser iteraveis (String, number, char...))
// let jogadores = ["Pelé", "CR7", "Messi"]

// for(let jogador of jogadores){
//     console.log(jogador)
// }

// for(let jogo of jogo1){
//     console.log(jogo)
// }
// // transforma em objetos iteraveis
// for(let jogo of Object.keys(jogo1)){
//     console.log(jogo1[jogo])
// }