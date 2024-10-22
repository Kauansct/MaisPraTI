function fazerPedido(tipoCafe){
    return new Promise((resolve, reject) => {
        if(tipoCafe === "expresso"){
            setTimeout(() => {
                resolve(`O café ${tipoCafe} está pronto`)
            }, 2000)
        }
        else if(tipoCafe === "litte"){
            setTimeout(() => {
                resolve(`O café ${tipoCafe} está pronto`)
            }, 3000)
        }
        else{
            reject("Café não disponível")
        }
    })
}

function realizarPedido(tipoCafe){
    fazerPedido(tipoCafe).then((mensagem) => {
        console.log(mensagem)
    }).catch((erro) => {
        console.log(erro)
    })
}

realizarPedido("expresso")
realizarPedido("litte")
realizarPedido("sim")