let lista = document.getElementById('list')
let botaoSalvar = document.getElementById('save')
let inputYear = document.getElementById('year')
let inputMonth = document.getElementById('month')
let inputDay = document.getElementById('day')
let inputType = document.getElementById('type')
let inputDescription = document.getElementById('description')


botaoSalvar.addEventListener('click', (event) => {
    event.preventDefault();

    let confirmYear = inputYear.value
    let confirmMonth = inputMonth.value
    let confirmDay = inputDay.value
    let confirmType = inputType.value
    let confirmDescription = inputDescription.value.trim()

    if(confirmYear && confirmMonth && confirmDay && confirmType && confirmDescription){
        alert('Tarefa adicionada à lista')
        let li = createTaskElemnt(year, month, day, type, description)

        lista.appendChild(li)

        inputDay.value = ''
        inputMonth.value = ''
        inputYear.value = ''
        inputType.value = ''
        inputDescription.value = ''
    }
    else{
        alert('Tarefa adicionada à lista')
    }

    function createTaskElemnt(year, month, day, type, description){
        let li = document.createElement('li')

        li.classList.add('task-item')

        li.textContent = `Description: ${description.value} -- Type: ${type.value} -- Date: ${day.value}/${month.value}/${year.value}`

        let removeBtn = document.createElement('span');

        removeBtn.textContent = 'Remove'

        removeBtn.classList.add('remove-btn')

        removeBtn.addEventListener('click', () => li.remove());

        li.appendChild(removeBtn)

        return li
    }
})
