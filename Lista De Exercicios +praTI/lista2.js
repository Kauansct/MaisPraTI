const prompt = require('prompt-sync')()


// 1
carro = {
    marca: 'Porsche',
    modelo: '718 Cayman',
    ano: 2005,
    cor: 'Cinza'
}

function printInfo(info){
    for(let i in info){
        console.log(`${i}: ${info[i]}`)
    }
}

// printInfo(carro)

// 2

livroA = {
    titulo: 'Harry Potter e a Pedra Filosofal',
    autor: 'J.K. Rowling',
    anoPublicação: 1997,
    genero: 'Fantasia',
    //editora: null ou ""
    //editora: "Bloomsbury Publishing"
}

function adicOuVerifEditora(livro){
    let count = 0
    for(let i in livro){
        if(i === 'editora'){
            count++
        }
    }
    if(count != 0){
        if(livro.editora === null || livro.editora.trim() === ""){
            console.log('Existe uma propriedade chamada editora, mas não há um valor atribuído a ela.\nAdicionando valor para a propriedade...')
            livro.editora = String(prompt("Digite o nome da editora: "))
            console.log('Propriedade atualizada!!')
        }
        else{
        console.log('Há uma propriedade chamada editora!!')
        printInfo(livro)
        }
    }
    else{
        console.log('Não Há uma propriedade chamada editora\nAdicionando nova propriedade...')
        livro.editora = String(prompt("Digite o nome da editora: "))
        console.log('Propriedade adicionada!!')
    }
}

//adicOuVerifEditora(livroA)
//printInfo(livroA)

// 3

let produtoA = {
    nome: 'Xbox Series X',
    preco: 2900,
    anoDeLancamento: 2020,
    diasParaEntrega: 7,
    NumDeJogos: 10
}

function filtrarPropriedadesPorValor(produto, valor){
    let novoProduto = {}

    for(let i in produto){
        if(produto[i] > valor || typeof produto[i] === 'string'){
            novoProduto[i] = produto[i]
        }
    }
    console.log(novoProduto)
}

// filtrarPropriedadesPorValor(produtoA, 12)

// 4

function pessoa(nome, idade, cidade){
    return {
        nome,
        idade,
        cidade
    }
}

let nomesPessoa = ["Davi", "Victor", "Kauan", "Hyago", "Edu", "Jaques"]
let idades = [18, 20, 24, 35, 48]
let cidades = ["Porto Alegre", "São Paulo", "Rio de Janeiro"]

function pessoaAleatoria() {
    let nomeAleatorio = nomesPessoa[Math.floor(Math.random() * nomesPessoa.length)]
    let idadeAleatoria = idades[Math.floor(Math.random() * idades.length)]
    let cidadeAleatoria = cidades[Math.floor(Math.random() * cidades.length)]

    return pessoa(nomeAleatorio, idadeAleatoria, cidadeAleatoria)
}

let numPessoas = Math.floor((Math.random() * 4) + 1)

let arrayPessoa = []

for(let i = 0; i < numPessoas; i++){
    arrayPessoa.push(pessoaAleatoria())
}


function imprimeInfoPessoas(arrayPessoa){
    for(let i of arrayPessoa){
        console.log(`Nome: ${i.nome} | Idade: ${i.idade} | Cidade: ${i.cidade}`)
    }
}

// imprimeInfoPessoas(arrayPessoa)

// 5

function aluno(nome, nota1, nota2){
    return {
        nome,
        nota1,
        nota2
    }
}

let nomesAlunos = ["Davi", "Victor", "Kauan", "Hyago", "Edu", "Jaques"]
let notas1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let notas2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function alunoAleatorio() {
    let nomeAleatorio = nomesAlunos[Math.floor(Math.random() * nomesAlunos.length)]
    let nota1Aleatoria = notas1[Math.floor(Math.random() * notas1.length)]
    let nota2Aleatoria = notas2[Math.floor(Math.random() * notas2.length)]

    return aluno(nomeAleatorio, nota1Aleatoria, nota2Aleatoria)
}

let numAlunos = Math.floor((Math.random() * 6) + 1)

let arrayAlunos = []

for(let i = 0; i < numAlunos; i++){
    arrayAlunos.push(alunoAleatorio())
}


function imprimeInfoAlunos(arrayAlunos){
    console.log("Informações dos alunos:")
    for(let i of arrayAlunos){
        console.log(`Aluno: ${i.nome} | Nota 1: ${i.nota1} | Nota 2: ${i.nota2}`)
    }
}

function calcularMedia(arrayAlunos){
    console.log(`\nMédia dos alunos:`)
    for(let i of arrayAlunos){
        let soma = i.nota1 + i.nota2
        let media = soma / 2
        console.log(`Aluno: ${i.nome} | Média: ${media.toFixed(1)}`)
    }
}

//imprimeInfoAlunos(arrayAlunos)
//calcularMedia(arrayAlunos)

// 6

function funcionario(nome, cargo, salario){
    return {
        nome,
        cargo,
        salario
    }
}

let nomesFuncionarios = ["Davi", "Victor", "Kauan", "Hyago", "Edu", "Jaques"]
let cargos = ['CEO', 'Presidente', 'Diretor', 'Gerente', 'Supervisor', 'Analista', 'Assistente', 'Auxiliar']
let salarios = [8700, 7400, 6800, 5200, 4900, 3500, 2200, 1500]

function funcionarioAleatorio() {
    let nomeAleatorio = nomesFuncionarios[Math.floor(Math.random() * nomesFuncionarios.length)]
    let cargoAleatorio = cargos[Math.floor(Math.random() * cargos.length)]
    let salarioAleatorio = salarios[Math.floor(Math.random() * salarios.length)]

    return funcionario(nomeAleatorio, cargoAleatorio, salarioAleatorio)
}

let numFuncionarios = Math.floor((Math.random() * 6) + 1)

let arrayFuncionarios = []

for(let i = 0; i < numFuncionarios; i++){
    arrayFuncionarios.push(funcionarioAleatorio())
}

function imprimeInfoFuncionarios(){
    console.log("Funcionarios da empresa:")
    for(let i of arrayFuncionarios){
        console.log(`Funcionários: ${i.nome} | Cargo: ${i.cargo} | Salário: R$ ${i.salario.toFixed(2)}`)
    }
}

function filtrarFuncionariosPorSalario(arrayFuncionarios, filtroSalario){
    console.log(`\nFuncionários com salário acima de R$ ${filtroSalario}: `)
    for(let i of arrayFuncionarios){
        if(i.salario > filtroSalario){
            console.log(`Funcionários: ${i.nome} | Cargo: ${i.cargo} | Salário: R$ ${i.salario.toFixed(2)}`)
        }
    }
}

// imprimeInfoFuncionarios()
// filtrarFuncionariosPorSalario(arrayFuncionarios, 5000) 

// 7

function produto(nome, preco, desconto){ 
    return {
        nome,
        preco,
        desconto
    }
}

let nomesProduto = ["Controle", "Copo", "Abacaxi", "Caderno", "Banana", "Caneta"]
let precos = [20.50, 10.99, 5.99, 50.00, 15.10, 7.45, 9.99, 99.99]

function prdutoAleatorio() {
    let nomeAleatorio = nomesProduto[Math.floor(Math.random() * nomesProduto.length)]
    let precoAleatorio = precos[Math.floor(Math.random() * precos.length)]
    let desconto = 0

    return produto(nomeAleatorio, precoAleatorio, desconto)
}

let numProdutos = Math.floor((Math.random() * 6) + 1)

let arrayProdutos = []

for(let i = 0; i < numProdutos; i++){
    arrayProdutos.push(prdutoAleatorio())
}

function imprimeInfoProdutos(){
    console.log("Produtos:")

    arrayProdutos.forEach(produto => {
        console.log(`Nome: ${produto.nome} | Preço: R$ ${produto.preco.toFixed(2)} | Desconto: ${produto.desconto}%`)
    })
}

function imprimeInfoProdutosComDesconto(arrayProdutos, valorDesconto){
    console.log(`\nProdutos com ${valorDesconto}% de desconto: `)

    arrayProdutos.forEach(produto => {
        if(produto.desconto === 0){
            produto.desconto = valorDesconto
            produto.preco -= (produto.preco * (produto.desconto / 100))
        }
        console.log(`Nome: ${produto.nome} | Preço: R$ ${produto.preco.toFixed(2)} | Desconto: ${produto.desconto}%`)    
    })
}

// imprimeInfoProdutos()
// imprimeInfoProdutosComDesconto(arrayProdutos, 10) 

// 8

function filme(titulo, diretor, anoLancamento){
    return {
        titulo,
        diretor,
        anoLancamento
    }
}

let titulos = ['Exterminador do Futuro', 'O Senhor dos Anéis', 'Harry Potter', 'Invocação do Mal']
let diretores = ['James Cameron', 'Peter Jackson', 'Chris Columbus', 'James Wan']
let anoLancamentos = [1985, 2001, 2010, 2013, 2016]

function filmeAleatorio() {
    let tituloAleatorio = titulos[Math.floor(Math.random() * titulos.length)]
    let diretorAleatorio = diretores[Math.floor(Math.random() * diretores.length)]
    let anoLancamentoAleatorio = anoLancamentos[Math.floor(Math.random() * anoLancamentos.length)]

    return filme(tituloAleatorio, diretorAleatorio, anoLancamentoAleatorio)
}

let numFilmes = Math.floor((Math.random() * 4) + 1)

let arrayFilmes = []

for(let i = 0; i < numFilmes; i++){
    arrayFilmes.push(filmeAleatorio())
}

function imprimeInfoFilmes(){
    console.log("Informações sobre os filmes:")

    arrayFilmes.forEach(filme => {
        console.log(`Título: ${filme.titulo} | Diretor: ${filme.diretor} | Ano de lançamento: ${filme.anoLancamento}`)
    })
}

function imprimeTitulos(arrayFilmes){
    console.log(`\nFilmes: `)

    let titulosFilmes = []

    arrayFilmes.forEach(filme => {
        titulosFilmes.push(filme.titulo)
    })

    titulosFilmes.forEach(titulo => {
        console.log(`- ${titulo}`)
    })
}

// imprimeInfoFilmes()
// imprimeTitulos(arrayFilmes)

// 9

function cliente(nome, idade, cidade){
    return {
        nome,
        idade,
        cidade
    }
}

let nomesCliente = ["Davi", "Victor", "Kauan", "Hyago", "Edu", "Jaques"]
let idadesCliente = [18, 20, 24, 30, 32, 35, 37, 40, 48, 52]
let cidadesCliente = ["Porto Alegre", "São Paulo", "Rio de Janeiro"]

function clienteAleatorio() {
    let nomeAleatorio = nomesCliente[Math.floor(Math.random() * nomesCliente.length)]
    let idadeAleatoria = idadesCliente[Math.floor(Math.random() * idadesCliente.length)]
    let cidadeAleatoria = cidadesCliente[Math.floor(Math.random() * cidadesCliente.length)]

    return cliente(nomeAleatorio, idadeAleatoria, cidadeAleatoria)
}

let numClientes = Math.floor((Math.random() * 6) + 1)

let arrayCliente = []

for(let i = 0; i < numClientes; i++){
    arrayCliente.push(clienteAleatorio())
}

function imprimeInfoClientes(){
    console.log("Informações dos clientes:")

    arrayCliente.forEach(cliente => {
        console.log(`Nome: ${cliente.nome} | Idade: ${cliente.idade} | Cidade: ${cliente.cidade}`) 
    })
}

function imprimeNumClientesPorIdade(arrayCliente, idadeEspecifica){
    console.log(`\nCalculando número de clientes com idade superior a ${idadeEspecifica} anos...`)
    count = 0

    arrayCliente.forEach(cliente => {
        if(cliente.idade > idadeEspecifica){
            count++
        }
    })

    if(count === 0){
        console.log(`Infelizmente, não há clientes com idade superior a ${idadeEspecifica} anos.`)
    }
    else{
        console.log(`Há ${count} clientes com idade superior a ${idadeEspecifica} anos.`)
    }
}

// imprimeInfoClientes()
// imprimeNumClientesPorIdade(arrayCliente, 30)

// 10

function venda(produto, quantidade, valor){
    return {
        produto,
        quantidade,
        valor
    }
}

let produtos = ["Controle", "Copo", "Abacaxi", "Caderno", "Banana", "Caneta"]
let quantidade = [10, 7, 5, 12]
let valor = [20.50, 10.99, 5.99, 15.10, 7.45, 9.99]

function vendaAleatoria() {
    let produtoAleatorio = produtos[Math.floor(Math.random() * produtos.length)]
    let quantidadeAleatoria = quantidade[Math.floor(Math.random() * quantidade.length)]
    let valorAleatorio = valor[Math.floor(Math.random() * valor.length)]

    return venda(produtoAleatorio, quantidadeAleatoria, valorAleatorio)
}

let numVendas = Math.floor((Math.random() * 6) + 1)

let arrayVendas = []

for(let i = 0; i < numVendas; i++){
    arrayVendas.push(vendaAleatoria())
}

function imprimeInfoVendas(){
    console.log("Informações das vendas:")

    arrayVendas.forEach(venda => {
        console.log(`Produto: ${venda.produto} | Quantidade: ${venda.quantidade} | Valor: R$ ${venda.valor.toFixed(2)}`)
    })
}

function calcularTotalVendas(arrayVendas){
    console.log(`\nCalculando o valor total de vendas...`)
    let valorTotalVendas = 0

    arrayVendas.forEach(venda => {
        valorTotalVendas += (parseFloat(venda.quantidade * venda.valor))
    })

    console.log(`O valor total de vendas é R$ ${valorTotalVendas.toFixed(2)}`)
}

// imprimeInfoVendas()
// calcularTotalVendas(arrayVendas)

// 11

function pedido(cliente, produto, quantidade){
    return {
        cliente,
        produto,
        quantidade
    }
}

nomesCliente = ["Davi", "Victor", "Kauan", "Hyago", "Edu", "Jaques"]
nomesProduto = ["Controle", "Copo", "Abacaxi", "Caderno", "Banana", "Caneta"]
quantidade = [10, 7, 5, 12]

function pedidoAleatorio() {
    let nomesClientesAleatorio = nomesCliente[Math.floor(Math.random() * nomesCliente.length)]
    let nomeProdutoAleatorio = nomesProduto[Math.floor(Math.random() * nomesProduto.length)]
    let quantidadeAleatoria = quantidade[Math.floor(Math.random() * quantidade.length)]

    return pedido(nomesClientesAleatorio, nomeProdutoAleatorio, quantidadeAleatoria)
}

let numPedidos = Math.floor((Math.random() * 6) + 1)

let arrayPedidos = []

for(let i = 0; i < numPedidos; i++){
    arrayPedidos.push(pedidoAleatorio())
}

function imprimeInfoPedidos(){
    console.log("Informações sobre os pedidos dos clientes:")

    arrayPedidos.forEach(pedido => {
        console.log(`Cliente: ${pedido.cliente} | Produto: ${pedido.produto} | Quantidade: ${pedido.quantidade}`)
    })
} 


function calcularTotalPedidos(arrayPedidos){
    console.log(`\nCalculando o número total de produtos por cliente:`)
    
    totalPorCliente = {}

    arrayPedidos.forEach(pedido => {
        if (totalPorCliente[pedido.cliente]) {
            totalPorCliente[pedido.cliente] += pedido.quantidade
        } else {
            totalPorCliente[pedido.cliente] = pedido.quantidade
        }
    })

    for (let cliente in totalPorCliente) {
        console.log(`${cliente}: ${totalPorCliente[cliente]} produtos`)
    }

}

// imprimeInfoPedidos()
// calcularTotalPedidos(arrayPedidos)

// 12

function estoque(produto, quantidade, quantMinima){
    return {
        produto,
        quantidade,
        quantMinima
    }
}

nomesProduto = ["Controle", "Copo", "Abacaxi", "Caderno", "Banana", "Caneta"]
quantidade = [10, 7, 5, 12]
let quantMinima = [10, 12, 20, 7, 3]

function estoqueAleatorio() {
    let nomeProdutoAleatorio = nomesProduto[Math.floor(Math.random() * nomesProduto.length)]
    let quantidadeAleatoria = quantidade[Math.floor(Math.random() * quantidade.length)]
    let quantMinimaAleatoria = quantMinima[Math.floor(Math.random() * quantMinima.length)]

    return estoque(nomeProdutoAleatorio, quantidadeAleatoria, quantMinimaAleatoria)
}

let numEstoques = Math.floor((Math.random() * 4) + 1)

let arrayEstoque = []

for(let i = 0; i < numEstoques; i++){
    arrayEstoque.push(estoqueAleatorio())
}

function imprimeInfoEstoques(arrayEstoque){
    console.log("Informações dos estoques:")
    let count = 0

    arrayEstoque.forEach(estoque => {
        if(estoque.quantMinima > estoque.quantidade){
            count++
        }
        console.log(`Produto: ${estoque.produto} | Quantidade: ${estoque.quantidade} | Quantidade mínima: ${estoque.quantMinima}`)
    })

    if(count != 0){
        console.log(`\nOps! Há ${count} estoques desatualizados.\n \nAtualizando estoques...`)
        arrayEstoque.forEach(estoque => {
            while(estoque.quantMinima > estoque.quantidade){
                estoque.quantidade *= 2 
            }
            console.log(`Produto: ${estoque.produto} | Quantidade: ${estoque.quantidade} | Quantidade mínima: ${estoque.quantMinima}`)
        })

        console.log("\nEstoques atualizados.")
    }
    else{
        console.log("\nTodos os estoques estão atualizados.")
    }
}

// imprimeInfoEstoques(arrayEstoque)

// 13

function itens(nomeProduto, quantidade, precoUnitario){
    return {
        nomeProduto,
        quantidade,
        precoUnitario
    }
}

let nomeProduto = ["Controle", "Copo", "Abacaxi", "Caderno", "Banana", "Caneta"]
quantidade = [10, 7, 5, 12]
let precoUnitario = [20.50, 10.99, 5.99, 15.10, 7.45, 9.99]

function itensAleatorios() {
    let produtoAleatorio = nomeProduto[Math.floor(Math.random() * nomeProduto.length)]
    let quantidadeAleatoria = quantidade[Math.floor(Math.random() * quantidade.length)]
    let precoAleatorio = precoUnitario[Math.floor(Math.random() * precoUnitario.length)]

    return itens(produtoAleatorio, quantidadeAleatoria, precoAleatorio)
}

let numItens = Math.floor((Math.random() * 6) + 1)

let arrayItens = []

for(let i = 0; i < numItens; i++){
    arrayItens.push(itensAleatorios())
}

let carrinho = {itens: arrayItens}

function imprimeInfoCarrinho(){
    console.log("Informações do carrinho:")
    let soma = 0

    carrinho.itens.forEach(item => {
        soma += (item.quantidade * item.precoUnitario)
        console.log(`Produto: ${item.nomeProduto} | Quantidade: ${item.quantidade} | Preço unitário: R$ ${item.precoUnitario.toFixed(2)}`)
    })

    console.log(`O valor total do carrinho é R$ ${soma.toFixed(2)}`)
} 

// imprimeInfoCarrinho()

// 14

function departamento(nome ,funcionarios){
    return {
        nome,
        funcionarios
    }
}

nomesFuncionarios = ["Davi", "Victor", "Kauan", "Hyago", "Edu", "Jaques", "Laura", "Joelson", "Rafaela", "Camila"]
let nomeDepartamentos = ["Administração", "Recursos Humanos", "Financeiro", "Jurídico", "Marketing", "Produção"]

function conjuntoFuncionariosAleatorios(){
    let funcionarios = []
    let numFuncionarios = Math.floor((Math.random() * 3) + 1)

    for(let i = 0; i < numFuncionarios; i++){
        let funcionario = nomesFuncionarios[Math.floor(Math.random() * nomesFuncionarios.length)]
        funcionarios.push(funcionario)
    }

    return funcionarios
}

function departamentoAleatorio(){
    let nomeAleatorio = nomeDepartamentos[Math.floor(Math.random() * nomeDepartamentos.length)]
    let conjuntoFuncionarios = conjuntoFuncionariosAleatorios() 

    return departamento(nomeAleatorio, conjuntoFuncionarios)
}

let empresa = {
    departamentos: []
}

let numDepartamenos = Math.floor((Math.random() * 6) + 1)

for(let i = 0; i < numDepartamenos; i++){
    empresa.departamentos.push(departamentoAleatorio())
}

// Exibe os dados completamente (com chaves, colchetes e valores)
function imprimeInfoEmpresa1(){
    for(let i in empresa.departamentos){
        console.log(empresa.departamentos[i])
    }
}

// Utilizando for...in e for...of
// Exibe os dados de maneira mais detalhada
function imprimeInfoEmpresa2(){
    for(let i in empresa.departamentos){
        console.log(`\nDepartamento: ${empresa.departamentos[i].nome}`) 

        for(let j of empresa.departamentos[i].funcionarios){
            console.log(`- Funcionário: ${j}`)
        }
    }
}

// imprimeInfoEmpresa1()
// imprimeInfoEmpresa2() 

// 15

function transacao(entradaOuSaida, valor){
    return {
        entradaOuSaida,
        valor
    }
}

let entradaOuSaida = [true, false]
let valorTransacao = [20.50, 10.99, 5.99, 15.10, 7.45, 9.99]

function transacaoAleatoria() {
    let entradaOuSaidaAleatoria = entradaOuSaida[Math.floor(Math.random() * entradaOuSaida.length)]
    let valorTransacaoAleatoria = valorTransacao[Math.floor(Math.random() * valorTransacao.length)]

    return transacao(entradaOuSaidaAleatoria, valorTransacaoAleatoria)
}

let numtransacoes = Math.floor((Math.random() * 6) + 1)

let transacoes = []

for(let i = 0; i < numtransacoes; i++){
    transacoes.push(transacaoAleatoria())
}

function imprimeInfoTransacoes(){
    console.log("Informações sobre as transações:")

    transacoes.forEach(transacao => {
        if(transacao.entradaOuSaida === true){
            console.log(`Entrada --- Valor: R$ ${transacao.valor.toFixed(2)}`)
        }
        else{
            console.log(`Saída ----- Valor: R$ ${transacao.valor.toFixed(2)}`)
        }
    })
}

// true = entrada e false = saída
function calcularSaldo(transacoes){
    console.log("\nCalculando saldo das transações:")
    let saldoTotal = 0

    transacoes.forEach(transacao => {
        if(transacao.entradaOuSaida === true){
            saldoTotal += parseFloat(transacao.valor) 
        }
        else{
            saldoTotal -= parseFloat(transacao.valor) 
        }
    })

    console.log(`Saldo: R$ ${saldoTotal.toFixed(2)}`)
}

// imprimeInfoTransacoes()
// calcularSaldo(transacoes) 