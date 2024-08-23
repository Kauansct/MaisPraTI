// introdução a classes e listas encadeadas

// as duas classes abaixo se semelham a um array e o array.push()
class Node {
    constructor(data){
        this.data = data // o valor do elemento (string, num, bollean)
        this.next = null // ponteiro que aponta para o proximo elemento da lista
    }
}

class linkedList{
    constructor(){
        this.head = null // head seria o primeiro elemento da lista
        this.size = 0 // tamanho da lista
    }
    // método que adiciona um elemento
    add(data){
        let newNode = new Node(data)

        if(this.head === null){
            this.head = newNode
        }
        else{
            let current = this.head
            while(current.next !== null){
                current = current.next
            }
            current.next = newNode
        }
        this.size++
    }
    // método que adciona um elemento em uma posição especifica
    InsertAt(data, index){
        if(index < 0 || index > this.size){
            return console.log('index fora dos limites!')
        }

        let newNode = new Node(data)
        let current = this.head
        let previous

        if(index === 0){
            newNode.next = this.head
            this.head = newNode
        }
        else{
            for(let i = 0; i < index; i++){
                previous = current
                current = current.next
            }

            newNode.next = current
            previous.next = newNode
        }
    }

    removeFrom(index){
        if(index < 0 || index > this.size){
            return console.log('index fora dos limites!')
        }

        let current = this.head
        let previous

        if(index === 0){
            this.head = current.next
        }
        else{
            for(let i = 0; i < index; i++){
                previous = current
                current = current.next
            }

            previous.next = current.next
        }

        this.size--
        return current.data // isto é opcional (esta informando o elemento que esta sendo removido)
    }

    isEmpty(){
        return this.size === 0
    }

    indexOf(data){
        let current = this.head
        let index = 0

        while(current !== null){
            if(current.data === data){
                return index
            }
            index++
            current = current.next
        }
        
        return -1
    }

    // método para imprimir na tela o "array"
    printList(){
        let current = this.head
        while(current !== null){
            console.log(current.data)
            current = current.next
        }
    }
    
}

let list = new linkedList()

list.add("Fomação +praTI")
list.add(true)
list.add(1998)
list.add("elemento")
list.InsertAt("its my life", 0)
list.printList()
console.log(list.indexOf(1998))
list.removeFrom(2)
list.printList()
