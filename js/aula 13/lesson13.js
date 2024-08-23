// let professor = {
//     nome: "Pedro",
//     grades: {
//         aluno1: 5,
//         aluno2: 7.8,
//         aluno3: 10,
//         aluno4: 9.5,
//         aluno5: 6,
//         aluno6: 3.5,
//         aluno7: 5.2,
//         aluno8: 8
//     },

//     calcularMedia: function(){
//         let soma = 0
//         let count = 0
//         for (varrer in this.grades){
//             soma += this.grades[varrer]
//             count ++
//         }
//         let media = soma / count
        
//         if(media >= 6){
//             return `Média das notas dos alunos: ${Math.round(media * 10) / 10}\nO professor ${this.nome} está aprovado`
//         }
//         else{
//             return `Média das notas dos alunos: ${Math.round(media * 10) / 10}\nO professor ${this.nome} está reprovado`
//         }
//     }
// }

// console.log(professor.calcularMedia())

// let biblioteca = [
//     {titulo: "A", autor: "Pedro I", ano: 1834},
//     {titulo: "B", autor: "Pedro II", ano: 1888},
//     {titulo: "C", autor: "Pedro III", ano: 1930},
//     {titulo: "D", autor: "Pedro IV", ano: 2004}
// ]

// for (varrer of biblioteca){
//     if(varrer.ano > 2000){
//         console.log(`O livro ${varrer.titulo} do autor ${varrer.autor} publicou em ${varrer.ano}`)
//     }
// }

let filmes = [
    {titulo: "A", genero: "Ação"},
    {titulo: "B", genero: "Aventura"},
    {titulo: "C", genero: "Terror"},
    {titulo: "D", genero: "Romance"}
]

let countGenero = {}

filmes.forEach(filme => {
    if(countGenero[filme.genero]){
        countGenero[filme.genero]++
    }
    else{
        countGenero[filme.genero] = 1
    }
})

for(let genero in countGenero){
    console.log(`Exitem ${countGenero[genero]} filmes do gênero ${genero}`)
}