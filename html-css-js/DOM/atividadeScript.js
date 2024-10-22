let titulo = document.getElementById("titulo")
let botaoAdicionarItem = document.getElementById('adicionarItem')
let botaoRemoverItem = document.getElementById('removerItem')
let lista = document.getElementById('lista')

botaoAdicionarItem.addEventListener('click', () => {
    let novoItem = document.createElement('li')
    novoItem.innerHTML = `item ${lista.children.length + 1}`
    lista.appendChild(novoItem)
    titulo.style.color = 'green'
    titulo.innerHTML = 'Item adicionado'
})

botaoRemoverItem.addEventListener('click', () => {
    if(lista.children.length > 0){
        lista.removeChild(lista.lastElementChild)
        titulo.innerHTML = 'Item removido'
        titulo.style.color = "red"
    }
    else{
        titulo.innerHTML = "Não há mais itens para remover"
        titulo.style.color = 'gray'
    }
})