let titulo = document.getElementById('titulo')

titulo.textContent = 'Aula de Dom da + praTI'

titulo.innerHTML = 'Mudei o conteudo do titulo novamente'

titulo.style.color = 'Blue'

let botao = document.getElementById('botao')

botao.addEventListener('click', () => {
    alert('Voce clicou no botão')
})

let novoParagrafo = document.createElement('p')

novoParagrafo.innerHTML = "Este é um paragrafo criado via js"

document.body.appendChild(novoParagrafo)

let paragrafo = document.querySelector('.paragrafo')

paragrafo.remove()