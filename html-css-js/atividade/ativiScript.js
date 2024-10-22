let botaoAdicionarTarefa = document.getElementById("adicionarTarefa")
let inputTarefa = document.getElementById("inputTarefa")
let filtros = document.querySelectorAll(".botaoFiltro")
let lista = document.getElementById("lista")

botaoAdicionarTarefa.addEventListener('click', () => {
    let infoTarefa = inputTarefa.value.trim()
    if(infoTarefa){
        let li = criarElementoTarefa(infoTarefa)
        lista.appendChild(li)
        inputTarefa.value = " "
    }
})

function criarElementoTarefa(texto){
    let li = document.createElement('li');

    li.innerHTML = texto

    let botaoRemover = document.createElement('span')
    botaoRemover.innerHTML = 'Remover'
    botaoRemover.classList.add('remove-btn')
    botaoRemover.addEventListener('click', () => li.remove())

    li.appendChild(botaoRemover)

    let botaoEditar = document.createElement('span')
    botaoEditar.innerHTML = 'Editar'
    botaoEditar.classList.add('edit-btn')
    botaoEditar.addEventListener('click', () => editarTarefa(li))

    li.appendChild(botaoEditar)

    li.addEventListener('click', () => {
        if(!li.classList.contains('editing')){
            li.classList.toggle('completed')
        }
    })

    return li
}

function editarTarefa(li){
    if(!li.classList.contains('editing')){
        li.classList.add('editing')

        let input = document.createElement('input')
        input.type = 'text'
        input.value = li.firstChild.innerHTML

        li.firstChild.replaceWith(input)

        input.addEventListener('blur', () => {
            li.classList.remove('editing')

            let novoTexto = input.value.trim()

            if(novoTexto){
                input.replaceWith(document.createTextNode(novoTexto))
            }
            else{
                li.remove()
            }
        })

        input.focus()
    }
}

filtros.forEach(filtro => {
    filtro.addEventListener('click', () => {
        filtros.forEach(f => f.classList.remove('active-filter'))
        filtro.classList.add('active-filter')

        let tipoFiltro = filtro.id
        let todasTarefas = lista.querySelectorAll('li')

        todasTarefas.forEach(tarefa => {
            switch(tipoFiltro){
                case 'filtroTodas':
                    tarefa.style.display = ''
                    break
                case 'filtroConcluidas':
                    tarefa.style.display = tarefa.classList.contains('completed') ? '' : 'none'
                    break
                case 'filtroNaoConcluidas':
                    tarefa.style.display = tarefa.classList.contains('completed') ? 'none' : ''
                    break
            }
        })
    })
})



